import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class ActiveWorkoutUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    roomId!: number;

    @Field(() => Int, {nullable:false})
    workoutId!: number;

    @Field(() => Boolean, {nullable:false})
    customWorkout!: boolean;

    @Field(() => Int, {nullable:false})
    activeExcrcise!: number;

    @Field(() => Boolean, {nullable:false})
    customExcircise!: boolean;
}
