const ping = (msg) => {
  const milis = Date.now() - msg.createdTimestamp;
  return `Pong! ${milis}ms`;
}

module.exports = ping;
