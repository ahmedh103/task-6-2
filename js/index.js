const btn =document.querySelector('button');
const div = document.querySelector('div');
const p =document.querySelector('p')


btn.onclick = function(){

    if(div.classList.contains('dark')){
div.classList.remove('dark');
btn.classList ="btn btn-dark";
btn.innerText="dark mood";

    }else{
        div.classList.add('dark');
        btn.classList ="btn btn-light";
        btn.innerText="Light mood";
    }

}

