import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CustomExerciseWhereInput } from './custom-exercise-where.input';
import { CustomExerciseOrderByWithAggregationInput } from './custom-exercise-order-by-with-aggregation.input';
import { CustomExerciseScalarFieldEnum } from './custom-exercise-scalar-field.enum';
import { CustomExerciseScalarWhereWithAggregatesInput } from './custom-exercise-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { CustomExerciseCountAggregateInput } from './custom-exercise-count-aggregate.input';
import { CustomExerciseAvgAggregateInput } from './custom-exercise-avg-aggregate.input';
import { CustomExerciseSumAggregateInput } from './custom-exercise-sum-aggregate.input';
import { CustomExerciseMinAggregateInput } from './custom-exercise-min-aggregate.input';
import { CustomExerciseMaxAggregateInput } from './custom-exercise-max-aggregate.input';

@ArgsType()
export class CustomExerciseGroupByArgs {

    @Field(() => CustomExerciseWhereInput, {nullable:true})
    where?: CustomExerciseWhereInput;

    @Field(() => [CustomExerciseOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CustomExerciseOrderByWithAggregationInput>;

    @Field(() => [CustomExerciseScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CustomExerciseScalarFieldEnum>;

    @Field(() => CustomExerciseScalarWhereWithAggregatesInput, {nullable:true})
    having?: CustomExerciseScalarWhereWithAggregatesInput;

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
