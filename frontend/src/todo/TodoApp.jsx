import { BrowserRouter,Routes,Route,useParams,Link,Navigate} from "react-router";
import LoginComponent from "./LoginComponent";
import WelcomeComponent from "./WelcomeComponent";
import ErrorPageNotFound from "./ErrorPageNotFound";
import ListTodo from "./ListTodo";
import Header from "./Header";
import Footer from "./Footer";
import LogOutComponent from "./LogOutComponent";
import {AuthProvider,useAuth} from "./security/AuthContext";
import TodoComponent from "./ToDoComponent";

function AuthenticatedRoute({children}) {
    const authContext = useAuth();
    if (authContext.isAuthenticated) {
    return children;
    }
    return <Navigate to="/login" replace={true}/>
}

export default function TodoApp() {
    return (
        <div className="TodoApp">
           <AuthProvider>
                <BrowserRouter>
                <Header />
                <Routes>
                <Route path='/' element={<LoginComponent />}></Route>
                <Route path='login' element={<LoginComponent />}></Route>
               
                <Route path='/welcome/:username' element={
                     <AuthenticatedRoute>
                    <WelcomeComponent />
                    </AuthenticatedRoute>}>
                </Route>
                
                <Route path='/todos' element={
                    <AuthenticatedRoute>
                        <ListTodo />
                    </AuthenticatedRoute>}>
                </Route>
                <Route path='/todos/:id' element={
                    <AuthenticatedRoute>
                        <TodoComponent />
                    </AuthenticatedRoute>}>
                </Route>
                <Route path='/logout' element={
                    <AuthenticatedRoute>
                        <LogOutComponent />
                    </AuthenticatedRoute>
                }></Route>
                <Route path='*' element={<ErrorPageNotFound />}></Route>
                </Routes>
                <Footer />
                </BrowserRouter>
            </AuthProvider> 
        </div>
    )
}




