//Calling the package
var Discord = require('discord.js');
var bot = new Discord.Client();
var commands = JSON.parse(fs.readFileSync('storage/commands.json', 'utf8'));
var fs = require('fs');

var blacklistedWords = ["gay", "nigga", "cunt"];
var prefix = '!!'; //the text before commands. (no commands added at the moment, except !!ping).

function isInBlacklist(var msg) {
  if( blacklistedWords.includes(msg) ) {
    return true;
  }
  else {
    return false;
  }
}

function hasPrefix(var msg) {

  var wordArr = msg.split(" ");

  if(wordArr[0].substring(0,prefix.length) == prefix){
    return true;
  }
  else{
    return false;
  }
}

//Listener Event: message recieved (this will run every time a message is recieved).
bot.on('message', message => {

  //variables
  var sender = message.author; //the person who sent the message
  var msg = message.content.toUpperCase(); //takes the message, and makes it all uppercase for easier management.

  if(hasPrefix(var msg)){
    message.channel.send('HAS !!');
    msg = msg.substring(prefix.length);

    message.channel.send("MSG:" + msg);




  }

  //First we need to make sure anything the bot says doesn't get censored, even tho the bot will never say a censored word.
  if (sender.id === '373939666615009311') { //checks if the id of the sender is the same id as the bot
    return; //cancels the rest of the listener event.
  }

  if (sender.id === '179896008975712256') {
    if (msg.startsWith(prefix + 'blacklist')) {
      var arr = message.content.split(' ');
      var word = arr[1];
      if (uglyWords instanceOf word) {
        return;
      }
      else {
        uglyWords[uglyWords.length] = word;
      }
    }
  }

  //ping / pong command for testing response time
  if (msg === prefix + 'PING') { //checks if the message sent by the sender is !!ping.
    message.channel.send('PONG'); //sends PONG to the channel.
  }

  //Function to remove any message uncluding these words (green) except the words in the second if statement which get a pass.
  if (msg.includes('CUNT') || msg.includes('NIGGA') || msg.includes('NIGGER') || msg.includes('COON') || msg.includes('GAY') || msg.includes('TRANNY') || msg.includes('FAG') || msg.includes('faggot')) {
    if (msg.includes('BARRACOON') || msg.includes('COCOON') || msg.includes('RACCOON') || msg.includes('RACOON') || msg.includes('TYCOON')) { //checks if the word is included in the message
      return;
    }
    else {
      message.delete(); //deletes the message if it includes the words in the first if statement
      message.author.send('INFO: Use of extreme words in chat is not tolerated. Your message included either an offensive word or a word that is not allowed to be discussed about. \nWARNING: Anyone who avoids a censored word by for example adding a . or _ between letters will be BANNED from the discord server. \nLIST OF BANNED WORDS: cunt, nigger, nigga, coon, fag, faggot, tranny, gay.');
      // ^ sends a private message to the sender that used one of the words in the first if statement.
    }
  }

});

//Listener event: bot launched.
bot.on('ready', () => {
  console.log('bot launched...'); //runs when the bot has launched
});

//login event.
bot.login(process.env.BOT_TOKEN);
//END OF CODE.
