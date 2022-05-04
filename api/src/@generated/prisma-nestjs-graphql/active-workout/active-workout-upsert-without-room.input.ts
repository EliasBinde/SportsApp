import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActiveWorkoutUpdateWithoutRoomInput } from './active-workout-update-without-room.input';
import { ActiveWorkoutCreateWithoutRoomInput } from './active-workout-create-without-room.input';

@InputType()
export class ActiveWorkoutUpsertWithoutRoomInput {

    @Field(() => ActiveWorkoutUpdateWithoutRoomInput, {nullable:false})
    update!: ActiveWorkoutUpdateWithoutRoomInput;

    @Field(() => ActiveWorkoutCreateWithoutRoomInput, {nullable:false})
    create!: ActiveWorkoutCreateWithoutRoomInput;
}
