import { registerEnumType } from '@nestjs/graphql';

export enum ActiveWorkoutScalarFieldEnum {
    id = "id",
    roomId = "roomId",
    workoutId = "workoutId",
    customWorkout = "customWorkout",
    activeExcrcise = "activeExcrcise",
    customExcircise = "customExcircise"
}


registerEnumType(ActiveWorkoutScalarFieldEnum, { name: 'ActiveWorkoutScalarFieldEnum', description: undefined })
