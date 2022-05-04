import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CustomWorkoutUpdateManyMutationInput } from './custom-workout-update-many-mutation.input';
import { CustomWorkoutWhereInput } from './custom-workout-where.input';

@ArgsType()
export class UpdateManyCustomWorkoutArgs {

    @Field(() => CustomWorkoutUpdateManyMutationInput, {nullable:false})
    data!: CustomWorkoutUpdateManyMutationInput;

    @Field(() => CustomWorkoutWhereInput, {nullable:true})
    where?: CustomWorkoutWhereInput;
}
