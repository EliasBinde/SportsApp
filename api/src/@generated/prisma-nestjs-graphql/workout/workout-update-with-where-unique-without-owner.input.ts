import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkoutWhereUniqueInput } from './workout-where-unique.input';
import { WorkoutUpdateWithoutOwnerInput } from './workout-update-without-owner.input';

@InputType()
export class WorkoutUpdateWithWhereUniqueWithoutOwnerInput {

    @Field(() => WorkoutWhereUniqueInput, {nullable:false})
    where!: WorkoutWhereUniqueInput;

    @Field(() => WorkoutUpdateWithoutOwnerInput, {nullable:false})
    data!: WorkoutUpdateWithoutOwnerInput;
}
