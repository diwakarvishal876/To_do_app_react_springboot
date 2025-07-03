import {  use, useEffect, useState } from "react";
import { retrieveAllTodosForUsername,deleteTodoByIdApi } from "./api/TodoApiService";
import { useAuth } from "./security/AuthContext";
import { useNavigate } from "react-router-dom";

export default function ListTodo(){

    const [todos,setTodos] = useState([]);
    const [deleteAlertMessage,setDeleteAlertMessage] = useState(false);
    const authContext=useAuth();
    const username = authContext.username; // Get the username from the AuthContext
     // const todos=[
       
    // ]
    const navigate= useNavigate();

    useEffect(
        () => {
            refreshTodos();
        },[]
    );  
    function refreshTodos() {
        retrieveAllTodosForUsername(username)
            .then(
                response => {
                    setTodos(response.data);
                }
            )
            .catch(
                error => {
                    console.log(error);
                }
            );
    }
    function addNewTodo() {
        navigate(`/todos/-1`)
    }

    function UpdateToDo(id) {
        console.log(`Editing todo with id: ${id}`);
        // Here you would typically navigate to an edit page or open a modal
        navigate(`/todos/${id}`); // Navigate to the TodoComponent for editing
        
    }
    function deleteToDo(id) {
        console.log(`Deleting todo with id: ${id}`);
        // Here you would typically call a delete API and refresh the list
        deleteTodoByIdApi(username, id)
            .then(
                response => {
                    console.log(`Todo with id ${id} deleted successfully`);
                    refreshTodos(); // Refresh the list after deletion
                    setDeleteAlertMessage('To do deleted successfully');
                    // Clear the alert message after 5 seconds
                    setTimeout(()=>setDeleteAlertMessage(''),5000);
                }
            )
            .catch(
                error => {
                    console.log(`Error deleting todo with id ${id}:`, error);
                }
            );
    
    }
    return(
        <div className="container">
            <div className="row justify-content-center">
                <h3>Things to do</h3>
                {deleteAlertMessage && <div className="alert alert-warning">{deleteAlertMessage}</div>}
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Done</th>
                            <th>Target Date</th>
                            <th>Update todo</th>
                            <th>delete todo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(todo=>
                                <tr key={todo.id}>
                                    <td>{todo.description}</td>
                                    <td>{todo.done ? "Yes" : "No"}</td>
                                    <td>{todo.targetDate}</td>
                                    <td><button className="btn btn-primary" onClick={()=>UpdateToDo(todo.id)}>Update</button></td>
                                    <td><button className="btn btn-danger" onClick={()=>deleteToDo(todo.id)}>Delete</button></td>
                                </tr>
                            )
                        }
                        </tbody>
                </table>
                <div className="btn btn-success m-5" onClick={addNewTodo}>Add New Todo</div>
            </div>
        </div>
    )
}