import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActiveWorkoutWhereInput } from './active-workout-where.input';
import { ActiveWorkoutOrderByWithRelationInput } from './active-workout-order-by-with-relation.input';
import { ActiveWorkoutWhereUniqueInput } from './active-workout-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ActiveWorkoutScalarFieldEnum } from './active-workout-scalar-field.enum';

@ArgsType()
export class FindFirstActiveWorkoutArgs {

    @Field(() => ActiveWorkoutWhereInput, {nullable:true})
    where?: ActiveWorkoutWhereInput;

    @Field(() => [ActiveWorkoutOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ActiveWorkoutOrderByWithRelationInput>;

    @Field(() => ActiveWorkoutWhereUniqueInput, {nullable:true})
    cursor?: ActiveWorkoutWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ActiveWorkoutScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ActiveWorkoutScalarFieldEnum>;
}
