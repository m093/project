var products =
    [{ id: 1, name: "computer", price: 200 },
    { id: 2, name: "camera", price: 300 },
    { id: 3, name: "laptop", price: 400 },
    { id: 4, name: "printer", price: 1200 }]

var user_defult = [{ id: 1, name: "computer", price: 200 },
{ id: 2, name: "camera", price: 300 },]

var user_request = prompt("1: add product \n 2:remove product")
var data_user
if (user_request == "1") {
    var user_name_product = prompt("enter the name of product")
    var isinproducts = products.some(function (product) {
        if (user_name_product == product.name) {
            data_user = product
            return true

        }

    })


if (isinproducts == true) {
    var new_product = { id: 3, name: data_user.name, price: data_user.price };

    user_defult.push(new_product);
    console.log("basket:" , user_defult)


}else {
    alert("there is no such a product")
}
}
else if(user_request=="2"){
    var user_name_product = prompt("enter the name of product");
    var index_finden=user_defult.findIndex(function(product) {
        return product.name==user_name_product
        
})
user_defult.splice(index_finden,1)
console.log(user_defult)
}
else {
    alert("enter correct number")
}