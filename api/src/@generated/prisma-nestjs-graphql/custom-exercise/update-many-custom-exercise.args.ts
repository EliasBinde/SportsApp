import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CustomExerciseUpdateManyMutationInput } from './custom-exercise-update-many-mutation.input';
import { CustomExerciseWhereInput } from './custom-exercise-where.input';

@ArgsType()
export class UpdateManyCustomExerciseArgs {

    @Field(() => CustomExerciseUpdateManyMutationInput, {nullable:false})
    data!: CustomExerciseUpdateManyMutationInput;

    @Field(() => CustomExerciseWhereInput, {nullable:true})
    where?: CustomExerciseWhereInput;
}
