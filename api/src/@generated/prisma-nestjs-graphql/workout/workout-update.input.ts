import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { UserUpdateOneRequiredWithoutWorkoutsInput } from '../user/user-update-one-required-without-workouts.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { WorkoutUpdatetagsInput } from '../prisma/workout-updatetags.input';
import { WorkoutUpdatetargetMuscelsInput } from '../prisma/workout-updatetarget-muscels.input';
import { WorkoutUpdateexerciseIdsInput } from '../prisma/workout-updateexercise-ids.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';

@InputType()
export class WorkoutUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutWorkoutsInput, {nullable:true})
    owner?: UserUpdateOneRequiredWithoutWorkoutsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    difficulty?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    duration?: IntFieldUpdateOperationsInput;

    @Field(() => WorkoutUpdatetagsInput, {nullable:true})
    tags?: WorkoutUpdatetagsInput;

    @Field(() => WorkoutUpdatetargetMuscelsInput, {nullable:true})
    targetMuscels?: WorkoutUpdatetargetMuscelsInput;

    @Field(() => WorkoutUpdateexerciseIdsInput, {nullable:true})
    exerciseIds?: WorkoutUpdateexerciseIdsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    public?: BoolFieldUpdateOperationsInput;
}
