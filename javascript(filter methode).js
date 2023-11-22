var default_user_products=[{id:1,name:"computer",price:3700},
{id:2,name:"printer",price:180},
{id:3,name:"laptop",price:4500},
{id:4,name:"desk",price:1000},
{id:5,name:"cd",price:80},
{id:6,name:"pen",price:10},
]
var filter_product_price = default_user_products.filter(function(product){
  return product.price<200
})
var post_price=filter_product_price.length*5

var sum=0

default_user_products.forEach(function(product){

  sum=sum +product.price
  
});
var total=sum+post_price;

console.log( "total price:"+total)


