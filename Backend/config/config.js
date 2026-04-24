const config = {
  port: process.env.PORT || 3000,
  mongoUri: process.env.MONGO_URI || 'mongodb://smartmedibook_user:Smartmedibook%40123@ac-0mg0qp9-shard-00-00.gq1g2mx.mongodb.net:27017,ac-0mg0qp9-shard-00-01.gq1g2mx.mongodb.net:27017,ac-0mg0qp9-shard-00-02.gq1g2mx.mongodb.net:27017/SmartMediBookDB?ssl=true&replicaSet=atlas-n0cdds-shard-0&authSource=admin&retryWrites=true&w=majority',
};

export default config;  