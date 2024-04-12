// Definición de la clase Persona
class Persona {
  constructor(nombre, apellidos, identificacion, estadoCivil) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.identificacion = identificacion;
    this.estadoCivil = estadoCivil;
  }

  // Método para cambiar el estado civil
  cambiarEstadoCivil(nuevoEstadoCivil) {
    this.estadoCivil = nuevoEstadoCivil;
    console.log(`Estado civil actualizado: ${this.estadoCivil}`);
  }
}

// Definición de la clase Empleado, derivada de Persona
class Empleado extends Persona {
  constructor(nombre, apellidos, identificacion, estadoCivil, añoIncorporacion, numDespacho) {
    super(nombre, apellidos, identificacion, estadoCivil);
    this.añoIncorporacion = añoIncorporacion;
    this.numDespacho = numDespacho;
  }

  // Método para reasignar el despacho
  reasignarDespacho(nuevoDespacho) {
    this.numDespacho = nuevoDespacho;
    console.log(`Despacho reasignado a: ${this.numDespacho}`);
  }
}

// Definición de la clase Estudiante, derivada de Persona
class Estudiante extends Persona {
  constructor(nombre, apellidos, identificacion, estadoCivil, cursoMatriculado) {
    super(nombre, apellidos, identificacion, estadoCivil);
    this.cursoMatriculado = cursoMatriculado;
  }

  // Método para cambiar de curso
  cambiarCurso(nuevoCurso) {
    this.cursoMatriculado = nuevoCurso;
    console.log(`Curso matriculado actualizado: ${this.cursoMatriculado}`);
  }
}

// Definición de la clase Profesor, derivada de Empleado
class Profesor extends Empleado {
  constructor(nombre, apellidos, identificacion, estadoCivil, añoIncorporacion, numDespacho, departamento) {
    super(nombre, apellidos, identificacion, estadoCivil, añoIncorporacion, numDespacho);
    this.departamento = departamento;
  }

  // Método para cambiar de departamento
  cambiarDepartamento(nuevoDepartamento) {
    this.departamento = nuevoDepartamento;
    console.log(`Departamento asignado actualizado: ${this.departamento}`);
  }
}

// Definición de la clase PersonalDeServicio, derivada de Empleado
class PersonalDeServicio extends Empleado {
  constructor(nombre, apellidos, identificacion, estadoCivil, añoIncorporacion, numDespacho, seccionAsignada) {
    super(nombre, apellidos, identificacion, estadoCivil, añoIncorporacion, numDespacho);
    this.seccionAsignada = seccionAsignada;
  }

  // Método para cambiar de sección asignada
  cambiarSeccionAsignada(nuevaSeccion) {
    this.seccionAsignada = nuevaSeccion;
    console.log(`Sección asignada actualizada: ${this.seccionAsignada}`);
  }
}

// Ejemplo de uso de los métodos
let empleado = new Empleado("Pedro", "Gomez", "987654321", "Soltero", 2010, "A1");
empleado.reasignarDespacho("B2");

let estudiante = new Estudiante("Maria", "Lopez", "456789123", "Soltera", "2º de Bachillerato");
estudiante.cambiarCurso("3º de Bachillerato");

let profesor = new Profesor("Ana", "Martinez", "789123456", "Casada", 2005, "B3", "Ciencias");
profesor.cambiarDepartamento("Matemáticas");

let personalServicio = new PersonalDeServicio("Carlos", "Ruiz", "654987321", "Casado", 2015, "C2", "Limpieza");
personalServicio.cambiarSeccionAsignada("Administración");

console.log(empleado);
console.log(estudiante);
console.log(profesor);
console.log(personalServicio);