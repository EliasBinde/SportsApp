import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomExerciseWhereUniqueInput } from './custom-exercise-where-unique.input';
import { CustomExerciseUpdateWithoutOwnerInput } from './custom-exercise-update-without-owner.input';

@InputType()
export class CustomExerciseUpdateWithWhereUniqueWithoutOwnerInput {

    @Field(() => CustomExerciseWhereUniqueInput, {nullable:false})
    where!: CustomExerciseWhereUniqueInput;

    @Field(() => CustomExerciseUpdateWithoutOwnerInput, {nullable:false})
    data!: CustomExerciseUpdateWithoutOwnerInput;
}
