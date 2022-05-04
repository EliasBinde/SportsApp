import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { SignupUserInput } from 'src/graphql';
import { AuthService } from './auth.service';
import { DtoLoginResponse } from './dto/login-respose';
import { DtoLoginUserInput } from './dto/login-user.input';
import { GqlAuthGuard } from './gql-auth.guard';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}
  @Mutation(() => DtoLoginResponse)
  @UseGuards(GqlAuthGuard)
  login(
    @Args('loginUserInput') loginUserInput: DtoLoginUserInput,
    @Context()
    context,
  ) {
    return this.authService.login(context.user);
  }

  @Mutation('signup')
  signup(@Args('signupUserInput') signupUserInput: SignupUserInput) {
    return this.authService.signup(signupUserInput);
  }
}
