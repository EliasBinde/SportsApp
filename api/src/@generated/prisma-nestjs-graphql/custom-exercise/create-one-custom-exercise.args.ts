import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CustomExerciseCreateInput } from './custom-exercise-create.input';

@ArgsType()
export class CreateOneCustomExerciseArgs {

    @Field(() => CustomExerciseCreateInput, {nullable:false})
    data!: CustomExerciseCreateInput;
}
