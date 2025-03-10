import useAuth from "../hooks/useAuth";
import LogOut from "../components/Auth/LogOut";
import { useAuthContext } from "../context/AuthContext";


export default function Home() {
    const { isAuthenticated, loading } = useAuthContext()

}
