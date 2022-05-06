import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class RoomAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    activeWorkout?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    activeUsers?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    activeExercise?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    activeExerciseProgress?: keyof typeof SortOrder;
}
