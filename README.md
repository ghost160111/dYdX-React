# dYdX

The new source code, safe source code of dYdX where I use only CSS, not shitty SASS

Task 1:

Need to implement functionality that will write reference attributes to elements.

For instance, there is header component that should have scoped styles. For now, you can write ref-component attribute with its value, and the value will be the name of the component which in our case is header:

```html
<header ref-component="header">
  <div>
  </div>
</header>
```
