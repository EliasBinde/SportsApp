import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CustomExerciseWhereInput } from './custom-exercise-where.input';

@ArgsType()
export class DeleteManyCustomExerciseArgs {

    @Field(() => CustomExerciseWhereInput, {nullable:true})
    where?: CustomExerciseWhereInput;
}
