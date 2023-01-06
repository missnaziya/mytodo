function add(){
    document.getElementById('error').innerHTML = '';

    let name = document.getElementById('name').value;  
    if(name == ""){
        document.getElementById('error').innerHTML = '*please enter value';
    }
    else{
        let box = document.getElementById('box');

        
        let li = document.createElement('li');
        li.textContent = name;
       
       
        let a = document.createElement('a');
        a.textContent="X";
        a.href="javascript:void(0)";
        a.className="remove";
        li.appendChild(a);

        box.appendChild(li);
    }
    
     name = document.getElementById('name').value = "";  
}

let btn=document.querySelector('ul');
btn.addEventListener('click',function(e){
    let box= document.getElementById('box');
    let li=e.target.parentNode;
    box.removeChild(li);
})

