Signal UI
=========

This repository should:

- Allow UI components and generic styles to easily be included in the all three of the applications.
- Generate a static website that demonstrates all of the UI components.
- Provide unit tests that can be run in a continuous integration environment such as Travis CI.

Using Components
----------------

### Integration

The following resources are required in your application:

- `build/SignalUI.css` - Contains all generic styles, component styles and helper classes
- `build/SignalUI.js` - Contains all JavaScript necessary for component features and to expose a jQuery-based API

Integration Examples are available for:

- [Node/Express/Jade App](./examples/node)


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


Development
-----------

### Installation

```bash
npm install
```

Make sure that you have gulp installed globally:

```bash
npm install -g gulp
```

### Build Resources

**Build**: `gulp`

**Watch**: `gulp watch`

### Documentation

**View Documentation Locally**: `gulp serve` then visit [http://localhost:8080/](http://localhost:8080/)

**Deploy Documentation**: `gulp deploy`


Deploying & Publishing
-----------

### Publish NPM Privately

Although `"private": true` isn't listed in the NPM, the registry is listed in `publishConfig` in package.json. This means you can safely publish with the regular npm command without worring about publishing to the public npm registry. Will be listed at [http://npm.thebrighttag.com/](http://npm.thebrighttag.com/)

```bash
npm publish
```


Component Definition
--------------------

Components consist of a folders of resources:

- `index.jade`  - The template to generate markup for the component. The argument dictionary is passed into this template.
- `index.js` (optional) - Any JavaScript needed for the component. Also defines the jQuery API for the component.
- `index.scss` - The styles for the component.
- `test.js` (optional) - qUnit tests for the component.
- `docs.md` - The documentation for the component, which will be used to build the style guide website.


### Generic Styles

A style sheet will be generated to provide basic styles generic HTML elements.  These styles will be defined using a similar component definition folder:

- `index.scss`
- `docs.md` - The documentation for the component, which will be used to build the style guide website.

