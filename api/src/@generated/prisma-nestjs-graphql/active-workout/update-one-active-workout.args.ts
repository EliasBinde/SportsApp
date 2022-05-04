import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActiveWorkoutUpdateInput } from './active-workout-update.input';
import { ActiveWorkoutWhereUniqueInput } from './active-workout-where-unique.input';

@ArgsType()
export class UpdateOneActiveWorkoutArgs {

    @Field(() => ActiveWorkoutUpdateInput, {nullable:false})
    data!: ActiveWorkoutUpdateInput;

    @Field(() => ActiveWorkoutWhereUniqueInput, {nullable:false})
    where!: ActiveWorkoutWhereUniqueInput;
}
