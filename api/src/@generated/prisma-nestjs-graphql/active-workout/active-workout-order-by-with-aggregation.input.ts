import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ActiveWorkoutCountOrderByAggregateInput } from './active-workout-count-order-by-aggregate.input';
import { ActiveWorkoutAvgOrderByAggregateInput } from './active-workout-avg-order-by-aggregate.input';
import { ActiveWorkoutMaxOrderByAggregateInput } from './active-workout-max-order-by-aggregate.input';
import { ActiveWorkoutMinOrderByAggregateInput } from './active-workout-min-order-by-aggregate.input';
import { ActiveWorkoutSumOrderByAggregateInput } from './active-workout-sum-order-by-aggregate.input';

@InputType()
export class ActiveWorkoutOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    roomId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    workoutId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    customWorkout?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    activeExcrcise?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    customExcircise?: keyof typeof SortOrder;

    @Field(() => ActiveWorkoutCountOrderByAggregateInput, {nullable:true})
    _count?: ActiveWorkoutCountOrderByAggregateInput;

    @Field(() => ActiveWorkoutAvgOrderByAggregateInput, {nullable:true})
    _avg?: ActiveWorkoutAvgOrderByAggregateInput;

    @Field(() => ActiveWorkoutMaxOrderByAggregateInput, {nullable:true})
    _max?: ActiveWorkoutMaxOrderByAggregateInput;

    @Field(() => ActiveWorkoutMinOrderByAggregateInput, {nullable:true})
    _min?: ActiveWorkoutMinOrderByAggregateInput;

    @Field(() => ActiveWorkoutSumOrderByAggregateInput, {nullable:true})
    _sum?: ActiveWorkoutSumOrderByAggregateInput;
}
