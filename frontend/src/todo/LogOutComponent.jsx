import { Link } from "react-router";
export default function LogOutComponent() {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="border p-4 shadow rounded bg-light text-center">
                        <h2>You have been logged out</h2>
                        <p>Thank you for using the Todo App!</p>
                        <Link to="/login" className="btn btn-primary">Login Again</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}