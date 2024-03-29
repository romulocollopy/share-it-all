export default class Task {
  link?: URL;
  title: string;
  date: Date;
  body: string = "";
  done: boolean = false;
  category: Category = Category.UNCATEGORIZED;

  constructor(newTask: {
    title: string;
    date?: Date;
    done?: boolean;
    link?: string;
    category?: Category;
    body?: string;
  }) {
    this.title = newTask.title || "New task";
    if (newTask.link) this.link = new URL(newTask.link);
    if (newTask.done) this.done = newTask.done;
    if (newTask.category) this.category = newTask.category;
    this.body = newTask.body ? newTask.body : "";
    this.date = newTask.date ? newTask.date : new Date();
  }
  toString() {
    return [
      `${this.title} ${this.link ? this.link : ""}`,
      this.body,
      this.date,
    ].join("\n");
  }
}

export enum Category {
  UNCATEGORIZED = "",
  WORK = "",
  READ = "",
}
