import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ActiveWorkoutCountOrderByAggregateInput {

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
}
