// Erstelle ein Array von Personenobjekten
let personen = [
    { name: "Luca", alter: 30, beruf: "Entwickler" },
    { name: "Anna", alter: 28, beruf: "Designer" },
    { name: "Tom", alter: 35, beruf: "Manager" }
];

// Verwende die map() Methode, um eine Liste der Berufe zu erstellen
let berufe = personen.map(person => person.beruf);
console.log("Liste der Berufe: ", berufe); // Ausgabe: ["Entwickler", "Designer", "Manager"]

// Füge eine neue Person mit dem Spread-Operator hinzu
let neuePerson = { name: "Sarah", alter: 25, beruf: "Marketing" };
let aktualisiertePersonen = [...personen, neuePerson];
console.log("Aktualisierte Personenliste: ", aktualisiertePersonen);
