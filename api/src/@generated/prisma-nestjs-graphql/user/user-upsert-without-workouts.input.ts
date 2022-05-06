import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutWorkoutsInput } from './user-update-without-workouts.input';
import { UserCreateWithoutWorkoutsInput } from './user-create-without-workouts.input';

@InputType()
export class UserUpsertWithoutWorkoutsInput {

    @Field(() => UserUpdateWithoutWorkoutsInput, {nullable:false})
    update!: UserUpdateWithoutWorkoutsInput;

    @Field(() => UserCreateWithoutWorkoutsInput, {nullable:false})
    create!: UserCreateWithoutWorkoutsInput;
}
