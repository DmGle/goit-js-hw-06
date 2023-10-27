const categoriesList = document.querySelector(`#categories`);

const categoryItem = categoriesList.querySelectorAll(`li.item`);

console.log(`Number of categories: ${categoryItem.length}`);

categoryItem.forEach((categoryItem) => {
    const categoryTitle = categoryItem.querySelector(`h2`).textContent;
    const categoryElements = categoryItem.querySelectorAll(`ul li`);
    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${categoryElements.length}`);
})