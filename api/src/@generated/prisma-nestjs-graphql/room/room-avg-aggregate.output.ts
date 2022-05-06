import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class RoomAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    activeWorkout?: number;

    @Field(() => Float, {nullable:true})
    activeUsers?: number;

    @Field(() => Float, {nullable:true})
    activeExercise?: number;

    @Field(() => Float, {nullable:true})
    activeExerciseProgress?: number;
}
