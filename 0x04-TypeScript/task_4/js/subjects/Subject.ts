// task_4/js/subjects/Subject.ts
/// <reference path="./Teacher.ts" />

namespace Subjects {
  export class Subject {
    teacher!: Subjects.Teacher;

    setTeacher(teacher: Subjects.Teacher) {
      this.teacher = teacher;
    }
  }
}
