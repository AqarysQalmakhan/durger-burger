document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const addButton = product.querySelector('.add');
        const quantityControls = product.querySelector('.quantity-controls');
        const decrementButton = product.querySelector('.decrement');
        const incrementButton = product.querySelector('.increment');
        const quantityDisplay = product.querySelector('.quantity');
        let quantity = 0;

        addButton.addEventListener('click', () => {
            addButton.style.display = 'none';
            quantityControls.style.display = 'flex';
        });

        decrementButton.addEventListener('click', () => {
            if (quantity > 0) {
                quantity--;
                quantityDisplay.textContent = quantity;
                if (quantity === 0) {
                    quantityControls.style.display = 'none';
                    addButton.style.display = 'block';
                }
            }
        });

        incrementButton.addEventListener('click', () => {
            quantity++;
            quantityDisplay.textContent = quantity;
        });
    });
});
