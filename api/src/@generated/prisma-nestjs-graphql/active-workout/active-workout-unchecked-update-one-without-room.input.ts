import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActiveWorkoutCreateWithoutRoomInput } from './active-workout-create-without-room.input';
import { ActiveWorkoutCreateOrConnectWithoutRoomInput } from './active-workout-create-or-connect-without-room.input';
import { ActiveWorkoutUpsertWithoutRoomInput } from './active-workout-upsert-without-room.input';
import { ActiveWorkoutWhereUniqueInput } from './active-workout-where-unique.input';
import { ActiveWorkoutUpdateWithoutRoomInput } from './active-workout-update-without-room.input';

@InputType()
export class ActiveWorkoutUncheckedUpdateOneWithoutRoomInput {

    @Field(() => ActiveWorkoutCreateWithoutRoomInput, {nullable:true})
    create?: ActiveWorkoutCreateWithoutRoomInput;

    @Field(() => ActiveWorkoutCreateOrConnectWithoutRoomInput, {nullable:true})
    connectOrCreate?: ActiveWorkoutCreateOrConnectWithoutRoomInput;

    @Field(() => ActiveWorkoutUpsertWithoutRoomInput, {nullable:true})
    upsert?: ActiveWorkoutUpsertWithoutRoomInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ActiveWorkoutWhereUniqueInput, {nullable:true})
    connect?: ActiveWorkoutWhereUniqueInput;

    @Field(() => ActiveWorkoutUpdateWithoutRoomInput, {nullable:true})
    update?: ActiveWorkoutUpdateWithoutRoomInput;
}
