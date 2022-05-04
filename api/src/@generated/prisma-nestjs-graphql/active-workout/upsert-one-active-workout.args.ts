import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActiveWorkoutWhereUniqueInput } from './active-workout-where-unique.input';
import { ActiveWorkoutCreateInput } from './active-workout-create.input';
import { ActiveWorkoutUpdateInput } from './active-workout-update.input';

@ArgsType()
export class UpsertOneActiveWorkoutArgs {

    @Field(() => ActiveWorkoutWhereUniqueInput, {nullable:false})
    where!: ActiveWorkoutWhereUniqueInput;

    @Field(() => ActiveWorkoutCreateInput, {nullable:false})
    create!: ActiveWorkoutCreateInput;

    @Field(() => ActiveWorkoutUpdateInput, {nullable:false})
    update!: ActiveWorkoutUpdateInput;
}
