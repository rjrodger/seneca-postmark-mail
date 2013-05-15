/* Copyright (c) 2013 Richard Rodger */
"use strict";



var sendconf = require('./sendconf.mine.js')

var seneca = require('seneca')()
seneca.use('mail',sendconf)
seneca.use('..',{
  key:sendconf.postmark.key
})


seneca.ready(function(err){
  if( err ) return console.log(err);

  seneca.act({
    role:'mail',cmd:'send',
    text:sendconf.send.text,
    to:sendconf.send.to,
    from:sendconf.send.from,
    subject:sendconf.send.subject,
  },function(err,out){
    console.dir(err)
    console.dir(out)
  })
})
