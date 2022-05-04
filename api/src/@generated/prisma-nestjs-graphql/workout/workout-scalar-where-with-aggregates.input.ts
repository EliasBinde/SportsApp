import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { IntNullableListFilter } from '../prisma/int-nullable-list-filter.input';

@InputType()
export class WorkoutScalarWhereWithAggregatesInput {

    @Field(() => [WorkoutScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<WorkoutScalarWhereWithAggregatesInput>;

    @Field(() => [WorkoutScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<WorkoutScalarWhereWithAggregatesInput>;

    @Field(() => [WorkoutScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<WorkoutScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    difficulty?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    duration?: IntWithAggregatesFilter;

    @Field(() => IntNullableListFilter, {nullable:true})
    exerciseIds?: IntNullableListFilter;
}
