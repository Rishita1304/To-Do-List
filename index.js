let addtobutton = document.getElementById('addtodo');
let todocontainer = document.getElementById('todocontainer');
let inputfield = document.getElementById('inputfield');
let btn = document.getElementById('btn');

addtobutton.addEventListener('click',function(){
    var paragraph = document.createElement('p')
    var button = document.createElement('button')
    paragraph.classList.add('paragraph-styling')
    paragraph.innerText = inputfield.value;
    todocontainer.appendChild(paragraph);
    inputfield.value = "";
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration = "line-through";
    })
    btn.addEventListener('click',function(){
        todocontainer.removeChild(paragraph);
    })

})