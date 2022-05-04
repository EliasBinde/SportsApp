import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RoomCreatetagsInput } from '../prisma/room-createtags.input';
import { RoomCreateinvitedInput } from '../prisma/room-createinvited.input';
import { RoomCreatemodsInput } from '../prisma/room-createmods.input';
import { RoomCreateactiveUsersInput } from '../prisma/room-createactive-users.input';

@InputType()
export class RoomCreateManyInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => Int, {nullable:true})
    activeWorkout?: number;

    @Field(() => RoomCreateactiveUsersInput, {nullable:true})
    activeUsers?: RoomCreateactiveUsersInput;
}
