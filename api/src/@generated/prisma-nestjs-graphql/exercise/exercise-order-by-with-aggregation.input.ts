import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ExerciseCountOrderByAggregateInput } from './exercise-count-order-by-aggregate.input';
import { ExerciseAvgOrderByAggregateInput } from './exercise-avg-order-by-aggregate.input';
import { ExerciseMaxOrderByAggregateInput } from './exercise-max-order-by-aggregate.input';
import { ExerciseMinOrderByAggregateInput } from './exercise-min-order-by-aggregate.input';
import { ExerciseSumOrderByAggregateInput } from './exercise-sum-order-by-aggregate.input';

@InputType()
export class ExerciseOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    targetMuscels?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    videoLink?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    timePerRep?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    timeTotal?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    useTimeTotal?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    owner?: keyof typeof SortOrder;

    @Field(() => ExerciseCountOrderByAggregateInput, {nullable:true})
    _count?: ExerciseCountOrderByAggregateInput;

    @Field(() => ExerciseAvgOrderByAggregateInput, {nullable:true})
    _avg?: ExerciseAvgOrderByAggregateInput;

    @Field(() => ExerciseMaxOrderByAggregateInput, {nullable:true})
    _max?: ExerciseMaxOrderByAggregateInput;

    @Field(() => ExerciseMinOrderByAggregateInput, {nullable:true})
    _min?: ExerciseMinOrderByAggregateInput;

    @Field(() => ExerciseSumOrderByAggregateInput, {nullable:true})
    _sum?: ExerciseSumOrderByAggregateInput;
}
