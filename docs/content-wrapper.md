# Content-wrapper

This component is intended for displaying dynamic templates. The change of data in the template automatically triggers rendering of the changed template parts.

Scheme of work: by default, the data used in the template are transferred to the slot for displaying.

## Components
- **Content Wrapper**
- [Frame Navigation](./frame-nav.md)
- [Navigation Generator](./nav-generator.md)
- [Grid](./grid.md)
- [Content](./classes.md)
- [Slide Up Down](./slide-up-down.md)

## Example of use

```html
<content-wrapper
    :default="{email:'soberbrunner@example.org', pageTitle: 'This is a content wrapper example'}"
    store-data="content">
    <template slot-scope="data">
        <h1>{{ data.pageTitle }}</h1>
        <p>You can look at this email <b>{{ data.email }}</b>, got from data you've passed</p>
    </template>
</content-wrapper>
```

<div class="vue-example">
<content-wrapper
    :default="{email:'soberbrunner@example.org', pageTitle: 'This is a content wrapper example'}"
    store-data="content">
    <template slot-scope="data">
        <h1>{{ data.pageTitle }}</h1>
        <p>You can look at this email <b>{{ data.email }}</b>, got from data you've passed</p>
    </template>
</content-wrapper>
</div>


## Input parameters

| Name            | Type          | Default      | Description                                   |
|-----------------|:-------------:| -------------|-----------------------------------------------|
| `default`       | **Object**    | `null`       | Data for the template                         |
| `store-data(*)` | **String**    | `undefined`  | Identifier in the `AWES._store` global store  |
| `tag`           | **String**    | `'div'`      | Tag for the template wrapper                  |
