import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class RoomAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    activeWorkout?: true;

    @Field(() => Boolean, {nullable:true})
    activeUsers?: true;

    @Field(() => Boolean, {nullable:true})
    activeExercise?: true;

    @Field(() => Boolean, {nullable:true})
    activeExerciseProgress?: true;
}
