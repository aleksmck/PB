document.addEventListener("DOMContentLoaded", function() {
    // Product Counter Functionality
    const crunchyCount = document.getElementById("crunchy-count");
    const smoothCount = document.getElementById("smooth-count");
    const decreaseButtons = document.querySelectorAll(".decrease");
    const increaseButtons = document.querySelectorAll(".increase");
    
    decreaseButtons.forEach(button => {
        button.addEventListener("click", function() {
            const input = button.nextElementSibling;
            if (input.value > 0) {
                input.value = parseInt(input.value) - 1;
                updateOrderSummary();
            }
        });
    });

    increaseButtons.forEach(button => {
        button.addEventListener("click", function() {
            const input = button.previousElementSibling;
            input.value = parseInt(input.value) + 1;
            updateOrderSummary();
        });
    });

    // Add to Cart Buttons
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach(button => {
        button.addEventListener("click", function() {
            updateOrderSummary();
        });
    });

    // Order Summary Update Function
    function updateOrderSummary() {
        const totalCrunchy = parseInt(crunchyCount.value);
        const totalSmooth = parseInt(smoothCount.value);
        const totalJars = totalCrunchy + totalSmooth;
        const totalPrice = (totalCrunchy + totalSmooth) * 5; // Assuming each jar costs $5

        document.getElementById("total-crunchy").innerText = totalCrunchy;
        document.getElementById("total-smooth").innerText = totalSmooth;
        document.getElementById("total-jars").innerText = totalJars;
        document.getElementById("total-price").innerText = totalPrice.toFixed(2);
    }

    // Place Order Button
    const placeOrderButton = document.getElementById("place-order");
    placeOrderButton.addEventListener("click", function(event) {
        event.preventDefault();
        alert("Thank you for your order! Your peanut butter is on the way!");
    });

    // Promo Code Application
    const promoCodeInput = document.getElementById("promo-code");
    promoCodeInput.addEventListener("input", function() {
        const promoCode = promoCodeInput.value.trim().toLowerCase();
        let discount = 0;
        if (promoCode === "pblover") {
            discount = 0.1; // 10% discount
        }

        const totalCrunchy = parseInt(crunchyCount.value);
        const totalSmooth = parseInt(smoothCount.value);
        let totalPrice = (totalCrunchy + totalSmooth) * 5;
        totalPrice -= totalPrice * discount;

        document.getElementById("total-price").innerText = totalPrice.toFixed(2);
    });
});
