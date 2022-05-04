import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CustomExerciseCreatetargetMuscelsInput } from '../prisma/custom-exercise-createtarget-muscels.input';

@InputType()
export class CustomExerciseUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Int, {nullable:false})
    ownerId!: number;

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
