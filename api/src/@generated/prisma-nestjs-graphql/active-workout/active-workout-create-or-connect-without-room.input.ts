import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActiveWorkoutWhereUniqueInput } from './active-workout-where-unique.input';
import { ActiveWorkoutCreateWithoutRoomInput } from './active-workout-create-without-room.input';

@InputType()
export class ActiveWorkoutCreateOrConnectWithoutRoomInput {

    @Field(() => ActiveWorkoutWhereUniqueInput, {nullable:false})
    where!: ActiveWorkoutWhereUniqueInput;

    @Field(() => ActiveWorkoutCreateWithoutRoomInput, {nullable:false})
    create!: ActiveWorkoutCreateWithoutRoomInput;
}
