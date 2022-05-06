import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class WorkoutAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    ownerId?: number;

    @Field(() => Float, {nullable:true})
    difficulty?: number;

    @Field(() => Float, {nullable:true})
    duration?: number;

    @Field(() => Float, {nullable:true})
    exerciseIds?: number;
}
