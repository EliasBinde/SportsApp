import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoomWhereUniqueInput } from './room-where-unique.input';
import { RoomCreateWithoutActiveWorkoutInput } from './room-create-without-active-workout.input';

@InputType()
export class RoomCreateOrConnectWithoutActiveWorkoutInput {

    @Field(() => RoomWhereUniqueInput, {nullable:false})
    where!: RoomWhereUniqueInput;

    @Field(() => RoomCreateWithoutActiveWorkoutInput, {nullable:false})
    create!: RoomCreateWithoutActiveWorkoutInput;
}
