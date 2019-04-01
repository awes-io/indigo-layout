# The &lt;frame-nav&gt; component for frame aside navigation

This component is intended for displaying the side menu as a two-level dropdown list. Below you will see a visual presentation of such component.

![frame-nav](https://static.awes.io/docs/frame-nav.gif)

## Components
- [Content Wrapper](./content-wrapper.md)
- [Navigation Generator](./nav-generator.md)
- **Frame Navigation**
- [Grid](./grid.md)
- [Content](./classes.md)
- [Slide Up Down](./slide-up-down.md)

## Example of use

```html
<frame-nav :links="[{name:'First', link:'/first-link'}]"></frame-nav>
```


## Input parameters

| Name          | Type          | Default      | Description                          |
|---------------|:-------------:|--------------|--------------------------------------|
| `links`       | **Array**     | `undefined`  | [Menu items array](#props-links)     |
| `expanded`    | **Boolean**   | `false`      | [Expand all menu items](#props-expand) |


<h3 id="props-links">The `links {Array<LinksItem>}` menu items array</h3>

An array should contain items which match the following scheme:

```javascript
/**
 * @interface LinksItem
 *
 */
{
    name: 'Item name', // required parameter
    link: '/link-ulr', // required if the `children` parameter is not specified
    children: [ // required if the `link` parameter is not specified
        {
            name: 'Child item',
            link: '/child-link'
        }, ...
    ],
    icon: 'dashboard', // optional, icon name from the list of icons
    active: true // optional; specifies whether this menu item is expanded or not
}
```

#### The `name` {String*} parameter

Required parameter. You should specify a name of the menu item.

#### The `link` {String} parameter

If the `children` parameter is specified, the parameter is optional. If the `children` parameter is not specified, the `link` parameter is required.

If there are child items, clicking on the menu item will cause the transition via the link and clicking on the arrow near the name will expand the list of child items, and the transition via the link will not take place.

#### The `children` {Array<LinksItem>} parameter

If the `link` parameter is specified, this parameter is optional. If the `link` parameter is not specified, the `children` parameter is required. 

It displays child items (subitems) of the menu item. If there is the `children` parameter, an arrow will appear near the item name, and if you click on it, the list of menu child items will open. If the `link` parameter is not passed, the list of child items will open/close when clicking on the item name.

#### The `icon` {String} parameter

Optional parameter for an icon from the list of icons. For example, if there is `icon: 'awesome-icon'` available, the generated markup will look like:

```html
<i class="icon icon-awesome-icon"></i>
```

#### The `active` {Boolean} parameter

Optional parameter. It adds the CSS class of active state to the menu item. If there are menu’s child items available, it will show their list opened, without possibility of closing it.


<h3 id="props-expand">Expand all menu items `expanded {Boolean}`</h3>

Optional parameter. If the value is true, all items with child items will get the active state, it is as if each item had `active: true`
