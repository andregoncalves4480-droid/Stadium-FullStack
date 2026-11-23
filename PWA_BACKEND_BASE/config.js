require("dotenv").config();

const config = {
  db: process.env.MONGO_URI,
  secret: process.env.JWT_SECRET,
  expiresPassword: 86400,
  saltRounds: 10
};

if (!config.db || !config.secret) {
  throw new Error("MONGO_URI e JWT_SECRET têm de estar configurados.");
}

module.exports = config;
