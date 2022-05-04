import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ActiveWorkoutCountAggregate } from './active-workout-count-aggregate.output';
import { ActiveWorkoutAvgAggregate } from './active-workout-avg-aggregate.output';
import { ActiveWorkoutSumAggregate } from './active-workout-sum-aggregate.output';
import { ActiveWorkoutMinAggregate } from './active-workout-min-aggregate.output';
import { ActiveWorkoutMaxAggregate } from './active-workout-max-aggregate.output';

@ObjectType()
export class ActiveWorkoutGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

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

    @Field(() => ActiveWorkoutCountAggregate, {nullable:true})
    _count?: ActiveWorkoutCountAggregate;

    @Field(() => ActiveWorkoutAvgAggregate, {nullable:true})
    _avg?: ActiveWorkoutAvgAggregate;

    @Field(() => ActiveWorkoutSumAggregate, {nullable:true})
    _sum?: ActiveWorkoutSumAggregate;

    @Field(() => ActiveWorkoutMinAggregate, {nullable:true})
    _min?: ActiveWorkoutMinAggregate;

    @Field(() => ActiveWorkoutMaxAggregate, {nullable:true})
    _max?: ActiveWorkoutMaxAggregate;
}
