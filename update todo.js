var todos=[
    {id:1,title:"learning js",isdoingyet:false},
    {id:2,title:"learning language",isdoingyet:true},
    {id:3,title:"workout",isdoingyet:false}
]
var user_menu=prompt("choose one of the options \n 1:add todo \n 2:remove todo \n 3:do todo")
if(user_menu==="1"){
    var user_request=prompt("enter your todo ")
    var user_new_todo={
        id:todos.length+1,
        title:user_request,
        isdoingyet:false
    }
    todos.push(user_new_todo)
console.log(todos)
}
else if(user_menu==="2"){
    var remove_request_todo=prompt("enter your removable todo")
    
    var removable_todo = todos.findIndex(function(todo){
        return todo.title===remove_request_todo
    })
    todos.splice(removable_todo,1)
    console.log(todos)
   
}
else if(user_menu==="3"){
    var editabale_todo=prompt("enter and  edit todo")
todos.forEach(function(todo){
    if(todo.title===editabale_todo){
        todo.isdoingyet=true

    }
    

})
console.log(todos)
}
else{
    console.log("plase write the correct number")
}
