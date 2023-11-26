import { writable, type Writable } from "svelte/store";

let ls: Storage | undefined = undefined;
if (typeof window !== "undefined") {
	ls = localStorage;
}

export const workoutBeingPerformed: Writable<WorkoutBeingPerformed | null> = writable(
	JSON.parse(ls?.getItem("workoutBeingPerformed") || "null")
);
export const allExercisesSetsCompleted: Writable<boolean[][]> = writable(
	JSON.parse(ls?.getItem("allExercisesSetsCompleted") || "[]")
);
export const workloadData: Writable<Workout["muscleGroupWorkloads"]> = writable(
	JSON.parse(ls?.getItem("muscleGroupWorkloads") || "{}")
);
export const sorenessData: Writable<Workout["muscleSorenessToNextWorkout"]> = writable(
	JSON.parse(ls?.getItem("muscleSorenessToNextWorkout") || "{}")
);

workoutBeingPerformed.subscribe((val) => ls?.setItem("workoutBeingPerformed", JSON.stringify(val)));
allExercisesSetsCompleted.subscribe(
	(val) => ls?.setItem("allExercisesSetsCompleted", JSON.stringify(val))
);
workloadData.subscribe((val) => ls?.setItem("workloadData", JSON.stringify(val)));
sorenessData.subscribe((val) => ls?.setItem("sorenessData", JSON.stringify(val)));
