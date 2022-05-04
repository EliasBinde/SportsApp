import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class RoomCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    description!: number;

    @Field(() => Int, {nullable:false})
    tags!: number;

    @Field(() => Int, {nullable:false})
    owner!: number;

    @Field(() => Int, {nullable:false})
    private!: number;

    @Field(() => Int, {nullable:false})
    invited!: number;

    @Field(() => Int, {nullable:false})
    mods!: number;

    @Field(() => Int, {nullable:false})
    activeWorkout!: number;

    @Field(() => Int, {nullable:false})
    activeUsers!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
