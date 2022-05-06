import { registerEnumType } from '@nestjs/graphql';

export enum ExerciseScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    targetMuscels = "targetMuscels",
    videoLink = "videoLink",
    timePerRep = "timePerRep",
    timeTotal = "timeTotal",
    useTimeTotal = "useTimeTotal",
    owner = "owner"
}


registerEnumType(ExerciseScalarFieldEnum, { name: 'ExerciseScalarFieldEnum', description: undefined })
