//Calling the package
var Discord = require('discord.js');
var bot = new Discord.Client();

var fs = require('fs');
var blacklistedWords = fs.readFileSync('blacklistedWords.txt').toString().split("\n");

var prefix = "!!";//the text before commands. (no commands added at the moment, except !!ping).

function hasPrefix(msg){
  if(msg.substring(0,prefix.length) == prefix){
    return true;
  }
  return false;
}
function getCommand(msg){

  command = msg.split(" ")[0];

  return command;

}
function getMessage(msg){

  command = getCommand(msg);

  msg = msg.substring(command.length + 1);

  return msg;

}


//Listener Event: message recieved (this will run every time a message is recieved).
bot.on('message', message => {

  //variables
  var sender = message.author; //the person who sent the message
  var msg = message.content.toUpperCase(); //takes the message, and makes it all uppercase for easier management.


  //First we need to make sure anything the bot says doesn't get censored, even tho the bot will never say a censored word.
  if (sender.id === '373939666615009311') { //checks if the id of the sender is the same id as the bot
    return; //cancels the rest of the listener event.
  }



  if(hasPrefix(msg)){ // if the message is a command

    msg = msg.substring(prefix.length); // removes the prefix from the message

    var command = getCommand(msg); // identifies the command
    var msg = getMessage(msg); // identifies the message (the text after the command)

    if(command == "HI"){
      message.channel.send('HELLO'); //sends PONG to the channel.

    }

    //ping / pong command for testing response time
    if (command === 'PING') { //checks if the command sent by the sender is ping
      message.channel.send('PONG'); //sends PONG to the channel.
    }

  }
  else{ // No command is written

    for(var i = 0 ; i < blacklistedWords.length - 1 ; i++){
      if(msg.includes('RACCOON') || msg.includes('RACOON') || msg.includes('BARRACOON') || msg.includes('TYCOON') || msg.includes('COCOON')) {
        return;
      }
      else if(msg.includes(blacklistedWords[i])) {
        if(command === msg.includes(blacklistedWords[i])) {
          message.delete();
        }
        message.delete();
        message.author.send('INFO: Use of extreme words in chat is not tolerated. Your message included either an offensive word or a word that is not allowed to be discussed about. \nWARNING: Anyone who avoids a censored word by for example adding a . or _ between letters will be BANNED from the discord server.');
        return;
      }
    }

    return; // No command is written
  }


});

//login event.
bot.login(process.env.BOT_TOKEN);
//END OF CODE.
