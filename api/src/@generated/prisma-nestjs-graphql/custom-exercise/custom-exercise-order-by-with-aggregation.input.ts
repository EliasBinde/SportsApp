import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CustomExerciseCountOrderByAggregateInput } from './custom-exercise-count-order-by-aggregate.input';
import { CustomExerciseAvgOrderByAggregateInput } from './custom-exercise-avg-order-by-aggregate.input';
import { CustomExerciseMaxOrderByAggregateInput } from './custom-exercise-max-order-by-aggregate.input';
import { CustomExerciseMinOrderByAggregateInput } from './custom-exercise-min-order-by-aggregate.input';
import { CustomExerciseSumOrderByAggregateInput } from './custom-exercise-sum-order-by-aggregate.input';

@InputType()
export class CustomExerciseOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ownerId?: keyof typeof SortOrder;

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
    public?: keyof typeof SortOrder;

    @Field(() => CustomExerciseCountOrderByAggregateInput, {nullable:true})
    _count?: CustomExerciseCountOrderByAggregateInput;

    @Field(() => CustomExerciseAvgOrderByAggregateInput, {nullable:true})
    _avg?: CustomExerciseAvgOrderByAggregateInput;

    @Field(() => CustomExerciseMaxOrderByAggregateInput, {nullable:true})
    _max?: CustomExerciseMaxOrderByAggregateInput;

    @Field(() => CustomExerciseMinOrderByAggregateInput, {nullable:true})
    _min?: CustomExerciseMinOrderByAggregateInput;

    @Field(() => CustomExerciseSumOrderByAggregateInput, {nullable:true})
    _sum?: CustomExerciseSumOrderByAggregateInput;
}
