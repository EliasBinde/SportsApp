import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class RoomMaxOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    owner?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    private?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    activeWorkout?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    activeExercise?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    activeExerciseProgress?: keyof typeof SortOrder;
}
