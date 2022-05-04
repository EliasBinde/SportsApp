import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CustomWorkoutWhereInput } from './custom-workout-where.input';

@ArgsType()
export class DeleteManyCustomWorkoutArgs {

    @Field(() => CustomWorkoutWhereInput, {nullable:true})
    where?: CustomWorkoutWhereInput;
}
