import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CustomWorkoutCreatetagsInput } from '../prisma/custom-workout-createtags.input';
import { CustomWorkoutCreatetargetMuscelsInput } from '../prisma/custom-workout-createtarget-muscels.input';
import { CustomWorkoutCreateexerciseIdsInput } from '../prisma/custom-workout-createexercise-ids.input';

@InputType()
export class CustomWorkoutCreateManyInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Int, {nullable:false})
    ownerId!: number;

    @Field(() => Int, {nullable:false})
    difficulty!: number;

    @Field(() => Int, {nullable:false})
    duration!: number;

    @Field(() => CustomWorkoutCreatetagsInput, {nullable:true})
    tags?: CustomWorkoutCreatetagsInput;

    @Field(() => CustomWorkoutCreatetargetMuscelsInput, {nullable:true})
    targetMuscels?: CustomWorkoutCreatetargetMuscelsInput;

    @Field(() => CustomWorkoutCreateexerciseIdsInput, {nullable:true})
    exerciseIds?: CustomWorkoutCreateexerciseIdsInput;

    @Field(() => Boolean, {nullable:true})
    public?: boolean;
}
