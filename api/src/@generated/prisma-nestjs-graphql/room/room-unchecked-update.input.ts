import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { RoomUpdatetagsInput } from '../prisma/room-updatetags.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { RoomUpdateinvitedInput } from '../prisma/room-updateinvited.input';
import { RoomUpdatemodsInput } from '../prisma/room-updatemods.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { RoomUpdateactiveUsersInput } from '../prisma/room-updateactive-users.input';

@InputType()
export class RoomUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => RoomUpdatetagsInput, {nullable:true})
    tags?: RoomUpdatetagsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    owner?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    private?: BoolFieldUpdateOperationsInput;

    @Field(() => RoomUpdateinvitedInput, {nullable:true})
    invited?: RoomUpdateinvitedInput;

    @Field(() => RoomUpdatemodsInput, {nullable:true})
    mods?: RoomUpdatemodsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    activeWorkout?: NullableIntFieldUpdateOperationsInput;

    @Field(() => RoomUpdateactiveUsersInput, {nullable:true})
    activeUsers?: RoomUpdateactiveUsersInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    activeExercise?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    activeExerciseProgress?: NullableIntFieldUpdateOperationsInput;
}
