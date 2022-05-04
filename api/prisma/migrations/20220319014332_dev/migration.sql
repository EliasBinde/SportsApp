-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Room" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "tags" TEXT[],
    "owner" TEXT NOT NULL,
    "private" BOOLEAN NOT NULL DEFAULT true,
    "invited" TEXT[],
    "mods" TEXT[],

    CONSTRAINT "Room_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ActiveWorkout" (
    "id" SERIAL NOT NULL,
    "roomId" INTEGER NOT NULL,
    "workoutId" INTEGER NOT NULL,
    "customWorkout" BOOLEAN NOT NULL,
    "activeExcrcise" INTEGER NOT NULL,
    "customExcircise" BOOLEAN NOT NULL,

    CONSTRAINT "ActiveWorkout_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Workout" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "difficulty" INTEGER NOT NULL,
    "duration" INTEGER NOT NULL,
    "exerciseIds" INTEGER[],

    CONSTRAINT "Workout_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomWorkout" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "ownerId" INTEGER NOT NULL,
    "difficulty" INTEGER NOT NULL,
    "duration" INTEGER NOT NULL,
    "exerciseIds" INTEGER[],
    "public" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "CustomWorkout_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Exercise" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "targetMuscels" TEXT[],
    "videoLink" TEXT NOT NULL,
    "timePerRep" INTEGER,
    "timeTotal" INTEGER,
    "useTimeTotal" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Exercise_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomExercise" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "ownerId" INTEGER NOT NULL,
    "targetMuscels" TEXT[],
    "videoLink" TEXT NOT NULL,
    "timePerRep" INTEGER,
    "timeTotal" INTEGER,
    "useTimeTotal" BOOLEAN NOT NULL DEFAULT false,
    "public" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "CustomExercise_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "ActiveWorkout_roomId_key" ON "ActiveWorkout"("roomId");

-- AddForeignKey
ALTER TABLE "ActiveWorkout" ADD CONSTRAINT "ActiveWorkout_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomWorkout" ADD CONSTRAINT "CustomWorkout_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomExercise" ADD CONSTRAINT "CustomExercise_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
