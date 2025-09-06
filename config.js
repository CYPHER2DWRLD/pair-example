// config.js - reads credentials from environment variables (safer for deploy)
module.exports = {
  EMAIL: process.env.MEGA_EMAIL || "",     // your MEGA email (set in Render env)
  PASS: process.env.MEGA_PASS || "",       // your MEGA password (set in Render env)
  PREFIX: process.env.SESSION_PREFIX || "IRON-M4N×" // optional session prefix
};
