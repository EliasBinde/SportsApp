import { registerEnumType } from '@nestjs/graphql';

export enum CustomExerciseScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    ownerId = "ownerId",
    targetMuscels = "targetMuscels",
    videoLink = "videoLink",
    timePerRep = "timePerRep",
    timeTotal = "timeTotal",
    useTimeTotal = "useTimeTotal",
    'public' = "public"
}


registerEnumType(CustomExerciseScalarFieldEnum, { name: 'CustomExerciseScalarFieldEnum', description: undefined })
