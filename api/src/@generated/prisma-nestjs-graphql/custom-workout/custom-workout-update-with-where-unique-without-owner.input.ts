import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomWorkoutWhereUniqueInput } from './custom-workout-where-unique.input';
import { CustomWorkoutUpdateWithoutOwnerInput } from './custom-workout-update-without-owner.input';

@InputType()
export class CustomWorkoutUpdateWithWhereUniqueWithoutOwnerInput {

    @Field(() => CustomWorkoutWhereUniqueInput, {nullable:false})
    where!: CustomWorkoutWhereUniqueInput;

    @Field(() => CustomWorkoutUpdateWithoutOwnerInput, {nullable:false})
    data!: CustomWorkoutUpdateWithoutOwnerInput;
}
