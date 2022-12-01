import { ITask, Priority } from "./TodoTypes";

export const TASKS: ITask[] = [
  {
    id: 0,
    priority: Priority.HIGH,
    text: "Find a job",
    daysLeft: 20
  },
  {
    id: 1,
    priority: Priority.LOW,
    text: "Do cleaning",
    daysLeft: 2
  },
  {
    id: 2,
    priority: Priority.MEDIUM,
    text: "Deliver the food",
    daysLeft: 1
  }
]