
var word=prompt("enter your word")
var split_word=word.split("")
var reverse_word=split_word.reverse()
var join_word=reverse_word.join("")
console.log(join_word)


if(word===join_word){
    alert("کلمه از چپ به راست و از راست به چپ یکی خوانده میشود")

}
else{
    alert("کلمه از چپ به راست و از راست به چپ یکی خوانده نمیشود")

}


