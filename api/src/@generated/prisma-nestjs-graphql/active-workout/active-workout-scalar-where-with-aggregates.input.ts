import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';

@InputType()
export class ActiveWorkoutScalarWhereWithAggregatesInput {

    @Field(() => [ActiveWorkoutScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ActiveWorkoutScalarWhereWithAggregatesInput>;

    @Field(() => [ActiveWorkoutScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ActiveWorkoutScalarWhereWithAggregatesInput>;

    @Field(() => [ActiveWorkoutScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ActiveWorkoutScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    roomId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    workoutId?: IntWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    customWorkout?: BoolWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    activeExcrcise?: IntWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    customExcircise?: BoolWithAggregatesFilter;
}
