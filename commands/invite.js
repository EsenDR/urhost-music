module.exports = {
  name: "invite",
  aliases: ["inv"],
  description: "Invite the bot to your server.",
  execute(message) {


    let inviteEmbed = {
      title: 'Add us to your server!',
      description: 'Love using URHOST-Music? Great, Thank you! Consider adding it to your server.',
      color: 0x7289da,
      author: {
        name: (message.client.user.name),
      },
      thumbnail: {
        url: (message.guild.iconURL()),
      },
      fields: [
        {
          name: `Use the following link to add YAMB to your discord server:`,
          value: `https://discord.com/api/oauth2/authorize?client_id=${message.client.user.id}&permissions=8&scope=applications.commands%20bot`,
        },
      ],
      timestamp: new Date(),
    }
    
    return message
      .reply({embeds: [inviteEmbed]})
      .catch(console.error);
  },
}