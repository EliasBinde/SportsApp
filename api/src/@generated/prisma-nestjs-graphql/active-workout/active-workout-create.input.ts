import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoomCreateNestedOneWithoutActiveWorkoutInput } from '../room/room-create-nested-one-without-active-workout.input';
import { Int } from '@nestjs/graphql';

@InputType()
export class ActiveWorkoutCreateInput {

    @Field(() => RoomCreateNestedOneWithoutActiveWorkoutInput, {nullable:false})
    room!: RoomCreateNestedOneWithoutActiveWorkoutInput;

    @Field(() => Int, {nullable:false})
    workoutId!: number;

    @Field(() => Boolean, {nullable:false})
    customWorkout!: boolean;

    @Field(() => Int, {nullable:false})
    activeExcrcise!: number;

    @Field(() => Boolean, {nullable:false})
    customExcircise!: boolean;
}
