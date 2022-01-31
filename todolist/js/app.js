//UI
const form=document.querySelector('#task-form');
const taskinput=document.querySelector('#task');
const filter=document.querySelector('#filter');
const tasklist=document.querySelector('.collection');
const clearbtn=document.querySelector('.clear-tasks');

// Add Task Event Listener
form.addEventListener('submit',addtask);
//Remove Task Event Listener
tasklist.addEventListener('click',removetask);
//Clear Task Event Listener
clearbtn.addEventListener('click',cleartasks);
//Filter Task Event Listener
filter.addEventListener('keyup',filtertasks);
//DOM Load Event Listener
document.addEventListener('DOMContentLoaded',gettasks);
//Clear LocalStorage Task Event Listener
clearbtn.addEventListener('click',cleartaskfromlocalstorage);

//Add Task
function addtask(e){
    // console.log('hel');

    if(taskinput.value ===''){
        window.alert('Add a task');
    }else{
        //create li element
        const li=document.createElement('li');
        li.className="collection-item";
        //create textnode & append to ul
        li.appendChild(document.createTextNode(taskinput.value));

        const link=document.createElement('a');
        //add class
        link.className="delete-items secondary-content";
        //add icon
        link.innerHTML=`<i class="far fa-trash-alt"></i>`;
        li.appendChild(link);
        tasklist.appendChild(li);
        //store in localStorage
        storetaskinlocalstorage(taskinput.value);
    }

   e.preventDefault();
}
//Remove Task
function removetask(e){

    // console.log(e.target);
    // console.log(e.target.parentElement);
    if(e.target.parentElement.classList.contains('delete-items')){
        if(confirm("Are you sure?")){
            e.target.parentElement.parentElement.remove();
            //remove task from localStorage
            removetaskfromlocalstorage(e.target.parentElement.parentElement);
        }
    }
    
    e.preventDefault();
}
//Clear Tasks
function cleartasks(){

    // console.log('hey');
    //Method 1
    // tasklist.innerHTML="";
    //Method 2
    // console.log(tasklist.childElementCount);
    // console.log(tasklist.firstChild);
    // let x=0;
    // const litems=document.querySelectorAll('li');
    // console.log(litems.length);
    // if(x < tasklist.childElementCount){
    //     tasklist.removeChild(tasklist.firstChild);
    // }

    //Method3
    while(tasklist.firstChild){
        tasklist.removeChild(tasklist.firstChild);
    }
}
//Filter Tasks
function filtertasks(e){
    // console.log(e.target.value);
    const filter=e.target.value.toLowerCase();
    const tasks=document.querySelectorAll('.collection-item');
    tasks.forEach(function(task){
        const item=task.firstChild.textContent.toLowerCase();
        if(item.indexOf(filter) !== -1){
            task.style.display='block';
        }else{
            task.style.display='none';
        }
    });
}

//Store Tasks in localStorage
function storetaskinlocalstorage(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks=[];
    }else{
        tasks=JSON.parse(localStorage.getItem('tasks')); 
    }
    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks));
}
//Get Tasks from localStorage
function gettasks(){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks=[];
    }else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
        tasks.forEach(function(task){
            const li=document.createElement('li');
            li.className="collection-item";
            li.appendChild(document.createTextNode(task));
            const link=document.createElement('a');
            link.className="delete-items secondary-content";
            link.innerHTML=`<i class="far fa-trash-alt"></i>`;
            li.appendChild(link);
            tasklist.appendChild(li);
        });
}

//Remove task from localStorage
function removetaskfromlocalstorage(taskitem){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks=[];
    }else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task,index){
        if(taskitem.textContent===task){
                    // where we want to start(index),where we want to end (how many)
            tasks.splice(index,1);
        }   
    });
    localStorage.setItem('tasks',JSON.stringify(tasks));
}
//CLear tasks form localStorage
function cleartaskfromlocalstorage(){
    localStorage.clear();
}