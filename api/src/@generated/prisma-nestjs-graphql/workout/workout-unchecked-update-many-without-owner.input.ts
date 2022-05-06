import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkoutCreateWithoutOwnerInput } from './workout-create-without-owner.input';
import { WorkoutCreateOrConnectWithoutOwnerInput } from './workout-create-or-connect-without-owner.input';
import { WorkoutUpsertWithWhereUniqueWithoutOwnerInput } from './workout-upsert-with-where-unique-without-owner.input';
import { WorkoutCreateManyOwnerInputEnvelope } from './workout-create-many-owner-input-envelope.input';
import { WorkoutWhereUniqueInput } from './workout-where-unique.input';
import { WorkoutUpdateWithWhereUniqueWithoutOwnerInput } from './workout-update-with-where-unique-without-owner.input';
import { WorkoutUpdateManyWithWhereWithoutOwnerInput } from './workout-update-many-with-where-without-owner.input';
import { WorkoutScalarWhereInput } from './workout-scalar-where.input';

@InputType()
export class WorkoutUncheckedUpdateManyWithoutOwnerInput {

    @Field(() => [WorkoutCreateWithoutOwnerInput], {nullable:true})
    create?: Array<WorkoutCreateWithoutOwnerInput>;

    @Field(() => [WorkoutCreateOrConnectWithoutOwnerInput], {nullable:true})
    connectOrCreate?: Array<WorkoutCreateOrConnectWithoutOwnerInput>;

    @Field(() => [WorkoutUpsertWithWhereUniqueWithoutOwnerInput], {nullable:true})
    upsert?: Array<WorkoutUpsertWithWhereUniqueWithoutOwnerInput>;

    @Field(() => WorkoutCreateManyOwnerInputEnvelope, {nullable:true})
    createMany?: WorkoutCreateManyOwnerInputEnvelope;

    @Field(() => [WorkoutWhereUniqueInput], {nullable:true})
    set?: Array<WorkoutWhereUniqueInput>;

    @Field(() => [WorkoutWhereUniqueInput], {nullable:true})
    disconnect?: Array<WorkoutWhereUniqueInput>;

    @Field(() => [WorkoutWhereUniqueInput], {nullable:true})
    delete?: Array<WorkoutWhereUniqueInput>;

    @Field(() => [WorkoutWhereUniqueInput], {nullable:true})
    connect?: Array<WorkoutWhereUniqueInput>;

    @Field(() => [WorkoutUpdateWithWhereUniqueWithoutOwnerInput], {nullable:true})
    update?: Array<WorkoutUpdateWithWhereUniqueWithoutOwnerInput>;

    @Field(() => [WorkoutUpdateManyWithWhereWithoutOwnerInput], {nullable:true})
    updateMany?: Array<WorkoutUpdateManyWithWhereWithoutOwnerInput>;

    @Field(() => [WorkoutScalarWhereInput], {nullable:true})
    deleteMany?: Array<WorkoutScalarWhereInput>;
}
