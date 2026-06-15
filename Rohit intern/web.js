
// ─────────────────────────────────────────────
// 1. MOVIE DATA
// ─────────────────────────────────────────────
const movies = [
  {
    id: 1,
    title: "Oppenheimer",
    genre: "Drama",
    year: 2023,
    duration: "180 min",
    rating: 9.0,
    poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    review:
      "A monumental cinematic achievement. Nolan reconstructs history with breathtaking scope — haunting, electrifying, impossible to shake."
  },
  {
    id: 2,
    title: "Dune: Part Two",
    genre: "Sci-Fi",
    year: 2024,
    duration: "166 min",
    rating: 8.7,
    poster: "https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
    review:
      "Villeneuve doubles down on spectacle and myth. The sand, the silence, and Zendaya finally at the centre — this is blockbuster filmmaking at its most committed."
  },
  {
    id: 3,
    title: "Alien: Romulus",
    genre: "Horror",
    year: 2024,
    duration: "119 min",
    rating: 7.4,
    poster: "https://image.tmdb.org/t/p/w500/b33nnKl1GSFbao4l3fZDDqsMx0F.jpg",
    review:
      "Fede Álvarez strips the franchise back to raw tension and darkness. Claustrophobic, brutal, and genuinely terrifying in its best passages."
  },
  {
    id: 4,
    title: "Past Lives",
    genre: "Drama",
    year: 2023,
    duration: "106 min",
    rating: 8.8,
    poster: "https://image.tmdb.org/t/p/w500/k3waqVXSnYrEoOPbMKbBVxRLfDr.jpg",
    review:
      "A quiet devastation. Celine Song's debut lingers in your chest long after the credits roll — a love story about the roads not taken."
  },
  {
    id: 5,
    title: "Top Gun: Maverick",
    genre: "Action",
    year: 2022,
    duration: "130 min",
    rating: 8.3,
    poster: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
    review:
      "Against all odds, a sequel that earns every minute. Practical effects and genuine stakes give this film a momentum that pure CGI never could."
  },
  {
    id: 6,
    title: "Everything Everywhere All at Once",
    genre: "Sci-Fi",
    year: 2022,
    duration: "139 min",
    rating: 9.1,
    poster: "https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg",
    review:
      "Chaotic, absurd, and overwhelmingly human. The Daniels have made the most ambitious indie film in years — a love letter to existence disguised as a multiverse adventure."
  },
  {
    id: 7,
    title: "Get Out",
    genre: "Horror",
    year: 2017,
    duration: "104 min",
    rating: 8.9,
    poster: "https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg",
    review:
      "Jordan Peele announces himself with a film as sharp as a scalpel. Horror that demands thinking, rewatching, and uncomfortable conversation."
  },
  {
    id: 8,
    title: "Spider-Man: Across the Spider-Verse",
    genre: "Animation",
    year: 2023,
    duration: "140 min",
    rating: 9.2,
    poster: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    review:
      "Animation as art, not shorthand. Every frame is a painting, every sequence a flex of creativity that puts most live-action blockbusters to shame."
  },
  {
    id: 9,
    title: "The Holdovers",
    genre: "Comedy",
    year: 2023,
    duration: "133 min",
    rating: 8.6,
    poster: "https://image.tmdb.org/t/p/w500/VHmqSaMyR7ZlLFnHUGxnmvv4Po.jpg",
    review:
      "Paul Giamatti at his most magnificent. A warm, funny, and quietly devastating film that takes its time and earns every emotional beat."
  },
  {
    id: 10,
    title: "Mad Max: Fury Road",
    genre: "Action",
    year: 2015,
    duration: "120 min",
    rating: 9.3,
    poster: "https://image.tmdb.org/t/p/w500/hA2ple9q4qnwxp3hKVNhroipsir.jpg",
    review:
      "Two hours of pure, distilled cinema. George Miller's masterpiece is a film-school lecture disguised as the greatest car chase ever committed to celluloid."
  },
  {
    id: 11,
    title: "Parasite",
    genre: "Thriller",
    year: 2019,
    duration: "132 min",
    rating: 9.4,
    poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    review:
      "Bong Joon-ho dismantles class with a film that refuses to be categorised. Comedy, thriller, tragedy — Parasite is all of them, and more."
  },
  {
    id: 12,
    title: "The Banshees of Inisherin",
    genre: "Drama",
    year: 2022,
    duration: "114 min",
    rating: 8.2,
    poster: "https://image.tmdb.org/t/p/w500/4yFG6cSPaCaPhyJ1vtGOiMV7hgS.jpg",
    review:
      "McDonagh at his most melancholic. A film about a broken friendship that becomes, without warning, a meditation on meaning, loss, and stubbornness."
  }
];

// ─────────────────────────────────────────────
// 2. STATE
// ─────────────────────────────────────────────
let activeGenre = "all";
let searchQuery = "";
let sortOrder   = "default";

