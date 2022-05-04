import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomWorkoutCreateWithoutOwnerInput } from './custom-workout-create-without-owner.input';
import { CustomWorkoutCreateOrConnectWithoutOwnerInput } from './custom-workout-create-or-connect-without-owner.input';
import { CustomWorkoutUpsertWithWhereUniqueWithoutOwnerInput } from './custom-workout-upsert-with-where-unique-without-owner.input';
import { CustomWorkoutCreateManyOwnerInputEnvelope } from './custom-workout-create-many-owner-input-envelope.input';
import { CustomWorkoutWhereUniqueInput } from './custom-workout-where-unique.input';
import { CustomWorkoutUpdateWithWhereUniqueWithoutOwnerInput } from './custom-workout-update-with-where-unique-without-owner.input';
import { CustomWorkoutUpdateManyWithWhereWithoutOwnerInput } from './custom-workout-update-many-with-where-without-owner.input';
import { CustomWorkoutScalarWhereInput } from './custom-workout-scalar-where.input';

@InputType()
export class CustomWorkoutUncheckedUpdateManyWithoutOwnerInput {

    @Field(() => [CustomWorkoutCreateWithoutOwnerInput], {nullable:true})
    create?: Array<CustomWorkoutCreateWithoutOwnerInput>;

    @Field(() => [CustomWorkoutCreateOrConnectWithoutOwnerInput], {nullable:true})
    connectOrCreate?: Array<CustomWorkoutCreateOrConnectWithoutOwnerInput>;

    @Field(() => [CustomWorkoutUpsertWithWhereUniqueWithoutOwnerInput], {nullable:true})
    upsert?: Array<CustomWorkoutUpsertWithWhereUniqueWithoutOwnerInput>;

    @Field(() => CustomWorkoutCreateManyOwnerInputEnvelope, {nullable:true})
    createMany?: CustomWorkoutCreateManyOwnerInputEnvelope;

    @Field(() => [CustomWorkoutWhereUniqueInput], {nullable:true})
    set?: Array<CustomWorkoutWhereUniqueInput>;

    @Field(() => [CustomWorkoutWhereUniqueInput], {nullable:true})
    disconnect?: Array<CustomWorkoutWhereUniqueInput>;

    @Field(() => [CustomWorkoutWhereUniqueInput], {nullable:true})
    delete?: Array<CustomWorkoutWhereUniqueInput>;

    @Field(() => [CustomWorkoutWhereUniqueInput], {nullable:true})
    connect?: Array<CustomWorkoutWhereUniqueInput>;

    @Field(() => [CustomWorkoutUpdateWithWhereUniqueWithoutOwnerInput], {nullable:true})
    update?: Array<CustomWorkoutUpdateWithWhereUniqueWithoutOwnerInput>;

    @Field(() => [CustomWorkoutUpdateManyWithWhereWithoutOwnerInput], {nullable:true})
    updateMany?: Array<CustomWorkoutUpdateManyWithWhereWithoutOwnerInput>;

    @Field(() => [CustomWorkoutScalarWhereInput], {nullable:true})
    deleteMany?: Array<CustomWorkoutScalarWhereInput>;
}
