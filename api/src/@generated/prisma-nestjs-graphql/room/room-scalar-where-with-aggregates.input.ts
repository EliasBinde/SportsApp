import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { IntNullableListFilter } from '../prisma/int-nullable-list-filter.input';

@InputType()
export class RoomScalarWhereWithAggregatesInput {

    @Field(() => [RoomScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<RoomScalarWhereWithAggregatesInput>;

    @Field(() => [RoomScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<RoomScalarWhereWithAggregatesInput>;

    @Field(() => [RoomScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<RoomScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    tags?: StringNullableListFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    owner?: StringWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    private?: BoolWithAggregatesFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    invited?: StringNullableListFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    mods?: StringNullableListFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    activeWorkout?: IntNullableWithAggregatesFilter;

    @Field(() => IntNullableListFilter, {nullable:true})
    activeUsers?: IntNullableListFilter;
}
