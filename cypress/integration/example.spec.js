// para poder evitar el erro de cy is not defined vamos a definir a cy como global




/* global cy */

// Este archivo sera el que contenga nuestras pruebas
// Para poder iniciar una prueba necesitamos darle un titulo
// en este caso usamos describe para darle un titulo
describe("Mi primera prueba con cypress", () => {
    // dentro de nuestro arrow function vamos a escribir las pruebas
    // que haremos ejemplo
    it("prueba home pokemon", () => {
      // aca vamos a verificar si es que nuestro home funciona o no
      //cy => cypress
      // Esto va a entrar a localhost:3000 y decirno si funciona o no
      cy.visit("https://proyecto-43nife889-jacks03.vercel.app/");
      // contains
      // Esto sirve para poder buscar algun texto en nuestra pagina
      // que busque la palabra pokedex
      cy.contains("Pokedex");
      // ahora vamos a buscar el boton que diga Detalle del pokemon
      cy.contains("Detalle del pokemon").click();
      // Reto quiero que despues de abrir el modal busque la palabra Habilidades
      cy.contains("Habilidades");
      // Como cierro el modal?
      // Nota recuerden que el texto debe ser el mismo que esta nuestro codigo
      // cy.contains("CERRAR").click();
      cy.contains("Cerrar").click();
    });
  
    // vamos a crear a otra prueba para /flags
    it("pruebas para banders", () => {
      cy.visit("https://proyecto-43nife889-jacks03.vercel.app/");
      // vamos a ver como podemos escribir en un input
      // Estamos buscando el primero input y luego de encontrarlos
      // estamos escribiendo peru en dicho input
      cy.wait(5000).then(() => {
        cy.get("input:first").type("peru");
        cy.contains("Republic of Peru").click();
      });
    });

    it("prueba de youube", ()=>{
        cy.visit("https://proyecto-43nife889-jacks03.vercel.app/")
        cy.wait(3000).then(()=>{
            cy.contains("director 332")
        })
    })

    it("prueba de login", () => {
        cy.visit("https://proyecto-43nife889-jacks03.vercel.app/");
        // ahora vamos a ver de que otra podemos acceder a los inputs
        // usando el name del inputs podemos encontrar uno especifico y
        // poder escribir en el
        cy.get('[name="email"]').type("pepe@gmail.com");
        cy.get('[name="password"]').type("123456");
        cy.contains("Iniciar Session").click();
        cy.url().should("include", "/youtube/administrador");
        // primero deben abrir el modal y luego hacer que escriba en cada input
        // finalmente darle click al boton Crear
        cy.contains("crear").click();
        cy.get('[name="director"]').type("hola");
        cy.get('[name="gender"]').type("dc");
        cy.get('[name="video_link"]').type("www.google.com");
        cy.get('[name="wallpaper"]').type("www.google.com");
        cy.contains("Crear").click();
        //eliminar la ultima pelicula que hemos hecho
        //recuerden que estamos accediendo al ultimo boton porque estamos usando .last() 
        cy.get(".delete-button").last().click();
        cy.contains("OK").click();
      });

  });