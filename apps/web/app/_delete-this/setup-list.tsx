"use client";

import { Checkbox } from "@repo/ui/checkbox";
import {
  Item,
  ItemContent,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@repo/ui/item";
import { H2, P } from "@repo/ui/typography";
import { useState } from "react";

const initialTodos = [
  {
    id: "1",
    title: "pnpm i + pnpm dev - you started the app",
    completed: true,
  },
  {
    id: "2",
    title: "Set up your needed .env variables 🔑",
    completed: false,
  },
  {
    id: "3",
    title: "Delete the file 'todo-list.tsx' 🗑️",
    completed: false,
  },
];

export const SetupList = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="flex w-full flex-col gap-8">
      <div className="flex flex-col gap-2">
        <H2>Get Started with the S-Tier Stack 👾</H2>
        <P variant="muted">the best web development stack possible</P>
      </div>
      <ItemGroup>
        {todos.map((todo) => (
          <Item
            className={`cursor-pointer items-center border-b transition-opacity ${
              todo.completed ? "opacity-60" : ""
            }`}
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            variant={todo.completed ? "muted" : "default"}
          >
            <ItemMedia>
              <Checkbox
                checked={todo.completed}
                onCheckedChange={() => toggleTodo(todo.id)}
                onClick={(e) => e.stopPropagation()}
              />
            </ItemMedia>
            <ItemContent>
              <ItemTitle
                className={
                  todo.completed ? "text-muted-foreground line-through" : ""
                }
              >
                {todo.title}
              </ItemTitle>
            </ItemContent>
          </Item>
        ))}
      </ItemGroup>
    </div>
  );
};
