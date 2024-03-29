import { JSX } from "solid-js";
import Task from "~/app/entities/Task";
interface TaskProps {
  task: Task;
}

const TaskDisplay = (props: TaskProps): JSX.Element => {
  const t = props.task;
  return (
    <div>
      {t.link ? (
        <p class="text-left">
          <a href={t.link?.toString()} target="_blank()" class="text-blue-500">
            {t.link.toString()}
          </a>
        </p>
      ) : (
        ""
      )}
      <h3>{t.title}</h3>
      <p>{t.body}</p>
      {t.toString()}
    </div>
  );
};

export default TaskDisplay;
