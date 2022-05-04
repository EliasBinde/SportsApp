import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CustomWorkoutMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Int, {nullable:true})
    ownerId?: number;

    @Field(() => Int, {nullable:true})
    difficulty?: number;

    @Field(() => Int, {nullable:true})
    duration?: number;

    @Field(() => Boolean, {nullable:true})
    public?: boolean;
}
