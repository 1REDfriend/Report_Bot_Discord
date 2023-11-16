const { Colors } = require("discord.js");

module.exports = {
  TOKEN: process.env.TOKEN || "MTE3NDcwMjY4MzU4MDU1MTE5MA.G6_Ixq.PVRPzmnSzN36SHKPPjUnEyVTTkitPmS4lPGf70",
  PREFIX: process.env.PREFIX || "",
  Slash: {
    Global: true,
    GuildID: process.env.GuildID || "",
  },
  embed: {
    color: Colors.Blurple,
    wrongColor: Colors.Red,
  },

  emoji: {
    success: "✅",
    error: "❌",
  },
};
