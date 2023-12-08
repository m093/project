var tasks={ali:["html","js" , "css"],
reza:["python","r","php"],
sara:["react","vue" ,"angular"],
samira:["bootstrap","photoshop" ,"design"]}

var new_task=prompt("enter the new task")
var employe_name=prompt("enter the name of employe")
var employe_task=tasks[employe_name]
employe_task.push(new_task)
console.log(tasks)

