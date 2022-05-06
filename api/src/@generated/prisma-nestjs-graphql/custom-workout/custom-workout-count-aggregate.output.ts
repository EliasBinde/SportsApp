import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CustomWorkoutCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    description!: number;

    @Field(() => Int, {nullable:false})
    ownerId!: number;

    @Field(() => Int, {nullable:false})
    difficulty!: number;

    @Field(() => Int, {nullable:false})
    duration!: number;

    @Field(() => Int, {nullable:false})
    tags!: number;

    @Field(() => Int, {nullable:false})
    targetMuscels!: number;

    @Field(() => Int, {nullable:false})
    exerciseIds!: number;

    @Field(() => Int, {nullable:false})
    public!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
