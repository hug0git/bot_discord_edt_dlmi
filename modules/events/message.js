const { prefix } = require('../../config.json');

module.exports = (client, message) => {

    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    if (!client.commands.has(commandName)) return;

    const command = client.commands.get(commandName);

    if (command.guildOnly && message.channel.type !== 'text') {
        return message.reply('Je ne peux pas éxecuter cette commande ici :(');
    }
    if (command.args && !args.length) {  
        let reply = `Vous avez oubliez des arguments ${message.author} !`;
        if (command.usage) { 
            reply += `\nUsage de la commande: \`${prefix}${command.name} ${command.usage}\``;
        }
        return message.channel.send(reply);
    }

    if (message.author.id === '163636974463221760') {
        if (message.content === "yes !") {
            return message.channel.send(":clap: :clap: :clap:");
        };
    };
}