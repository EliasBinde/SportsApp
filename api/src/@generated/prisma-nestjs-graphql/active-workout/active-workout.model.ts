import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Room } from '../room/room.model';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ActiveWorkout {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Room, {nullable:false})
    room?: Room;

    @Field(() => Int, {nullable:false})
    roomId!: number;

    @Field(() => Int, {nullable:false})
    workoutId!: number;

    @Field(() => Boolean, {nullable:false})
    customWorkout!: boolean;

    @Field(() => Int, {nullable:false})
    activeExcrcise!: number;

    @Field(() => Boolean, {nullable:false})
    customExcircise!: boolean;
}
