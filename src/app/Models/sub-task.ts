export class SubTask {
  /*
  
        "details": "Start in first course ",
        "id": "c18b3e4d-4b4e-48fa-8ef9-08187fd7fd33",
        "subtask": "Course1",
        "taskid": "78b26ac9-a437-40b4-b68a-0585a075e734",
        "taskdate": "2020-08-24",
        "progress": "0%"
   */
  public id: string="";
  public taskid: string;
  public taskdate: any;
  public details: string;
  public subtask: string; // the task name
  public progress: number;
  constructor(taskid?, id?, taskdate?, details?, subtask?, progress?) {
    this.taskid = taskid;
    this.id = id;
    this.taskdate = taskdate;
    this.details = details;
    this.subtask = subtask;
    this.progress = progress;
  }

}
