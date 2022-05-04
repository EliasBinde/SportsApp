import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ActiveWorkoutMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    roomId?: number;

    @Field(() => Int, {nullable:true})
    workoutId?: number;

    @Field(() => Boolean, {nullable:true})
    customWorkout?: boolean;

    @Field(() => Int, {nullable:true})
    activeExcrcise?: number;

    @Field(() => Boolean, {nullable:true})
    customExcircise?: boolean;
}
