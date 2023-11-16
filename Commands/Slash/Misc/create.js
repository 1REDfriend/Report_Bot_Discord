const { ApplicationCommandType, Permissions, PermissionFlagsBits } = require("discord.js");
const { Bot } = require("../../../handlers/Client");

module.exports = {
    name: "create",
    description: 'Create your group',
    userPermissions: PermissionFlagsBits.SendMessages,
    botPermissions: PermissionFlagsBits.ManageChannels,
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

    run: async (client, interaction,guild) => {
        // Retrieve the group name from the interaction options
        const groupName = interaction.options.getString('groupname');
    
        // Check if groupName is undefined or an empty string
        if (!groupName || groupName.trim() === '') {
            return await interaction.reply('Please provide a valid group name.');
        }
        try {
            // Create a new text channel in the same category as the command was invoked
            console.log(interaction.guild.channels.create("test",{type:'text'}))
    
            // You can do more things here, such as setting permissions for the new channel, etc.
        } catch (error) {
            console.error(`Error creating channel: ${error.message}`);
        }
    },
    
};
