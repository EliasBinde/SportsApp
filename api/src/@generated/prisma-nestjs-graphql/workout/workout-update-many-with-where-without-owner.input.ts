import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkoutScalarWhereInput } from './workout-scalar-where.input';
import { WorkoutUpdateManyMutationInput } from './workout-update-many-mutation.input';

@InputType()
export class WorkoutUpdateManyWithWhereWithoutOwnerInput {

    @Field(() => WorkoutScalarWhereInput, {nullable:false})
    where!: WorkoutScalarWhereInput;

    @Field(() => WorkoutUpdateManyMutationInput, {nullable:false})
    data!: WorkoutUpdateManyMutationInput;
}
