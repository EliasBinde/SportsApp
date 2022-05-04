import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Prisma, User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}
  async validateUser(username: string, password: string): Promise<any> {
    const user: User = await this.userService.findOne({ username: username });
    if (!user?.password || !user?.username) return null;
    const valid = await bcrypt.compare(password, user?.password);
    if (valid) {
      return user;
    }
    return null;
  }

  async login(user: User) {
    return {
      access_token: this.jwtService.sign({
        username: user.username,
        sub: user.id,
      }),
      user: user,
    };
  }
  async signup(signupUserInput: any) {
    //replace any!!!!!!!!!!

    const user = await this.userService.findOne({
      username: signupUserInput.username,
    });

    const email = await this.userService.findOne({
      email: signupUserInput.email,
    });
    if (user) throw new Error('User already exits');
    if (email) throw new Error('Email already in use');

    const password = await bcrypt.hash(signupUserInput.password, 10);
    signupUserInput.password = password;

    return this.userService.create(signupUserInput);
  }
}
