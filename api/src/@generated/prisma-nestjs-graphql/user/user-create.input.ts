import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomWorkoutCreateNestedManyWithoutOwnerInput } from '../custom-workout/custom-workout-create-nested-many-without-owner.input';

@InputType()
export class UserCreateInput {

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:false})
    phone!: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => CustomWorkoutCreateNestedManyWithoutOwnerInput, {nullable:true})
    customWorkouts?: CustomWorkoutCreateNestedManyWithoutOwnerInput;
}
