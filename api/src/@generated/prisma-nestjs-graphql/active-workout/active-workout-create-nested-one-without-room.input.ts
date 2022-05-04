import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActiveWorkoutCreateWithoutRoomInput } from './active-workout-create-without-room.input';
import { ActiveWorkoutCreateOrConnectWithoutRoomInput } from './active-workout-create-or-connect-without-room.input';
import { ActiveWorkoutWhereUniqueInput } from './active-workout-where-unique.input';

@InputType()
export class ActiveWorkoutCreateNestedOneWithoutRoomInput {

    @Field(() => ActiveWorkoutCreateWithoutRoomInput, {nullable:true})
    create?: ActiveWorkoutCreateWithoutRoomInput;

    @Field(() => ActiveWorkoutCreateOrConnectWithoutRoomInput, {nullable:true})
    connectOrCreate?: ActiveWorkoutCreateOrConnectWithoutRoomInput;

    @Field(() => ActiveWorkoutWhereUniqueInput, {nullable:true})
    connect?: ActiveWorkoutWhereUniqueInput;
}
