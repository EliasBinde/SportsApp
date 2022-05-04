import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Exercise {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => [String], {nullable:true})
    targetMuscels!: Array<string>;

    @Field(() => String, {nullable:false})
    videoLink!: string;

    @Field(() => Int, {nullable:true})
    timePerRep!: number | null;

    @Field(() => Int, {nullable:true})
    timeTotal!: number | null;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    useTimeTotal!: boolean;
}
