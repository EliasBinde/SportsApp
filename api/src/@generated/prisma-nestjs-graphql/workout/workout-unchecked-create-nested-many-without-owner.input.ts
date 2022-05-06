import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkoutCreateWithoutOwnerInput } from './workout-create-without-owner.input';
import { WorkoutCreateOrConnectWithoutOwnerInput } from './workout-create-or-connect-without-owner.input';
import { WorkoutCreateManyOwnerInputEnvelope } from './workout-create-many-owner-input-envelope.input';
import { WorkoutWhereUniqueInput } from './workout-where-unique.input';

@InputType()
export class WorkoutUncheckedCreateNestedManyWithoutOwnerInput {

    @Field(() => [WorkoutCreateWithoutOwnerInput], {nullable:true})
    create?: Array<WorkoutCreateWithoutOwnerInput>;

    @Field(() => [WorkoutCreateOrConnectWithoutOwnerInput], {nullable:true})
    connectOrCreate?: Array<WorkoutCreateOrConnectWithoutOwnerInput>;

    @Field(() => WorkoutCreateManyOwnerInputEnvelope, {nullable:true})
    createMany?: WorkoutCreateManyOwnerInputEnvelope;

    @Field(() => [WorkoutWhereUniqueInput], {nullable:true})
    connect?: Array<WorkoutWhereUniqueInput>;
}
