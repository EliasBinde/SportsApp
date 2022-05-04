import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExerciseCreatetargetMuscelsInput } from '../prisma/exercise-createtarget-muscels.input';
import { Int } from '@nestjs/graphql';

@InputType()
export class ExerciseCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => ExerciseCreatetargetMuscelsInput, {nullable:true})
    targetMuscels?: ExerciseCreatetargetMuscelsInput;

    @Field(() => String, {nullable:false})
    videoLink!: string;

    @Field(() => Int, {nullable:true})
    timePerRep?: number;

    @Field(() => Int, {nullable:true})
    timeTotal?: number;

    @Field(() => Boolean, {nullable:true})
    useTimeTotal?: boolean;
}
