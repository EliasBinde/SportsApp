import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RoomWhereInput } from './room-where.input';
import { RoomOrderByWithRelationInput } from './room-order-by-with-relation.input';
import { RoomWhereUniqueInput } from './room-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RoomScalarFieldEnum } from './room-scalar-field.enum';

@ArgsType()
export class FindFirstRoomArgs {

    @Field(() => RoomWhereInput, {nullable:true})
    where?: RoomWhereInput;

    @Field(() => [RoomOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RoomOrderByWithRelationInput>;

    @Field(() => RoomWhereUniqueInput, {nullable:true})
    cursor?: RoomWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [RoomScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof RoomScalarFieldEnum>;
}
