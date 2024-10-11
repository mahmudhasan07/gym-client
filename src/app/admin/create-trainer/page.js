import PrivateAdmin from "@/app/components/PrivateRoutes/PrivateAdmin";
import AdminNav from "../AdminNav";
import CreateTrainer from "./CreateTrainer";

export default function Page() {
    return (
        <PrivateAdmin>
            <section className="flex">
                <AdminNav></AdminNav>
                <CreateTrainer></CreateTrainer>
            </section>
        </PrivateAdmin>
    );
}