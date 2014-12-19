module.exports = {
  name:   'Lists',
  state:  'Alpha',
  examples: [
    {
    	title: 'Unordered Lists',
      html: '\
<ul>\n\
  <li>Item 1</li>\n\
  <li>Item 2</li>\n\
  <li>Item 2</li>\n\
</ul>'
    },
    {
    	title: 'Ordered Lists',
      html: '\
<ol>\n\
  <li>Item 1</li>\n\
  <li>Item 2</li>\n\
  <li>Item 2</li>\n\
</ol>'
    },
    {
    	title: 'Definition Lists',
      html: '\
<dl>\n\
  <dt>Item 1</dt>\n\
  <dd>something interesting</dd>\n\
  \n\
  <dt>Item 2</dt>\n\
  <dd>something delightful</dd>\n\
</dl>'
    }
  ]
};
