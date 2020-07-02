# Description:
#   Dictionary and Thesaurus Lookups
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   `DICTIONARY` define me [word] -- Returns dictionary definition of [word]
#   `DICTIONARY` what's another word for [word] -- Returns thesaurus results for [word]
#
# Author:
#   dkoenig1

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0
querystring = require 'querystring'
https = require 'https'

module.exports = (robot) ->

  robot.hear /define me (.*)/i, (msg) ->
    werd = msg.match[1]
    robot.http("https://www.dictionaryapi.com/api/v3/references/collegiate/json/#{werd}?key=aad1d549-d067-41e3-8a24-cef9125f0440")
    .header('Accept', 'application/json')
    .get() (err, res, body) ->
      JSONdata = JSON.parse body
      pronounce = JSONdata[0].hwi.hw
      define = JSONdata[0].shortdef
      definestring = define.join("\n")
      msg.reply pronounce
      msg.reply definestring

  robot.hear /what.* another word for (.*)/i, (msg) ->
    werd = msg.match[1]
    robot.http("https://www.dictionaryapi.com/api/v3/references/thesaurus/json/#{werd}?key=fad4c53e-5888-4591-8613-9a228d41ae51")
    .header('Accept', 'application/json')
    .get() (err, res, body) ->
      JSONdata = JSON.parse body
      define = JSONdata[0].shortdef
      syns = JSONdata[0].meta.syns
      definestring = define.join("\n")
      synstring = syns.join("\n")
      msg.reply definestring
      msg.reply synstring
