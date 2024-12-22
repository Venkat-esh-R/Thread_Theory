 const basket = [];
        let totalPrice = 0;

        const products = {
            "hoodie-card-1": {
                "Black": { "price": 1599, "image": "/Users/venkateshr/Downloads/hooodie black.jpeg" },
                "Beige": { "price": 1399, "image": "/Users/venkateshr/Downloads/hoodie beige.jpeg" },
                "Solid Brown": { "price": 1299, "image": "/Users/venkateshr/Downloads/solid brown.jpeg" }
            },
            "baggy-card-1": {
                "Black": { "price": 2999, "image": "/Users/venkateshr/Downloads/Ovrszed blck .jpeg" },
                "White": { "price": 3099, "image": "/Users/venkateshr/Downloads/ovrsd white.jpeg" },
                "Mixed": { "price": 3199, "image": "/Users/venkateshr/Downloads/ovrsed m.jpeg" }
            },
            "sweatshirt-card-1": {
                "Creamy": { "price": 1099, "image": "/Users/venkateshr/Downloads/S Creamy.jpeg" },
                "Green": { "price": 999, "image": "/Users/venkateshr/Downloads/S green.jpeg" },
                "Printed": { "price": 1199, "image": "/Users/venkateshr/Downloads/S Print.jpeg" }
            }
        };

        function showCategory(category) {
            const categories = document.querySelectorAll('.grid-container');
            categories.forEach(cat => cat.classList.remove('active'));
            document.getElementById(category).classList.add('active');
        }

        function changeImage(cardId, color) {
            const imgElement = document.querySelector(`#${cardId} img`);
            imgElement.src = products[cardId][color].image;
            updatePrice(cardId, color);
        }

        function updatePrice(cardId, color) {
            const priceElement = document.querySelector(`#${cardId} .card-price`);
            const price = products[cardId][color].price;
            priceElement.innerHTML = `&#8377;${price}`;
        }

        function addToBasket(productName, cardId) {
            const size = document.querySelector(`#${cardId} .size`)?.value || "One Size";
            const color = document.querySelector(`#${cardId} .color`).value;
            const price = products[cardId][color].price;

           floatingImage.addEventListener('animationend', () => {
                floatingImage.remove();
            });
        }
        function updateSize(size, cardId) {
    const sizeButtons = document.querySelectorAll(`#${cardId} .size-box`);
    sizeButtons.forEach(button => button.classList.remove('selected'));
    const selectedButton = Array.from(sizeButtons).find(button => button.textContent === size);
    if (selectedButton) {
        selectedButton.classList.add('selected');
    }
}