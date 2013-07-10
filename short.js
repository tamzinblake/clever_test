/* global require process */
var clever = require('clever')('DEMO_KEY')

clever.Section.find({} ,function (error ,sections) {
  var total = 0
    , average = 0


  for (var i = 0 ;i < sections.length ;i++) {
    total += sections[i].get('students').length
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
