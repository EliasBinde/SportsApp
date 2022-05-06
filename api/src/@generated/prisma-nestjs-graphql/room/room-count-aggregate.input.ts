import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class RoomCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    description?: true;

    @Field(() => Boolean, {nullable:true})
    tags?: true;

    @Field(() => Boolean, {nullable:true})
    owner?: true;

    @Field(() => Boolean, {nullable:true})
    private?: true;

    @Field(() => Boolean, {nullable:true})
    invited?: true;

    @Field(() => Boolean, {nullable:true})
    mods?: true;

    @Field(() => Boolean, {nullable:true})
    activeWorkout?: true;

    @Field(() => Boolean, {nullable:true})
    activeUsers?: true;

    @Field(() => Boolean, {nullable:true})
    activeExercise?: true;

    @Field(() => Boolean, {nullable:true})
    activeExerciseProgress?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
