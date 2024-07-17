import style from './index.module.scss';
import './index.scss';
import './assets/images/dog.jpg';

const numbers = [2, 3, 5];

// Стрелочная функция. Не запнётся ли на ней Internet Explorer?

console.log(style); //использование объекта style важно для попадания стилей в css-бандл

const doubledNumbers = numbers.map(number => number * 2);

console.log(doubledNumbers); // 4, 6, 10 