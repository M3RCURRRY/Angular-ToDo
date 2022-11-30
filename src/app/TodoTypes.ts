export enum Priority {
  HIGH = "High",
  MEDIUM = "Medium",
  LOW = "Low"
}

export interface ITask {
  id?: number;
  priority: Priority; // Same as status
  text: string;
  daysLeft: number;
}