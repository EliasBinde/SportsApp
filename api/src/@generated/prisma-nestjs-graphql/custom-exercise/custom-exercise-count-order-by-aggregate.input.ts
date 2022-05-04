import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class CustomExerciseCountOrderByAggregateInput {

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
}
