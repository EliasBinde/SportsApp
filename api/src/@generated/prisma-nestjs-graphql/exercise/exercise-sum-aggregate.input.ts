import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ExerciseSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    timePerRep?: true;

    @Field(() => Boolean, {nullable:true})
    timeTotal?: true;
}
