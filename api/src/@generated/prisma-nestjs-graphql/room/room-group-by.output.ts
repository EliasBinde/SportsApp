import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RoomCountAggregate } from './room-count-aggregate.output';
import { RoomAvgAggregate } from './room-avg-aggregate.output';
import { RoomSumAggregate } from './room-sum-aggregate.output';
import { RoomMinAggregate } from './room-min-aggregate.output';
import { RoomMaxAggregate } from './room-max-aggregate.output';

@ObjectType()
export class RoomGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => [String], {nullable:true})
    tags?: Array<string>;

    @Field(() => String, {nullable:false})
    owner!: string;

    @Field(() => Boolean, {nullable:false})
    private!: boolean;

    @Field(() => [String], {nullable:true})
    invited?: Array<string>;

    @Field(() => [String], {nullable:true})
    mods?: Array<string>;

    @Field(() => Int, {nullable:true})
    activeWorkout?: number;

    @Field(() => [Int], {nullable:true})
    activeUsers?: Array<number>;

    @Field(() => Int, {nullable:true})
    activeExercise?: number;

    @Field(() => Int, {nullable:true})
    activeExerciseProgress?: number;

    @Field(() => RoomCountAggregate, {nullable:true})
    _count?: RoomCountAggregate;

    @Field(() => RoomAvgAggregate, {nullable:true})
    _avg?: RoomAvgAggregate;

    @Field(() => RoomSumAggregate, {nullable:true})
    _sum?: RoomSumAggregate;

    @Field(() => RoomMinAggregate, {nullable:true})
    _min?: RoomMinAggregate;

    @Field(() => RoomMaxAggregate, {nullable:true})
    _max?: RoomMaxAggregate;
}
