import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomExerciseScalarWhereInput } from './custom-exercise-scalar-where.input';
import { CustomExerciseUpdateManyMutationInput } from './custom-exercise-update-many-mutation.input';

@InputType()
export class CustomExerciseUpdateManyWithWhereWithoutOwnerInput {

    @Field(() => CustomExerciseScalarWhereInput, {nullable:false})
    where!: CustomExerciseScalarWhereInput;

    @Field(() => CustomExerciseUpdateManyMutationInput, {nullable:false})
    data!: CustomExerciseUpdateManyMutationInput;
}
