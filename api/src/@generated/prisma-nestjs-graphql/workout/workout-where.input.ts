import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableListFilter } from '../prisma/int-nullable-list-filter.input';

@InputType()
export class WorkoutWhereInput {

    @Field(() => [WorkoutWhereInput], {nullable:true})
    AND?: Array<WorkoutWhereInput>;

    @Field(() => [WorkoutWhereInput], {nullable:true})
    OR?: Array<WorkoutWhereInput>;

    @Field(() => [WorkoutWhereInput], {nullable:true})
    NOT?: Array<WorkoutWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    difficulty?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    duration?: IntFilter;

    @Field(() => IntNullableListFilter, {nullable:true})
    exerciseIds?: IntNullableListFilter;
}
