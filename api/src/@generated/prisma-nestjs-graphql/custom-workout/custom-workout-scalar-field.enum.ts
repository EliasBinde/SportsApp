import { registerEnumType } from '@nestjs/graphql';

export enum CustomWorkoutScalarFieldEnum {
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


registerEnumType(CustomWorkoutScalarFieldEnum, { name: 'CustomWorkoutScalarFieldEnum', description: undefined })
