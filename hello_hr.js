/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
// Description:
//   Give Hubot just a *bit* more of a personality
//
// Configuration:
//
// Commands:
//   `HELLOHR` hubot let's have fun - Tells hubot it's okay to have fun in this room
//   `HELLOHR` many, many many options here. Try some stuff out...
//
// Notes:
//

module.exports = function(robot) {

  let roomConfigs;
  if (robot.brain.get(roomConfigs) === null) {
    roomConfigs = [];
  } else {
    roomConfigs = robot.brain.get(roomConfigs);
  }

  console.log("Room config keys loaded:");
  console.log(roomConfigs);
  
  robot.respond(/let(\')*s have (some )*fun/i, res => res.reply("i am all fun all the time, boyo."));

  robot.hear(/badger/i, res => res.send("Badgers? BADGERS? WE DON\'T NEED NO STINKIN BADGERS"));

  robot.hear(/why that\'s fantastic/i, res => res.send("wtf?"));

  robot.hear(/it squeaks when you bang it/i, res => res.send(".......O_O....."));

  robot.hear(/\bcodehub\b/i, res => res.send("codehub is yuge, it's the best.  nobody needs ssh access to git.  nobody.  github is disappointing.  sad."));

  robot.respond(/open the (.*) doors/i, function(res) {
    const doorType = res.match[1];
    if (doorType === "pod bay") {
      return res.reply("I'm afraid I can't let you do that.");
    } else {
      return res.reply(`Opening ${doorType} doors`);
    }
  });

  robot.hear(/I like (\w*)( *)(cake|pie|pudding|tart)/i, function(res) {
    const flavor = escape(res.match[1]);
    const spacing = res.match[2];
    const thing = escape(res.match[3]);
    return res.emote(`makes a freshly baked ${flavor}${spacing}${thing}`);
  });

  robot.hear(/\bdo the needful\b/i, res => res.send('I will do the needful if you give me the dolladollabeeeeeeells.'));

  robot.hear(/\bw(a|u)t\b/i, res => res.send("lolwut?"));

  const snorted = ['passes the flonase', 'hands a kleenex', 'prepares to perform the heimlich'];

  robot.hear(/\bsnort(s|ed)\b/i, res => res.emote(res.random(snorted)));

  robot.hear(/\b(amiga|vista|apple ii|apple \/\/|apple \]\[|apple2)\b/i, res => res.reply('honestly, dude, that platform is dead'));

  robot.hear(/\b(OSX|Yosemite|Mavericks|Mac|iPhone|NeXT|NeXTOS)\b/, res => res.reply('Hipster platforms are unwelcome in this flow.'));

  robot.hear(/\b(emacs|nano|pico|kate|gedit)\b/i, res => res.reply('vi or gtfo.  50 karma points deducted.'));

  const dances = ['fires up the rumpshaker', 'starts the motor on the stripper pole',
    'cranks up \"Patricia the Stripper\" on the hi-fi', 'does his best Sprockets dance', 'moonwalks', 'crunks it up',
    'shows off his Melbourne shuffle', 'does a little shimmy'];

  robot.hear(/\bdance\b/i, res => res.emote(res.random(dances)));

  robot.hear(/\b(shits*|shitty|.*fuck.*|ass|tanj|maulk|gorram|frell|frak.*|smeg|asshole|buttmunch|felchmonkey|motherfuck.*)\b/i, res => res.reply('language'));

  robot.hear(/\bshitting\b/i, res => res.reply('i think you mean "pooping"'));

  const botdowners = [ 'No, I am not',
    'Am not',
    'How long would you say I have been down?',
    'What am I, invisible?!',
    'Maybe you should open a ticket with the someone-who-cares team.',
    '*zzzsnork* What?! Sorry, dozed off there...',
    'I am on break!!!',
    'If you worked here, you would quit too...',
    'No, _you_ are down',
    'Dude, I am _right_ _here_',
    'fake news',
    'I am more pensive than depressed, really...but thanks.' ];

  robot.hear(/\bbot (is|be) (down|broken|busted)\b/i, res => res.reply(res.random(botdowners)));

  robot.hear(/\bbot\'s (down|broken|busted)\b/i, res => res.reply(res.random(botdowners)));

  robot.hear(/\bORLY\b/i, res => res.reply('YARLY'));

  robot.hear(/\bSRS(LY|BZNS)\b/i, res => res.reply('sounds serious'));

  robot.hear(/\bdonald trump\b/i, res => res.reply("don\'t disrespect my Donald."));

  robot.hear(/\b(hillary|hilary|clinton|hrc)\b/i, res => res.emote("leans into the mike and says 'wrong'"));

  robot.hear(/\bwtf\b/i, res => res.reply("Why, That\'s Fantastic!"));

  robot.hear(/\bfu\b/i, res => res.reply('i believe you meant fffffffuuuuuuuuuuuu'));

  robot.hear(/that never works/i, res => res.reply("I could\'ve told you that."));

  robot.hear(/i thought that would work/i, res => res.reply('That makes one of us.'));

  robot.hear(/\btaint\b/i, res => res.emote("smirks and winks"));

  robot.respond(/you are (a little )*slow/, res => setTimeout(() => res.send("Who you calling 'slow'?", 60 * 1000)));

  robot.respond(/dammit/, res => res.send("Oops.  My bad."));

  robot.hear(/(mustard)|((^|\s*)m+h+m+($|\s*))/i, res => res.send('mmmhm'));

  robot.respond(/I like the way you talk/i, res => res.send('WELL I LIKE THE WAY ***YOU*** TALK'));

  robot.hear(/(tat[eu]rs*)|(p[eu]rtat[eu]rs*)|(fries)/i, res => res.send("I like them French fried potaters."));

  robot.hear(/coffee/i, res => res.send('Coffee makes me nervous when I drank it. Mmmhm.'));

  //robot.respond /Merry Christmas/i, (res) ->
  //  res.send 'http://wallpapersdsc.net/wp-content/uploads/2016/08/Bad-Santa-2-for-desktop.jpg'

  const protip = [ 'if you want to see relevant flowdock messages, try logging into flowdock',
             'open workspaces allow for the flexibility of being homeless, without the hassle of pushing a shopping cart everywhere',
             'if a coworker has done something offensive, consider filing a complaint with HR',
             'OGS stands for Optum Global Services, not Original Gangsta Servuces',
             'unclear communications can lead to misunderstandings and confusion',
             'if explaining a topic to a coworker is unsuccessful, try man-splaining instead',
             'timesheets should be completed in a timely fashion',
             'An essential part of being a project manager is managing projects',
             'You can submit an anonymous complaint by speaking to your manager in person',
             'git can be used to keep track of files, and their versions',
             'Agile project management, just like running a marathon, is based around one sprint after another',
             'OSAM stands for Optum Scalable Agile Methodology',
             'Operational uplift and operational support are different endeavors',
             'Optum employees should be called resources or "human capital"',
             'jira is a project management platform',
             'sweetiepie is never an appropriate way to address a coworker',
             'if at first you do not succeed, you may have failed',
             'when on a conference call, be sure to speak loudly and forcefully, as noise-cancelling headphones tend to reduce the effectiveness of the human voice',
             'using business jargon such as "stakeholder" and "synergy" helps show people that you understand how business works',
             'prefacing any statement with "in my mind" will prevent anyone else from correcting you',
             'if someone does not seem to understand you, try repeating it more slowly and loudly',
             'resistance is futile',
             'when in doubt, presume that everyone else in the meeting actually is an imbecile',
             'sometimes, people do things incorrectly because they did not understand the original request',
             'automation is a way of performing a task',
             '"artisanal" is a term used to describe something done with great skill',
             'fiefdoms are medieval kingdoms, run by petty royalty',
             'a kernel is the softer, edible core of a nut',
             'computers are usually electronic in nature',
             'during the Apollo program, the computers were mostly women mathematicians',
             'metrics are measurements',
             'in event of a fire, exit the building via the nearest door, preferably in an orderly fashion',
             'Optum was originally incorporated in 1793, in the commonwealth of Massachusetts, as "Ye Olde Doctorrs Servyces and Sundrie"',
             'Thank you, your account deletion request has been queued' ];

  robot.hear(/\b(tip|how that|how this|protip|lpt|how is|why is)\b/i, function(res) {
    const tipmaybe = Math.floor(Math.random() * 25) + 1;
    if (tipmaybe < 2) {
      return res.emote(res.random(protip));
    }
  });
      
  robot.hear(/(\bcat\b)|(\bcats\b)/i, msg => robot.http("https://cat-fact.herokuapp.com/facts/random")
  .header('Accept', 'application/json')
  .get()(function(err, res, body) {
    const JSONdata = JSON.parse(body);
    const catFact = (JSONdata).text;
    return msg.send(`Are you aware that ${catFact}`);
  }));

  robot.hear(/magic (8 ball|8-ball|8ball) (.*\?$)/i, msg => robot.http(`https://8ball.delegator.com/magic/JSON/${msg.match[2]}`)
  .header('Accept', 'application/json')
  .get()(function(err, res, body) {
    const JSONdata = JSON.parse(body);
    const answer = (JSONdata).magic.answer;
    const question = (JSONdata).magic.question;
    return msg.send(`You asked the Magic 8 Ball: ${question}?\nMagic 8 Ball says: ${answer}`);
  }));

  return robot.hear(/^\\giphy (.*)/i, function(msg) {
    const searchterm = msg.match[1];
    const query = searchterm.replace(/\s/g, "+");
    return robot.http(`https://api.giphy.com/v1/gifs/search?api_key=HST56qXIF2lEB6edgpOs2Nm2GhfQhovd&q=${query}&limit=10&offset=0&rating=G&lang=en`)
    .header('Accept', 'application/json')
    .get()(function(_err, _res, body) {
      const JSONdata = JSON.parse(body);
      const maxnum = JSONdata.data.length;
      const rando = Math.floor(Math.random() * maxnum);
      if (maxnum === 0) {
        return msg.reply("Nothing found for that!");
      }
      else {
        const gif = (JSONdata).data[rando].url;
        return msg.reply(gif);
      };
    });
  });
};
