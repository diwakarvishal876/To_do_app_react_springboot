import { use, useState} from "react"
import { useNavigate } from "react-router";
import { useAuth } from "./security/AuthContext";
export default function LoginComponent() {

    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [showErrorMessage,setErrorMessage]=useState(false);
    const navigate = useNavigate();
    const authContext=useAuth();
    async function handleSubmit() {
        
        if (await authContext.login(username, password)) {
        navigate(`/welcome/${username}`); // Redirect to welcome page use `` instead of ''
        
        } else {
        setErrorMessage(true);
        }
    }
   

    return (
         <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form className="border p-4 shadow rounded bg-light">
            <h2 className="text-center mb-4">Login</h2>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                User Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={username}
                autoComplete="username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password:
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="d-grid">
              <button type="button" className="btn btn-primary" name="login"
              
                onClick={() => {
                   handleSubmit();
                }}>
                Login
              </button>
            </div>

          
            {showErrorMessage && <div className="alert alert-danger mt-3" role="alert">
            Authentication failed
        </div>}
            
          </form>
        </div>
      </div>
    </div>
    )
}