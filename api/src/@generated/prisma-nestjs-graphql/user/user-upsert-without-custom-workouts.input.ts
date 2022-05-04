import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutCustomWorkoutsInput } from './user-update-without-custom-workouts.input';
import { UserCreateWithoutCustomWorkoutsInput } from './user-create-without-custom-workouts.input';

@InputType()
export class UserUpsertWithoutCustomWorkoutsInput {

    @Field(() => UserUpdateWithoutCustomWorkoutsInput, {nullable:false})
    update!: UserUpdateWithoutCustomWorkoutsInput;

    @Field(() => UserCreateWithoutCustomWorkoutsInput, {nullable:false})
    create!: UserCreateWithoutCustomWorkoutsInput;
}
