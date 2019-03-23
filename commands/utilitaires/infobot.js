const Discord = require('discord.js');

exports.run = (client, message, args) => {
    const { version } = require("discord.js");
    let cpuStat = require("cpu-stat");
    let os = require('os');
    let cpuLol;
    cpuStat.usagePercent(function(err, percent, seconds) {
    if (err) {
        return console.log(err);
    }
})

    var infobot = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL)
        .addField("<:update:551468765431463946> • __Versions__", "NodeJS : " + "`v11.11.0`" + "\n" + "DiscordJS : " + "`" + `v${version}` + "`" + "", true)
        .addField("📋 • __Statistiques__", "`Serveurs : "+client.guilds.size+"`" + "\n `Utilisateurs : " +client.users.size+"`", true)
        .addField("📌 • __Développeur__", "`Emmanuel#1411`\n`Blizzard#4453`", true)
        .addField("<:Database:551468772796399629> • __Système__", "Plateforme : " + "`" +  `${os.platform()}`+ "` \n Arch : " + "`" + `${os.arch()}` + "` \n CPU : " +  "`" + `${os.cpus().map(i => `${i.model}`)[0]}` + "`")
        .addField("💻 • __Processeur__", "RAM: " + "`" + `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}` + "MB` | Latence avec l'API :" + "`" + `${Math.round(client.ping)}` + " ms`")
        .addField("<:suggest:551484929293156372> • __En ligne depuis__", (Math.round(client.uptime / (1000 * 60 * 60))) + ' heures  ' + (Math.round(client.uptime / (1000 * 60)) % 60) + ' minutes ' + (Math.round(client.uptime / 1000) % 60) + ' secondes ', true)
        .addField("🔗 • __Liens__", "[Inviter le bot](https://discordapp.com/oauth2/authorize?client_id=551431456002670632&scope=bot&permissions=8) | [Serveur Support](https://discord.gg/WPAHNUP)", true)
        .setColor("#2A2A32")
    message.channel.send(infobot)
}
