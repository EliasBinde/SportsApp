import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomWorkoutCreateWithoutOwnerInput } from './custom-workout-create-without-owner.input';
import { CustomWorkoutCreateOrConnectWithoutOwnerInput } from './custom-workout-create-or-connect-without-owner.input';
import { CustomWorkoutCreateManyOwnerInputEnvelope } from './custom-workout-create-many-owner-input-envelope.input';
import { CustomWorkoutWhereUniqueInput } from './custom-workout-where-unique.input';

@InputType()
export class CustomWorkoutCreateNestedManyWithoutOwnerInput {

    @Field(() => [CustomWorkoutCreateWithoutOwnerInput], {nullable:true})
    create?: Array<CustomWorkoutCreateWithoutOwnerInput>;

    @Field(() => [CustomWorkoutCreateOrConnectWithoutOwnerInput], {nullable:true})
    connectOrCreate?: Array<CustomWorkoutCreateOrConnectWithoutOwnerInput>;

    @Field(() => CustomWorkoutCreateManyOwnerInputEnvelope, {nullable:true})
    createMany?: CustomWorkoutCreateManyOwnerInputEnvelope;

    @Field(() => [CustomWorkoutWhereUniqueInput], {nullable:true})
    connect?: Array<CustomWorkoutWhereUniqueInput>;
}
