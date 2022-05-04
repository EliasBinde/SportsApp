import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActiveWorkoutUpdateManyMutationInput } from './active-workout-update-many-mutation.input';
import { ActiveWorkoutWhereInput } from './active-workout-where.input';

@ArgsType()
export class UpdateManyActiveWorkoutArgs {

    @Field(() => ActiveWorkoutUpdateManyMutationInput, {nullable:false})
    data!: ActiveWorkoutUpdateManyMutationInput;

    @Field(() => ActiveWorkoutWhereInput, {nullable:true})
    where?: ActiveWorkoutWhereInput;
}
