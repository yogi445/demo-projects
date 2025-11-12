let todolists = [{
    name:'wake up',
    date:'07-21-2023'
}];
render();
function render() {
    let inputdata='';
    todolists.forEach((data,index)=>{
        const {name,date}=data;
        const Html=`<div>${name}</div>
        <div> ${date}</div> <button onclick="
            todolists.splice(${index},1)
            render();
            " class="delete-button">Delete</button> `;
 inputdata +=Html;
    
    });
    
    document.querySelector('.matter').innerHTML=inputdata;
}
function info () {
let input=document.querySelector('.todo-list');
let name=input.value;
let inputdate=document.querySelector('.todo-date');
let date=inputdate.value;
todolists.push({
    name,
    date
})
input.value='';
render();
}