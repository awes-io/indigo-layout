# Code-block

The `&lt;code-block&gt;` component renders highlighted code sample with copy button. Under the hood it uses [highlight.js](https://highlightjs.org/)

> **Note**
>
> The component doesn't format code sample, please ensure that your code is well-formatted


## Components

- [Blade Components](./components.md)
- **Code Block**
- [Frame Navigation](./frame-nav.md)
- [Grid](./grid.md)
- [Content](./classes.md)
- [Slide Up Down](./slide-up-down.md)
- [Margins and paddings](./margins.md)
- [Icons](./icons.md)


## Example

```html
<code-block language="json">
{
    "name": "package-name",
    "version": "1.0"
}
</code-block>
```


## Properties

| Name          | Type          | Default      | Description                          |
|---------------|:-------------:|--------------|--------------------------------------|
| **language**  | `String`      | `undefined`  | Which language to highlight          |