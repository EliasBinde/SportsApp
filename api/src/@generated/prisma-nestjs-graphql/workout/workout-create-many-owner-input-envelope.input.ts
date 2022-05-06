import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkoutCreateManyOwnerInput } from './workout-create-many-owner.input';

@InputType()
export class WorkoutCreateManyOwnerInputEnvelope {

    @Field(() => [WorkoutCreateManyOwnerInput], {nullable:false})
    data!: Array<WorkoutCreateManyOwnerInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
