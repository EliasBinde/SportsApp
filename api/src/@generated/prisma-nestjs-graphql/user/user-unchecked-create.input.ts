import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CustomWorkoutUncheckedCreateNestedManyWithoutOwnerInput } from '../custom-workout/custom-workout-unchecked-create-nested-many-without-owner.input';

@InputType()
export class UserUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => CustomWorkoutUncheckedCreateNestedManyWithoutOwnerInput, {nullable:true})
    customWorkouts?: CustomWorkoutUncheckedCreateNestedManyWithoutOwnerInput;
}
