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

## Card Line Chart 

### Usage
```php
@cardchartline([
    'parameters' => ['query_variable' => 7],
    'api_url' => '<!-- link to API -->'
])
```

### Configuration Options
| Name | Type | Default | Description |
|------|------|---------|-------------|
|`parameters`|`array`| |The user-defined array of query string parameters for filtering. The compiled query will be sent to API endpoint.|
|`api_url`|`string`| |The endpoint to get data for a chart. The data should be in chart.js format. To prepare the data please use `awes-io/reporter` package.|
|`name`|`string`| `optional` | Name of the element. if not exist, will be a random string. |
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

## Card Doughnut Chart 

### Usage
```php
@cardchartdoughnut([
    'parameters' => ['query_variable' => 7],
    'api_url' => '<!-- link to API -->'
])
```

### Configuration Options
| Name | Type | Default | Description |
|------|------|---------|-------------|
|`parameters`|`array`| |The user-defined array of query string parameters for filtering. The compiled query will be sent to API endpoint.|
|`api_url`|`string`| |The endpoint to get data for a chart. The data should be in chart.js format. To prepare the data please use `awes-io/reporter` package.|

## Default Chart

### Usage
```php
@chart([
    'parameters' => ['query_variable' => 7],
    'api_url' => '<!-- link to API -->'
])
```
### Configuration Options
| Name | Type | Default | Description |
|------|------|---------|-------------|
|`parameters`|`array`| |The user-defined array of query string parameters for filtering. The compiled query will be sent to API endpoint.|
|`api_url`|`string`| |The endpoint to get data for a chart. The data should be in chart.js format. To prepare the data please use `awes-io/reporter` package.|
|`name`|`string`| `optional` | Name of the element. if not exist, will be a random string. |
|`type`|`string`| `line` | Type of the chart. Available parameters your can check on chartjs documentation. |

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
|`default`|`string`| `null` |Active element. This value will be used to enable `active` class for the element.|

## Table

### Usage
```php
@table([
    'scope_api_url' => '<!-- link to API -->'
])
    <tb-column name="name" label="Name"></tb-column>
    <tb-column name="created_at" label="Created At" media="desktop"></tb-column> <!-- will be hidden on mobile -->
@endtable
```
### Configuration Options
| Name | Type | Default | Description |
|------|------|---------|-------------|
|`scope_api_url`|`string`| `optional` | The endpoint to get data for a table. Will ignore if `pagination` is `false`. |
|`name`|`string`| `optional` | Name of the element. if not exist, will be a random string. |
|`default_data`|`array`| `null` | Array with default data object. |
|`store_data`|`string`| `optional` | Name of storage in Vue.js. if not exist, will be a random string. |
|`scroll_to`|`bool`| `true` | Scrool up after click to pagination |
|`row_url`|`string`| `optional` | The link by click of row element in the table. |
|`pagination`|`bool`| `true` | Will be shown the pagination or not. |

### Slots
| Name | Type | Default | Description |
|------|------|---------|-------------|
|`mobile`|`string`| `null` | Customization of mobile responsive slider. |
|`errorCard`|`string`| `null` | Add a HTML to info block if the Internet connection is broken. |
|`emptyCard`|`string`| `null` | Add a HTML is the table is empty. |

### Slots Usage

#### Slot `mobile` 

```php
@table([
    'scope_api_url' => '<!-- link to API -->'
])
    <tb-column name="name" label="Name"></tb-column>
    <tb-column name="created_at" label="Created At" media="desktop"></tb-column> <!-- will be hidden on mobile -->
    @slot('mobile')
        <p>Created At: @{{ m.data.created_at }}</p>
    @endslot
@endtable
```

#### Slot `errorCard` 

```php
@table([
    'scope_api_url' => '<!-- link to API -->'
])
    <tb-column name="name" label="Name"></tb-column>
    <tb-column name="created_at" label="Created At" media="desktop"></tb-column> <!-- will be hidden on mobile -->
    @slot('errorCard')
        <a href="#" class="btn mt-20">Homepage</a>
    @endslot
@endtable
```

#### Slot `emptyCard` 

```php
@table([
    'scope_api_url' => '<!-- link to API -->'
])
    <tb-column name="name" label="Name"></tb-column>
    <tb-column name="created_at" label="Created At" media="desktop"></tb-column> <!-- will be hidden on mobile -->
    @slot('emptyCard')
        <a href="#" class="btn mt-20">Create a record</a>
    @endslot
@endtable
```

