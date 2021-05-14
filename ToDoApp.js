import React,{useState} from 'react';
import "./ToDoApp.css";

function ToDoApp() {

    const[task,setTask]=useState("")
 

    const [tasklist,setTaskList]=useState([]);


    const handleChange=(e)=>{
        setTask(e.target.value);
    };

    const AddTask=()=>{
        if (task!=="")
        {
            const taskDetails={
                id:Math.floor(Math.random()*1000),
                value:task,
                isCompleted:false,
            }
            setTaskList([...tasklist,taskDetails]);
        }
    };
    const deletetask=(e,id)=>{
        e.preventDefault();
        setTaskList(tasklist.filter(t=>t.id !=id));//filter is used to delete all list items
    };
    const taskCompleted=(e,id)=>{
        e.preventDefault();
        const element=tasklist.findIndex(elem=> elem.id==id);//gives index first we find index then we copy it to new list of element and set new list to task list

        const newTaskList=[...tasklist];// copy array to new var

        newTaskList[element]={
            ...newTaskList[element],//helps to edit
        isCompleted: true,
    }

    setTaskList(newTaskList);


    };

    return (
        <div className ="todo">
            <input type="text"
             name="text"
              id="text"
              onChange={(e) => handleChange(e)}
               placeholder="add task here"/>
            <button className="add-btn" onClick={AddTask}> ADD</button><br/>
            {tasklist !==[] ?
            <ul>
                {tasklist.map((t)=>(
                    <li className={t.isCompleted  ? "crossText":"listitem"}>
                         {t.value}
                         <button className="completed" onClick={e=>taskCompleted(e,t.id)}> COMPLETED</button>

                         <button className="delete"onClick={e=> deletetask(e,t.id)}> DELETE</button>
                         </li>
                ))}
            </ul>
            :null}
        </div>
    );
}

export default ToDoApp
