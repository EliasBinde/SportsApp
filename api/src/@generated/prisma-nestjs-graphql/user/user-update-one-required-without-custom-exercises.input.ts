import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCustomExercisesInput } from './user-create-without-custom-exercises.input';
import { UserCreateOrConnectWithoutCustomExercisesInput } from './user-create-or-connect-without-custom-exercises.input';
import { UserUpsertWithoutCustomExercisesInput } from './user-upsert-without-custom-exercises.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutCustomExercisesInput } from './user-update-without-custom-exercises.input';

@InputType()
export class UserUpdateOneRequiredWithoutCustomExercisesInput {

    @Field(() => UserCreateWithoutCustomExercisesInput, {nullable:true})
    create?: UserCreateWithoutCustomExercisesInput;

    @Field(() => UserCreateOrConnectWithoutCustomExercisesInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutCustomExercisesInput;

    @Field(() => UserUpsertWithoutCustomExercisesInput, {nullable:true})
    upsert?: UserUpsertWithoutCustomExercisesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutCustomExercisesInput, {nullable:true})
    update?: UserUpdateWithoutCustomExercisesInput;
}
