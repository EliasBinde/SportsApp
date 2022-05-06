import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkoutCreateNestedManyWithoutOwnerInput } from '../workout/workout-create-nested-many-without-owner.input';

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

    @Field(() => WorkoutCreateNestedManyWithoutOwnerInput, {nullable:true})
    workouts?: WorkoutCreateNestedManyWithoutOwnerInput;
}
