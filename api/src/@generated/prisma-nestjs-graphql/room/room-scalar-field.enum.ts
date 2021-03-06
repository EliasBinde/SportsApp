import { registerEnumType } from '@nestjs/graphql';

export enum RoomScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    tags = "tags",
    owner = "owner",
    'private' = "private",
    invited = "invited",
    mods = "mods",
    activeWorkout = "activeWorkout",
    activeUsers = "activeUsers",
    activeExercise = "activeExercise",
    activeExerciseProgress = "activeExerciseProgress"
}


registerEnumType(RoomScalarFieldEnum, { name: 'RoomScalarFieldEnum', description: undefined })
