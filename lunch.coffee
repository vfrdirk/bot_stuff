# Description:
#   Hubot lunch-centric functions
#
# Configuration:
#
# Commands:
#   `lunch` What is for lunch - hubot will pick your mid-day meal
#   `lunch` What is lunch - hubot will helpfully tell you what the word means
#
# Notes:
#


foods = [
  'arbys',
  'berderking',
  'mall',
  'costco',
  'rtaco',
  'tacobell',
  'original pancake house',
  'culvers',
  'wendys',
  'shoulda brought one, jerkface.',
  'davannis',
  'chipotle',
  'subway',
  'The John of Jimmy',
  '5 Luchadores',
  'chik-fil-a',
  'bbq-cleanse',
  'maccas',
  'lactose maid',
  'food poisoning',
  'murder a coworker and feast on their corpse',
  'sand',
  'optum circle chinese joint',
  'mirror of korea',
  'Edina RedSavoy',
  'loneliness',
  'zupas'
]

define_lunch = [
  'baby don\'t hurt me, don\'t hurt me, no more',
  'Lunch is a meal typically eaten in the mid-day, between breakfast and the evening meal.',
  'I suspect you meant "what is _for_ lunch'
]

module.exports = (robot) ->
  robot.hear /\bwhat is for lunch\b/i, (res) ->
    res.reply res.random foods


  robot.hear /\bwhat is lunch\b/i, (res) ->
    res.reply res.random define_lunch
    
  robot.hear /(\btacobell\b)|(\btbell\b)|(\btaco bell\b)|(\btaco\b)|(\bbell\b)/i, (msg) ->
    robot.http("http://taco-randomizer.herokuapp.com/random/")
    .header('Accept', 'application/json')
    .get() (err, res, body) ->
      JSONdata = JSON.parse body
      baselayer = (JSONdata).base_layer.name
      #baselayer_rec = (JSONdata).baselayer.recipe
      if baselayer == "Ground Beef (Traditional; US)"
        baselayer = "Ground Beef"
      else
        baselayer = baselayer
      condiment = (JSONdata).condiment.name
      #condiment_rec = (JSONdata).condiment.recipe
      shell = (JSONdata).shell.name
      #shell_rec = (JSONdata).shell.recipe
      if shell == "Hard Corn Shells (Traditional; US)"
        shell = "Hard Corn Shells"
      else
        shell = shell
      seasoning = (JSONdata).seasoning.name
      #seasoning_rec = (JSONdata).seasoning.recipe
      mixin = (JSONdata).mixin.name
      #mixin_rec = (JSONdata).mixin.recipe
      if mixin == "Tomatoes (Traditional; US)"
        mixin = "Brandywine Tomatoes"
      else if mixin == "Cheese (Traditional; US)"
        mixin = "Merican Cheese"
      else if mixin == "Lettuce (Traditional; US)"
        mixin = "Bambi Lettuce"
      else
        mixin = mixin
      t_bell = [
        "Nah, I had tacos last night. #{baselayer} with #{condiment} and a plethora of #{seasoning}. Was awesome….",
        "Taco Bell?! Do they have anything with #{baselayer} and #{condiment}! I’ll bet they don’t...",
        "Interestingly enough, Taco Bell\'s weekly special inludes gourmet #{baselayer} and artisanal #{seasoning}.",
        "You know what’s good? A taco with #{baselayer} and maybe #{condiment} on top!",
        "Well actually why dont you guys come visit my lonely container and I\'ll whip up some tacos with only the good stuff like #{baselayer} and a twist of #{mixin} with a smother of #{seasoning}. All wrapped in warm #{shell}..."
      ]
      msg.send msg.random t_bell
