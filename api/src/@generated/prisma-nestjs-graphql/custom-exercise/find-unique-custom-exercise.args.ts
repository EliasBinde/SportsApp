import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CustomExerciseWhereUniqueInput } from './custom-exercise-where-unique.input';

@ArgsType()
export class FindUniqueCustomExerciseArgs {

    @Field(() => CustomExerciseWhereUniqueInput, {nullable:false})
    where!: CustomExerciseWhereUniqueInput;
}
