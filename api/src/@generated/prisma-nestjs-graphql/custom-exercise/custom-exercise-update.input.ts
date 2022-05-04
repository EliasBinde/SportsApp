import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UserUpdateOneRequiredWithoutCustomExercisesInput } from '../user/user-update-one-required-without-custom-exercises.input';
import { CustomExerciseUpdatetargetMuscelsInput } from '../prisma/custom-exercise-updatetarget-muscels.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';

@InputType()
export class CustomExerciseUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutCustomExercisesInput, {nullable:true})
    owner?: UserUpdateOneRequiredWithoutCustomExercisesInput;

    @Field(() => CustomExerciseUpdatetargetMuscelsInput, {nullable:true})
    targetMuscels?: CustomExerciseUpdatetargetMuscelsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    videoLink?: StringFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    timePerRep?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    timeTotal?: NullableIntFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    useTimeTotal?: BoolFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    public?: BoolFieldUpdateOperationsInput;
}
