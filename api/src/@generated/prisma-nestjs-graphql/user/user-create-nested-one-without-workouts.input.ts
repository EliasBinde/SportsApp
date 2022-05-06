import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutWorkoutsInput } from './user-create-without-workouts.input';
import { UserCreateOrConnectWithoutWorkoutsInput } from './user-create-or-connect-without-workouts.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutWorkoutsInput {

    @Field(() => UserCreateWithoutWorkoutsInput, {nullable:true})
    create?: UserCreateWithoutWorkoutsInput;

    @Field(() => UserCreateOrConnectWithoutWorkoutsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutWorkoutsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
