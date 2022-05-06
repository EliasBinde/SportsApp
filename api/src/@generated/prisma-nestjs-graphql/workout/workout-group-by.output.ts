import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { WorkoutCountAggregate } from './workout-count-aggregate.output';
import { WorkoutAvgAggregate } from './workout-avg-aggregate.output';
import { WorkoutSumAggregate } from './workout-sum-aggregate.output';
import { WorkoutMinAggregate } from './workout-min-aggregate.output';
import { WorkoutMaxAggregate } from './workout-max-aggregate.output';

@ObjectType()
export class WorkoutGroupBy {

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

    @Field(() => [String], {nullable:true})
    tags?: Array<string>;

    @Field(() => [String], {nullable:true})
    targetMuscels?: Array<string>;

    @Field(() => [Int], {nullable:true})
    exerciseIds?: Array<number>;

    @Field(() => Boolean, {nullable:false})
    public!: boolean;

    @Field(() => WorkoutCountAggregate, {nullable:true})
    _count?: WorkoutCountAggregate;

    @Field(() => WorkoutAvgAggregate, {nullable:true})
    _avg?: WorkoutAvgAggregate;

    @Field(() => WorkoutSumAggregate, {nullable:true})
    _sum?: WorkoutSumAggregate;

    @Field(() => WorkoutMinAggregate, {nullable:true})
    _min?: WorkoutMinAggregate;

    @Field(() => WorkoutMaxAggregate, {nullable:true})
    _max?: WorkoutMaxAggregate;
}
