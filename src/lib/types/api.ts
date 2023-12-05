type APIMesocyclesCreateTemplate = {
	mesocycleTemplate: MesocycleTemplate;
};

type APIMesocyclesDeleteTemplate = {
	mesocycleTemplateId: string;
};

type APIMesocyclesStartMesocycle = {
	mesocycleTemplateId: string;
};

type APIMesocyclesStopMesocycle = {
	activeMesocycleId: string;
};

type APIWorkoutsGetReferenceWorkout = {
	workoutName: string;
};

type APIUserUpdatePreferences = Partial<UserPreferences>;

type APIWorkoutsSaveWorkout = {
	workout: Workout;
	previousSoreness: Workout["muscleSorenessToNextWorkout"];
};

type APIWorkoutsUpdateWorkout = {
	workoutId: string;
	workout: Workout;
	previousSoreness: Workout["muscleSorenessToNextWorkout"];
};
