import { Link } from "react-router-dom";

export default function ErrorPageNotFound() {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="border p-4 shadow rounded bg-light text-center">
                        <h2>404 - Page Not Found</h2>
                        <p>Sorry, the page you are looking for does not exist.</p>
                        <Link to="/" className="btn btn-primary">Go to Home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
