import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ActiveWorkoutSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    roomId?: true;

    @Field(() => Boolean, {nullable:true})
    workoutId?: true;

    @Field(() => Boolean, {nullable:true})
    activeExcrcise?: true;
}
