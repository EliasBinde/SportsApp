import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCustomExercisesInput } from './user-create-without-custom-exercises.input';
import { UserCreateOrConnectWithoutCustomExercisesInput } from './user-create-or-connect-without-custom-exercises.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutCustomExercisesInput {

    @Field(() => UserCreateWithoutCustomExercisesInput, {nullable:true})
    create?: UserCreateWithoutCustomExercisesInput;

    @Field(() => UserCreateOrConnectWithoutCustomExercisesInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutCustomExercisesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
