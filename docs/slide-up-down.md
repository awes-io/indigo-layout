# Slide-up-down

Предназначен для анимированного появления/исчезания содержимого компонента

![slide-up-down](https://storage.googleapis.com/static.awes.io/docs/slide-up-down.gif)


## Пример использования

```html
<button class="btn" @click="$refs.slide.toggle">Toggle</button>

<slide-up-down ref="slide">
    <p>Text inside slide-up-down</p>
    <p>One more paragraph</p>
</slide-up-down>
```

@vue
<button class="btn" @click="$refs.slide.toggle">Toggle</button>
<slide-up-down ref="slide">
    <p>Text inside slide-up-down</p>
    <p>One more paragraph</p>
</slide-up-down>
@endvue


## Входные параметры

| Название              | Тип         | По умолчанию | Описание                                      |
|-----------------------|:-----------:| -------------|-----------------------------------------------|
| `show`                | **Boolean** | `false`      | Показать / скрыть содержимое                  |
| `tag`                 | **String**  | `'div'`      | Тег обёртки шабона                            |
| `slide-up-duration`   | **Number**  | `250`        | Время **закрывания** в миллисекундах          |
| `slide-down-duration` | **Number**  | `300`        | Время **открывания** в миллисекундах          |


## Методы компонента

Все методы вызываются без параметров

| Название | Описание                      |
|----------|-------------------------------|
| `open`   | Показать содержимое           |
| `close`  | Скрыть содержимое             |
| `toggle` | Переключить текущее состояние |
