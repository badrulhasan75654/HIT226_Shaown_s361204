// Adding click event to each product
document.querySelectorAll('.product').forEach((product) => {
    product.addEventListener('click', () => {
        alert(`You clicked on ${product.querySelector('h3').textContent}`);
    });
});