// ─────────────────────────────────────────────
// 3. UTILITIES
// ─────────────────────────────────────────────

/**
 * Convert a 0–10 numeric rating into ★ / ☆ characters (out of 5)
 */
function ratingToStars(rating) {
  const out_of_5 = Math.round(rating / 2);  // 10-point → 5-star
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      `<span style="color:${i <= out_of_5 ? '#f5c518' : '#3a3a40'}">★</span>`
    );
  }
  return stars.join("");
}

/**
 * Colour-code a rating score
 */
function ratingColour(rating) {
  if (rating >= 9)   return "#4caf50";   // green
  if (rating >= 7.5) return "#f5c518";   // gold
  if (rating >= 6)   return "#ff9800";   // orange
  return "#e8003d";                       // red
}

// ─────────────────────────────────────────────
// 4. FILTER & SORT
// ─────────────────────────────────────────────
function getFilteredMovies() {
  let list = [...movies];

  // Genre filter
  if (activeGenre !== "all") {
    list = list.filter(m => m.genre === activeGenre);
  }

  // Search filter (title or genre)
  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase();
    list = list.filter(
      m =>
        m.title.toLowerCase().includes(q) ||
        m.genre.toLowerCase().includes(q) ||
        m.review.toLowerCase().includes(q)
    );
  }

  // Sort
  switch (sortOrder) {
    case "rating-desc": list.sort((a, b) => b.rating - a.rating); break;
    case "rating-asc":  list.sort((a, b) => a.rating - b.rating); break;
    case "year-desc":   list.sort((a, b) => b.year - a.year);     break;
    case "year-asc":    list.sort((a, b) => a.year - b.year);     break;
    default: break;  // keep insertion order
  }

  return list;
}

// ─────────────────────────────────────────────
// 5. RENDER
// ─────────────────────────────────────────────
function renderMovies() {
  const grid       = document.getElementById("movieGrid");
  const emptyState = document.getElementById("emptyState");
  const resultsCount = document.getElementById("resultsCount");

  const list = getFilteredMovies();

  // Update count
  resultsCount.textContent =
    list.length === 0
      ? "No movies found"
      : `${list.length} movie${list.length !== 1 ? "s" : ""}`;

  // Toggle empty state
  if (list.length === 0) {
    grid.innerHTML  = "";
    emptyState.style.display = "block";
    return;
  }
  emptyState.style.display = "none";

  // Build cards
  grid.innerHTML = list
    .map((movie, idx) => buildCard(movie, idx))
    .join("");
}

function buildCard(movie, animIdx) {
  const colour = ratingColour(movie.rating);
  const stars  = ratingToStars(movie.rating);

  // Stagger animation delay
  const delay = `${animIdx * 0.05}s`;

  // Fallback poster if TMDB image fails
  const posterSrc = movie.poster;

  return `
    <article class="movie-card" style="animation-delay:${delay};" 
             role="listitem" aria-label="${movie.title}">
      
      <!-- Poster -->
      <div class="card-poster">
        <img
          src="${posterSrc}"
          alt="${movie.title} poster"
          loading="lazy"
          onerror="this.src='https://via.placeholder.com/300x450/1c1c1f/888890?text=${encodeURIComponent(movie.title)}'"
        />
        
        <!-- Rating badge -->
        <div class="rating-badge">
          <span class="star">★</span>
          <span style="color:${colour}">${movie.rating.toFixed(1)}</span>
        </div>

        <!-- Genre tag -->
        <span class="poster-genre">${movie.genre}</span>
      </div>

      <!-- Body -->
      <div class="card-body">
        <h2 class="card-title">${movie.title}</h2>
        
        <div class="card-meta">
          <span>${movie.year}</span>
          <span class="meta-dot">•</span>
          <span>${movie.duration}</span>
        </div>

        <!-- Stars -->
        <div class="card-stars">${stars}</div>

        <p class="card-review">${movie.review}</p>
      </div>
    </article>
  `;
}

// ─────────────────────────────────────────────
// 6. EVENT LISTENERS
// ─────────────────────────────────────────────

// Genre buttons
document.getElementById("genreButtons").addEventListener("click", function (e) {
  const btn = e.target.closest(".genre-btn");
  if (!btn) return;

  // Update active state
  document
    .querySelectorAll(".genre-btn")
    .forEach(b => b.classList.remove("active"));
  btn.classList.add("active");

  activeGenre = btn.dataset.genre;
  renderMovies();
});

// Search input (debounced)
let searchTimeout;
document.getElementById("searchInput").addEventListener("input", function () {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    searchQuery = this.value;
    renderMovies();
  }, 220);
});

// Sort select
document.getElementById("sortSelect").addEventListener("change", function () {
  sortOrder = this.value;
  renderMovies();
});

// ─────────────────────────────────────────────
// 7. INIT
// ─────────────────────────────────────────────
renderMovies();