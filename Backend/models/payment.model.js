
import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({ 

  appointment_id: {
    type: mongoose.Schema.Types.ObjectId, 
    ref:'Appointment',
    required: true
  },
  payment_url: {
    type: String, 
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  payment_status: {
    type: String,
    enum: ["pending", "success", "failed"],
    required: true
  },
  payment_method: {
    type: String,
    enum: ["UPI", "netBanking", "card"],
    required: true
  }
}
,{timestamps:true});

const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;
