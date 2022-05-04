import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { WorkoutCreateexerciseIdsInput } from '../prisma/workout-createexercise-ids.input';

@InputType()
export class WorkoutUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Int, {nullable:false})
    difficulty!: number;

    @Field(() => Int, {nullable:false})
    duration!: number;

    @Field(() => WorkoutCreateexerciseIdsInput, {nullable:true})
    exerciseIds?: WorkoutCreateexerciseIdsInput;
}
