import { sql } from "drizzle-orm";
import { boolean, pgTable, text, timestamp } from "drizzle-orm/pg-core";

const baseColumns = {
  createdAt: timestamp("created_at").notNull().default(sql`now()`),
  updatedAt: timestamp("updated_at").notNull().default(sql`now()`),
};

export const todosTable = pgTable("todos", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  title: text().notNull(),
  completed: boolean().notNull().default(false),
  ...baseColumns,
});

export type Todo = typeof todosTable.$inferSelect;
export type NewTodo = typeof todosTable.$inferInsert;
