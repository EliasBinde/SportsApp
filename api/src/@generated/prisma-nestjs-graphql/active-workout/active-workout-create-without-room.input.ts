import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class ActiveWorkoutCreateWithoutRoomInput {

    @Field(() => Int, {nullable:false})
    workoutId!: number;

    @Field(() => Boolean, {nullable:false})
    customWorkout!: boolean;

    @Field(() => Int, {nullable:false})
    activeExcrcise!: number;

    @Field(() => Boolean, {nullable:false})
    customExcircise!: boolean;
}
