/// <reference path="./Teacher.ts" />

namespace Subjects {
  export interface Subject {
    setTeacher(teacher: Teacher): void;
  }
}
