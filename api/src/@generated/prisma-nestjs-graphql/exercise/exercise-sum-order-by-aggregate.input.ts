import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ExerciseSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    timePerRep?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    timeTotal?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    owner?: keyof typeof SortOrder;
}
