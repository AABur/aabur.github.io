# Практичная структура для именования классов, функций и переменных

_Перевод статьи [A Useful Framework for Naming Your Classes, Functions, and Variables](https://betterprogramming.pub/a-useful-framework-for-naming-your-classes-functions-and-variables-e7d186e3189f)_

_Автор оригинала [XOR](https://tunvir.medium.com/)_


>"В компьютерном программировании соглашение об именах — набор правил для выбора последовательности символов, которая будет использоваться для идентификаторов, которые обозначают переменные, типы, функции и другие объекты в исходном коде и документации." -
[Википедия](https://ru.wikipedia.org/wiki/%D0%A1%D0%BE%D0%B3%D0%BB%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D1%8F_%D0%BE%D0%B1_%D0%B8%D0%BC%D0%B5%D0%BD%D0%B0%D1%85_(%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5))

Придумывать названия сложно!

В этой статье мы постараемся сосредоточиться на методе именования (P)A/HC/LC, надеясь, что это улучшит читаемость кода.

Хотя эти предложения можно применить к любому языку программирования, мы будем использовать JavaScript, чтобы проиллюстрировать их на практике.

## Что значит **(P)A/HC/LC**?

Данная практика предлагает использовать следующий шаблон для именования функции.

    префикс? (P) + действие (A) + высокоуровневый контекст (HC) + низкоуровневый контекст? (LC)

## Что обозначает **Префикс** (P)?

*Префикс* расширяет смысл функции.

    - is
Описывает совйство или состояние текущего контекста (обычно логическое значение).

```JS
    const color = 'blue'
    const isBlue = (color === 'blue') // свойство
    const isPresent = true // состояние

    if (isBlue && isPresent) {
        console.log('Blue is present!')
    }
```

    - has
Описывает, имеет ли текущий контекст определенное значение или состояние (обычно логическое значение).

```JS
    /* Плохо */
    const isProductsExist = (productsCount > 0)
    const areProductsPresent = (productsCount > 0)

    /* Хорошо */
    const hasProducts = (productsCount > 0)
```

    - should
Отражает положительный условный оператор (обычно логическое значение), связанный с определенным действием.

```JS
    function shouldUpdateUrl(url, expectedUrl) {
        return (url !== expectedUrl)
    }
```

## **Действия** - это сердце функции

*Действия* - это глагольная часть имени функции. Это самая важная часть в описании того, что делает функция.

    - get
Получает доступ к данным немедленно (т.е. сокращение от getter для внутренних данных).

```JS
    function getFruitsCount() {
        return this.fruits.length;
    }
```

    - set
Устанавливает переменную со значением `A` в значение `B`.

```JS
    const fruits = 0

    function setFruits(nextFruits) {
        fruits = nextFruits
    }

    setFruits(5)
    console.log(fruits) // 5
```

    - reset
Возвращает переменную к ее начальному значению или состоянию.

```JS
    const initialFruits = 5
    const fruits = initialFruits
    setFruits(10)
    console.log(fruits) // 10

    function resetFruits() {
        fruits = initialFruits
    }

    resetFruits()
    console.log(fruits) // 5
```

    - fetch
Запрос данных, который требует время на исполнение (например, асинхронный запрос).

```JS
    function fetchPosts(postCount) {
        return fetch('https://api.dev/posts', {...})
    }
```

    - remove
Удаляет что-то откуда-то.

Например, если у вас есть коллекция выбранных фильтров на странице поиска, удаление одного из них из коллекции - это `removeFilter`, а не `deleteFilter` (и это то, как вы естественно скажете это на английском языке):

```JS
    function removeFilter(filterName, filters) {
        return filters.filter(name => name !== filterName)
    }

    const selectedFilters = ['price', 'availability', 'size']
    removeFilter('price', selectedFilters)
```

    - delete
Полностью стирает что-то из сферы бытия.

Представьте, что вы редактор контента, и есть тот пресловутый пост, от которого вы хотите избавиться. Как только вы нажали на блестящую кнопку delete-post, CMS выполнила действие `deletePost`, а не `removePost`.

```JS
    function deletePost(id) {
       return database.find({ id }).delete()
    }
```

    - compose
Создает новые данные из существующих. В основном это применимо к строкам, объектам или функциям.

```JS
    function composePageUrl(pageName, pageId) {
        return `${pageName.toLowerCase()}-${pageId}`
    }
```

    - handle
Обработка действия. Часто используется при именовании обратного вызова.

```JS
    function handleLinkClick() {
        console.log('Clicked a link!')
    }

    link.addEventListener('click', handleLinkClick)
```

## И напоследок - **Контекст**

*Контекст* - это область, с которой работает функция.

Функция - это часто действие с чем-то. Важно указать, какова ее рабочая область - или, по крайней мере, ожидаемый тип данных.

```JS
    /* Чистая функция, работающая с примитивами */
    function filter(predicate, list) {
        return list.filter(predicate)
    }

    /* Функция, работающая непосредственно с сообщениями */
    function getRecentPosts(posts) {
        return filter(posts, (post) => post.date === Date.now())
    }

    /*

    Некоторые специфические для языка допущения могут позволить опустить контекст.
    Например, в JavaScript обычно фильтр работает с массивом (Array).
    Добавление явного filterArray будет лишним.

    */
```

## В итоге


| Имя функции            | Префикс (P) | Действие (A) | Высокий контекст (HC) | Низкий контекст (LC) |
| ---------------------- | ----------- | ------------ | --------------------- | -------------------- |
| `getUser`              |             | `get`        | `User`                |                      |
| `getUserMessages`      |             | `get`        | `User`                | `Messages`           |
| `handleClickOutside`   |             | `handle`     | `Click`               | `Outside`            |
| `shouldDisplayMessage` | `should`    | `Display`    | `Message`             |                      |



## Пять принципов присвоения имени переменным

В этом разделе мы попытались сосредоточиться на некоторых правилах именования переменных, которые улучшат читаемость кода.

### 1. Следуйте S-I-D

Имя должно быть коротким (**S**hort), интуитивно понятным (**I**ntuitive) и описательным (**D**escriptive).

```JS
    /* Плохо */
    const a = 5 // "a" может обозначать что угодно
    const isPaginatable = (postsCount > 10) // "Paginatable" звучит крайне неестественно
    const shouldPaginatize = (postsCount > 10) // Придуманные глаголы - это так весело!
```

Рекомендуется:

```JS
    /* Хорошо */
    const postsCount = 5
    const hasPagination = (postsCount > 10)
    const shouldDisplayPagination = (postsCount > 10) // альтернатива
```

## 2. Избегайте сокращений

Не используйте сокращения. Они не приносят ничего, кроме ухудшения читабельности кода. Найти короткое, описательное имя может быть сложно, но сокращения не могут быть оправданием для того, чтобы этого не делать. Например

```JS
    /* Плохо */
    const onItmClk = () => {}

    /* Хорошо */
    const onItemClick = () => {}
```

## 3. Избегайте дублирования контекста

Всегда удаляйте контекст из имени, если это не снижает его читабельность.

```JS
    class MenuItem {
    /* Имя метода дублирует контекст (которым является "MenuItem") */
    handleMenuItemClick = (event) => { ... }

    /* Читается как `MenuItem.handleClick()` */
    handleClick = (event) => { ... }

    }
```

## 4. Должно отражать ожидаемый результат

```JS
    /* Плохо */
    const isEnabled = (itemsCount > 3)
    return <Button disabled={!isEnabled} />

    /* Хорошо */
    const isDisabled = (itemsCount <= 3)
    return <Button disabled={isDisabled} />
```

## 5. Учитывайте единственное/множественное число

Как и префикс, имена переменных могут быть единственного или множественного числа в зависимости от того, имеют ли они одно значение или несколько.

```JS
    /* Плохо */
    const friends = 'Bob';
    const friend = ['Bob', 'Tony', 'Tanya'];

    /* Хорошо */
    const friend = 'Bob';
    const friends = ['Bob', 'Tony', 'Tanya'];
```

## 6. Используйте осмысленные и произносимые имена переменных

```JS
    const yyyymmdstr = moment().format("YYYY/MM/DD"); // просто ужасно

    // Вместо этого

    const currentDate = moment().format("YYYY/MM/DD");
```
