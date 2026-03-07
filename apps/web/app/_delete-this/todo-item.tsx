"use client";

import type { Todo } from "@repo/db/schema";
import { Button } from "@repo/ui/button";
import { Spinner } from "@repo/ui/spinner";
import { cn } from "@repo/ui/utils";
import { Trash2 } from "lucide-react";
import { useTransition } from "react";
import { deleteTodo, updateTodo } from "./actions";

export const TodoItem = ({ todo }: { todo: Todo }) => {
  const [isUpdatePending, startUpdateTransition] = useTransition();
  const [isDeletePending, startDeleteTransition] = useTransition();

  const handleUpdateTodo = (id: string, completed: boolean) => {
    startUpdateTransition(async () => {
      await updateTodo(id, completed);
    });
  };

  const handleDeleteTodo = (id: string) => {
    startDeleteTransition(async () => {
      await deleteTodo(id);
    });
  };

  return (
    <li className="flex gap-2" key={todo.id}>
      <button
        className="flex-1 text-left"
        disabled={isUpdatePending}
        onClick={() => handleUpdateTodo(todo.id, !todo.completed)}
        type="button"
      >
        <h3 className={cn(todo.completed && "line-through")}>{todo.title}</h3>
      </button>
      <Button
        disabled={isDeletePending}
        onClick={() => handleDeleteTodo(todo.id)}
        variant="outline"
      >
        {isDeletePending ? <Spinner /> : <Trash2 />}
      </Button>
    </li>
  );
};
