import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { IntNullableListFilter } from '../prisma/int-nullable-list-filter.input';

@InputType()
export class RoomWhereInput {

    @Field(() => [RoomWhereInput], {nullable:true})
    AND?: Array<RoomWhereInput>;

    @Field(() => [RoomWhereInput], {nullable:true})
    OR?: Array<RoomWhereInput>;

    @Field(() => [RoomWhereInput], {nullable:true})
    NOT?: Array<RoomWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    tags?: StringNullableListFilter;

    @Field(() => StringFilter, {nullable:true})
    owner?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    private?: BoolFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    invited?: StringNullableListFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    mods?: StringNullableListFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    activeWorkout?: IntNullableFilter;

    @Field(() => IntNullableListFilter, {nullable:true})
    activeUsers?: IntNullableListFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    activeExercise?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    activeExerciseProgress?: IntNullableFilter;
}
