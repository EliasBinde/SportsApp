import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class CustomWorkoutCreateexerciseIdsInput {

    @Field(() => [Int], {nullable:false})
    set!: Array<number>;
}
