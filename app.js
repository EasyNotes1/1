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
    subject: "Chemistry",
    title: "Chemical Reactions and Equations",
    topic: "Types and balancing",
    date: "2026-03-31",
    summary: "Represent chemical reactions using symbols; balance reactions accurately.",
    type: "Text",
    fileUrl: "https://drive.google.com/file/d/1dfwqDKCoUfzRdVLraNxef6MoFNphTTB9/view?usp=sharing",
    category: "Class Notes"
  },
  {
    id: 2,
    subject: "Chemistry",
    title: "Acids, Bases and Salts",
    topic: "Properties and examples",
    date: "2026-03-31",
    summary: "Properties, reactions, and indicators of acids, bases, salts.",
    type: "Text",
    fileUrl: "#",
    category: "Class Notes"
  },
  {
    id: 3,
    subject: "Chemistry",
    title: "Metals and Non-Metals",
    topic: "Reactivity and uses",
    date: "2026-03-31",
    summary: "Differences, reactivity, and uses of metals versus non-metals.",
    type: "Text",
    fileUrl: "#",
    category: "Class Notes"
  },
  {
    id: 4,
    subject: "Chemistry",
    title: "Carbon and its Compounds",
    topic: "Organic chemistry basics",
    date: "2026-03-31",
    summary: "Study of organic compounds: structures, types, and properties.",
    type: "Text",
    fileUrl: "#",
    category: "Class Notes"
  },
  {
    id: 5,
    subject: "Biology",
    title: "Life Processes",
    topic: "Nutrition, respiration, excretion",
    date: "2026-03-31",
    summary: "Processes like nutrition, respiration, excretion, transport, and synthesis explained.",
    type: "Text",
    fileUrl: "#",
    category: "Class Notes"
  },
  {
    id: 6,
    subject: "Biology",
    title: "Control and Coordination",
    topic: "Nervous and hormonal systems",
    date: "2026-03-31",
    summary: "Nervous and hormonal systems control and coordinate body activities.",
    type: "Text",
    fileUrl: "#",
    category: "Class Notes"
  },
  {
    id: 7,
    subject: "Biology",
    title: "How do Organisms Reproduce?",
    topic: "Asexual and sexual reproduction",
    date: "2026-03-31",
    summary: "Sexual and asexual reproduction mechanisms in organisms explained.",
    type: "Text",
    fileUrl: "#",
    category: "Class Notes"
  },
  {
    id: 8,
    subject: "Biology",
    title: "Heredity and Evolution",
    topic: "Genetics and adaptation",
    date: "2026-03-31",
    summary: "Genetics, inheritance, and evolution explain species variation and adaptation.",
    type: "Text",
    fileUrl: "#",
    category: "Class Notes"
  },
  {
    id: 9,
    subject: "Physics",
    title: "Light – Reflection and Refraction",
    topic: "Laws and applications",
    date: "2026-03-31",
    summary: "Light behavior: reflection, refraction, laws, and applications summarized.",
    type: "Text",
    fileUrl: "#",
    category: "Class Notes"
  },
  {
    id: 10,
    subject: "Physics",
    title: "Human Eye and Colourful World",
    topic: "Vision and dispersion",
    date: "2026-03-31",
    summary: "Eye structure, vision defects, dispersion, and rainbow phenomena explained.",
    type: "Text",
    fileUrl: "#",
    category: "Class Notes"
  },
  {
    id: 11,
    subject: "Physics",
    title: "Electricity",
    topic: "Current, voltage, resistance",
    date: "2026-03-31",
    summary: "Current, voltage, resistance, Ohm’s law, and circuits described briefly.",
    type: "Text",
    fileUrl: "#",
    category: "Class Notes"
  },
  {
    id: 12,
    subject: "Physics",
    title: "Magnetic Effects of Electric Current",
    topic: "Electromagnetism basics",
    date: "2026-03-31",
    summary: "Electromagnetism, magnetic field, and forces due to current explained.",
    type: "Text",
    fileUrl: "#",
    category: "Class Notes"
  },
  {
    id: 13,
    subject: "Biology",
    title: "Our Environment",
    topic: "Pollution and conservation",
    date: "2026-03-31",
    summary: "Environmental components, pollution, conservation, and sustainability practices summarized.",
    type: "Text",
    fileUrl: "#",
    category: "Class Notes"
  },
  {
    id: 14,
    subject: "History",
    title: "The Rise of Nationalism in Europe",
    topic: "European revolutions and nation-states",
    date: "2026-03-31",
    summary: "Emergence of nationalism and revolutions shaping modern European countries.",
    type: "Text",
    fileUrl: "#",
    category: "Class Notes"
  },
  {
    id: 15,
    subject: "History",
    title: "Nationalism in India",
    topic: "Indian freedom struggle",
    date: "2026-03-31",
    summary: "Growth of Indian nationalism and freedom movement against British rule.",
    type: "Text",
    fileUrl: "#",
    category: "Class Notes"
  },
  {
    id: 16,
    subject: "History",
    title: "The Making of a Global World",
    topic: "Global trade and exploration",
    date: "2026-03-31",
    summary: "Expansion of trade, colonization, and global cultural interactions explained.",
    type: "Text",
    fileUrl: "#",
    category: "Class Notes"
  },
  {
    id: 17,
    subject: "History",
    title: "The Age of Industrialisation",
    topic: "Industrial revolution",
    date: "2026-03-31",
    summary: "Industrialization transformed economies, societies, and urbanization worldwide.",
    type: "Text",
    fileUrl: "#",
    category: "Class Notes"
  },
  {
    id: 18,
    subject: "History",
    title: "Print Culture and The Modern World",
    topic: "Media and literature",
    date: "2026-03-31",
    summary: "Growth of print media and literature shaped modern world perspectives.",
    type: "Text",
    fileUrl: "#",
    category: "Class Notes"
  },
  {
    id: 19,
    subject: "Geography",
    title: "Resources and Development",
    topic: "Natural and human resources",
    date: "2026-03-31",
    summary: "Resources management and sustainable development important for human welfare.",
    type: "Text",
    fileUrl: "#",
    category: "Class Notes"
  },
  {
    id: 20,
    subject: "Geography",
    title: "Forest and Wildlife Resources",
    topic: "Conservation and biodiversity",
    date: "2026-03-31",
    summary: "Forests and wildlife need protection for ecological balance and biodiversity.",
    type: "Text",
    fileUrl: "#",
    category: "Class Notes"
  },
  {
    id: 21,
    subject: "Geography",
    title: "Water Resources",
    topic: "Rivers, lakes, and water management",
    date: "2026-03-31",
    summary: "Proper use and management of water essential for development.",
    type: "Text",
    fileUrl: "#",
    category: "Class Notes"
  },
  {
    id: 22,
    subject: "Geography",
    title: "Agriculture",
    topic: "Farming practices and crops",
    date: "2026-03-31",
    summary: "Agricultural practices, crop types, and challenges shaping economy discussed.",
    type: "Text",
    fileUrl: "#",
    category: "Class Notes"
  },
  {
    id: 23,
    subject: "Geography",
    title: "Minerals and Energy Resources",
    topic: "Mining and energy production",
    date: "2026-03-31",
    summary: "Minerals and energy resources critical for industry and development.",
    type: "Text",
    fileUrl: "#",
    category: "Class Notes"
  },
  {
    id: 24,
    subject: "Geography",
    title: "Manufacturing Industries",
    topic: "Industrial production",
    date: "2026-03-31",
    summary: "Industries transform raw materials into goods; boost economy and jobs.",
    type: "Text",
    fileUrl: "#",
    category: "Class Notes"
  },
  {
    id: 25,
    subject: "Geography",
    title: "Lifelines of National Economy",
    topic: "Transport, communication, and trade",
    date: "2026-03-31",
    summary: "Roads, railways, ports, and networks connect and strengthen economy.",
    type: "Text",
    fileUrl: "#",
    category: "Class Notes"
  },
  {
    id: 26,
    subject: "Civics",
    title: "Power Sharing",
    topic: "Government structures and democracy",
    date: "2026-03-31",
    summary: "Distribution of political power prevents conflicts and maintains democracy.",
    type: "Text",
    fileUrl: "#",
    category: "Class Notes"
  },
  {
    id: 27,
    subject: "Civics",
    title: "Federalism",
    topic: "Division of powers",
    date: "2026-03-31",
    summary: "Federal system divides powers between central and state governments.",
    type: "Text",
    fileUrl: "#",
    category: "Class Notes"
  },
  {
    id: 28,
    subject: "Civics",
    title: "Gender, Religion and Caste",
    topic: "Social divisions and equality",
    date: "2026-03-31",
    summary: "Gender, religion, caste influence society; equality and rights important.",
    type: "Text",
    fileUrl: "#",
    category: "Class Notes"
  },
  {
    id: 29,
    subject: "Civics",
    title: "Political Parties",
    topic: "Party system and elections",
    date: "2026-03-31",
    summary: "Political parties organize elections and represent diverse citizen interests.",
    type: "Text",
    fileUrl: "#",
    category: "Class Notes"
  },
  {
    id: 30,
    subject: "Civics",
    title: "Outcomes of Democracy",
    topic: "Democratic benefits and challenges",
    date: "2026-03-31",
    summary: "Democracy ensures rights, participation, accountability; challenges include corruption.",
    type: "Text",
    fileUrl: "#",
    category: "Class Notes"
  },
  {
    id: 31,
    subject: "Economics",
    title: "Development",
    topic: "Economic growth and progress",
    date: "2026-03-31",
    summary: "Development improves living standards, reduces poverty, and boosts economy.",
    type: "Text",
    fileUrl: "#",
    category: "Class Notes"
  },
  {
    id: 32,
    subject: "Economics",
    title: "Sectors of the Indian Economy",
    topic: "Primary, secondary, tertiary",
    date: "2026-03-31",
    summary: "Primary, secondary, tertiary sectors contribute differently to national economy.",
    type: "Text",
    fileUrl: "#",
    category: "Class Notes"
  },
  {
    id: 33,
    subject: "Economics",
    title: "Money and Credit",
    topic: "Banking and finance",
    date: "2026-03-31",
    summary: "Money, banking, and credit systems support trade and economic growth.",
    type: "Text",
    fileUrl: "#",
    category: "Class Notes"
  },
  {
    id: 34,
    subject: "Economics",
    title: "Globalisation and the Indian Economy",
    topic: "Trade and markets",
    date: "2026-03-31",
    summary: "Globalization affects trade, investment, and Indian economic policies.",
    type: "Text",
    fileUrl: "#",
    category: "Class Notes"
  },
  {
    id: 35,
    subject: "Economics",
    title: "Consumer Rights",
    topic: "Protection and awareness",
    date: "2026-03-31",
    summary: "Consumer rights protect buyers and ensure fair trade practices.",
    type: "Text",
    fileUrl: "#",
    category: "Class Notes"
  }
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
