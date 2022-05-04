import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActiveWorkoutWhereInput } from './active-workout-where.input';

@InputType()
export class ActiveWorkoutRelationFilter {

    @Field(() => ActiveWorkoutWhereInput, {nullable:true})
    is?: ActiveWorkoutWhereInput;

    @Field(() => ActiveWorkoutWhereInput, {nullable:true})
    isNot?: ActiveWorkoutWhereInput;
}
