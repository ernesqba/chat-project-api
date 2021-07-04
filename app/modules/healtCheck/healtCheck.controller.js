const healtCheck = (req, res) => res.status(200).json({ uptime: process.uptime() });

module.exports = healtCheck;
