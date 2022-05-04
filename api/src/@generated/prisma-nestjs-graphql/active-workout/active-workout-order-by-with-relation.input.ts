import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { RoomOrderByWithRelationInput } from '../room/room-order-by-with-relation.input';

@InputType()
export class ActiveWorkoutOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => RoomOrderByWithRelationInput, {nullable:true})
    room?: RoomOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    roomId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    workoutId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    customWorkout?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    activeExcrcise?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    customExcircise?: keyof typeof SortOrder;
}
