module.exports = {
  name: "hug",
  description: "Spread the love.",
  options: [
    {
      name: 'username',
      description: 'Type in the name of the user you want to send a hug to.',
      type: 6,
      required: true,
    },
  ],

  execute(message) {
    let user = message.options.getUser('username');
    let hugger = message.user.id;

    let hugEmbed = {
      title: `**SENDING THE LOVE**`,
      description: `<@${hugger}> sends their love to ${user}!`,
      color: 0xebb01a,
      image: {
        url: 'https://i.pinimg.com/originals/f2/80/5f/f2805f274471676c96aff2bc9fbedd70.gif',
      },
    }

    return message
      .reply({embeds: [hugEmbed]})
      .catch(console.error);
  },
}