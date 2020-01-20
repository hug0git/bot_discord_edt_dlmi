const { prefix } = require('../../config.json');

module.exports = (client, message) => {

    // Lit que les commandes commençant par un préfix envoyé par un utilisateur non-bot
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    // Récupère la commande en elevant le préfix
    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    // Teste si la commande existe dans les fichiers
    if (!client.commands.has(commandName)) return;

    const command = client.commands.get(commandName);

    // Test si la commande peut être exécuté en DM
    if (command.guildOnly && message.channel.type !== 'text') {
        return message.reply('Je ne peux pas éxecuter cette commande ici :(');
    }
    // Test si tous les arguements sont présents 
    if (command.args && !args.length) { // Si arg absent 
        let reply = `Vous avez oubliez des arguments ${message.author} !`;
        if (command.usage) { // Récupère la variable usage pour afficher les arguments attendus
            reply += `\nUsage de la commande: \`${prefix}${command.name} ${command.usage}\``;
        }
        return message.channel.send(reply);
    }

    ///// reply yes !
    if (message.author.id === '163636974463221760') {
        if (message.content === "yes !") {
            return message.channel.send(":clap: :clap: :clap:");
        };
    };
}