# Grid layout examples

Quick and variable grid setting will help you create a grid for almost any situation.

## Components
- [Content Wrapper](./content-wrapper.md)
- [Frame Navigation](./frame-nav.md)
- **Grid**
- [Content](./classes.md)
- [Slide Up Down](./slide-up-down.md)

## First step

To create the grid you need to specify in `_setting.styl` the number of columns and breakpoints, in case the site is 
responsive. For example, I wrote 10 columns and 9 breakpoint, which interact with each other. In the array, you can change the name and resolution, as well as the number of breakpoints, depending on your needs.

```stylus
grid_frames = (1 2 3 4 5 6 7 8 9 10) // Grid columns
grid_gap = 10 // Grid margin value in px (but wrote withot px)
grid_default_gap = false // Boolean (true/false)
grid_bpoint = {dlg: 1300, dmd: 1100, dsm: 1000, tlg: 900, tmd: 800, tsm: 700, mlg: 600, mmd: 500, msm: 400} // Breakpoints
grid_always_inverted = false // if true default grid will initially be based on min-width, if false max-width
```
This settings will create a large and flexible class chain, which is described in detail below.

### Default grid

In order to create a grid, you need to wrap a **.cell** in a **.grid**. Both the cell and the grid we have many 
modifiers, which let's gradually disassemble. The example below shows the standard grid without breakpoints and modifiers _(gap 10)_.

```html
<div class="grid">
    <div class="cell">.cell</div>
    <div class="cell-1-2">.cell-1-2</div>
    <div class="cell-1-2">.cell-1-2</div>
    <div class="cell-3-5">.cell-3-5</div>
    <div class="cell-2-5">.cell-2-5</div>
    <div class="cell-6-8">.cell-6-8</div>
    <div class="cell-2-8">.cell-2-8</div>
    <div class="cell-2-10">.cell-2-10</div>
    <div class="cell-auto">.cell-auto</div>
    <div class="cell-full">.cell-full</div>
</div>
```

If you need to output inline blocks, you can use the class `.cell-inline`

```html
<div class="grid">
    <div class="cell-inline">.cell-inline</div>
    <div class="cell-inline">.cell-inline</div>
    <div class="cell-inline">same class with long text </div>
</div>
```

### Responsive grid

If you have registered something in breakpoints, then classes will be added for the grid, which will be breakpoints that depend on max-width.

```html
grid_bpoint = {dlg: 1300, dmd: 1100, dsm: 1000, tlg: 900, tmd: 800, tsm: 700, mlg: 600, mmd: 500, msm: 400} // Breakpoints
```

In breakpoints you can register a class and value, which later can be used in the grid. The grid will create classes that will trigger and override values ​​when the screen width reaches the minimum mark.

```html
<div class="grid">
    <div class="cell-1-2 cell--dsm">.cell-1-2 .cell--dsm</div>
    <div class="cell-1-2 cell--dsm">.cell-1-2 .cell--dsm</div>
    <div class="cell-1-5 cell-1-3--dlg cell-1-2--dmd cell--tmd">.cell-1-5 .cell-1-3--dlg .cell-1-2--dmd .cell--tmd</div>
    <div class="cell-1-5 cell-1-3--dlg cell-1-2--dmd cell--tmd">.cell-1-5 .cell-1-3--dlg .cell-1-2--dmd .cell--tmd</div>
    <div class="cell-1-5 cell-1-3--dlg cell-auto--dmd">.cell-1-5 .cell-1-3--dlg .cell-1-2--dmd .cell--tmd</div>
    <div class="cell-1-5 cell-1-2--dlg cell-auto--dmd cell--tmd">.cell-1-5 .cell-1-2--dlg .cell-auto--dmd .cell--tmd</div>
    <div class="cell-1-5 cell-1-2--dlg cell-auto--dmd cell--tmd">.cell-1-5 .cell-1-2--dlg .cell-auto--dmd .cell--tmd</div>
    <div class="cell-1-3 cell-1-2--tlg cell--tsm">.cell-1-3 .cell-1-2--tlg .cell--tsm</div>
    <div class="cell-1-3 cell-1-2--tlg cell--tsm">.cell-1-3 .cell-1-2--tlg .cell--tsm</div>
    <div class="cell-1-3 cell--tlg">.cell-1-3 .cell--tlg</div>
</div>

// If you need a fixed-width column, you can write it this way, but in this case it is impossible to use breakpoints for this column. For such tasks, we recommend using your own classes.

<div class="grid">
    <div class="cell" style="width: 250px">.cell(style='width: 250px')</div>
    <div class="cell-auto">.cell-auto</div>
</div>

// You can use the grid inside the grid, in some cases this may be necessary.

<div class="grid">
    <div class="grid">
        <div class="cell-1-2">.cell</div>
        <div class="cell-1-2">.cell</div>
    </div>
    <div class="cell">
        <div class="grid">
        <div class="cell">.cell</div>
        </div>
    </div>
</div>
```


