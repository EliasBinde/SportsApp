import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CustomWorkoutCountOrderByAggregateInput } from './custom-workout-count-order-by-aggregate.input';
import { CustomWorkoutAvgOrderByAggregateInput } from './custom-workout-avg-order-by-aggregate.input';
import { CustomWorkoutMaxOrderByAggregateInput } from './custom-workout-max-order-by-aggregate.input';
import { CustomWorkoutMinOrderByAggregateInput } from './custom-workout-min-order-by-aggregate.input';
import { CustomWorkoutSumOrderByAggregateInput } from './custom-workout-sum-order-by-aggregate.input';

@InputType()
export class CustomWorkoutOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ownerId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    difficulty?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    duration?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tags?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    targetMuscels?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    exerciseIds?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    public?: keyof typeof SortOrder;

    @Field(() => CustomWorkoutCountOrderByAggregateInput, {nullable:true})
    _count?: CustomWorkoutCountOrderByAggregateInput;

    @Field(() => CustomWorkoutAvgOrderByAggregateInput, {nullable:true})
    _avg?: CustomWorkoutAvgOrderByAggregateInput;

    @Field(() => CustomWorkoutMaxOrderByAggregateInput, {nullable:true})
    _max?: CustomWorkoutMaxOrderByAggregateInput;

    @Field(() => CustomWorkoutMinOrderByAggregateInput, {nullable:true})
    _min?: CustomWorkoutMinOrderByAggregateInput;

    @Field(() => CustomWorkoutSumOrderByAggregateInput, {nullable:true})
    _sum?: CustomWorkoutSumOrderByAggregateInput;
}
