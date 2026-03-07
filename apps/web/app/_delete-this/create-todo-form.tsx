"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@repo/ui/button";
import { Field, FieldError, FieldLabel } from "@repo/ui/field";
import { Input } from "@repo/ui/input";
import { Spinner } from "@repo/ui/spinner";
import { Plus } from "lucide-react";
import { useTransition } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { createTodo } from "@/app/_delete-this/actions";

const FormSchema = z.object({
  title: z
    .string()
    .min(3, "Todo title must be at least 3 characters.")
    .max(27, "Todo title must be at most 32 characters."),
});

export const CreateTodoForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
    },
  });

  const [isPending, startTransition] = useTransition();

  function onSubmit(data: z.infer<typeof FormSchema>) {
    startTransition(async () => {
      await createTodo({ title: data.title });
    });
  }

  return (
    <form className="flex gap-2" onSubmit={form.handleSubmit(onSubmit)}>
      <Controller
        control={form.control}
        name="title"
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel className="sr-only" htmlFor="title">
              Todo Title
            </FieldLabel>
            <Input
              {...field}
              aria-invalid={fieldState.invalid}
              autoComplete="off"
              id="title"
              placeholder="subscribe to Tobi Mey"
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <Button disabled={isPending} type="submit">
        {isPending ? <Spinner /> : <Plus />}
        Add Todo
      </Button>
    </form>
  );
};
