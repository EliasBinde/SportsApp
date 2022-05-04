import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomWorkoutScalarWhereInput } from './custom-workout-scalar-where.input';
import { CustomWorkoutUpdateManyMutationInput } from './custom-workout-update-many-mutation.input';

@InputType()
export class CustomWorkoutUpdateManyWithWhereWithoutOwnerInput {

    @Field(() => CustomWorkoutScalarWhereInput, {nullable:false})
    where!: CustomWorkoutScalarWhereInput;

    @Field(() => CustomWorkoutUpdateManyMutationInput, {nullable:false})
    data!: CustomWorkoutUpdateManyMutationInput;
}
