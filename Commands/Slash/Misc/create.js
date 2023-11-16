const {
    CommandInteraction,
    ApplicationCommandType,
    PermissionFlagsBits,
} = require("discord.js");
const { Bot } = require("../../../handlers/Client");


module.exports = {
    name: "create",
    descriptions: 'create your group',
    userPermissions: PermissionFlagsBits.SendMessages,
    botPermissions: PermissionFlagsBits.SendMessages,
    category: "Misc",
    type: ApplicationCommandType.ChatInput,
    options: [
        {
            name: 'groupname',
            description: 'Name for the new channel',
            type: 3,
            required: true,
        },
    ],

    run: async ()
}
