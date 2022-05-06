import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ExerciseAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    timePerRep?: true;

    @Field(() => Boolean, {nullable:true})
    timeTotal?: true;

    @Field(() => Boolean, {nullable:true})
    owner?: true;
}
