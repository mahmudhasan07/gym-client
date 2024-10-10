import TraineeNav from "../TraineeNav";
import TraineeClass from "./TraineeClass";

export default function Page() {
    return (
        <div className="flex">
            <TraineeNav></TraineeNav>
            <TraineeClass></TraineeClass>
        </div>
    );
}