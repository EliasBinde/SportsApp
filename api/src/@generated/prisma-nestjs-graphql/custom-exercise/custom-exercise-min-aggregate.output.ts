import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CustomExerciseMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Int, {nullable:true})
    ownerId?: number;

    @Field(() => String, {nullable:true})
    videoLink?: string;

    @Field(() => Int, {nullable:true})
    timePerRep?: number;

    @Field(() => Int, {nullable:true})
    timeTotal?: number;

    @Field(() => Boolean, {nullable:true})
    useTimeTotal?: boolean;

    @Field(() => Boolean, {nullable:true})
    public?: boolean;
}
