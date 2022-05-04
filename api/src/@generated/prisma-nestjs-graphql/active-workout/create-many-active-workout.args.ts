import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActiveWorkoutCreateManyInput } from './active-workout-create-many.input';

@ArgsType()
export class CreateManyActiveWorkoutArgs {

    @Field(() => [ActiveWorkoutCreateManyInput], {nullable:false})
    data!: Array<ActiveWorkoutCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
