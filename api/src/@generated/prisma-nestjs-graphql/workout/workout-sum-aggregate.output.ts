import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class WorkoutSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    ownerId?: number;

    @Field(() => Int, {nullable:true})
    difficulty?: number;

    @Field(() => Int, {nullable:true})
    duration?: number;

    @Field(() => [Int], {nullable:true})
    exerciseIds?: Array<number>;
}
