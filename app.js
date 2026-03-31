const SUBJECTS = [
  "Physics",
  "Chemistry",
  "Biology",
  "History",
  "Geography",
  "English",
  "Hindi",
  "Economics",
  "Civics",
];

const SAMPLE_NOTES = [
  {
    id: 1,
    subject: "Physics",
    title: "Light - Reflection Basics",
    topic: "Chapter: Light",
    date: "2026-03-31",
    summary: "Key laws of reflection, types of mirrors, and simple ray diagrams for quick revision.",
    type: "PDF",
    fileUrl: "https://drive.google.com/file/d/1Jhtuy8V0eZNWX0-H5eiahRLAi9Ymhrn5/view?usp=sharing",
    category: "Today's Notes",
  },
  {
    id: 2,
    subject: "Chemistry",
    title: "Acids, Bases and Salts",
    topic: "Properties and examples",
    date: "2026-03-30",
    summary: "Short notes on indicators, pH, neutralization, and common everyday examples.",
    type: "Image",
    fileUrl: "#",
    category: "Revision Notes",
  },
  {
    id: 3,
    subject: "Biology",
    title: "Life Processes Summary",
    topic: "Nutrition and respiration",
    date: "2026-03-30",
    summary: "A compact explanation of how living organisms take in food, breathe, and transport materials.",
    type: "PDF",
    fileUrl: "#",
    category: "Today's Notes",
  },
  {
    id: 4,
    subject: "History",
    title: "Nationalism in India",
    topic: "Key events and movements",
    date: "2026-03-29",
    summary: "Important dates, leaders, and causes behind the freedom movement in an easy format.",
    type: "PDF",
    fileUrl: "#",
    category: "Important Questions",
  },
  {
    id: 5,
    subject: "Geography",
    title: "Resources and Development",
    topic: "Types of resources",
    date: "2026-03-29",
    summary: "Definitions, classification of resources, and a quick comparison chart for revision.",
    type: "Image",
    fileUrl: "#",
    category: "Revision Notes",
  },
  {
    id: 6,
    subject: "English",
    title: "The Proposal - Summary",
    topic: "Drama lesson overview",
    date: "2026-03-28",
    summary: "Characters, scene flow, and the central conflict explained in short bullet points.",
    type: "PDF",
    fileUrl: "#",
    category: "Today's Notes",
  },
  {
    id: 7,
    subject: "Hindi",
    title: "सूरदास के पद",
    topic: "कविता का भावार्थ",
    date: "2026-03-28",
    summary: "कविता के मुख्य भाव, कठिन शब्द, और परीक्षा के लिए याद रखने योग्य बातें.",
    type: "PDF",
    fileUrl: "#",
    category: "Important Questions",
  },
  {
    id: 8,
    subject: "Physics",
    title: "Numerical Practice Set 1",
    topic: "Light chapter numericals",
    date: "2026-03-27",
    summary: "Practice questions for mirror formula, ray diagrams, and image formation.",
    type: "PDF",
    fileUrl: "#",
    category: "Important Questions",
  },
  {
    id: 9,
    subject: "Physics",
    title: "Electricity",
    topic: "Class notes",
    date: "2026-03-27",
    summary: "not yet.",
    type: "PDF",
    fileUrl: "https://drive.google.com/file/d/1Jhtuy8V0eZNWX0-H5eiahRLAi9Ymhrn5/view?usp=sharing",
    category: "Important Questions",
  },
  {
    id: 10,
    subject: "Economics",
    title: "Fundamental Concepts",
    topic: "Introduction to Economics",
    date: "2026-03-31",
    summary: "Basic economic concepts, scarcity, opportunity cost, and factors of production explained clearly.",
    type: "PDF",
    fileUrl: "#",
    category: "Today's Notes",
  },
  {
    id: 11,
    subject: "Economics",
    title: "Supply and Demand",
    topic: "Market Economics",
    date: "2026-03-30",
    summary: "Understanding market equilibrium, price mechanisms, and consumer-producer behavior.",
    type: "PDF",
    fileUrl: "#",
    category: "Important Questions",
  },
  {
    id: 12,
    subject: "Civics",
    title: "Chapter1",
    topic: "Fundamental Rights and Duties",
    date: "2026-03-31",
    summary: "Key articles, fundamental rights, and constitutional framework of India simplified for exam preparation.",
    type: "PDF",
    fileUrl: "#",
    category: "Today's Notes",
  },
  {
    id: 13,
    subject: "Civics",
    title: "Democratic Process",
    topic: "Elections and Governance",
    date: "2026-03-29",
    summary: "Electoral system, voting rights, political parties, and the process of governance in India.",
    type: "PDF",
    fileUrl: "#",
    category: "Revision Notes",
  },
];

const NAV_ITEMS = ["Home", "Subjects", "About"];

// App state
const state = {
  activePage: "Home",
  activeSubject: "Physics",
  query: "",
  mobileMenuOpen: false,
  notesView: "all",
  selectedCategory: "Today's Notes",
};

