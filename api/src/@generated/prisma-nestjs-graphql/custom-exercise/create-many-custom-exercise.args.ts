import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CustomExerciseCreateManyInput } from './custom-exercise-create-many.input';

@ArgsType()
export class CreateManyCustomExerciseArgs {

    @Field(() => [CustomExerciseCreateManyInput], {nullable:false})
    data!: Array<CustomExerciseCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
