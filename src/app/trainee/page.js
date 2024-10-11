import PrivateTrainee from "../components/PrivateRoutes/PrivateTrainee";
import Trainee from "./Trainee";
import TraineeNav from "./TraineeNav";

export default function Page() {
    return (
        <PrivateTrainee>
            <div className="flex">
                <TraineeNav></TraineeNav>
                <Trainee></Trainee>
            </div>
        </PrivateTrainee>
    );
}