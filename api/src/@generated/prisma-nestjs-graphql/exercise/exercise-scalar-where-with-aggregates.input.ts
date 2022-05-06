import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';

@InputType()
export class ExerciseScalarWhereWithAggregatesInput {

    @Field(() => [ExerciseScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ExerciseScalarWhereWithAggregatesInput>;

    @Field(() => [ExerciseScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ExerciseScalarWhereWithAggregatesInput>;

    @Field(() => [ExerciseScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ExerciseScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    targetMuscels?: StringNullableListFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    videoLink?: StringWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    timePerRep?: IntNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    timeTotal?: IntNullableWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    useTimeTotal?: BoolWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    owner?: IntWithAggregatesFilter;
}
