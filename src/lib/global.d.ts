type MuscleGroup =
	| "Chest"
	| "Front delts"
	| "Side delts"
	| "Rear delts"
	| "Back"
	| "Traps"
	| "Triceps"
	| "Biceps"
	| "Forearms"
	| "Quads"
	| "Hamstrings"
	| "Glutes"
	| "Calves";

type ProgressionData = { specificRIR: number; cycles: number };
type MesocycleTemplate = {
	name: string;
	startRIR: number;
	RIRProgression: ProgressionData[];
	exerciseSplit: (null | { name: string; exercises: SplitExercise[] })[];
};

type ActiveMesocycle = {
	templateMesoID: number;
	startDate: EpochTimeStamp;
	workouts: number[];
};

type PerformedMesocycle = ActiveMesocycle & {
	endDate: EpochTimeStamp;
};

type SplitExercise = {
	name: string;
	sets: number;
	targetMuscleGroup: MuscleGroup;
	repRangeStart: number;
	repRangeEnd: number;
	note: string;
};

enum WorkloadFeedback {
	"low",
	"moderate",
	"high"
}
enum SorenessFeedback {
	"none",
	"little bit",
	"recovered on time",
	"interfered with workout"
}
type Workout = {
	startTimestamp: EpochTimeStamp;
	referenceWorkout: null | number;
	dayNumber: number;
	templateMesoID: number;
	difficultyRating: 1 | 2 | 3 | 4 | 5;
	exercisesPerformed: WorkoutExercise[];
	muscleGroupWorkloads: Record<MuscleGroup, null | WorkloadFeedback>;
	plannedRIR: number;
	muscleSorenessToNextWorkout: Record<MuscleGroup, null | SorenessFeedback>;
	cycleNumber: number;
	deload: boolean;
};

enum JointPainFeedback {
	"no pain",
	"some pain",
	"it hurts"
}
enum PumpFeedback {
	"no pump",
	"decent pump",
	"great pump"
}
type WorkoutExercise = {
	name: string;
	sets: {
		reps: number;
		load: number;
		RIR: number;
	}[];
	repRangeStart: number;
	repRangeEnd: number;
	muscleTarget: MuscleGroup;
	jointPainRating: JointPainFeedback | null;
	pumpRating: PumpFeedback | null;
	note: string;
};
