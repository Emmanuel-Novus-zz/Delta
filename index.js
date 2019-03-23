const Discord = require("discord.js");
const client = new Discord.Client();
const Enmap = require("enmap")
const fs = require("fs");
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
 
const adapter = new FileSync('db.json')
const db = low(adapter)

db.defaults({ description: [], credits: [], note: [], rep: [], age: []}).write()

const config = require("./config.json");
client.config = config;

var now = new Date();
var hour = now.getHours();
var minute = now.getMinutes();
var second = now.getSeconds();
var times = (`[${hour}:${minute}:${second}]/`);

client.on('ready', () => {
  console.log(times+`\x1b[33m%s\x1b[0m`,'[WARN]','\x1b[0m','Connexion en cours...');
  console.log(times+`\x1b[33m%s\x1b[0m`,'[WARN]','\x1b[0m','Connexion à l\'API Discord.js en cours...');
  console.log(times+`\x1b[32m%s\x1b[0m`,'[OK]','\x1b[0m', 'Connexion à l\'API Discord.js effectuée');
  console.log(times+`\x1b[36m%s\x1b[0m`,'[INFO]', '\x1b[0m','Connecté sur ' + client.user.username + '#' + client.user.discriminator);
  console.log(times+`\x1b[32m%s\x1b[0m`,'[OK]','\x1b[0m','Chargement terminé');
  console.log(times+`\x1b[32m%s\x1b[0m`,'[OK]','\x1b[0m','Prêt et connecté');

  const activities = [
      "d!help | Delta",
      `d!help | ${client.guilds.size} serveurs`,
      `d!help | ${client.users.size} users`
  ];
  client.setInterval(() => {
      const index = Math.floor(Math.random() * activities.length);
      client.user.setActivity(activities[index], {
          type: "PLAYING",
          url: "http://twitch.tv/client"
      });
  }, 15000);
});


client.login(config.token);

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
  });
});

client.commands = new Enmap();

fs.readdir("./commands/utilitaires/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/utilitaires/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
  });
});

client.commands = new Enmap();

fs.readdir("./commands/admin/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/admin/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
  });
});

client.commands = new Enmap();

fs.readdir("./commands/modo/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/modo/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
  });
});

client.commands = new Enmap();

fs.readdir("./commands/fun/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/fun/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
  });
});


client.commands = new Enmap();

fs.readdir("./commands/divertissement/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/divertissement/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
  });
});

client.commands = new Enmap();

fs.readdir("./commands/economy/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/economy/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
  });
});

client.on('guildCreate', guild => {
    const embed = new Discord.RichEmbed()
        .setDescription(`📌 Merci à **${guild.name}** d'avoir ajouté ${client.user.username}`)
        .addField("📋 __Nom du serveur__", guild.name, true)
        .addField("📊 __Nombre de membres__ :", guild.memberCount, true)
        .addField("💻 __Nombre de salons__ :", guild.channels.size, true)
        .addField("👤 __Propriétaire__ :", guild.owner, true)
        .addField("🌍 __Région du serveur__ :", guild.region, true)
        .addField("📝 __ID du serveur__ :", guild.id, true)
        .setColor("#F03A17")
      client.channels.get('553915173757255680').send(embed);
});
