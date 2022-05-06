import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CustomWorkoutCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    description?: true;

    @Field(() => Boolean, {nullable:true})
    ownerId?: true;

    @Field(() => Boolean, {nullable:true})
    difficulty?: true;

    @Field(() => Boolean, {nullable:true})
    duration?: true;

    @Field(() => Boolean, {nullable:true})
    tags?: true;

    @Field(() => Boolean, {nullable:true})
    targetMuscels?: true;

    @Field(() => Boolean, {nullable:true})
    exerciseIds?: true;

    @Field(() => Boolean, {nullable:true})
    public?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
