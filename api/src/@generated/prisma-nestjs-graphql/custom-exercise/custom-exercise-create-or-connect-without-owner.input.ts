import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomExerciseWhereUniqueInput } from './custom-exercise-where-unique.input';
import { CustomExerciseCreateWithoutOwnerInput } from './custom-exercise-create-without-owner.input';

@InputType()
export class CustomExerciseCreateOrConnectWithoutOwnerInput {

    @Field(() => CustomExerciseWhereUniqueInput, {nullable:false})
    where!: CustomExerciseWhereUniqueInput;

    @Field(() => CustomExerciseCreateWithoutOwnerInput, {nullable:false})
    create!: CustomExerciseCreateWithoutOwnerInput;
}
