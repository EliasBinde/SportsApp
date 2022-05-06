import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { CustomWorkoutUpdatetagsInput } from '../prisma/custom-workout-updatetags.input';
import { CustomWorkoutUpdatetargetMuscelsInput } from '../prisma/custom-workout-updatetarget-muscels.input';
import { CustomWorkoutUpdateexerciseIdsInput } from '../prisma/custom-workout-updateexercise-ids.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';

@InputType()
export class CustomWorkoutUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    ownerId?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    difficulty?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    duration?: IntFieldUpdateOperationsInput;

    @Field(() => CustomWorkoutUpdatetagsInput, {nullable:true})
    tags?: CustomWorkoutUpdatetagsInput;

    @Field(() => CustomWorkoutUpdatetargetMuscelsInput, {nullable:true})
    targetMuscels?: CustomWorkoutUpdatetargetMuscelsInput;

    @Field(() => CustomWorkoutUpdateexerciseIdsInput, {nullable:true})
    exerciseIds?: CustomWorkoutUpdateexerciseIdsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    public?: BoolFieldUpdateOperationsInput;
}
