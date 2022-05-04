import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CustomWorkoutWhereUniqueInput } from './custom-workout-where-unique.input';

@ArgsType()
export class DeleteOneCustomWorkoutArgs {

    @Field(() => CustomWorkoutWhereUniqueInput, {nullable:false})
    where!: CustomWorkoutWhereUniqueInput;
}
