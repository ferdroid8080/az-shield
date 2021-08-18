const ping = require('../commands/ping');
const poke = require('../commands/poke');

const sendCommand = (message) => {
  const content = message.content;
  if (content.startsWith(`${process.env.PREFIX}`)) {
    const command = content.substring(1);
    let res = null;
    if (command === 'ping') {
      res = ping(message);
      message.channel.send(res);
    } else if (command.indexOf('poke') !== -1) {
      poke(message);
    }
  }
}

module.exports = {
  sendCommand
};
