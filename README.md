# angular-rere

This is an angular module to re-render content on value change.

## Installing

`npm install angular-rere`

Load either `./dist/angular-rere.js` or `./dist/angular-rere.min.js`.

Add `rere` as your app's dependency in your app declaration.

## Usage

Here's a quick, simple usage example:

```html

<button ng-click="$ctrl.myValue = !$ctrl.myValue">Toggle State</button>

<rerender-on-change value="$ctrl.myValue">
  <a-component some-binding="$ctrl.myValue"
    some-other-binding="$ctrl.myOtherValue">
  </a-component>
</rerender-on-change>
```

Note: `value` evaluates the value as a regular angular binding, which means that if an object is supplied,
its property updates will not trigger the re-render, as the value is being watched by reference.


## Why?

While angular has a really robust binding and observability concepts and tools helping to implement them,
sometimes it's just easier to simply re-render the entire component tree to get a fresh state. Re-rendering DOM this way
triggers all the lifecycle hooks in the components and directives, and this can solve certain problems if components are
not written with lifecycle hooks in mind.

Think of this as `$onChanges` hook for the DOM, just instead of (potentially) modifying the state, it completely rebuilds it.
