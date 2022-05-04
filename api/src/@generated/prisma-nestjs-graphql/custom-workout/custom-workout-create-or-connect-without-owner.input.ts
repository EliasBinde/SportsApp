import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomWorkoutWhereUniqueInput } from './custom-workout-where-unique.input';
import { CustomWorkoutCreateWithoutOwnerInput } from './custom-workout-create-without-owner.input';

@InputType()
export class CustomWorkoutCreateOrConnectWithoutOwnerInput {

    @Field(() => CustomWorkoutWhereUniqueInput, {nullable:false})
    where!: CustomWorkoutWhereUniqueInput;

    @Field(() => CustomWorkoutCreateWithoutOwnerInput, {nullable:false})
    create!: CustomWorkoutCreateWithoutOwnerInput;
}
