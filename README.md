# seneca-postmark-mail

## A postmarkapp.com email plugin for the [Seneca](http://senecajs.org) Node.js toolkit

This module is a plugin for the Seneca framework. It provides email capability for actions.
It is a customization of the [seneca-mail](https://github.com/rjrodger/seneca-mail) plugin.

It is a good example of using Seneca action hooks to customize a
plugin's behaviour - review the code in _lib/postmark.js_ to see how
this works.


For full usage documention, read the [seneca-mail](https://github.com/rjrodger/seneca-mail) page.

This plugin uses [postmarkapp.com](http://postmarkapp.com) directly to
send email, so you'll need to create an account there to get it
working. The [postmark](https://github.com/voodootikigod/postmark.js)
module is used to do the heavy lifting.


## Support

If you're using this module, feel free to contact me on twitter if you
have any questions! :) [@rjrodger](http://twitter.com/rjrodger)

Current Version: 0.1.1 

Tested on: node 0.10.6, seneca 0.5.6

[![Build Status](https://secure.travis-ci.org/rjrodger/seneca-postmark-mail.png)](http://travis-ci.org/rjrodger/seneca-postmark-mail)



## Quick example


```JavaScript
var seneca = require('seneca')()

seneca.use('mail')
seneca.use('postmark-mail',{
  key:'YOUR_POSTMARK_API_KEY'
})

seneca.ready(function(err){
  if( err ) return console.log(err);

  seneca.act({
    role:    'mail',
    cmd:     'send',
    text:    'Hi There!'
    to:      'alice@example.com',
    from:    'bob@example.com',
    subject: 'Greetings!'
  })
})
```

That's pretty much it.


## Install

```sh
npm install seneca
npm install seneca-mail
npm install seneca-postmark-mail
```

You'll need the [seneca](http://github.com/rjrodger/seneca) and
[seneca-mail](http://github.com/rjrodger/seneca-mail) modules to use
this module - it's just a plugin extension.





## Test

Copy sendconf.example.js and add real configuration values, and then send a mail with:

```sh
cd test
node send-mail.js --seneca.log.print
```


