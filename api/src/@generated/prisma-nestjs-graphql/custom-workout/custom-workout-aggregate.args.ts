import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CustomWorkoutWhereInput } from './custom-workout-where.input';
import { CustomWorkoutOrderByWithRelationInput } from './custom-workout-order-by-with-relation.input';
import { CustomWorkoutWhereUniqueInput } from './custom-workout-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CustomWorkoutCountAggregateInput } from './custom-workout-count-aggregate.input';
import { CustomWorkoutAvgAggregateInput } from './custom-workout-avg-aggregate.input';
import { CustomWorkoutSumAggregateInput } from './custom-workout-sum-aggregate.input';
import { CustomWorkoutMinAggregateInput } from './custom-workout-min-aggregate.input';
import { CustomWorkoutMaxAggregateInput } from './custom-workout-max-aggregate.input';

@ArgsType()
export class CustomWorkoutAggregateArgs {

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

    @Field(() => CustomWorkoutCountAggregateInput, {nullable:true})
    _count?: CustomWorkoutCountAggregateInput;

    @Field(() => CustomWorkoutAvgAggregateInput, {nullable:true})
    _avg?: CustomWorkoutAvgAggregateInput;

    @Field(() => CustomWorkoutSumAggregateInput, {nullable:true})
    _sum?: CustomWorkoutSumAggregateInput;

    @Field(() => CustomWorkoutMinAggregateInput, {nullable:true})
    _min?: CustomWorkoutMinAggregateInput;

    @Field(() => CustomWorkoutMaxAggregateInput, {nullable:true})
    _max?: CustomWorkoutMaxAggregateInput;
}
