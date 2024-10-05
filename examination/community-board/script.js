// JavaScript, um das aktuelle Jahr einzufügen
const currentYear = new Date().getFullYear();
document.getElementById("current-year").textContent = currentYear;

document.addEventListener("DOMContentLoaded", () => {
  const threads = [
    {
      id: 1,
      title: "Neues Feature in der App",
      createdAt: new Date(2023, 9, 1),
      author: "Max",
      content: "Wir haben ein neues Feature in der App hinzugefügt, das die Benutzerfreundlichkeit verbessert. Probiert es aus und gebt uns Feedback!",
    },
    {
      id: 2,
      title: "Bug im Login-System",
      createdAt: new Date(2023, 9, 2),
      author: "Anna",
      content: "Es gibt einen Bug im Login-System, der dazu führt, dass einige Benutzer sich nicht anmelden können. Wir arbeiten an einer Lösung.",
    },
    {
      id: 3,
      title: "Wartungsarbeiten am Wochenende",
      createdAt: new Date(2023, 9, 3),
      author: "Tom",
      content: "Am kommenden Wochenende werden Wartungsarbeiten durchgeführt. Die App wird für einige Stunden nicht verfügbar sein. Wir bitten um euer Verständnis.",
    },
    {
      id: 4,
      title: "Neue API-Dokumentation",
      createdAt: new Date(2023, 9, 4),
      author: "Lisa",
      content: "Die API-Dokumentation wurde aktualisiert. Schaut euch die neuen Endpunkte und Beispiele an, um die Integration zu erleichtern.",
    },
    {
      id: 5,
      title: "Feedback zur Benutzeroberfläche",
      createdAt: new Date(2023, 9, 5),
      author: "John",
      content: "Wir würden gerne euer Feedback zur neuen Benutzeroberfläche hören. Was gefällt euch, was können wir verbessern?",
    },
  ];

  let sortBy = "date";

  const sortThreads = (sortBy) => {
    if (sortBy === "title") {
      threads.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "date") {
      threads.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    }
  };

  const renderThreads = () => {
    const threadsContainer = document.getElementById("threads-container");
    threadsContainer.innerHTML = threads
      .map(
        (thread) => `
           <div>
      <p>
        ${thread.author} - ${thread.createdAt.toLocaleString()}
      </p>
      <h2>${thread.title}</h2>
      <p>${thread.content}</p>
      <hr />
    </div>
      `
      )
      .join("");

    document.getElementById("sort-select").value = sortBy;
    document.getElementById("sort-select").addEventListener("change", (e) => {
      sortBy = e.target.value;
      sortThreads(sortBy);
      renderThreads();
    });

    document
      .getElementById("create-thread-button")
      .addEventListener("click", () => {
        window.location.href = "/create-thread";
      });
  };

  sortThreads(sortBy);
  renderThreads();
});
