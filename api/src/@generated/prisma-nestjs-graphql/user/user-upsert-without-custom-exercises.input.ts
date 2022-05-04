import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutCustomExercisesInput } from './user-update-without-custom-exercises.input';
import { UserCreateWithoutCustomExercisesInput } from './user-create-without-custom-exercises.input';

@InputType()
export class UserUpsertWithoutCustomExercisesInput {

    @Field(() => UserUpdateWithoutCustomExercisesInput, {nullable:false})
    update!: UserUpdateWithoutCustomExercisesInput;

    @Field(() => UserCreateWithoutCustomExercisesInput, {nullable:false})
    create!: UserCreateWithoutCustomExercisesInput;
}
