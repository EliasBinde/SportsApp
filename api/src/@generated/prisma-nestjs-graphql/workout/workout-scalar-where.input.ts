import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { IntNullableListFilter } from '../prisma/int-nullable-list-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class WorkoutScalarWhereInput {

    @Field(() => [WorkoutScalarWhereInput], {nullable:true})
    AND?: Array<WorkoutScalarWhereInput>;

    @Field(() => [WorkoutScalarWhereInput], {nullable:true})
    OR?: Array<WorkoutScalarWhereInput>;

    @Field(() => [WorkoutScalarWhereInput], {nullable:true})
    NOT?: Array<WorkoutScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    ownerId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    difficulty?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    duration?: IntFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    tags?: StringNullableListFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    targetMuscels?: StringNullableListFilter;

    @Field(() => IntNullableListFilter, {nullable:true})
    exerciseIds?: IntNullableListFilter;

    @Field(() => BoolFilter, {nullable:true})
    public?: BoolFilter;
}
