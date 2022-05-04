import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CustomWorkoutCountAggregate } from './custom-workout-count-aggregate.output';
import { CustomWorkoutAvgAggregate } from './custom-workout-avg-aggregate.output';
import { CustomWorkoutSumAggregate } from './custom-workout-sum-aggregate.output';
import { CustomWorkoutMinAggregate } from './custom-workout-min-aggregate.output';
import { CustomWorkoutMaxAggregate } from './custom-workout-max-aggregate.output';

@ObjectType()
export class AggregateCustomWorkout {

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
