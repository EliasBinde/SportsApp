import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActiveWorkoutWhereInput } from './active-workout-where.input';
import { ActiveWorkoutOrderByWithAggregationInput } from './active-workout-order-by-with-aggregation.input';
import { ActiveWorkoutScalarFieldEnum } from './active-workout-scalar-field.enum';
import { ActiveWorkoutScalarWhereWithAggregatesInput } from './active-workout-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ActiveWorkoutCountAggregateInput } from './active-workout-count-aggregate.input';
import { ActiveWorkoutAvgAggregateInput } from './active-workout-avg-aggregate.input';
import { ActiveWorkoutSumAggregateInput } from './active-workout-sum-aggregate.input';
import { ActiveWorkoutMinAggregateInput } from './active-workout-min-aggregate.input';
import { ActiveWorkoutMaxAggregateInput } from './active-workout-max-aggregate.input';

@ArgsType()
export class ActiveWorkoutGroupByArgs {

    @Field(() => ActiveWorkoutWhereInput, {nullable:true})
    where?: ActiveWorkoutWhereInput;

    @Field(() => [ActiveWorkoutOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ActiveWorkoutOrderByWithAggregationInput>;

    @Field(() => [ActiveWorkoutScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ActiveWorkoutScalarFieldEnum>;

    @Field(() => ActiveWorkoutScalarWhereWithAggregatesInput, {nullable:true})
    having?: ActiveWorkoutScalarWhereWithAggregatesInput;

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
