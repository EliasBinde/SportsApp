import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutCustomExercisesInput } from './user-create-without-custom-exercises.input';

@InputType()
export class UserCreateOrConnectWithoutCustomExercisesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutCustomExercisesInput, {nullable:false})
    create!: UserCreateWithoutCustomExercisesInput;
}
