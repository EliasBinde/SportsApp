import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomExerciseCreateManyOwnerInput } from './custom-exercise-create-many-owner.input';

@InputType()
export class CustomExerciseCreateManyOwnerInputEnvelope {

    @Field(() => [CustomExerciseCreateManyOwnerInput], {nullable:false})
    data!: Array<CustomExerciseCreateManyOwnerInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
