# Description:
#   Retrieves random cat facts.
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   `BIZCATS` bizcat - Replies back with random cat image.
#
# Author:
#   Adam Nettles

images = [
  "http://i0.kym-cdn.com/photos/images/newsfeed/000/100/086/business-cat-03.jpg",
  "http://i0.kym-cdn.com/photos/images/newsfeed/000/100/094/business-cat-14.jpg",
  "http://catplanet.org/wp-content/uploads/2014/10/I-really-need-to-see-that-data.jpg",
  "http://i0.kym-cdn.com/photos/images/newsfeed/000/114/911/mhv.jpg",
  "http://i0.kym-cdn.com/entries/icons/mobile/000/005/099/bird-business-cat.jpg",
  "http://r.ddmcdn.com/w_624/s_f/o_1/cx_0/cy_17/cw_624/ch_416/APL/uploads/2014/10/new-office-equipment.jpg",
  "https://img.memecdn.com/business-cat-talks-business_o_234919.jpg",
  "https://i.pinimg.com/564x/82/9f/a5/829fa54f997644071352be98bd4b948c--funny-cat-memes-so-funny.jpg",
  "http://i.imgur.com/0C5hbEn.jpg",
  "http://i.imgur.com/3cCagym.jpg",
  "http://i.imgur.com/69xwU1q.jpg",
  "http://i.imgur.com/74SCEZx.jpg",
  "http://i.imgur.com/8WsH50B.jpg",
  "http://i.imgur.com/9a8GfA1.jpg",
  "http://i.imgur.com/9dNlOik.jpg",
  "http://i.imgur.com/9KDeH5Y.jpg",
  "http://i.imgur.com/9T3rKvL.jpg",
  "http://i.imgur.com/AEmIduX.jpg",
  "http://i.imgur.com/aP3pDrD.jpg",
  "http://i.imgur.com/aPrc9au.jpg",
  "http://i.imgur.com/Ar6w6qD.jpg",
  "http://i.imgur.com/BDroxfl.jpg",
  "http://i.imgur.com/BFLs06k.jpg",
  "http://i.imgur.com/CRqMjBp.jpg",
  "http://i.imgur.com/CS0SHo9.jpg",
  "http://i.imgur.com/cvu5T4Q.jpg",
  "http://i.imgur.com/DgG3CJD.jpg",
  "http://i.imgur.com/DgmFNr3.jpg",
  "http://i.imgur.com/DHrSBHy.jpg",
  "http://i.imgur.com/e4BsPLu.jpg",
  "http://i.imgur.com/F3w78c4.jpg",
  "http://i.imgur.com/fbhidqE.jpg",
  "http://i.imgur.com/gE8hR2x.jpg",
  "http://i.imgur.com/GJj4MmB.jpg",
  "http://i.imgur.com/HNp4TtH.jpg",
  "http://i.imgur.com/iorRW0P.jpg",
  "http://i.imgur.com/L1A2Esf.jpg",
  "http://i.imgur.com/l54I3pu.jpg",
  "http://i.imgur.com/ncvO5Nl.jpg",
  "http://i.imgur.com/notrUfL.jpg",
  "http://i.imgur.com/O9XM42Z.jpg",
  "http://i.imgur.com/olBGWkq.jpg",
  "http://i.imgur.com/PaGjotI.jpg",
  "http://i.imgur.com/QyCmPGg.jpg",
  "http://i.imgur.com/QzgJGlz.jpg",
  "http://i.imgur.com/ret6i1P.jpg",
  "http://i.imgur.com/srAssQa.jpg",
  "http://i.imgur.com/SW8mlDE.jpg",
  "http://i.imgur.com/T8lJliS.jpg",
  "http://i.imgur.com/tMYclqT.jpg",
  "http://i.imgur.com/TyGdG1m.jpg",
  "http://i.imgur.com/UKjObcM.jpg",
  "http://i.imgur.com/vARRxc7.jpg",
  "http://i.imgur.com/w0wuthi.jpg",
  "http://i.imgur.com/X6XF5OW.jpg",
  "http://i.imgur.com/xTBxH96.jpg",
  "http://i.imgur.com/zkNR93k.jpg",
  "http://i.imgur.com/ZKUuLFp.jpg",
  "http://s2.quickmeme.com/img/f3/f3f042c637f7f93ee8de5146cc64e7c6dd75d6303d796e2dbeaa58335d199f29.jpg"
]

module.exports = (robot) ->
  robot.hear /bizcat/i, (msg) ->
    msg.send msg.random images
