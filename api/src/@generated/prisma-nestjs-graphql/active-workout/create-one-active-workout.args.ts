import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActiveWorkoutCreateInput } from './active-workout-create.input';

@ArgsType()
export class CreateOneActiveWorkoutArgs {

    @Field(() => ActiveWorkoutCreateInput, {nullable:false})
    data!: ActiveWorkoutCreateInput;
}
