import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ActiveWorkoutCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    roomId!: number;

    @Field(() => Int, {nullable:false})
    workoutId!: number;

    @Field(() => Int, {nullable:false})
    customWorkout!: number;

    @Field(() => Int, {nullable:false})
    activeExcrcise!: number;

    @Field(() => Int, {nullable:false})
    customExcircise!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
