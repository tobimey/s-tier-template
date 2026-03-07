import { checkIsDatabaseSecretSet, db } from "@repo/db";
import { todosTable } from "@repo/db/schema";
import { H2, P } from "@repo/ui/typography";
import { cacheTag } from "next/cache";
import { CreateTodoForm } from "@/app/_delete-this/create-todo-form";
import { TodoItem } from "@/app/_delete-this/todo-item";

export const TodoList = async () => {
  "use cache";
  cacheTag("todos");

  if (!checkIsDatabaseSecretSet()) {
    return <P variant="muted">No database secret found</P>;
  }

  const dbTodos = await db.select().from(todosTable);

  return (
    <div className="flex w-full max-w-2xl flex-col gap-4">
      <H2>Todo List Example ✏️</H2>
      <CreateTodoForm />
      <ul className="flex max-h-[400px] flex-col gap-2 overflow-y-auto">
        {dbTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};
