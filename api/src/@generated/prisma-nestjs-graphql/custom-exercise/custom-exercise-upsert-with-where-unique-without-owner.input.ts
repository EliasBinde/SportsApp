import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomExerciseWhereUniqueInput } from './custom-exercise-where-unique.input';
import { CustomExerciseUpdateWithoutOwnerInput } from './custom-exercise-update-without-owner.input';
import { CustomExerciseCreateWithoutOwnerInput } from './custom-exercise-create-without-owner.input';

@InputType()
export class CustomExerciseUpsertWithWhereUniqueWithoutOwnerInput {

    @Field(() => CustomExerciseWhereUniqueInput, {nullable:false})
    where!: CustomExerciseWhereUniqueInput;

    @Field(() => CustomExerciseUpdateWithoutOwnerInput, {nullable:false})
    update!: CustomExerciseUpdateWithoutOwnerInput;

    @Field(() => CustomExerciseCreateWithoutOwnerInput, {nullable:false})
    create!: CustomExerciseCreateWithoutOwnerInput;
}
