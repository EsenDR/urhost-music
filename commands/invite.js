module.exports = {
  name: "invite",
  description: "Invite the bot to your server.",
  execute(message) {

    let inviteEmbed = {
      title: 'Make music great again!',
      description: 'If you love our music bot why not bring it everywhere you go?',
      color: 0xebb01a,
      author: {
        name: (message.client.user.name),
      },
      thumbnail: {
        url: (message.guild.iconURL()),
      },
      fields: [
        {
          name: `Use the following link to add YAMB to your discord server:`,
          value: `https://go.urho.st/musicbot`,
        },
      ],
      timestamp: new Date(),
    }
    
    return message
      .reply({embeds: [inviteEmbed]})
      .catch(console.error);
  },
}