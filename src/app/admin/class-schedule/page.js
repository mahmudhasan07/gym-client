import PrivateAdmin from "@/app/components/PrivateRoutes/PrivateAdmin";
import AdminNav from "../AdminNav";
import CreateClass from "./CreateClass";

export default function Page() {
    return (
       <PrivateAdmin>
         <div className="flex">
            <AdminNav></AdminNav>
            <CreateClass></CreateClass>
        </div>
       </PrivateAdmin>
    );
}