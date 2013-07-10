/* global require console */
var https = require('https')

var options = { hostname: 'api.getclever.com'
              , path: '/v1.1/sections'
              , auth: 'DEMO_KEY'
              }

var callback = function (res) {
  var data = ''
  res.on('data' ,function (chunk) {
    data += chunk
  })
  res.on('end' ,function () {
    var info = JSON.parse(data)
      , sections = info.data
      , total = 0
      , average = 0

    for (var i = 0 ;i < sections.length ;i++) {
      total += sections[i].data.students.length
    }

    if (sections.length == 0) {
      average = 0
    }
    else {
      average = total / sections.length
    }

    process.stdout.write( 'Average number of students per section: '
                        + total / sections.length
                        + '\n'
                        )
  })
}

https.get(options ,callback)
