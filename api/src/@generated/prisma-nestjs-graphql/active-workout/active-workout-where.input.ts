import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { RoomRelationFilter } from '../room/room-relation-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class ActiveWorkoutWhereInput {

    @Field(() => [ActiveWorkoutWhereInput], {nullable:true})
    AND?: Array<ActiveWorkoutWhereInput>;

    @Field(() => [ActiveWorkoutWhereInput], {nullable:true})
    OR?: Array<ActiveWorkoutWhereInput>;

    @Field(() => [ActiveWorkoutWhereInput], {nullable:true})
    NOT?: Array<ActiveWorkoutWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => RoomRelationFilter, {nullable:true})
    room?: RoomRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    roomId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    workoutId?: IntFilter;

    @Field(() => BoolFilter, {nullable:true})
    customWorkout?: BoolFilter;

    @Field(() => IntFilter, {nullable:true})
    activeExcrcise?: IntFilter;

    @Field(() => BoolFilter, {nullable:true})
    customExcircise?: BoolFilter;
}
