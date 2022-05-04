import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutCustomWorkoutsInput } from './user-create-without-custom-workouts.input';

@InputType()
export class UserCreateOrConnectWithoutCustomWorkoutsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutCustomWorkoutsInput, {nullable:false})
    create!: UserCreateWithoutCustomWorkoutsInput;
}
