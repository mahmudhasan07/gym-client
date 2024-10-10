import AdminNav from "../AdminNav";
import ManageTrainers from "./ManageTrainers";

export default function Page() {
    return (
        <div className="flex">
            <AdminNav></AdminNav>
            <ManageTrainers></ManageTrainers>
        </div>
    );
}