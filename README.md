# firs-react-native-app

## Прототип галереи с загрузкой данных с unsplash.com

В unsplash.com установлено ограничение на загрузку данных по API (50 запросов в час).
Поэтому было реализовано кеширование с сохранением в localStorage.

Для очистки кеша предусмотрена соответсвующая кнопка на главном экране.

## Что не реализовано:

- FlatList - загрузка изображений для заполнения экрана и его прокручивание

## Что применялось:

- react-native
- redux
- es6
- flexbox
- react-navigation
- fetch
- AsyncStorage
