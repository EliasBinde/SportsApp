import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CustomWorkoutWhereInput } from './custom-workout-where.input';
import { CustomWorkoutOrderByWithRelationInput } from './custom-workout-order-by-with-relation.input';
import { CustomWorkoutWhereUniqueInput } from './custom-workout-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CustomWorkoutScalarFieldEnum } from './custom-workout-scalar-field.enum';

@ArgsType()
export class FindManyCustomWorkoutArgs {

    @Field(() => CustomWorkoutWhereInput, {nullable:true})
    where?: CustomWorkoutWhereInput;

    @Field(() => [CustomWorkoutOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CustomWorkoutOrderByWithRelationInput>;

    @Field(() => CustomWorkoutWhereUniqueInput, {nullable:true})
    cursor?: CustomWorkoutWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CustomWorkoutScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CustomWorkoutScalarFieldEnum>;
}
