var components = require('../components/index');

var SignalUI = {
  init: function(name, id) {
    // Find the correct component
    var path      = name.split('/');
        component = components;

    for(var i=0; i<path.length; i++) {
      component = component[path[i]];
    }

    // Find the element representing the component
    var $script = $('#'+id),
        $el     = $script.prev();

    // Initialize the component
    component.$el = $el;
    component($el);

    $script.remove();
  }
};

window['SignalUI'] = SignalUI;
