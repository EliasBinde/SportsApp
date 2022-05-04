import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomWorkoutWhereInput } from './custom-workout-where.input';

@InputType()
export class CustomWorkoutListRelationFilter {

    @Field(() => CustomWorkoutWhereInput, {nullable:true})
    every?: CustomWorkoutWhereInput;

    @Field(() => CustomWorkoutWhereInput, {nullable:true})
    some?: CustomWorkoutWhereInput;

    @Field(() => CustomWorkoutWhereInput, {nullable:true})
    none?: CustomWorkoutWhereInput;
}
