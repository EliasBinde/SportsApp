import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class DtoLoginUserInput {
  @Field()
  username: string;
  @Field()
  password: string;
}
@InputType()
export class DtoLoginUserWithEmailInput {
  @Field()
  email: string;
  @Field()
  password: string;
}
