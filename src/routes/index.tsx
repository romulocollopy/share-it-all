import CardList from "~/components/CardList";
import TaskRepository from "~/app/repositories/TaskRepository";
import TaskDisplay from "~/components/Task";

export default function Home() {
  const repo = new TaskRepository();
  const cards = repo.all().map((v) => <TaskDisplay task={v} />);
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
        Share it All!
      </h1>
      <CardList cards={cards} />
    </main>
  );
}
