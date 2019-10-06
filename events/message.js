let pingWasHere= new Set();
module.exports = message => {
  if (pingWasHere.has(message.author.id)) {
    return;
  }
  pingWasHere.add(message.author.id);
  setTimeout(() => {
    pingWasHere.delete(message.author.id);
  }, 2500);
  let client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(client.ayarlar.prefix)) return;
  let command = message.content.split(" ")[0].slice(client.ayarlar.prefix.length);
  let params = message.content.split(" ").slice(1);
  let perms = client.elevation(message);
  let probs;

  if (client.commands.has(command)) {
    probs = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    probs = client.commands.get(client.aliases.get(command));
  }
  if (probs) {
    if (perms < probs.conf.permLevel) return;
    probs.run(client, message, params, perms);
  }
};
