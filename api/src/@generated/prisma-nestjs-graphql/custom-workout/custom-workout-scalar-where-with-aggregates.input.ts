import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { IntNullableListFilter } from '../prisma/int-nullable-list-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';

@InputType()
export class CustomWorkoutScalarWhereWithAggregatesInput {

    @Field(() => [CustomWorkoutScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CustomWorkoutScalarWhereWithAggregatesInput>;

    @Field(() => [CustomWorkoutScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CustomWorkoutScalarWhereWithAggregatesInput>;

    @Field(() => [CustomWorkoutScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CustomWorkoutScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    ownerId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    difficulty?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    duration?: IntWithAggregatesFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    tags?: StringNullableListFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    targetMuscels?: StringNullableListFilter;

    @Field(() => IntNullableListFilter, {nullable:true})
    exerciseIds?: IntNullableListFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    public?: BoolWithAggregatesFilter;
}
