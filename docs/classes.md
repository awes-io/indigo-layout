# Content 

The description of CSS/HTML helpers for different each case.

## Components
- [Blade Components](./components.md)
- [Code Block](./code-block.md)
- [Frame Navigation](./frame-nav.md)
- [Grid](./grid.md)
- **Content**
- [Slide Up Down](./slide-up-down.md)
- [Margins and paddings](./margins.md)
- [Icons](./icons.md)

## Image styles

If you would like to add nice shadow and background for an image, please use `.tf-img` class for it.

```html
<img src="" class="tf-img" alt="" />
```

### Examples:

| With shadow | Witout shadow |
| ------ | ------ |
| <img src="https://static.awes.io/docs/awes-io.png" class="tf-img" alt="" /> | <img src="https://static.awes.io/docs/awes-io.png" alt="" /> |




## Text Format Classes

Text formatting classes help you quickly assemble text parts of a page.

### Text Position

- **.text-center**: text-align center
- **.text-left**: text-align left
- **.text-right**: text-align right

Breakpoints are available for text positions.

- **.text-center--mmd**: @media (max-width: 500px) text-align center
- **.text-center--mmd-i**: @media (min-width: 501px) text-align center

### Font Weight:
- **.text-thin** font-weight 100
- **.text-light** font-weight 300
- **.text-regular** font-weight 400
- **.text-medium** font-weight 500
- **.text-semibold** font-weight 600
- **.text-bold** font-weight 700
- **.text-black** font-weight 900

### Text decoration:
- **.text-upper** text-transform uppercase
- **.text-cap** text-transform capitalize
- **.text-underline** text-decoration underline
- **.text-through** text-decoration line-through

### Text help classes:
- **.text-nobreak** disable automatic letter wrap
- **.text-nowrap** white-space nowrap with clipping ellipsis
- **.text-oneline** disable text wrapping