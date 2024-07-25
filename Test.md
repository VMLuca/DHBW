---
title: "JavaScript"
author: "Luca Berres"
theme: "metropolis"
color: "beaver"
toc: true
toc_depth: 4
---

# Allgemines zu JavaScript

## Allgemeines

- entwickelt 1995 von Brendan Eich um Webseiten mit Interaktion auszustatten
- Eine der beliebtesteten Programmiersprachen
- Trotz Namensähnlichkeit nicht mit JAVA verwandt, aber beide orientieren sich von der Syntax an C
  ![Test](img/stackoverflow.png){height=150%}

## Wer steht hinter JavaScript

ECMA International (früher: European Computer Manufacturers Association)

![ECMA](img/ecmascript.png)

## Wo läuft JavaScript?

![JavaScript Runtime](img/javascript_runtime.png)

## Auf welchen Plattformen läuft JavaScript?

- Server Applikationen-> Node.js
- Desktop Applikationen -> Electron
- Mobile Applikationen -> React Native oder Ionic

# Syntax

# Einbindung JavaScript

## Eingebettetes im HTML

```html
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <title>Meine Webseite</title>
  </head>
  <body>
    <h1>Willkommen auf meiner Webseite</h1>
    <script>
      console.log("Hallo Welt");
    </script>
  </body>
</html>
```

---

## Extern referenziert im HTML

1. Erstelle eine Datei namens script.js mit folgendem Inhalt:

```javascript
alert("Hallo, Welt!");
```

2. Binde die externe Datei in dein HTML-Dokument ein

```html
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <title>Meine Webseite</title>
  </head>
  <body>
    <h1>Willkommen auf meiner Webseite</h1>
    <script src="script.js"></script>
  </body>
</html>
```

---

## Konsole

1. Öffne die Entwicklertools in deinem Browser: In Chrome: Rechtsklick -> "Untersuchen" -> Tab "Konsole" oder <kbd>F12</kbd>

2. Führe JavaScript-Code direkt in der Konsole aus:

```javascript
console.log("Hallo, Welt!");
```

---

## Standalone

1. Erstelle eine Datei mit folgendem Inhalt und speicher sie als Test.js ab

```javascript
console.log("Hallo, Welt!");
```

2. Öffne sie mit einem Browser
3. Öffne die Konsole wie zuvor gezeigt

---

# Allgemine Programmierkonzepte

## Kommenatere

## Variables

### Übersicht

- speichern Daten temporär
- Analogie: beschrifteter Karton mit Inhalt

---

| **Kom-ponente (DE)** | **Kom-ponente (EN)** | **Beschreibung**                                                            | **Beispiel**    |
| -------------------- | -------------------- | --------------------------------------------------------------------------- | --------------- |
| Bezeichner           | Identifier           | Name der Variable, die ihren Wert bezeichnet.                               | test            |
| Literal              | Literal              | Wert, der der Variable zugewiesen wird.                                     | 42, "Text"      |
| Schlüssel-wort       | Keyword              | Reserviertes Wort in der Programmiersprache für Deklaration oder Steuerung. | let, const, var |

---

### Keyword in JavaScript

- var (veraltet, weil globaler scope(Geltungsbereich))
- let (block-scoped -> Geltungsbereich ist eine näheste von geschweiften Klammern umschlossenen Syntaxen, z.B. if statement)
- const (block-scoped, kann nicht nochmals zugewiesen werden)

---

### Numerische und Boolsche Literals

| **Typ**                 | **Beispiel**          |
| ----------------------- | --------------------- |
| Hexadezimale Konstanten | `var test = 0x12f`    |
| Binäre Konstanten       | `var test = 0b011101` |
| Oktale Konstanten       | `var test = 0o767`    |
| Ganzzahlenkonstanten    | `var test = 123456`   |
| Gleitkommazahlen        | `var test = 12.34`    |
|                         | `var test = 12.34e2`  |
| Boolesche Konstanten    | `var test = true`     |
|                         | `var test = false`    |

---

### Zeichenketten/Strings Literals

```javascript
var jsString = `Das ist ein String`; // Backticks
var jsString = "Das ist ein String"; // einfache Anführungs-zeichen
var jsString = "Das ist ein String"; // doppelte Anführungs-zeichen

// Vorteil von Backticks:
var jsString = `half of 100 is ${100 / 2}`;
console.log(jsString);
// -> half of 100 is 50
```

## Operatoren

| Operator | Bedeutung                              | Beispiel     |
| -------- | -------------------------------------- | ------------ |
| +, +=    | Addition                               | x+=3         |
| -, -=    | Subtraktion                            | x=x-5        |
| _, _=    | Multiplikation                         | a=b\*c       |
| /, /=    | Division                               | z=e/5        |
| %        | Modulus                                | m=5 % 3      |
| ++, --   | Inkrement, Dekrement                   | x++ oder y-- |
| <<, <<=  | Bitweise Linksschieben                 | x << 4       |
| >>, >>=  | Bitweise Rechtsschieben                | y >> 5       |
| >>>      | Bitweise Linksschieben mit Nullfüllung | a >>> b      |
| &        | Bitweise UND                           | a & b        |
| \|       | Bitweise ODER                          | a \| b       |
| ^        | Bitweise Negieren                      | a ^ b        |

## Typen

- Dynamisch typisiert -> bedeutet nicht, das JS eine untypisierte Sprache ist. Vielmehr werden die Typen automatisiert bei der Wertzuweisung vergeben

- Typen:​

  - Number: Zahlen​
  - String: Zeichenketten​
  - Boolean: logische Werte​
  - Object: alles andere

- Spezielle Zustände von Variablen​
  - undefined bedeutet, dass einer Variable kein Wert zugewiesen wurde.
  - null ist ein absichtlich zugewiesener Wert, der "kein Wert" oder "leerer Wert" bedeutet

## Automatische Typumwandlung

Wird ein Operator auf einen Wert eines unpassenden Typs angewandt, wandelt JS diesen Wert stillschweigend in den erforderlichen Wert um​ => implizierte Typumwandlung

```javascript
console.log(8 * null); // -> 0
```

8 \* null ergibt 0, da null bei arithmetischen Operationen zu 0 konvertiert wird.

```javascript
console.log("5" - 1); // -> 4
```

"5" - 1 ergibt 4, weil der String "5" bei Subtraktion zu einer Zahl konvertiert wird.

```javascript
console.log("5" + 1); // -> 51
```

"five" kann nicht in eine Zahl umgewandelt werden.
Der +-Operator führt hier zur Zeichenkettenverknüpfung

```javascript
console.log("five" * 2); // -> NaN
```

"five" kann nicht in eine Zahl umgewandelt werden

```javascript
console.log(false == 0); // -> true
```

false wird in 0 umgewandelt und ist gleich 0 bei losem Vergleich (==).

## Short Circuit Evaluation

### Erklärung

Short Circuit Evaluation ist eine Programmiertechnik, bei der der Auswertungsprozess eines logischen Ausdrucks frühzeitig beendet wird, sobald das Ergebnis feststeht.

### Beispiele in JavaScript

### Logisches UND (&&)

```javascript
const a = false;
const b = true;
const result = a && b; // result ist false,
```

# JavaScript im Browser
