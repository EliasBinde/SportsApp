import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCustomWorkoutsInput } from './user-create-without-custom-workouts.input';
import { UserCreateOrConnectWithoutCustomWorkoutsInput } from './user-create-or-connect-without-custom-workouts.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutCustomWorkoutsInput {

    @Field(() => UserCreateWithoutCustomWorkoutsInput, {nullable:true})
    create?: UserCreateWithoutCustomWorkoutsInput;

    @Field(() => UserCreateOrConnectWithoutCustomWorkoutsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutCustomWorkoutsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
