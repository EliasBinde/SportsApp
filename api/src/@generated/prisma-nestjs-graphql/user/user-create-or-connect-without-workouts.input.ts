import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutWorkoutsInput } from './user-create-without-workouts.input';

@InputType()
export class UserCreateOrConnectWithoutWorkoutsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutWorkoutsInput, {nullable:false})
    create!: UserCreateWithoutWorkoutsInput;
}
