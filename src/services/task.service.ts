import { TaskData } from '../components';

const localKey = 'tasks';

const all = (tasks: Array<TaskData>) => tasks;

const pending = (tasks: Array<TaskData>) =>
  tasks.filter((task) => task.completed);
const completed = (tasks: Array<TaskData>) =>
  tasks.filter((task) => !task.completed);

const actions = {
  all,
  pending,
  completed,
};

export default class TaskService {
  static async get(
    filter: 'all' | 'pending' | 'completed' = 'all'
  ): Promise<Array<TaskData>> {
    const tasks = JSON.parse(localStorage.getItem(localKey) ?? '[]');
    return actions[filter](tasks);
  }

  static async create(task: TaskData): Promise<TaskData> {
    task.id = Date.now().toString();

    const tasks = await this.get();
    tasks.push(task);

    localStorage.setItem(localKey, JSON.stringify(tasks));

    return task;
  }

  static async update(task: TaskData): Promise<TaskData> {
    const tasks = await this.get();

    const taskIndex = tasks.findIndex((t) => t.id === task.id);

    tasks[taskIndex] = task;

    localStorage.setItem(localKey, JSON.stringify(tasks));

    return task;
  }
}
