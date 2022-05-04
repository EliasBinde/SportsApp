import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ExerciseCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    description?: true;

    @Field(() => Boolean, {nullable:true})
    targetMuscels?: true;

    @Field(() => Boolean, {nullable:true})
    videoLink?: true;

    @Field(() => Boolean, {nullable:true})
    timePerRep?: true;

    @Field(() => Boolean, {nullable:true})
    timeTotal?: true;

    @Field(() => Boolean, {nullable:true})
    useTimeTotal?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
