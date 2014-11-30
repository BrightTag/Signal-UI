
// Code to be run once in the page cycle

var form = function($el) {
  // Code to be executed each time the component is loaded
};

form.prototype = {
  clear: function() {
    this.$el.find('input, textarea').val('');
  }
};

module.exports = form;
