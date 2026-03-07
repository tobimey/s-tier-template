"use server";

import { db } from "@repo/db";
import { type NewTodo, todosTable } from "@repo/db/schema";
import { eq } from "drizzle-orm";
import { updateTag } from "next/cache";

export async function checkDatabaseConnection() {
  try {
    await db.select().from(todosTable);
    return {
      success: true,
      message: "Connected to the database",
    };
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "Failed to connect to the database";
    return {
      success: false,
      message: `${errorMessage}, did you run \`pnpm db:push\` in the db package?`,
    };
  }
}

export async function createTodo(todo: NewTodo) {
  // put auth checks here!

  await db.insert(todosTable).values({ title: todo.title });
  updateTag("todos");
}

export async function updateTodo(id: string, completed: boolean) {
  // put auth checks here!

  await db.update(todosTable).set({ completed }).where(eq(todosTable.id, id));
  updateTag("todos");
}

export async function deleteTodo(id: string) {
  // put auth checks here!

  await db.delete(todosTable).where(eq(todosTable.id, id));
  updateTag("todos");
}
