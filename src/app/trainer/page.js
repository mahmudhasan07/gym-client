import PrivateTrainer from "../components/PrivateRoutes/PrivateTrainer";
import Trainer from "./Trainer";
import TrainerNav from "./TrainerNav";

export default function Page() {
    return (
        <PrivateTrainer>
            <div className="flex flex-wrap">
            <TrainerNav></TrainerNav>
            <Trainer></Trainer>
            </div>
        </PrivateTrainer>
    );
}