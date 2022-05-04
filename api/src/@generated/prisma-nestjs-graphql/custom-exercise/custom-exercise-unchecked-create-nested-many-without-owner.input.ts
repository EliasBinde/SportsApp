import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomExerciseCreateWithoutOwnerInput } from './custom-exercise-create-without-owner.input';
import { CustomExerciseCreateOrConnectWithoutOwnerInput } from './custom-exercise-create-or-connect-without-owner.input';
import { CustomExerciseCreateManyOwnerInputEnvelope } from './custom-exercise-create-many-owner-input-envelope.input';
import { CustomExerciseWhereUniqueInput } from './custom-exercise-where-unique.input';

@InputType()
export class CustomExerciseUncheckedCreateNestedManyWithoutOwnerInput {

    @Field(() => [CustomExerciseCreateWithoutOwnerInput], {nullable:true})
    create?: Array<CustomExerciseCreateWithoutOwnerInput>;

    @Field(() => [CustomExerciseCreateOrConnectWithoutOwnerInput], {nullable:true})
    connectOrCreate?: Array<CustomExerciseCreateOrConnectWithoutOwnerInput>;

    @Field(() => CustomExerciseCreateManyOwnerInputEnvelope, {nullable:true})
    createMany?: CustomExerciseCreateManyOwnerInputEnvelope;

    @Field(() => [CustomExerciseWhereUniqueInput], {nullable:true})
    connect?: Array<CustomExerciseWhereUniqueInput>;
}
