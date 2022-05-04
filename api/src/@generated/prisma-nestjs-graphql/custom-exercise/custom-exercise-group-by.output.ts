import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CustomExerciseCountAggregate } from './custom-exercise-count-aggregate.output';
import { CustomExerciseAvgAggregate } from './custom-exercise-avg-aggregate.output';
import { CustomExerciseSumAggregate } from './custom-exercise-sum-aggregate.output';
import { CustomExerciseMinAggregate } from './custom-exercise-min-aggregate.output';
import { CustomExerciseMaxAggregate } from './custom-exercise-max-aggregate.output';

@ObjectType()
export class CustomExerciseGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Int, {nullable:false})
    ownerId!: number;

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

    @Field(() => Boolean, {nullable:false})
    public!: boolean;

    @Field(() => CustomExerciseCountAggregate, {nullable:true})
    _count?: CustomExerciseCountAggregate;

    @Field(() => CustomExerciseAvgAggregate, {nullable:true})
    _avg?: CustomExerciseAvgAggregate;

    @Field(() => CustomExerciseSumAggregate, {nullable:true})
    _sum?: CustomExerciseSumAggregate;

    @Field(() => CustomExerciseMinAggregate, {nullable:true})
    _min?: CustomExerciseMinAggregate;

    @Field(() => CustomExerciseMaxAggregate, {nullable:true})
    _max?: CustomExerciseMaxAggregate;
}
