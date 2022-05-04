import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ActiveWorkoutAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    roomId?: number;

    @Field(() => Float, {nullable:true})
    workoutId?: number;

    @Field(() => Float, {nullable:true})
    activeExcrcise?: number;
}
