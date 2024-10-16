import PrivateTrainee from "@/app/components/PrivateRoutes/PrivateTrainee";
import TraineeNav from "../TraineeNav";
import TraineeClass from "./TraineeClass";

export default function Page() {
    return (
        <PrivateTrainee>
            <div className="flex flex-wrap">
                <TraineeNav></TraineeNav>
                <TraineeClass></TraineeClass>
            </div>
        </PrivateTrainee>
    );
}