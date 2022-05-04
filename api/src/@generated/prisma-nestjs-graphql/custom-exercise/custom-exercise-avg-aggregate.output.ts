import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class CustomExerciseAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    ownerId?: number;

    @Field(() => Float, {nullable:true})
    timePerRep?: number;

    @Field(() => Float, {nullable:true})
    timeTotal?: number;
}
