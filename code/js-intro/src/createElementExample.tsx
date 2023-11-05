/** @jsx createElement */
import { createElement } from './createElement';

type Student = {
  name: string;
  number: number;
};

const students: Array<Student> = [
  {
    name: 'Alice',
    number: 12345,
  },
  {
    name: 'Bob',
    number: 12346,
  },
  {
    name: 'Carol',
    number: 12347,
  }
];

export function renderStudents(students: Array<Student>): HTMLElement {
  return createElement(
    'div',
    {},
    students.map(student =>
      createElement(
        'div',
        {},
        createElement(
          'dl',
          {},
          createElement('dt', {}, 'Name'),
          createElement('dd', {}, student.name),
          createElement('dt', {}, 'Number'),
          createElement('dd', {}, student.number)
        )
      )
    )
  );
}

export function renderStudentsUsingTsx(students: Array<Student>): HTMLElement {
  return (
    <div>
      {students.map(student => (
        <div>
          <dl>
            <dt>Name</dt>
            <dl>{student.name}</dl>
            <dt>Number</dt>
            <dl>{student.number}</dl>
          </dl>
        </div>
      ))}
    </div>
  );
}

export function example() {
  const parent = document.getElementById('main-div');
  parent.appendChild(renderStudentsUsingTsx(students));
}
