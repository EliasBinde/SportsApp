import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class RoomSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    activeWorkout?: number;

    @Field(() => [Int], {nullable:true})
    activeUsers?: Array<number>;

    @Field(() => Int, {nullable:true})
    activeExercise?: number;

    @Field(() => Int, {nullable:true})
    activeExerciseProgress?: number;
}
