import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class CustomExerciseWhereInput {

    @Field(() => [CustomExerciseWhereInput], {nullable:true})
    AND?: Array<CustomExerciseWhereInput>;

    @Field(() => [CustomExerciseWhereInput], {nullable:true})
    OR?: Array<CustomExerciseWhereInput>;

    @Field(() => [CustomExerciseWhereInput], {nullable:true})
    NOT?: Array<CustomExerciseWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    owner?: UserRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    ownerId?: IntFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    targetMuscels?: StringNullableListFilter;

    @Field(() => StringFilter, {nullable:true})
    videoLink?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    timePerRep?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    timeTotal?: IntNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    useTimeTotal?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    public?: BoolFilter;
}
