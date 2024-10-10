import Trainee from "./Trainee";
import TraineeNav from "./TraineeNav";

export default function Page() {
    return (
        <div className="flex">
            <TraineeNav></TraineeNav>
            <Trainee></Trainee>
        </div>
    );
}