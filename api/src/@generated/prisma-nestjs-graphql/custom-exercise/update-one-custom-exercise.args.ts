import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CustomExerciseUpdateInput } from './custom-exercise-update.input';
import { CustomExerciseWhereUniqueInput } from './custom-exercise-where-unique.input';

@ArgsType()
export class UpdateOneCustomExerciseArgs {

    @Field(() => CustomExerciseUpdateInput, {nullable:false})
    data!: CustomExerciseUpdateInput;

    @Field(() => CustomExerciseWhereUniqueInput, {nullable:false})
    where!: CustomExerciseWhereUniqueInput;
}
