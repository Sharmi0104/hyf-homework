function createProduct(name, price) {
    return {
        name: name,
        price: price,
    }
}

function createShoppingCart(products) {
    return {
        addProduct: function (product) {
            // Implement functionality here

            products.push(product);
            return console.log(products)

        },
        removeProduct: function (product) {

            // Implement functionality here
            /* for( var i = products.length-1; i--;){
                 if ( products[i] === product) products.splice(i, 1);
                 }*/
            var index = products.indexOf(product);
            if (products > -1) {
                products.splice(index, 1);
            }

            return console.log(index)


        },
        getTotal: function () {
            // Implement functionality here
            let total = 0;

            products.map(function (item) {
                total = total + item.price
            })
            return total;



        },
        renderProducts: function () {
            // Implement functionality here
            products.map(function (items) {
                document.getElementById("showProducts").innerHTML += `<ul>
            <li>${items.name}</li>
            </ul>`
            })

        },
        getUser: function () {
            // Implement functionality here
            const Url=`https://jsonplaceholder.typicode.com/users/1`
                 fetch(Url)
                 .then(response=>response.json)
                 .then((user)=>
                 {
                 return user.name
                })
                 //return console.log(user)

        }
    }
}

const flatscreen = createProduct('flat-screen', 5000);
const shoppingCart = createShoppingCart([flatscreen]);
shoppingCart.addProduct({ name: 'LED', price: 4000 });
shoppingCart.addProduct({ name: 'LCD', price: 3000 });
shoppingCart.removeProduct(['LED']);
console.log(shoppingCart.getTotal());
shoppingCart.renderProducts();
console.log(shoppingCart.getUser());
//console.log(flatscreen)
/*shoppingCart.addProduct(('LED'))
console.log(shoppingCart.addProduct())
shoppingCart.addProduct(['LED','LCD']);
console.log(products)
shoppingCart.removeProduct('LCD');
console.log(productArray)
shoppingCart.getTotal(flatscreen.price)*/