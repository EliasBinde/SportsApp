import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CustomExerciseWhereInput } from './custom-exercise-where.input';
import { CustomExerciseOrderByWithRelationInput } from './custom-exercise-order-by-with-relation.input';
import { CustomExerciseWhereUniqueInput } from './custom-exercise-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CustomExerciseCountAggregateInput } from './custom-exercise-count-aggregate.input';
import { CustomExerciseAvgAggregateInput } from './custom-exercise-avg-aggregate.input';
import { CustomExerciseSumAggregateInput } from './custom-exercise-sum-aggregate.input';
import { CustomExerciseMinAggregateInput } from './custom-exercise-min-aggregate.input';
import { CustomExerciseMaxAggregateInput } from './custom-exercise-max-aggregate.input';

@ArgsType()
export class CustomExerciseAggregateArgs {

    @Field(() => CustomExerciseWhereInput, {nullable:true})
    where?: CustomExerciseWhereInput;

    @Field(() => [CustomExerciseOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CustomExerciseOrderByWithRelationInput>;

    @Field(() => CustomExerciseWhereUniqueInput, {nullable:true})
    cursor?: CustomExerciseWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CustomExerciseCountAggregateInput, {nullable:true})
    _count?: CustomExerciseCountAggregateInput;

    @Field(() => CustomExerciseAvgAggregateInput, {nullable:true})
    _avg?: CustomExerciseAvgAggregateInput;

    @Field(() => CustomExerciseSumAggregateInput, {nullable:true})
    _sum?: CustomExerciseSumAggregateInput;

    @Field(() => CustomExerciseMinAggregateInput, {nullable:true})
    _min?: CustomExerciseMinAggregateInput;

    @Field(() => CustomExerciseMaxAggregateInput, {nullable:true})
    _max?: CustomExerciseMaxAggregateInput;
}
