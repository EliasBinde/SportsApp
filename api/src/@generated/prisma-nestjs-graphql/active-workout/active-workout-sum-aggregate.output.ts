import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ActiveWorkoutSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    roomId?: number;

    @Field(() => Int, {nullable:true})
    workoutId?: number;

    @Field(() => Int, {nullable:true})
    activeExcrcise?: number;
}
