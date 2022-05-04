import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CustomExerciseWhereUniqueInput } from './custom-exercise-where-unique.input';
import { CustomExerciseCreateInput } from './custom-exercise-create.input';
import { CustomExerciseUpdateInput } from './custom-exercise-update.input';

@ArgsType()
export class UpsertOneCustomExerciseArgs {

    @Field(() => CustomExerciseWhereUniqueInput, {nullable:false})
    where!: CustomExerciseWhereUniqueInput;

    @Field(() => CustomExerciseCreateInput, {nullable:false})
    create!: CustomExerciseCreateInput;

    @Field(() => CustomExerciseUpdateInput, {nullable:false})
    update!: CustomExerciseUpdateInput;
}
