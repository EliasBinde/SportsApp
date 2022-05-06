
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class LoginUserInput {
    username: string;
    password: string;
}

export class SignupUserInput {
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phone?: Nullable<string>;
}

export class CreateRoomInput {
    name: string;
    description?: Nullable<string>;
    tags?: Nullable<Nullable<string>[]>;
    private?: Nullable<boolean>;
}

export class CreateUserInput {
    username: string;
    email: string;
    password: string;
    phone?: Nullable<string>;
    firstName: string;
    lastName: string;
}

export class UpdateUserInput {
    password?: Nullable<string>;
    email?: Nullable<string>;
    phone?: Nullable<string>;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
}

export class ResetPasswordInput {
    authorizationToken: string;
    newPassword: string;
}

export class ChangePasswordInput {
    oldPassword: string;
    newPassword: string;
}

export class DeleteAccountInput {
    password: string;
}

export class CreateWorkoutInput {
    name?: Nullable<string>;
    description?: Nullable<string>;
    difficulty?: Nullable<number>;
    duration?: Nullable<number>;
    tags?: Nullable<Nullable<string>[]>;
    targetMuscles?: Nullable<Nullable<string>[]>;
    exerciseIds?: Nullable<Nullable<number>[]>;
}

export class LoginResponse {
    access_token: string;
    user: User;
}

export abstract class IMutation {
    abstract login(loginUserInput?: Nullable<LoginUserInput>): Nullable<LoginResponse> | Promise<Nullable<LoginResponse>>;

    abstract signup(signupUserInput?: Nullable<SignupUserInput>): Nullable<User> | Promise<Nullable<User>>;

    abstract createRoom(input?: Nullable<CreateRoomInput>): Nullable<Room> | Promise<Nullable<Room>>;

    abstract joinRoom(roomId: string): Nullable<Room> | Promise<Nullable<Room>>;

    abstract leaveRoom(roomId: string): Nullable<Room> | Promise<Nullable<Room>>;

    abstract queueWorkout(roomId: string, workoutId: string): Nullable<Room> | Promise<Nullable<Room>>;

    abstract dequeueWorkout(roomId: string): Nullable<Room> | Promise<Nullable<Room>>;

    abstract startWorkout(roomId: string): Nullable<Room> | Promise<Nullable<Room>>;

    abstract setExerciseProgress(roomId: string, progress: number): Nullable<Room> | Promise<Nullable<Room>>;

    abstract nextExercise(roomId: string): Nullable<Room> | Promise<Nullable<Room>>;

    abstract prevExercise(roomId: string): Nullable<Room> | Promise<Nullable<Room>>;

    abstract endWorkout(roomId: string): Nullable<Room> | Promise<Nullable<Room>>;

    abstract deleteRoom(roomId: string): Nullable<Room> | Promise<Nullable<Room>>;

    abstract createUser(createUserInput: CreateUserInput): Nullable<User> | Promise<Nullable<User>>;

    abstract updateUser(updateUserInput: UpdateUserInput): Nullable<User> | Promise<Nullable<User>>;

    abstract createWorkout(input?: Nullable<CreateWorkoutInput>): Nullable<Workout> | Promise<Nullable<Workout>>;
}

export class User {
    id?: Nullable<number>;
    username?: Nullable<string>;
    email?: Nullable<string>;
    phone?: Nullable<string>;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
}

export class Room {
    id: number;
    name: string;
    description?: Nullable<string>;
    tags?: Nullable<Nullable<string>[]>;
    owner: string;
    private: boolean;
    activeUsers?: Nullable<Nullable<number>[]>;
    activeWorkout?: Nullable<number>;
    activeExercise?: Nullable<number>;
    activeExerciseProgress?: Nullable<number>;
}

export abstract class IQuery {
    abstract findRooms(searchString?: Nullable<string>): Nullable<Nullable<Room>[]> | Promise<Nullable<Nullable<Room>[]>>;

    abstract user(username: string): Nullable<User> | Promise<Nullable<User>>;

    abstract users(searchString: string): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;
}

export abstract class ISubscription {
    abstract room(roomId?: Nullable<string>): Nullable<Room> | Promise<Nullable<Room>>;
}

export class Workout {
    id?: Nullable<number>;
    name?: Nullable<string>;
    description?: Nullable<string>;
    difficulty?: Nullable<number>;
    duration?: Nullable<number>;
    exerciseIds?: Nullable<number>;
}

export type DateTime = any;
type Nullable<T> = T | null;
