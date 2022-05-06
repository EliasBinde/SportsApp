import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ExerciseCountAggregate } from './exercise-count-aggregate.output';
import { ExerciseAvgAggregate } from './exercise-avg-aggregate.output';
import { ExerciseSumAggregate } from './exercise-sum-aggregate.output';
import { ExerciseMinAggregate } from './exercise-min-aggregate.output';
import { ExerciseMaxAggregate } from './exercise-max-aggregate.output';

@ObjectType()
export class ExerciseGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => [String], {nullable:true})
    targetMuscels?: Array<string>;

    @Field(() => String, {nullable:false})
    videoLink!: string;

    @Field(() => Int, {nullable:true})
    timePerRep?: number;

    @Field(() => Int, {nullable:true})
    timeTotal?: number;

    @Field(() => Boolean, {nullable:false})
    useTimeTotal!: boolean;

    @Field(() => Int, {nullable:false})
    owner!: number;

    @Field(() => ExerciseCountAggregate, {nullable:true})
    _count?: ExerciseCountAggregate;

    @Field(() => ExerciseAvgAggregate, {nullable:true})
    _avg?: ExerciseAvgAggregate;

    @Field(() => ExerciseSumAggregate, {nullable:true})
    _sum?: ExerciseSumAggregate;

    @Field(() => ExerciseMinAggregate, {nullable:true})
    _min?: ExerciseMinAggregate;

    @Field(() => ExerciseMaxAggregate, {nullable:true})
    _max?: ExerciseMaxAggregate;
}