If you need inverted breakpoints based on min-width, you can add `-i` to the end of the class, then the class will take the value min-width, instead of the standard max-width.

```html
<div class="grid">
    <div class="cell cell-1-2--dsm-i cell-1-3--dlg-i">.cell .cell-1-2--dsm-i .cell-1-3--dlg-i</div>
    <div class="cell cell-1-2--dsm-i cell-1-3--dlg-i">.cell .cell-1-2--dsm-i .cell-1-3--dlg-i</div>
    <div class="cell cell--dsm-i cell-1-3--dlg-i">.cell .cell--dsm-i .cell-1-3--dlg-i</div>
</div>
```
If you are used to using min-width permanently in a grid, you can change the variable `grid_always_inverted` to `true`, in which case the main classes will use min width.

### Grid Gap

If you set `grid_default_gap` to `true`, then each grid will have the specified indent in `grid_gap`, regardless of class. But if the value is false, then in order to add an indent to the grid, you need to add certain classes to the grid wrapper, see the example below.

*   `grid-gap`: dafault gap (top, bottom, left, right padding in every cell)
*   `grid-gap-x`: only horizontal indent (left, right padding)
*   `grid-gap-y`: only vertical indent (top, bottom padding)
*   `grid-nogap`: disable padding if `grid_default_gap` is true

See Example:    

```html
<div class="grid">
    <div class="cell-1-2">.cell-1-2</div>
    <div class="cell-1-2">.cell-1-2</div>
    <div class="cell-1-4">.cell-1-4</div>
    <div class="cell-1-4">.cell-1-4</div>
    <div class="cell-1-4">.cell-1-4</div>
    <div class="cell-1-4">.cell-1-4</div>
</div>
<div class="grid grid-nogap">
    <div class="cell-1-2"> .cell-1-2</div>
    <div class="cell-1-2"> .cell-1-2</div>
    <div class="cell-1-4"> .cell-1-4</div>
    <div class="cell-1-4"> .cell-1-4</div>
    <div class="cell-1-4"> .cell-1-4</div>
    <div class="cell-1-4">.cell-1-4</div>
</div>
<div class="grid grid-gap">
    <div class="cell-1-2">.cell-1-2</div>
    <div class="cell-1-2">.cell-1-2</div>
    <div class="cell-1-3">.cell-1-3</div>
    <div class="cell-1-3">.cell-1-3</div>
    <div class="cell-1-3">.cell-1-3</div>
</div>
<div class="grid grid-gap-x">
    <div class="cell-1-2">.cell-1-2</div>
    <div class="cell-1-2">.cell-1-2</div>
    <div class="cell-1-3">.cell-1-3</div>
    <div class="cell-1-3">.cell-1-3</div>
    <div class="cell-1-3">.cell-1-3</div>
</div>
<div class="grid grid-gap-y">
    <div class="cell-1-2">.cell-1-2</div>
    <div class="cell-1-2">.cell-1-2</div>
    <div class="cell-1-3">.cell-1-3</div>
    <div class="cell-1-3">.cell-1-3</div>
    <div class="cell-1-3">.cell-1-3</div>
</div>
```
### Grid nesting

