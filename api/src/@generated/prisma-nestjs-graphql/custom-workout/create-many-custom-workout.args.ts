import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CustomWorkoutCreateManyInput } from './custom-workout-create-many.input';

@ArgsType()
export class CreateManyCustomWorkoutArgs {

    @Field(() => [CustomWorkoutCreateManyInput], {nullable:false})
    data!: Array<CustomWorkoutCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
