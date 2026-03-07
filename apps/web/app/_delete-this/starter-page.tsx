import { Tabs, TabsContent, TabsList, TabsTrigger } from "@repo/ui/tabs";
import { SetupList } from "@/app/_delete-this/setup-list";
import { TodoList } from "@/app/_delete-this/todo-list";

export const StarterPage = () => {
  return (
    <div className="flex h-dvh w-full justify-center pt-20 md:pt-40">
      <Tabs className="w-full max-w-xl gap-4">
        <TabsList>
          <TabsTrigger value="setup">Setup</TabsTrigger>
          <TabsTrigger value="todo">Todo</TabsTrigger>
        </TabsList>
        <TabsContent value="setup">
          <SetupList />
        </TabsContent>
        <TabsContent value="todo">
          <TodoList />
        </TabsContent>
      </Tabs>
    </div>
  );
};
