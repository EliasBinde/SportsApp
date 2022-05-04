import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CustomWorkoutCountAggregate } from './custom-workout-count-aggregate.output';
import { CustomWorkoutAvgAggregate } from './custom-workout-avg-aggregate.output';
import { CustomWorkoutSumAggregate } from './custom-workout-sum-aggregate.output';
import { CustomWorkoutMinAggregate } from './custom-workout-min-aggregate.output';
import { CustomWorkoutMaxAggregate } from './custom-workout-max-aggregate.output';

@ObjectType()
export class CustomWorkoutGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Int, {nullable:false})
    ownerId!: number;

    @Field(() => Int, {nullable:false})
    difficulty!: number;

    @Field(() => Int, {nullable:false})
    duration!: number;

    @Field(() => [Int], {nullable:true})
    exerciseIds?: Array<number>;

    @Field(() => Boolean, {nullable:false})
    public!: boolean;

    @Field(() => CustomWorkoutCountAggregate, {nullable:true})
    _count?: CustomWorkoutCountAggregate;

    @Field(() => CustomWorkoutAvgAggregate, {nullable:true})
    _avg?: CustomWorkoutAvgAggregate;

    @Field(() => CustomWorkoutSumAggregate, {nullable:true})
    _sum?: CustomWorkoutSumAggregate;

    @Field(() => CustomWorkoutMinAggregate, {nullable:true})
    _min?: CustomWorkoutMinAggregate;

    @Field(() => CustomWorkoutMaxAggregate, {nullable:true})
    _max?: CustomWorkoutMaxAggregate;
}
