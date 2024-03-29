const input = require("prompt-sync")({ sigint: true });

const user_number: number = parseInt(input("Entrez un nombre : "));

// Création d'une fonction fizzbuzz qui prends en paramètre le nombre choisi par l'utilisateur
// Ici on utilise l'operateur modulo "%" qui permet de récupérer le reste d'une division
// Si le reste est egal à 0, alors le nombre est divisible par le nombre choisi
function fizzbuzz(number: number) {
  // On vérifie que la saisie de l'utilisateur est bien un nombre
  if (isNaN(number)) return console.log("Votre saisie est invalide...");

  // On boucle jusqu'au nombre choisi par l'utilisateur
  let i: number = 1; // On demare la boucle à 1
  while (i <= number) {
    // REGLE 1 : "if number can be divided by 3 AND 5 : display FizzBuzz;"
    if (i % 3 === 0 && i % 5 === 0) console.log(i + " FizzBuzz");

    // REGLE 2 : "if number can be divided by 3: display Fizz;"
    else if (i % 3 === 0) console.log(i + " Fizz");

    // REGLE 3 : "if number can be divided by 5: display Buzz;"
    else if (i % 5 === 0) console.log(i + " Buzz");

    // REGLE 4 : "else: display the number."
    else console.log(i);

    i++;
  }
}

fizzbuzz(user_number);

