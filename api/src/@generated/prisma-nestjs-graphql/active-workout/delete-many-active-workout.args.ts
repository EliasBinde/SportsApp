import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActiveWorkoutWhereInput } from './active-workout-where.input';

@ArgsType()
export class DeleteManyActiveWorkoutArgs {

    @Field(() => ActiveWorkoutWhereInput, {nullable:true})
    where?: ActiveWorkoutWhereInput;
}