You can customize the positioning of the grid based on the standard flex properties.

*   `grid-wrap`: flex-wrap wrap as (default)
*   `grid-nowrap`: flex-wrap nowrap
*   `grid-inline`: This class will remove the given width of the grid, which will make it possible to use it as inline, see the example below.
*   `grid-row`: flex-direction row
*   `grid-column`: flex-direction column
*   `grid-justify-start`: justify-content flex-start
*   `grid-justify-end`: justify-content flex-end
*   `grid-justify-center`: justify-content center
*   `grid-justify-between`: justify-content space-between
*   `grid-justify-around`: justify-content space-around
*   `grid-justify-default`: justify-content normal (Can be used in responsive if u need default value in mobile)
*   `grid-align-start`: align-items flex-start
*   `grid-align-end`: align-items flex-end
*   `grid-align-center`: align-items center
*   `grid-align-base`: align-items baseline
*   `grid-align-default`: align-items normal (Can be used in responsive if u need default value in mobile)
*   `cell-shrink-{from 0 to 10, 10 as 100%}`: flex-shrink 1 _(.cell-shrink-0, .cell-shrink-1 (flex-shrink 0.1), .cell-shrink-2 (flex-shrink 0.2))_, **aviable in cell**

```html
<h4>grid-nowrap</h4>
<div class="grid grid-nowrap">
    <div class="cell">.cell </div>
    <div class="cell">.cell</div>
</div>
<h4>grid-justify-start</h4>
<div class="grid grid-justify-start">
    <div class="cell cell-7-9">.cell .cell-7-9</div>
</div>
<h4>grid-justify-end</h4>
<div class="grid grid-justify-end">
    <div class="cell cell-7-9">.cell .cell-7-9</div>
</div>
<h4>grid-justify-center</h4>
<div class="grid grid-gap grid-justify-center">
    <div class="cell cell-3-5">.cell .cell-3-5</div>
</div>
<h4>grid-justify-between</h4>
<div class="grid grid-justify-between">
    <div class="cell cell-2-5">.cell .cell-2-5</div>
    <div class="cell cell-2-5">.cell .cell-2-5</div>
</div>
<h4>grid-justify-around</h4>
<div class="grid grid-justify-around">
    <div class="cell cell-2-5">.cell .cell-2-5</div>
    <div class="cell cell-2-5">.cell .cell-2-5</div>
</div>
<h4>grid-justify-around</h4>
<div class="grid grid-justify-around">
    <div class="cell cell-2-5">.cell .cell-2-5</div>
    <div class="cell cell-2-5">.cell .cell-2-5</div>
</div>
<h4>grid-align-start</h4>
<div class="grid grid-align-start">
    <div class="cell cell-1-2">.cell .cell-1-2</div>
    <div class="cell cell-1-2" style="height: 100px">.cell .cell-1-2</div>
</div>
<h4>grid-align-end</h4>
<div class="grid grid-align-end">
    <div class="cell cell-1-2">.cell .cell-1-2</div>
    <div class="cell cell-1-2" style="height: 100px">.cell .cell-1-2</div>
</div>
<h4>grid-align-center</h4>
<div class="grid grid-align-center">
    <div class="cell cell-1-2">.cell .cell-1-2</div>
    <div class="cell cell-1-2" style="height: 100px">.cell .cell-1-2</div>
</div>
<h4>grid-align-base</h4>
<div class="grid grid-align-base">
    <div class="cell cell-1-2"><span style="padding-top: 25px">.cell .cell-1-2</span></div>
    <div class="cell cell-1-2" style="height: 100px">.cell .cell-1-2</div>
</div>
<div class="grid grid-justify-between grid-justify-default--dlg">
    <div class="grid grid-inline--dlg-i">
        <div class="cell-inline cell-auto--dlg">.cell-inline .cell-auto--dlg</div>
        <div class="cell-inline cell-auto--dlg">.cell-inline .cell-auto--dlg</div>
        <div class="cell-inline cell-auto--dlg">.cell-inline .cell-auto--dlg</div>
    </div>
    <div class="cell-inline cell--dlg">.cell-inline .cell--dlg</div>
</div>
```

