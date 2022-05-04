import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ExerciseCountAggregate } from './exercise-count-aggregate.output';
import { ExerciseAvgAggregate } from './exercise-avg-aggregate.output';
import { ExerciseSumAggregate } from './exercise-sum-aggregate.output';
import { ExerciseMinAggregate } from './exercise-min-aggregate.output';
import { ExerciseMaxAggregate } from './exercise-max-aggregate.output';

@ObjectType()
export class AggregateExercise {

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
