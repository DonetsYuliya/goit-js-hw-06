const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsList = document.querySelector(`#ingredients`);

ingredients.forEach(itemName => {
    const itemEl = document.createElement(`li`);
    itemEl.className = 'item';
    itemEl.textContent = itemName;
    ingredientsList.append(itemEl);
});

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.
