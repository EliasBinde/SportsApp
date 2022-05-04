import { registerEnumType } from '@nestjs/graphql';

export enum ExerciseScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    targetMuscels = "targetMuscels",
    videoLink = "videoLink",
    timePerRep = "timePerRep",
    timeTotal = "timeTotal",
    useTimeTotal = "useTimeTotal"
}


registerEnumType(ExerciseScalarFieldEnum, { name: 'ExerciseScalarFieldEnum', description: undefined })
