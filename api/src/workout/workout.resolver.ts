import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { WorkoutCreateInput } from 'src/@generated/prisma-nestjs-graphql/workout/workout-create.input';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { WorkoutService } from './workout.service';

@Resolver('Workout')
export class WorkoutResolver {
  constructor(private readonly workoutService: WorkoutService) {}
  //create workout mutation
  @Mutation('createWorkout')
  @UseGuards(JwtAuthGuard)
  async create(@Args('workout') workout: WorkoutCreateInput) {
    return this.workoutService.create(workout);
  }
}
