import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoomCreateWithoutActiveWorkoutInput } from './room-create-without-active-workout.input';
import { RoomCreateOrConnectWithoutActiveWorkoutInput } from './room-create-or-connect-without-active-workout.input';
import { RoomUpsertWithoutActiveWorkoutInput } from './room-upsert-without-active-workout.input';
import { RoomWhereUniqueInput } from './room-where-unique.input';
import { RoomUpdateWithoutActiveWorkoutInput } from './room-update-without-active-workout.input';

@InputType()
export class RoomUpdateOneRequiredWithoutActiveWorkoutInput {

    @Field(() => RoomCreateWithoutActiveWorkoutInput, {nullable:true})
    create?: RoomCreateWithoutActiveWorkoutInput;

    @Field(() => RoomCreateOrConnectWithoutActiveWorkoutInput, {nullable:true})
    connectOrCreate?: RoomCreateOrConnectWithoutActiveWorkoutInput;

    @Field(() => RoomUpsertWithoutActiveWorkoutInput, {nullable:true})
    upsert?: RoomUpsertWithoutActiveWorkoutInput;

    @Field(() => RoomWhereUniqueInput, {nullable:true})
    connect?: RoomWhereUniqueInput;

    @Field(() => RoomUpdateWithoutActiveWorkoutInput, {nullable:true})
    update?: RoomUpdateWithoutActiveWorkoutInput;
}
