import PrivateAdmin from "@/app/components/PrivateRoutes/PrivateAdmin";
import AdminNav from "../AdminNav";
import ManageTrainers from "./ManageTrainers";

export default function Page() {
    return (
        <PrivateAdmin>
            <div className="flex flex-wrap">
                <AdminNav></AdminNav>
                <ManageTrainers></ManageTrainers>
            </div>
        </PrivateAdmin>
    );
}