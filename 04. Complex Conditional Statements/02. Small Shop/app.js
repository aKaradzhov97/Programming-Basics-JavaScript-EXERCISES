function smallShop([product, town, quantity]) {
    town = town.toLowerCase();
    product = product.toLowerCase();
    if (town === "sofia") {
        if (product === 'coffee') {
            console.log(quantity * 0.5);
        }
        else if (product === "water") {
            console.log(quantity * 0.8);
        }
        else if (product === "beer") {
            console.log(quantity * 1.2);
        }
        else if (product === "sweets") {
            console.log(quantity * 1.45);
        }
        else if (product === "peanuts") {
            console.log(quantity * 1.6);
        }

    } else if (town === "plovdiv") {
        if (product === 'coffee') {
            console.log(quantity * 0.4);
        }
        else if (product === "water") {
            console.log(quantity * 0.7);
        }
        else if (product === "beer") {
            console.log(quantity * 1.15);
        }
        else if (product === "sweets") {
            console.log(quantity * 1.3);
        }
        else if (product === "peanuts") {
            console.log(quantity * 1.5);
        }
    } else if (town === "varna") {
        if (product === 'coffee') {
            console.log(quantity * 0.45);
        }
        else if (product === "water") {
            console.log(quantity * 0.7);
        }
        else if (product === "beer") {
            console.log(quantity * 1.1);
        }
        else if (product === "sweets") {
            console.log(quantity * 1.35);
        }
        else if (product === "peanuts") {
            console.log(quantity * 1.55);
        }
    }
}