##### As always, you can use variables for responsive.

`.grid-align-base--dmd`, `.grid-align-end--mmd`, `.grid-justify-between--msm`, `.grid-nowrap--tlg-i`, `.grid-justify-start--dsm-i`, **...**

### Grid offset

If you need to indent the grid, use the standard classes, an example of which is shown below.

```html
<div class="grid ">
    <div class="cell-1-2 grid-ml-1-2">.cell-1-2 .grid-ml-1-2</div>
    <div class="cell-1-3 grid-mr-1-3">.cell-1-3 .grid-mr-1-3</div>
    <div class="cell-2-3 grid-ml-1-3">.cell-2-3.grid-ml-1-3</div>
    <div class="cell-1-5">.cell-1-5</div>
    <div class="cell-1-5">.cell-1-5</div>
    <div class="cell-1-5 grid-ml-1-5">.cell-1-5 .grid-ml-1-5</div>
    <div class="cell-1-5">.cell-1-5</div>
    <div class="cell-1-5 grid-mla">.cell-1-5 .grid-mla</div>
    <div class="cell-2-5 grid-mra">.cell-2-5 .grid-mra</div>
    <div class="cell-3-5 grid-ma">.cell-2-5 .grid-ma</div>
    <div class="cell-3-5 grid-mla">.cell-3-5 .grid-mla</div>
    <div class="cell-3-5 grid-mra">.cell-3-5 .grid-mra</div>
</div>
```

As you can see, you can specify both automatic indentation and the size of the column. The following classes will be available to you.

*   `grid-mla`: margin-left auto
*   `grid-mra`: margin-right auto
*   `grid-ma`: margin-right and margin-left auto
*   `grid-ml-{column size}`: You can specify any column size specified in your grid settings. (_.grid-ml-1-2 .grid-ml-3-5 ..._)
*   `grid-mr-{column size}`: Like the previous one, only margin-right.

If you need to indent only in the responsive version, this is also not a problem, use classes that are the same as in the grid. **Please note that the name of the classes depends on how you specify them in the array.**

*   `grid-mla--dsm`: margin left auto in dsm variable resolution
*   `grid-mra--dsm-i`: margin right auto in dsm variable resolution inverted(min-width)
*   `grid-mr-1-2--dsm-i`: margin right 1/2 with dsm variable resolution inverted(min-width)

See example

```html
<h5>Default responsive (try resize window)</h5>
<div class="grid">
    <div class="cell cell-1-2--dmd grid-ml-1-2--dmd">.cell .cell-1-2--dmd .grid-ml-1-2--dmd</div>
    <div class="cell cell-2-3--dmd grid-ma--dmd">.cell .cell-2-3--dmd .grid-ma--dmd</div>
</div>
<h5>Inverted responsive</h5>
<div class="grid">
    <div class="cell cell-1-2--dmd-i grid-ml-1-2--dmd-i">.cell .cell-1-2--dmd-i .grid-ml-1-2--dmd-i</div>
    <div class="cell cell-2-3--dmd-i grid-ma--dmd-i">.cell .cell-2-3--dmd-i .grid-ma--dmd-i</div>
</div>
```
### Breakpoint global variables

If you specify any breakpoints in the array, variables will automatically be created that will help you in writing the code.

*   `maw[index]`: '(max-width {key}px)'
*   `miw[index]`: '(min-width {key + 1}px)'

```stylus
@media maw[dsm] // @media (max-width 1000px)
    .example
        display block

@media miw[dsm] // @media (min-width 1001px)
    .example
        display block
```
##### While this is all, as you can see, everything is simple and flexible. If you have suggestions for improvements, create an issue on gitHub.

