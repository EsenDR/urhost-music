module.exports = {
  name: "hug",
  description: "Used to hug someone",
  options: [
    {
      name: 'input',
      description: 'User to hug',
      type: 6,
      required: true,
    },
  ],

  execute(message) {
    let user = message.options.getUser('input');
    let hugger = message.user.id;

    let hugEmbed = {
      title: `Get Hugged!`,
      description: `<@${hugger}> sends their love to ${user}!`,
      color: 0x7289da,
      image: {
        url: 'https://i.pinimg.com/originals/f2/80/5f/f2805f274471676c96aff2bc9fbedd70.gif',
      },
    }

    return message
      .reply({embeds: [hugEmbed]})
      .catch(console.error);
  },
}