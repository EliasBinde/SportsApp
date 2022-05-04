import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { RoomCountOrderByAggregateInput } from './room-count-order-by-aggregate.input';
import { RoomAvgOrderByAggregateInput } from './room-avg-order-by-aggregate.input';
import { RoomMaxOrderByAggregateInput } from './room-max-order-by-aggregate.input';
import { RoomMinOrderByAggregateInput } from './room-min-order-by-aggregate.input';
import { RoomSumOrderByAggregateInput } from './room-sum-order-by-aggregate.input';

@InputType()
export class RoomOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tags?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    owner?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    private?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    invited?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    mods?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    activeWorkout?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    activeUsers?: keyof typeof SortOrder;

    @Field(() => RoomCountOrderByAggregateInput, {nullable:true})
    _count?: RoomCountOrderByAggregateInput;

    @Field(() => RoomAvgOrderByAggregateInput, {nullable:true})
    _avg?: RoomAvgOrderByAggregateInput;

    @Field(() => RoomMaxOrderByAggregateInput, {nullable:true})
    _max?: RoomMaxOrderByAggregateInput;

    @Field(() => RoomMinOrderByAggregateInput, {nullable:true})
    _min?: RoomMinOrderByAggregateInput;

    @Field(() => RoomSumOrderByAggregateInput, {nullable:true})
    _sum?: RoomSumOrderByAggregateInput;
}
