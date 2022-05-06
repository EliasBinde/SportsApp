import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkoutWhereUniqueInput } from './workout-where-unique.input';
import { WorkoutUpdateWithoutOwnerInput } from './workout-update-without-owner.input';
import { WorkoutCreateWithoutOwnerInput } from './workout-create-without-owner.input';

@InputType()
export class WorkoutUpsertWithWhereUniqueWithoutOwnerInput {

    @Field(() => WorkoutWhereUniqueInput, {nullable:false})
    where!: WorkoutWhereUniqueInput;

    @Field(() => WorkoutUpdateWithoutOwnerInput, {nullable:false})
    update!: WorkoutUpdateWithoutOwnerInput;

    @Field(() => WorkoutCreateWithoutOwnerInput, {nullable:false})
    create!: WorkoutCreateWithoutOwnerInput;
}
