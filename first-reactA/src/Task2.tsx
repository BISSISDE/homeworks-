import "./AboutMe.css";

const tasks = [
  { id: 1, title: "React үйрену", completed: true },
  { id: 2, title: "UI/UX дизайн жасау", completed: false },
  { id: 3, title: "Жоба жасау", completed: false },
];

function TaskItem({ title, completed }) {
  if (!completed) {
    return (
      <div>
        <s>{title}</s>
      </div>
    );
  } else {
    return <div>{title}</div>;
  }
}

function TaskList() {
  return (
    <div>
      <h1 className="InfoH1">Тапсырмалар тізімі</h1>
      <TaskItem title={tasks[0].title} completed={tasks[0].completed} />
      <TaskItem title={tasks[1].title} completed={tasks[1].completed} />
      <TaskItem title={tasks[2].title} completed={tasks[2].completed} />
    </div>
  );
}

export default TaskList;
