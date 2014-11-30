var jade        = require('jade'),
    fs          = require('fs'),
    path        = require('path'),
    initScript  = jade.compile(fs.readFileSync(path.resolve(__dirname, './initScript.jade'))),
    templates   = {},
    idCounter   = 0;

var generateId = function() {
  if(idCounter > 1000000) {
    idCounter = 0;
  }

  idCounter++;

  return 'SignalUI-' + idCounter;
};

module.exports = function(name, config) {
  var template = templates[name];

  if(!templates[name]) {
    var file = fs.readFileSync(path.resolve(__dirname, '../components/'+name+'/index.jade'));

    templates[name] = jade.compile(file, {});
  }

  return  templates[name]({
            config:     config,
            generateId: generateId
          }) +
          initScript({
            name:   name,
            id:     generateId()
          });
};
