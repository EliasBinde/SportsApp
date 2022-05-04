import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CustomExerciseWhereInput } from './custom-exercise-where.input';
import { CustomExerciseOrderByWithRelationInput } from './custom-exercise-order-by-with-relation.input';
import { CustomExerciseWhereUniqueInput } from './custom-exercise-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CustomExerciseScalarFieldEnum } from './custom-exercise-scalar-field.enum';

@ArgsType()
export class FindManyCustomExerciseArgs {

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

    @Field(() => [CustomExerciseScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CustomExerciseScalarFieldEnum>;
}
