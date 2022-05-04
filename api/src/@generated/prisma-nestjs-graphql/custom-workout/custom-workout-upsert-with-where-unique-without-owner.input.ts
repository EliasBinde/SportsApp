import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomWorkoutWhereUniqueInput } from './custom-workout-where-unique.input';
import { CustomWorkoutUpdateWithoutOwnerInput } from './custom-workout-update-without-owner.input';
import { CustomWorkoutCreateWithoutOwnerInput } from './custom-workout-create-without-owner.input';

@InputType()
export class CustomWorkoutUpsertWithWhereUniqueWithoutOwnerInput {

    @Field(() => CustomWorkoutWhereUniqueInput, {nullable:false})
    where!: CustomWorkoutWhereUniqueInput;

    @Field(() => CustomWorkoutUpdateWithoutOwnerInput, {nullable:false})
    update!: CustomWorkoutUpdateWithoutOwnerInput;

    @Field(() => CustomWorkoutCreateWithoutOwnerInput, {nullable:false})
    create!: CustomWorkoutCreateWithoutOwnerInput;
}
