'use client'
import PrivateTrainer from "@/app/components/PrivateRoutes/PrivateTrainer";
import TrainerNav from "../TrainerNav";
import TrainerClass from "./TrainerClass";

export default function Page() {
    return (
        <PrivateTrainer>
            <div className="flex flex-wrap">
                <TrainerNav></TrainerNav>
                <TrainerClass></TrainerClass>
            </div>
        </PrivateTrainer>
    );
}