// 11. Crear un array de estudiantes donde cada estudiante tiene nombre, semestre y un array de materias 
// (cada materia tiene nombre, nota). Calcular el promedio de cada estudiante y el promedio de todos los estudiantes.

type Course = {
    name: string;
    grade: number;
};

type Student = {
    name: string;
    semester: number;
    course_list: Course[];
};

let roster: Student[] = [
    {
        name: "David Ruales",
        semester: 3,
        course_list: [
            { name: "Matemáticas", grade: 4.5 },
            { name: "Programación", grade: 4.8 },
            { name: "Física", grade: 3.8 }
        ]
    },
    {
        name: "Kevin Gómez",
        semester: 2,
        course_list: [
            { name: "Matemáticas", grade: 3.5 },
            { name: "Programación", grade: 2.2 },
            { name: "Inglés", grade: 4.6 }
        ]
    },
    {
        name: "Ana Milena",
        semester: 4,
        course_list: [
            { name: "Base de Datos", grade: 2.2 },
            { name: "Programación", grade: 1.9 },
            { name: "Redes", grade: 4.1 }
        ]
    }
]

let grade_point_average: number = 0
let student_GPA_list = []

for (let student of roster) {
    let current_GPA = 0
    for (let course of student.course_list) {
        current_GPA += course.grade / student.course_list.length
    }
    grade_point_average += current_GPA / roster.length
    student_GPA_list.push({name: student.name, GPA: current_GPA})
}

console.log('\nPromedios por cada estudiante:')
console.log(student_GPA_list)
console.log('\nPromedio general: ' + grade_point_average)

// 12. Imprimir el nombre de los estudiantes que tiene promedio mayor a 3.5

console.log('\nEstudiantes que tiene promedio mayor a 3.5')

for (let student of student_GPA_list) {
    if (student.GPA > 3.5) {
        console.log(student)
    }
}