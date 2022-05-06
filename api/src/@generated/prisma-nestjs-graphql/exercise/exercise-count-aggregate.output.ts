import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ExerciseCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    description!: number;

    @Field(() => Int, {nullable:false})
    targetMuscels!: number;

    @Field(() => Int, {nullable:false})
    videoLink!: number;

    @Field(() => Int, {nullable:false})
    timePerRep!: number;

    @Field(() => Int, {nullable:false})
    timeTotal!: number;

    @Field(() => Int, {nullable:false})
    useTimeTotal!: number;

    @Field(() => Int, {nullable:false})
    owner!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
