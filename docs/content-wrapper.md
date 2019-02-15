# Content-wrapper

Предназначен для отображения динамических шаблонов. Изменение данных в шаблоне автоматически вызывает рендеринг изменившихся частей шаблона.

Схема работы: в слот по-умолчанию передаются данные для отображения, которые используются в шаблоне


## Пример использования

```html
<content-wrapper
    :default="{email:'soberbrunner@example.org', pageTitle: 'This is a content wrapper example'}"
    store-data="content">
    <template slot-scope="data">
        <h1>{{ data.pageTitle }}</h1>
        <p>You can look on this email <b>{{ data.email }}</b>, got from data you've passed</p>
    </template>
</content-wrapper>
```

@vue
<content-wrapper
    :default="{email:'soberbrunner@example.org', pageTitle: 'This is a content wrapper example'}"
    store-data="content">
    <template slot-scope="data">
        <h1>{{ data.pageTitle }}</h1>
        <p>You can look on this email <b>{{ data.email }}</b>, got from data you've passed</p>
    </template>
</content-wrapper>
@endvue


## Входные параметры

| Название        | Тип           | По умолчанию | Описание                                      |
|-----------------|:-------------:| -------------|-----------------------------------------------|
| `default`       | **Object**    | `null`       | Данные для шаблона                            |
| `store-data(*)` | **String**    | `undefined`  | Идентификатор в общем хранилище `AWES._store` |
| `tag`           | **String**    | `'div'`      | Тег обёртки шабона                            |
