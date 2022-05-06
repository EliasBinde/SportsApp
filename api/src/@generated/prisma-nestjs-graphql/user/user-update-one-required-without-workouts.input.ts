import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutWorkoutsInput } from './user-create-without-workouts.input';
import { UserCreateOrConnectWithoutWorkoutsInput } from './user-create-or-connect-without-workouts.input';
import { UserUpsertWithoutWorkoutsInput } from './user-upsert-without-workouts.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutWorkoutsInput } from './user-update-without-workouts.input';

@InputType()
export class UserUpdateOneRequiredWithoutWorkoutsInput {

    @Field(() => UserCreateWithoutWorkoutsInput, {nullable:true})
    create?: UserCreateWithoutWorkoutsInput;

    @Field(() => UserCreateOrConnectWithoutWorkoutsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutWorkoutsInput;

    @Field(() => UserUpsertWithoutWorkoutsInput, {nullable:true})
    upsert?: UserUpsertWithoutWorkoutsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutWorkoutsInput, {nullable:true})
    update?: UserUpdateWithoutWorkoutsInput;
}
