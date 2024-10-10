import AdminNav from "../AdminNav";
import CreateTrainer from "./CreateTrainer";

export default function Page() {
    return (
        <section className="flex">
            <AdminNav></AdminNav>
            <CreateTrainer></CreateTrainer>
        </section>
    );
}