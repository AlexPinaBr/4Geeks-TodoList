import React, { useState } from "react";
import Title from "./title"

function TodoList () {
//Para usar el useState(): 
//Primero declramos la variable que siempre va a ser const. Esta variable va a tener dos parametros definidos en [] 
// El primero va a ser el nombre de nuestra variable y el segundo va a aser el nombre de nuestro método para cambiar esa variable.
// después de esto igualamos el hook del useState() y dentro del () inicializamos el formato de la variable
// La línea 13 es = 
// let tasklist = []  ========> const [tasklist, ...] = useState([])
//  La línea 14 es = 
// setTaskList = ["pokemon"] =====> const [..., setTaskList] = useState([])
    const [taskList, setTaskList] = useState([])
    const [task, setTask] = useState("")
    return(
        <div className="container d-flex justify-content-center flex-column text-center mt-5">
            <Title/>
            <div className="d-flex mt-1 mb-2">
                <input  
                    type="text"
                    value={task}
                    onChange={({target:{value}})=>setTask(value)}
                    className="form-control text-wrap flex-grow-1" 
                    placeholder="Write your task here!"
                    onKeyDown={(e) => {
                        if(e.key === "Enter" && e.target.value.trim() !=""){
                            setTaskList([...taskList, task])
                            setTask("")
                        }}
                    }
                />
                <button className="ms-1 btn btn-success" 
                    onClick={() => {
                        setTaskList([...taskList, task])
                        setTask("")
                    }}>Add
                </button> 
            </div>
            <ul className="list-group">
                {taskList.map((element, index) => {
                return (
                    <li key={index} 
                        className="list-group-item rounded-0 border d-flex justify-content-between align-items-left task-none">
                            {element}
                            <i type='button' onClick={() => {
                                setTaskList(taskList.filter((e,i) => i != index))
                            }}
                            className="fa-solid fa-delete-left">
                            </i>
                    </li>
                    );
                    })}
                    <li className="mt-2 list-group-item rounded-0 border text-start text-muted text-wrap"><small>{taskList.length} {taskList.length == 1 ? "item" : "items" } left</small></li>
            </ul>
        </div>
    )
}

export default TodoList;
