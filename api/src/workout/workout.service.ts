import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { WorkoutCreateInput } from 'src/@generated/prisma-nestjs-graphql/workout/workout-create.input';

@Injectable()
export class WorkoutService {
  constructor(private prisma: PrismaService) {}
  async create(workout: WorkoutCreateInput) {
    return this.prisma.workout.create({
      data: {
        ...workout,
      },
    });
  }
}
