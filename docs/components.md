# Blade components 

Ready-to-use Blade components and directives. 

## Components
- **Blade Components**
- [Frame Navigation](./frame-nav.md)
- [Grid](./grid.md)
- [Content](./classes.md)
- [Slide Up Down](./slide-up-down.md)
- [Margins and paddings](./margins.md)
- [Icons](./icons.md)

## Card Chart

### Usage
```php
@cardchart([
    'parameters' => ['query_variable' => 7],
    'api_url' => '<!-- link to API -->'
])
```

### Configuration Options
| Name | Type | Default | Description |
|------|------|---------|-------------|
|`parameters`|`array`| |The user-defined array of query string parameters for filtering. The compiled query will be sent to API endpoint.|
|`api_url`|`string`| |The endpoint to get data for a chart. The data should be in chart.js format. To prepare the data please use `awes-io/reporter` package.|
|`read_more`|`array`| `null` |Read more button. The array has to variables (next 2 lines). |
|`read_more.name`|`string`| `null` or required if `read_more` is not `null` |Text of the button.|
|`read_more.url`|`string`| `null` or required if `read_more` is not `null` |URL of the button.|
|`title`|`string`| `null` |Title text on the chart.|
|`label`|`string`| `null` |Lable text on the chart.|
|`value`|`string`| `null` |Large text on top of the chart.|
|`filter`|`array`| `null` |The array for filtering of the chart. If the array exists component will connect another component `Group Filter`. Format: `[value => text]`. Example: `[7 => 'Week', 30 => 'Month']` |
|`filter_variable`|`string`| `null` or required if `filter` is not `null` |Default variable for `Group Filter`|
|`filter_default`|`string`| `null` |Default value for `Group Filter`|
|`color`|`string`| `grey` |One color from prepared color's list. Available colors: `light-blue`, `blue`, `dark-blue`, `violet`, `pink`, `yellow`, `orange`, `red`, `green`. For random color please use `*`. Change the colors you can at the indigo config.|


## Analytics Line Chart

### Usage
```php
@linechart([
    'parameters' => ['query_variable' => 7],
    'api_url' => '<!-- link to API -->'
])
```
### Configuration Options
| Name | Type | Default | Description |
|------|------|---------|-------------|
|`parameters`|`array`| |The user-defined array of query string parameters for filtering. The compiled query will be sent to API endpoint.|
|`api_url`|`string`| |The endpoint to get data for a chart. The data should be in chart.js format. To prepare the data please use `awes-io/reporter` package.|

## Group Filter

### Usage
```php
@filtergroup(['filter' => [7 => 'Week', 30 => 'Month'], 'variable' => 'period', 'default' => 30])
```
### Configuration Options
| Name | Type | Default | Description |
|------|------|---------|-------------|
|`filter`|`array`| |The array to build fast filter for the page. Format: `[value => text]`. Example: `[7 => 'Week', 30 => 'Month']` |
|`variable`|`string`| |The user-defined variable for query string parameter.|
|`default`|`array`| `null` |Active element. This value will be used to enable `active` class for the element.|
