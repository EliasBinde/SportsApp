import { registerEnumType } from '@nestjs/graphql';

export enum WorkoutScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    ownerId = "ownerId",
    difficulty = "difficulty",
    duration = "duration",
    tags = "tags",
    targetMuscels = "targetMuscels",
    exerciseIds = "exerciseIds",
    'public' = "public"
}


registerEnumType(WorkoutScalarFieldEnum, { name: 'WorkoutScalarFieldEnum', description: undefined })
