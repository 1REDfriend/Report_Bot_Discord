const { Colors } = require("discord.js");

module.exports = {
  TOKEN: process.env.TOKEN || "",
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
