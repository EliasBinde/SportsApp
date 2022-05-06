import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkoutWhereUniqueInput } from './workout-where-unique.input';
import { WorkoutCreateWithoutOwnerInput } from './workout-create-without-owner.input';

@InputType()
export class WorkoutCreateOrConnectWithoutOwnerInput {

    @Field(() => WorkoutWhereUniqueInput, {nullable:false})
    where!: WorkoutWhereUniqueInput;

    @Field(() => WorkoutCreateWithoutOwnerInput, {nullable:false})
    create!: WorkoutCreateWithoutOwnerInput;
}
