import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoomUpdateOneRequiredWithoutActiveWorkoutInput } from '../room/room-update-one-required-without-active-workout.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';

@InputType()
export class ActiveWorkoutUpdateInput {

    @Field(() => RoomUpdateOneRequiredWithoutActiveWorkoutInput, {nullable:true})
    room?: RoomUpdateOneRequiredWithoutActiveWorkoutInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    workoutId?: IntFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    customWorkout?: BoolFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    activeExcrcise?: IntFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    customExcircise?: BoolFieldUpdateOperationsInput;
}
