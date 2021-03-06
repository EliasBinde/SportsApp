import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ExerciseSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    timePerRep?: number;

    @Field(() => Int, {nullable:true})
    timeTotal?: number;

    @Field(() => Int, {nullable:true})
    owner?: number;
}
