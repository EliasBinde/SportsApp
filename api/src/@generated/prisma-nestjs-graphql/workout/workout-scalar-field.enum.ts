import { registerEnumType } from '@nestjs/graphql';

export enum WorkoutScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    difficulty = "difficulty",
    duration = "duration",
    exerciseIds = "exerciseIds"
}


registerEnumType(WorkoutScalarFieldEnum, { name: 'WorkoutScalarFieldEnum', description: undefined })
