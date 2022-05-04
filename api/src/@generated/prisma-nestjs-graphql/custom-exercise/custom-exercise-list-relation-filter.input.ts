import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomExerciseWhereInput } from './custom-exercise-where.input';

@InputType()
export class CustomExerciseListRelationFilter {

    @Field(() => CustomExerciseWhereInput, {nullable:true})
    every?: CustomExerciseWhereInput;

    @Field(() => CustomExerciseWhereInput, {nullable:true})
    some?: CustomExerciseWhereInput;

    @Field(() => CustomExerciseWhereInput, {nullable:true})
    none?: CustomExerciseWhereInput;
}