function formatDate(dateStr) {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function getFilteredNotes() {
  const q = state.query.trim().toLowerCase();
  return [...SAMPLE_NOTES]
    .filter((note) => {
      const matchesQuery =
        !q ||
        [note.subject, note.title, note.topic, note.summary, note.category]
          .join(" ")
          .toLowerCase()
          .includes(q);

      const matchesPage =
        state.activePage === "Home" ||
        state.activePage === "About" ||
        (state.activePage === "Subjects" && state.notesView === "subject"
          ? note.subject === state.activeSubject
          : true);

      const matchesCategory =
        state.notesView === "category" ? note.category === state.selectedCategory : true;

      return matchesQuery && matchesPage && matchesCategory;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

function renderHeader() {
  const header = document.querySelector("header") || document.createElement("header");
  header.className = "header";
  
  header.innerHTML = `
    <div class="header-container">
      <button class="logo-btn" onclick="app.setActivePage('Home')">
        <div class="logo">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
          </svg>
        </div>
        <div>
          <p class="logo-title">Made By Aarav Krishna </p>
          <p class="logo-subtitle">Daily notes, revision, downloads</p>
        </div>
      </button>

      <nav class="nav-desktop">
        ${NAV_ITEMS.map(
          (item) =>
            `<button 
              class="nav-item ${state.activePage === item ? "active" : ""}"
              onclick="app.setActivePage('${item}')"
            >${item}</button>`
        ).join("")}
      </nav>

      <button 
        class="menu-toggle"
        onclick="app.toggleMobileMenu()"
        aria-label="Toggle menu"
      >
        ${state.mobileMenuOpen 
          ? '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'
          : '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>'
        }
      </button>
    </div>

    ${state.mobileMenuOpen ? `
      <div class="mobile-menu">
        <div class="mobile-menu-items">
          ${NAV_ITEMS.map(
            (item) =>
              `<button 
                class="mobile-menu-item ${state.activePage === item ? "active" : ""}"
                onclick="app.setActivePage('${item}'); app.toggleMobileMenu()"
              >${item}</button>`
          ).join("")}
        </div>
      </div>
    ` : ""}
  `;

  if (!document.querySelector("header")) {
    document.body.insertBefore(header, document.body.firstChild);
  } else {
    document.querySelector("header").replaceWith(header);
  }
}

function renderNotes(notes) {
  return `
    <div class="notes-grid">
      ${notes.map((note) => `
        <article class="note-card">
          <div class="note-header">
            <div>
              <span class="note-subject">${note.subject}</span>
              <h3 class="note-title">${note.title}</h3>
            </div>
            <span class="note-type">${note.type}</span>
          </div>

          <p class="note-topic">${note.topic}</p>
          <p class="note-summary">${note.summary}</p>

          <div class="note-date">
            <svg class="icon-small" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <span>${formatDate(note.date)}</span>
          </div>

          <div class="note-actions">
            <a href="${note.fileUrl}" class="btn-secondary">
              <svg class="icon-small" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline>
              </svg>
              View
            </a>
            <a href="${note.fileUrl}" download class="btn-primary">
              <svg class="icon-small" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download
            </a>
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

function renderHomePage() {
  const todayNoteCount = SAMPLE_NOTES.filter((n) => n.category === "Today's Notes").length;
  const latestNotes = [...SAMPLE_NOTES].sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, 4);

  return `
    <section class="hero">
      <div class="hero-content">
        <div class="hero-text">
          <div class="hero-badge">
            <svg class="icon-small" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="12 2 15.09 10.26 23.77 11.27 17.38 17.66 18.84 26.23 12 22.77 5.16 26.23 6.62 17.66 0.23 11.27 8.91 10.26 12 2"></polygon>
            </svg>
            Today's Notes
          </div>
          <h1>Fast daily School notes for Class 10 students</h1>
          <p>Missed school? All notes are available here.</p>
        </div>

        <div class="hero-stats">
          <div class="stat-card">
            <p class="stat-number">${todayNoteCount}</p>
            <p class="stat-label">Today's uploads</p>
          </div>
          <div class="stat-card">
            <p class="stat-number">${SUBJECTS.length}</p>
            <p class="stat-label">Subjects covered</p>
          </div>
          <div class="stat-card">
            <p class="stat-number">2</p>
            <p class="stat-label">Study sections</p>
          </div>
        </div>
      </div>

      <div class="search-section">
        <div class="search-bar">
          <svg class="icon-search" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path>
          </svg>
          <input
            id="search-input"
            type="text"
            placeholder="Under Development"
            onkeyup="app.setQuery(this.value)"
          />
        </div>

        <div class="button-group">
          <button class="btn-primary" onclick="app.browseSubjects()">
            Browse Subjects
            <svg class="icon-small" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
          <button class="btn-secondary" onclick="app.browseCategory('Important Questions')">
            Important Questions
          </button>
        </div>
      </div>
    </section>

    <section class="latest-section">
      <div class="section-header">
        <h2>Latest uploaded notes</h2>
        <button class="link-btn" onclick="app.browseCategory('Today\\'s Notes')">See all</button>
      </div>
      ${renderNotes(latestNotes)}
    </section>

    <section class="sections-grid">
      <div class="section-card">
        <div class="section-icon">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>
          </svg>
          Revision Notes
        </div>
        <p>Short summaries for quick study before class tests and exams.</p>
        <button class="btn-light" onclick="app.browseCategory('Revision Notes')">
          Open Revision Notes
          <svg class="icon-small" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>

      <div class="section-card">
        <div class="section-icon">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
          </svg>
          Important Questions
        </div>
        <p>Exam-focused questions grouped by subject to make last-minute practice easier.</p>
        <button class="btn-light" onclick="app.browseCategory('Important Questions')">
          Open Important Questions
          <svg class="icon-small" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </section>
  `;
}

function renderSubjectsPage() {
  const filteredNotes = getFilteredNotes();

  return `
    <section class="subjects-section">
      <aside class="subjects-sidebar">
        <h2>Subjects</h2>
        <p>Choose a subject or a study section.</p>

        <div class="view-buttons">
          <button 
            class="view-btn ${state.notesView === "subject" ? "active" : ""}"
            onclick="app.setNotesView('subject')"
          >
            Subject Notes
            <svg class="icon-small" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
          <button 
            class="view-btn ${state.notesView === "category" ? "active" : ""}"
            onclick="app.setNotesView('category')"
          >
            Sections
            <svg class="icon-small" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        ${state.notesView === "subject" ? `
          <div class="subject-list">
            ${SUBJECTS.map((subject) => `
              <button 
                class="subject-btn ${state.activeSubject === subject ? "active" : ""}"
                onclick="app.setActiveSubject('${subject}')"
              >
                ${subject}
              </button>
            `).join("")}
          </div>
        ` : `
          <div class="category-list">
            ${["Today's Notes", "Important Questions", "Revision Notes"].map((cat) => `
              <button 
                class="category-btn ${state.selectedCategory === cat ? "active" : ""}"
                onclick="app.setSelectedCategory('${cat}')"
              >
                ${cat}
              </button>
            `).join("")}
          </div>
        `}
      </aside>

      <div class="subjects-content">
        <div class="content-header">
          <div>
            <h2>${state.notesView === "subject" ? `${state.activeSubject} Notes` : state.selectedCategory}</h2>
            <p>Sorted by date. View notes online or download them instantly.</p>
          </div>
        </div>

        ${filteredNotes.length ? renderNotes(filteredNotes) : 
          `<div class="empty-state">No notes found. Try another search term.</div>`
        }
      </div>
    </section>
  `;
}

function renderAboutPage() {
  return `
    <section class="about-section">
      <h2>About</h2>
      <p>🇹​🇭​🇮​🇸​ 🇼​🇪​🇧​🇸​🇮​🇹​🇪​ 🇮​🇸​ 🇲​🇦​🇩​🇪​ 🇧​🇾​ 🇦​🇦​🇷​🇦​🇻​ 🇰​🇷​🇮​🇸​🇭​🇳​🇦​ 🇫​🇷​🇴​🇲​ 🇨​🇱​🇦​🇸​🇸​ 10🇹​🇭​ 🇨​ </p>
      <p>Instagram: @HecticWaves (Only for Feedback) </p>
      <p>This platform helps Class 10 students stay updated with daily class notes, subject-wise summaries, important questions, and revision material. It is designed for students who miss school, need quick topic revision, or want a simple place to revisit notes anytime on mobile or desktop.</p>
      <p>The design stays clean, fast, and distraction-free so students can quickly find what they need and return every day.</p>
    </section>
  `;
}

function renderMain() {
  const main = document.querySelector("main") || document.createElement("main");
  main.className = "main";

  if (state.activePage !== "About" && state.activePage !== "Subjects") {
    main.innerHTML = `${renderHomePage()}`;
  } else if (state.activePage === "Subjects") {
    main.innerHTML = `${renderSubjectsPage()}`;
  } else if (state.activePage === "About") {
    main.innerHTML = `${renderAboutPage()}`;
  }

  if (!document.querySelector("main")) {
    document.body.appendChild(main);
  } else {
    document.querySelector("main").replaceWith(main);
  }
}

function render() {
  renderHeader();
  renderMain();
}

// App API
const app = {
  setActivePage(page) {
    state.activePage = page;
    state.mobileMenuOpen = false;
    render();
  },
  
  setActiveSubject(subject) {
    state.activeSubject = subject;
    render();
  },
  
  setNotesView(view) {
    state.notesView = view;
    render();
  },
  
  setSelectedCategory(category) {
    state.selectedCategory = category;
    render();
  },
  
  setQuery(query) {
    state.query = query;
    render();
  },
  
  toggleMobileMenu() {
    state.mobileMenuOpen = !state.mobileMenuOpen;
    render();
  },
  
  browseSubjects() {
    state.activePage = "Subjects";
    state.notesView = "subject";
    render();
  },
  
  browseCategory(category) {
    state.activePage = "Subjects";
    state.notesView = "category";
    state.selectedCategory = category;
    render();
  },
};

// Initialize app
document.addEventListener("DOMContentLoaded", render);
nn
