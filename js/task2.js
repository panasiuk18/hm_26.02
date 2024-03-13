// Task 2 Створити об'єкт "Студент" з методами для додавання та видалення
// предметів, які він вивчає.

// ```js
// let student = {
//   subjects: [],
// };

// student.addSubject('Математика'); // Предмет Математика додано.
// student.addSubject('Історія'); // Предмет Історія додано.
// student.addSubject('Математика'); // Ви вже вивчаєте предмет Математика.
// console.log(student.subjects); // ["Математика", "Історія"]
// student.removeSubject('Історія'); // Предмет Історія видалено.
// console.log(student.subjects); // ["Математика"]
// student.removeSubject('Англійська'); // Ви не вивчаєте предмет Англійська.
// ```

let student = {
    subjects: [],
  
    // Додати предмет
    addSubject(subject) {
      if (this.subjects.includes(subject)) {
        console.log(`Ви вже вивчаєте предмет ${subject}.`);
        return;
      }
  
      this.subjects.push(subject);
      console.log(`Предмет ${subject} додано.`);
    },
  
    // Видалити предмет
    removeSubject(subject) {
      if (!this.subjects.includes(subject)) {
        console.log(`Ви не вивчаєте предмет ${subject}.`);
        return;
      }
  
      const subjectIndex = this.subjects.indexOf(subject);
      this.subjects.splice(subjectIndex, 1);
      console.log(`Предмет ${subject} видалено.`);
    },
  };
  
  // Приклади використання
  student.addSubject('Математика');
  student.addSubject('Історія');
  student.addSubject('Математика');
  console.log(student.subjects);
  student.removeSubject('Історія');
  console.log(student.subjects);
  student.removeSubject('Англійська');
  