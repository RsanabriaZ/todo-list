import { TaskData } from '../components';

const localKey = 'tasks';

export default class TaskService {
  static async get(): Promise<Array<TaskData>> {
    const tasks = JSON.parse(localStorage.getItem(localKey) ?? '[]');
    return tasks;
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
