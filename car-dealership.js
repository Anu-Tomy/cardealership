var category1 = {
    name: "sedan",
    price: 2000,
    status:"available",
    totalnos: 10
};

var category2 = {
    name : "suv",
    price: 3000,
    status: "available",
    totalnos: 8
};

var category3 = {
    name : "sports",
    price: 50000,
    status: "available",
    totalnos: 5
};

function displayCarCategories() {
    console.log("Ourcars:",category1,category2,category3);
}

function displayAvailability() {
    console.log("sedan: ",category1.totalnos);
    console.log("suv: ",category2.totalnos);
    console.log("sports: ",category3.totalnos);
}

function rentalRequest() {
    if(category1.totalnos === 0) {
        console.log("Sedan is not available now!");
    }
        else if(category2.totalnos === 0){
            console.log("SUV is not available now!");
        }
            else if(category2.totalnos === 0){
                console.log("Sports car is not available now!");
                }
                else{
                    console.log("Available now!");
                }
}