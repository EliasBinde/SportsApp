import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoomCreatetagsInput } from '../prisma/room-createtags.input';
import { RoomCreateinvitedInput } from '../prisma/room-createinvited.input';
import { RoomCreatemodsInput } from '../prisma/room-createmods.input';
import { RoomCreateactiveUsersInput } from '../prisma/room-createactive-users.input';

@InputType()
export class RoomCreateWithoutActiveWorkoutInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => RoomCreatetagsInput, {nullable:true})
    tags?: RoomCreatetagsInput;

    @Field(() => String, {nullable:false})
    owner!: string;

    @Field(() => Boolean, {nullable:true})
    private?: boolean;

    @Field(() => RoomCreateinvitedInput, {nullable:true})
    invited?: RoomCreateinvitedInput;

    @Field(() => RoomCreatemodsInput, {nullable:true})
    mods?: RoomCreatemodsInput;

    @Field(() => RoomCreateactiveUsersInput, {nullable:true})
    activeUsers?: RoomCreateactiveUsersInput;
}
