import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoomCreateWithoutActiveWorkoutInput } from './room-create-without-active-workout.input';
import { RoomCreateOrConnectWithoutActiveWorkoutInput } from './room-create-or-connect-without-active-workout.input';
import { RoomWhereUniqueInput } from './room-where-unique.input';

@InputType()
export class RoomCreateNestedOneWithoutActiveWorkoutInput {

    @Field(() => RoomCreateWithoutActiveWorkoutInput, {nullable:true})
    create?: RoomCreateWithoutActiveWorkoutInput;

    @Field(() => RoomCreateOrConnectWithoutActiveWorkoutInput, {nullable:true})
    connectOrCreate?: RoomCreateOrConnectWithoutActiveWorkoutInput;

    @Field(() => RoomWhereUniqueInput, {nullable:true})
    connect?: RoomWhereUniqueInput;
}
