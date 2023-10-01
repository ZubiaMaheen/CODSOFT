
let string = "";
let buttons = document.querySelectorAll('button');
let history=document.querySelector('.history-list');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      para=document.createElement('p');
      data=string+"="+eval(string);
      para.innerText=data;
      history.appendChild(para);
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'AC'){
      string = ""
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML== '<i class="fa-solid fa-delete-left"></i>'){
      document.querySelector('input').value = string=string.toString().slice(0,-1);
    }
    else{ 
    console.log(e.target);
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
})



let icon=document.querySelector(".history-icon");
let historybar=document.querySelector(".history");
icon.onclick = () => {
  historybar.classList.toggle("visible");
};


let deleteHistory=document.querySelector(".delete");
deleteHistory.addEventListener("click",function(){
  history.innerHTML=""
})



  




