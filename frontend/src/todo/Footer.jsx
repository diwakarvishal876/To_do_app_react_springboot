import { AuthContext } from "./security/AuthContext";
import { useContext } from "react";
export default function Footer() {
  const useAuth = useContext(AuthContext);
    return (
        <footer className="bg-light text-center py-3 fixed-bottom">
  <div className="container">
    <span className="text-muted">© 2025 My Company</span>
  </div>
</footer>

    );
}