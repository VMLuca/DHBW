// JavaScript, um das aktuelle Jahr einzufügen
const currentYear = new Date().getFullYear();
document.getElementById("current-year").textContent = currentYear;



document.addEventListener("DOMContentLoaded", () => {
    const threads = [
     { id: 1, title: "effwfwef", createdAt: new Date(2027) },
     { id: 1, title: "Thread 1", createdAt: new Date() },
     { id: 1, title: "Thread 1", createdAt: new Date() },
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
      threadsContainer.innerHTML = threads.map(thread => `
        <div class="thread" id="thread-${thread.id}">
          <h2>${thread.title}</h2>
          <p>${thread.createdAt.toLocaleString()}</p>
        </div>
      `).join("");
  
      document.getElementById("sort-select").value = sortBy;
      document.getElementById("sort-select").addEventListener("change", (e) => {
        sortBy = e.target.value;
        sortThreads(sortBy);
        renderThreads();
      });
  
      document.getElementById("create-thread-button").addEventListener("click", () => {
        window.location.href = "/create-thread";
      });
    };
  
    sortThreads(sortBy);
    renderThreads();
  });