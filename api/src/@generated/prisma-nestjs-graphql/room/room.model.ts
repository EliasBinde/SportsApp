import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Room {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => [String], {nullable:true})
    tags!: Array<string>;

    @Field(() => String, {nullable:false})
    owner!: string;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    private!: boolean;

    @Field(() => [String], {nullable:true})
    invited!: Array<string>;

    @Field(() => [String], {nullable:true})
    mods!: Array<string>;

    @Field(() => Int, {nullable:true})
    activeWorkout!: number | null;

    @Field(() => [Int], {nullable:true})
    activeUsers!: Array<number>;

    @Field(() => Int, {nullable:true})
    activeExercise!: number | null;

    @Field(() => Int, {nullable:true})
    activeExerciseProgress!: number | null;
}
