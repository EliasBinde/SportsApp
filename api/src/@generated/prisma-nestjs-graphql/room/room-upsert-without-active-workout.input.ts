import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoomUpdateWithoutActiveWorkoutInput } from './room-update-without-active-workout.input';
import { RoomCreateWithoutActiveWorkoutInput } from './room-create-without-active-workout.input';

@InputType()
export class RoomUpsertWithoutActiveWorkoutInput {

    @Field(() => RoomUpdateWithoutActiveWorkoutInput, {nullable:false})
    update!: RoomUpdateWithoutActiveWorkoutInput;

    @Field(() => RoomCreateWithoutActiveWorkoutInput, {nullable:false})
    create!: RoomCreateWithoutActiveWorkoutInput;
}
