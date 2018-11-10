const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});


client.on('ready', async() => {
var server = "509258559075385344"; // ايدي السررفر
var channel = "509258559075385346";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , **')
    },305);
})

client.login("NTEwNTE4ODA5ODM3NDM2OTI5.Dsdhfw.rXBavbdgV_vekUQLsdurMEXDb-U");
