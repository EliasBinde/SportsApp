import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ExerciseCreatetargetMuscelsInput } from '../prisma/exercise-createtarget-muscels.input';

@InputType()
export class ExerciseUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => Int, {nullable:false})
    owner!: number;
}
