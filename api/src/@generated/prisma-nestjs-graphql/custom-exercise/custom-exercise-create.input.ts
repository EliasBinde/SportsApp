import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutCustomExercisesInput } from '../user/user-create-nested-one-without-custom-exercises.input';
import { CustomExerciseCreatetargetMuscelsInput } from '../prisma/custom-exercise-createtarget-muscels.input';
import { Int } from '@nestjs/graphql';

@InputType()
export class CustomExerciseCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => UserCreateNestedOneWithoutCustomExercisesInput, {nullable:false})
    owner!: UserCreateNestedOneWithoutCustomExercisesInput;

    @Field(() => CustomExerciseCreatetargetMuscelsInput, {nullable:true})
    targetMuscels?: CustomExerciseCreatetargetMuscelsInput;

    @Field(() => String, {nullable:false})
    videoLink!: string;

    @Field(() => Int, {nullable:true})
    timePerRep?: number;

    @Field(() => Int, {nullable:true})
    timeTotal?: number;

    @Field(() => Boolean, {nullable:true})
    useTimeTotal?: boolean;

    @Field(() => Boolean, {nullable:true})
    public?: boolean;
}
