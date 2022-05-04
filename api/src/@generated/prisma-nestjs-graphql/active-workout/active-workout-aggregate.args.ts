import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActiveWorkoutWhereInput } from './active-workout-where.input';
import { ActiveWorkoutOrderByWithRelationInput } from './active-workout-order-by-with-relation.input';
import { ActiveWorkoutWhereUniqueInput } from './active-workout-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ActiveWorkoutCountAggregateInput } from './active-workout-count-aggregate.input';
import { ActiveWorkoutAvgAggregateInput } from './active-workout-avg-aggregate.input';
import { ActiveWorkoutSumAggregateInput } from './active-workout-sum-aggregate.input';
import { ActiveWorkoutMinAggregateInput } from './active-workout-min-aggregate.input';
import { ActiveWorkoutMaxAggregateInput } from './active-workout-max-aggregate.input';

@ArgsType()
export class ActiveWorkoutAggregateArgs {

    @Field(() => ActiveWorkoutWhereInput, {nullable:true})
    where?: ActiveWorkoutWhereInput;

    @Field(() => [ActiveWorkoutOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ActiveWorkoutOrderByWithRelationInput>;

    @Field(() => ActiveWorkoutWhereUniqueInput, {nullable:true})
    cursor?: ActiveWorkoutWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ActiveWorkoutCountAggregateInput, {nullable:true})
    _count?: ActiveWorkoutCountAggregateInput;

    @Field(() => ActiveWorkoutAvgAggregateInput, {nullable:true})
    _avg?: ActiveWorkoutAvgAggregateInput;

    @Field(() => ActiveWorkoutSumAggregateInput, {nullable:true})
    _sum?: ActiveWorkoutSumAggregateInput;

    @Field(() => ActiveWorkoutMinAggregateInput, {nullable:true})
    _min?: ActiveWorkoutMinAggregateInput;

    @Field(() => ActiveWorkoutMaxAggregateInput, {nullable:true})
    _max?: ActiveWorkoutMaxAggregateInput;
}
