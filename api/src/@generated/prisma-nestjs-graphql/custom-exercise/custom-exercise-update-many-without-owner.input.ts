import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomExerciseCreateWithoutOwnerInput } from './custom-exercise-create-without-owner.input';
import { CustomExerciseCreateOrConnectWithoutOwnerInput } from './custom-exercise-create-or-connect-without-owner.input';
import { CustomExerciseUpsertWithWhereUniqueWithoutOwnerInput } from './custom-exercise-upsert-with-where-unique-without-owner.input';
import { CustomExerciseCreateManyOwnerInputEnvelope } from './custom-exercise-create-many-owner-input-envelope.input';
import { CustomExerciseWhereUniqueInput } from './custom-exercise-where-unique.input';
import { CustomExerciseUpdateWithWhereUniqueWithoutOwnerInput } from './custom-exercise-update-with-where-unique-without-owner.input';
import { CustomExerciseUpdateManyWithWhereWithoutOwnerInput } from './custom-exercise-update-many-with-where-without-owner.input';
import { CustomExerciseScalarWhereInput } from './custom-exercise-scalar-where.input';

@InputType()
export class CustomExerciseUpdateManyWithoutOwnerInput {

    @Field(() => [CustomExerciseCreateWithoutOwnerInput], {nullable:true})
    create?: Array<CustomExerciseCreateWithoutOwnerInput>;

    @Field(() => [CustomExerciseCreateOrConnectWithoutOwnerInput], {nullable:true})
    connectOrCreate?: Array<CustomExerciseCreateOrConnectWithoutOwnerInput>;

    @Field(() => [CustomExerciseUpsertWithWhereUniqueWithoutOwnerInput], {nullable:true})
    upsert?: Array<CustomExerciseUpsertWithWhereUniqueWithoutOwnerInput>;

    @Field(() => CustomExerciseCreateManyOwnerInputEnvelope, {nullable:true})
    createMany?: CustomExerciseCreateManyOwnerInputEnvelope;

    @Field(() => [CustomExerciseWhereUniqueInput], {nullable:true})
    set?: Array<CustomExerciseWhereUniqueInput>;

    @Field(() => [CustomExerciseWhereUniqueInput], {nullable:true})
    disconnect?: Array<CustomExerciseWhereUniqueInput>;

    @Field(() => [CustomExerciseWhereUniqueInput], {nullable:true})
    delete?: Array<CustomExerciseWhereUniqueInput>;

    @Field(() => [CustomExerciseWhereUniqueInput], {nullable:true})
    connect?: Array<CustomExerciseWhereUniqueInput>;

    @Field(() => [CustomExerciseUpdateWithWhereUniqueWithoutOwnerInput], {nullable:true})
    update?: Array<CustomExerciseUpdateWithWhereUniqueWithoutOwnerInput>;

    @Field(() => [CustomExerciseUpdateManyWithWhereWithoutOwnerInput], {nullable:true})
    updateMany?: Array<CustomExerciseUpdateManyWithWhereWithoutOwnerInput>;

    @Field(() => [CustomExerciseScalarWhereInput], {nullable:true})
    deleteMany?: Array<CustomExerciseScalarWhereInput>;
}
