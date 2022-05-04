import { Resolver, Query, Args, Context } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UserService } from './user.service';
import { AuthService } from 'src/auth/auth.service';

@Resolver('User')
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    private authService: AuthService,
  ) {}

  @Query('users')
  @UseGuards(JwtAuthGuard)
  findAll(@Context() ctx) {
    return this.userService.findAll();
  }

  @Query('user')
  @UseGuards(JwtAuthGuard)
  findOne(@Args('username') username: string, @Context() ctx) {
    return this.userService.findOne({ username: username });
  }
}
