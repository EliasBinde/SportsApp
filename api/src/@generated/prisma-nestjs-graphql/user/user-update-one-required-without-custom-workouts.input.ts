import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCustomWorkoutsInput } from './user-create-without-custom-workouts.input';
import { UserCreateOrConnectWithoutCustomWorkoutsInput } from './user-create-or-connect-without-custom-workouts.input';
import { UserUpsertWithoutCustomWorkoutsInput } from './user-upsert-without-custom-workouts.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutCustomWorkoutsInput } from './user-update-without-custom-workouts.input';

@InputType()
export class UserUpdateOneRequiredWithoutCustomWorkoutsInput {

    @Field(() => UserCreateWithoutCustomWorkoutsInput, {nullable:true})
    create?: UserCreateWithoutCustomWorkoutsInput;

    @Field(() => UserCreateOrConnectWithoutCustomWorkoutsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutCustomWorkoutsInput;

    @Field(() => UserUpsertWithoutCustomWorkoutsInput, {nullable:true})
    upsert?: UserUpsertWithoutCustomWorkoutsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutCustomWorkoutsInput, {nullable:true})
    update?: UserUpdateWithoutCustomWorkoutsInput;
}
