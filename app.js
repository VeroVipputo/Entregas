//--------------------- ENTREGA 1 --------------------- //
class Usuario{
    constructor(nombre, apellido, libros, mascota){
        this.nombre = nombre; 
        this.apellido = apellido; 
        this.libros = libros; 
        this.mascota = mascota; 
    }
    
    getFullName(){
        console.log(`El usuario es:${this.nombre} ${this.apellido}`);
    }
    addMascota(nameMascota){
        this.mascota.push(nameMascota);
    }
    countMascotas() {
        console.log(this.mascota.length);
    }
    addBook(nombre, autor){
        this.libros.push({nombre, autor})
    }
    getBookNames(){
        console.log(this.libros.map(book => book.nombre));
    }

}

let user = new Usuario ("Verónica", "Andrea", [],[]);
user.addMascota('Perro');
user.addMascota('Gato');

user.countMascotas() 

user.addBook('Harry Potter', 'J. K. Rowling')
user.addBook('El Principito', 'Antoine de Saint-Exupéry')

user.getFullName();
user.countMascotas();
user.getBookNames();

