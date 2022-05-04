import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CustomWorkoutCreateInput } from './custom-workout-create.input';

@ArgsType()
export class CreateOneCustomWorkoutArgs {

    @Field(() => CustomWorkoutCreateInput, {nullable:false})
    data!: CustomWorkoutCreateInput;
}
