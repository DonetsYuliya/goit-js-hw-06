'use strict';

const items = document.querySelectorAll(`.item`);
console.log(`Number of categories: ${items.length}`);

const categoryAnimals = items[0];
const categoryProducts = items[1];
const categoryTechnologies = items[2];

const getCategorie = categorie => {
    console.log(`Category: ${categorie.firstElementChild.textContent}`);
    console.log(`Elements: ${categorie.lastElementChild.children.length}`);
};
getCategorie(categoryAnimals);
getCategorie(categoryProducts);
getCategorie(categoryTechnologies);

// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
