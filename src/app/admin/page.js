import NavBar from "../components/Navbar/Navbar";
import PrivateAdmin from "../components/PrivateRoutes/PrivateAdmin";
import Admin from "./Admin";
import AdminNav from "./AdminNav";

export default function Page() {
    return (
        <PrivateAdmin>
            <div className="flex">
                <AdminNav></AdminNav>
                <Admin></Admin>
            </div>
        </PrivateAdmin>
    );
}