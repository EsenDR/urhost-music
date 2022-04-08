/* Original Ping
module.exports = {
    name: "ping",
    description: "Test the bots response time.",
    execute(message) {
      let messageTime = Date.now() - message.createdTimestamp
      let respTime = Math.round(message.client.ws.ping)

      message
        .reply(`ResponseTime: ${messageTime}\nPing: ${respTime}`)
    },
  };

*/

module.exports = {
  name: "ping",
  description: "I AM SPEED!",

  execute(message) {
    let messageTime = Date.now() - message.createdTimestamp
    let respTime = Math.round(message.client.ws.ping)

    let pingEmbed = {
      title: `**I AM SPEED**`,
      description: `ResponseTime: ${messageTime}\nPing: ${respTime}`,
      color: 0xebb01a,
      image: {
        url: 'https://c.tenor.com/Meo6YUeN6OkAAAAC/kachow-cars.gif',
      },
    }

    return message
      .reply({embeds: [pingEmbed]})
      .catch(console.error);
  },
}