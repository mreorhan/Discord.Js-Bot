// require the discord.js module
const Discord = require("discord.js");

// create a new Discord client
const client = new Discord.Client();
// client.on("channelCreate", (channel) => {
//    channel.send();
// });

client.on("message", (message) => {
   console.log(message.content);

   if (message.content.startsWith("github")) {
      const attachment = new Discord.MessageAttachment(
         "https://github.com/" + message.content.split("-")[1] + ".png?size=80"
      );
      message.channel.send(attachment);
   }
   if (message.content === "!rip") {
      // Create the attachment using MessageAttachment
      const attachment = new Discord.MessageAttachment(
         "https://i.imgur.com/w3duR07.png"
      );
      // Send the attachment in the message channel
      message.channel.send(attachment);
   }

   if (message.content === "what is my avatar")
      message.reply(message.author.displayAvatarURL());

   if (message.content === "sen kimsin") {
      message.channel.send("Ben VideoKod'dan Emre");
   }
   if (message.content === "naber") message.channel.send("iyi senden?");
   //    if (message.content.startsWith("yeni")) {
   //    }
});

// login to Discord with your app's token
client.login("NzE2MjE4NjAzNzMyNTk4ODM0.XtIk4Q.7yAn9LWq9zDRxz8ZR-TrAyc92AQ");

// client.on("guildMemberAdd", (member) => {
//     // Send the message to a designated channel on a server:
//     const channel = member.guild.channels.cache.find(
//        (ch) => ch.name === "member-log"
//     );
//     // Do nothing if the channel wasn't found on this server
//     if (!channel) return;
//     // Send the message, mentioning the member
//     channel.send(`Welcome to the server, ${member}`);
//  });
