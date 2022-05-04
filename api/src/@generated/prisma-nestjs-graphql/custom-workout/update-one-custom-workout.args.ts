import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CustomWorkoutUpdateInput } from './custom-workout-update.input';
import { CustomWorkoutWhereUniqueInput } from './custom-workout-where-unique.input';

@ArgsType()
export class UpdateOneCustomWorkoutArgs {

    @Field(() => CustomWorkoutUpdateInput, {nullable:false})
    data!: CustomWorkoutUpdateInput;

    @Field(() => CustomWorkoutWhereUniqueInput, {nullable:false})
    where!: CustomWorkoutWhereUniqueInput;
}
