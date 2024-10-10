import AdminNav from "../AdminNav";
import CreateClass from "./CreateClass";

export default function Page() {
    return (
        <div className="flex">
            <AdminNav></AdminNav>
            <CreateClass></CreateClass>
        </div>
    );
}