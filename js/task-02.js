const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsList = document.querySelector(`#ingredients`);
const itemEls = [];

ingredients.forEach(ingredient => {
    const itemEl = document.createElement(`li`);
    itemEl.classList.add('item');
    itemEl.textContent = ingredient;
    itemEls.push(itemEl);
});

ingredientsList.append(...itemEls);

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.
