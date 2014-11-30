Signal UI
=========

This repository should:

- Allow UI components and generic styles to easily be included in the all three of the applications.
- Generate a static website that demonstrates all of the UI components.
- Provide unit tests that can be run in a continuous integration environment such as Travis CI.

Component Inclusion
-------------------

### Resources

The following resources will need to be included in the application, in order to

- `build/signal-ui.css` - Contains all generic styles, component styles and helper classes
- `build/signal-ui.js` - Contains all JavaScript necessary for component features and to expose a jQuery-based API

### Template Syntax

#### Jade

```Jade
!= signalUI('nav/navbar', {key: 'value'});
```

#### Twig

```Twig
{{ signalUI('nav/navbar', key='value') }}
```

#### Rails/erb

```erb
<%= signalUI('nav/navbar', {:key => 'value'}); %>
```

### jQuery API

```javascript
// Call Component Method
$(componentElement).UI.myMethod(args);

// Trigger Component Event
$(componentElement).UI.trigger('open');

// Bind Component Event
$(componentElement).UI.bind('open', function() {

});
```

Component Definition
--------------------

Components consist of a folders of resources:

- `form.jade`  - The template to generate markup for the component. The argument dictionary is passed into this template.
- `form.js` (optional) - Any JavaScript needed for the component. Also defines the jQuery API for the component.
- `form.scss` - The styles for the component.
- `test.js` (optional) - qUnit tests for the component.
- `docs.md` - The documentation for the component, which will be used to build the style guide website.

Generic Styles
--------------

A style sheet will be generated to provide basic styles generic HTML elements.  These styles will be defined using a similar component definition folder:

- `headings.scss`
- `docs.md` - The documentation for the component, which will be used to build the style guide website.

Development
-----------

```bash
gulp watch
npm install
```
