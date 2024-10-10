import NavBar from "../components/Navbar/Navbar";
import Admin from "./Admin";
import AdminNav from "./AdminNav";

export default function Page() {
    return (
        <div className="flex">
            <AdminNav></AdminNav>
            <Admin></Admin>
        </div>
    );
}