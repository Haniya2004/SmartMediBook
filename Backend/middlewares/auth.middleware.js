
import jwt from "jsonwebtoken";

const authMiddleware = (requiredRole) => (req, res, next) => {
  const authHeader = req.headers.authorization || "";
  const token = authHeader.startsWith("Bearer ")
    ? authHeader.split(" ")[1]
    : null;

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "No token provided",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // ✅ IMPORTANT FIX
    req.user = {
      id: decoded.id || decoded._id,   // ensure consistency
      role: decoded.role,
      email: decoded.email || null,
    };

    // ✅ role check (same as before)
    if (requiredRole && req.user.role !== requiredRole) {
      return res.status(403).json({
        success: false,
        message: "Access forbidden: wrong role",
      });
    }

    next();
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }
};

export default authMiddleware;