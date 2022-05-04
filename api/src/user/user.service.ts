import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  findOne(userWhereUniqueInput: Prisma.UserWhereUniqueInput) {
    return this.prisma.user.findUnique({
      where: {
        username: userWhereUniqueInput?.username,
        email: userWhereUniqueInput?.email,
      },
    });
  }
  findAll() {
    return this.prisma.user.findMany();
  }
  create(createUserInput: Prisma.UserCreateInput) {
    const created = new Date();
    const user = this.prisma.user.create({
      data: { ...createUserInput, createdAt: created },
    });
    return user;
  }
}
