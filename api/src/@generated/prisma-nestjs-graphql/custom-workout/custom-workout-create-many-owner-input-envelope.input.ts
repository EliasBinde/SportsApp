import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomWorkoutCreateManyOwnerInput } from './custom-workout-create-many-owner.input';

@InputType()
export class CustomWorkoutCreateManyOwnerInputEnvelope {

    @Field(() => [CustomWorkoutCreateManyOwnerInput], {nullable:false})
    data!: Array<CustomWorkoutCreateManyOwnerInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
