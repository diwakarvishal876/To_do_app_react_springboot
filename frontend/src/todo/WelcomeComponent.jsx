import axios from "axios";
import { useState } from "react";
import { Link, useParams } from "react-router";
import { retrieveHelloWorldPathVariable } from "./api/HelloWorldApiService";
import { useAuth } from "./security/AuthContext";
export default function WelcomeComponent(){
    const { username } = useParams();
    const [message, setMessage] = useState("");
    const authContext= useAuth();

    // function callHelloworldRestApi() {


    //     retrieveHelloWorldPathVariable('vishal',authContext.token)
    //     .then((response)=>successfullResponse(response))
    //     .catch((response)=>errorResponse(response))
    //     .finally(() => {
    //         console.log("API call completed");
    //     });
        
    // }

    function successfullResponse(response) {
        console.log(response.data);
        setMessage(response.data.message);
    }
    function errorResponse(error) {
        console.error("Error calling API:", error);
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <div className="border p-4 shadow rounded bg-light text-center">
                        <h2>Welcome to the Todo App! {username}</h2>
                        <p>Click the button below to get started.</p>
                        <Link to="/todos" className="btn btn-primary">Go to your Todos</Link>

                        {/* <button className="btn btn-secondary ms-2" onClick={callHelloworldRestApi}>
                            call the API
                        </button> */}
                        <div className="mt-3">
                            {
                                <div className="alert alert-info">
                                    <strong>Click to see Response from API:</strong> {message}
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}