import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActiveWorkoutWhereUniqueInput } from './active-workout-where-unique.input';

@ArgsType()
export class DeleteOneActiveWorkoutArgs {

    @Field(() => ActiveWorkoutWhereUniqueInput, {nullable:false})
    where!: ActiveWorkoutWhereUniqueInput;
}
