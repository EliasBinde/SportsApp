import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ExerciseAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    timePerRep?: number;

    @Field(() => Float, {nullable:true})
    timeTotal?: number;

    @Field(() => Float, {nullable:true})
    owner?: number;
}
