import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '@prisma/client';

@ObjectType()
export class DtoLoginResponse {
  @Field()
  access_token: string;

  @Field()
  user: User;
}
