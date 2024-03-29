import Task from "../entities/Task";

export default class TaskRepository {
  all() {
    return [
      new Task({ title: "A Task", link: "http://paraplu.app" }),
      new Task({ title: "Another Task" }),
      new Task({ title: "One more Task" }),
    ];
  }
}
