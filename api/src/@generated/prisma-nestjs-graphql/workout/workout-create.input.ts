import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutWorkoutsInput } from '../user/user-create-nested-one-without-workouts.input';
import { Int } from '@nestjs/graphql';
import { WorkoutCreatetagsInput } from '../prisma/workout-createtags.input';
import { WorkoutCreatetargetMuscelsInput } from '../prisma/workout-createtarget-muscels.input';
import { WorkoutCreateexerciseIdsInput } from '../prisma/workout-createexercise-ids.input';

@InputType()
export class WorkoutCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => UserCreateNestedOneWithoutWorkoutsInput, {nullable:false})
    owner!: UserCreateNestedOneWithoutWorkoutsInput;

    @Field(() => Int, {nullable:false})
    difficulty!: number;

    @Field(() => Int, {nullable:false})
    duration!: number;

    @Field(() => WorkoutCreatetagsInput, {nullable:true})
    tags?: WorkoutCreatetagsInput;

    @Field(() => WorkoutCreatetargetMuscelsInput, {nullable:true})
    targetMuscels?: WorkoutCreatetargetMuscelsInput;

    @Field(() => WorkoutCreateexerciseIdsInput, {nullable:true})
    exerciseIds?: WorkoutCreateexerciseIdsInput;

    @Field(() => Boolean, {nullable:true})
    public?: boolean;
}
