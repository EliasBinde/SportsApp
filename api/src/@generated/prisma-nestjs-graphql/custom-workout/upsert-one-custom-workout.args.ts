import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CustomWorkoutWhereUniqueInput } from './custom-workout-where-unique.input';
import { CustomWorkoutCreateInput } from './custom-workout-create.input';
import { CustomWorkoutUpdateInput } from './custom-workout-update.input';

@ArgsType()
export class UpsertOneCustomWorkoutArgs {

    @Field(() => CustomWorkoutWhereUniqueInput, {nullable:false})
    where!: CustomWorkoutWhereUniqueInput;

    @Field(() => CustomWorkoutCreateInput, {nullable:false})
    create!: CustomWorkoutCreateInput;

    @Field(() => CustomWorkoutUpdateInput, {nullable:false})
    update!: CustomWorkoutUpdateInput;
}
