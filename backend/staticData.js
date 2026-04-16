// This file stores all hardcoded data lists for the application.

// --- 1. MOVIE/TV SHOW DATA LIST (Used by Home, Movies, TVShows) ---
// Note: Ensure all posters/backdrops are full, working HTTPS URLs.
const STATIC_MOVIE_DATA = [
    {
        id: "tt0133093",
        title: "The Matrix (Movie)",
        overview: "A computer hacker learns the true nature of his reality.",
        poster_path: "https://i.ibb.co/xL50t4R/matrix-poster.jpg", 
        backdrop_path: "https://i.ibb.co/5Fq1k5J/matrix-backdrop.jpg", 
        original_language: "en",
        release_date: "1999-03-31",
        type: "movie"
    },
    {
        id: "tt0468569",
        title: "The Dark Knight (Movie)",
        overview: "The Joker emerges from Gotham City, testing Batman's ability to fight injustice.",
        poster_path: "https://i.ibb.co/804K0sR/dark-knight-poster.jpg",
        backdrop_path: "https://i.ibb.co/30zLz8T/dark-knight-backdrop.jpg",
        original_language: "en",
        release_date: "2008-07-18",
        type: "movie"
    },
    {
        id: "tt0848228",
        title: "The Family Man (TV Show)",
        overview: "A middle-class man secretly works as an intelligence officer.",
        poster_path: "https://i.ibb.co/6P93JzG/family-man-poster.jpg",
        backdrop_path: "https://i.ibb.co/dK5z5V3/family-man-backdrop.jpg",
        original_language: "hi",
        release_date: "2019-09-20",
        type: "tv"
    },
    {
        id: "tt1190647",
        title: "Inside Edge (TV Show)",
        overview: "A story about a fictional T20 cricket team, the Mumbai Mavericks, that plays in a league.",
        poster_path: "https://i.ibb.co/h24N3B7/inside-edge-poster.jpg",
        backdrop_path: "https://i.ibb.co/9vFz6qC/inside-edge-backdrop.jpg",
        original_language: "hi",
        release_date: "2017-07-10",
        type: "tv"
    },
];

// --- 2. LIVE TV CHANNELS DATA ---
const STATIC_LIVE_CHANNELS = [
    { id: 101, name: "News 24 Live", logo_url: "https://i.ibb.co/b3bS2V4/news-channel.png" },
    { id: 102, name: "Sports Max", logo_url: "https://i.ibb.co/L5QG4tF/sports-channel.png" },
    { id: 103, name: "Kids Zone", logo_url: "https://i.ibb.co/j3qV0Z1/kids-channel.png" },
];

module.exports = {
    STATIC_MOVIE_DATA,
    STATIC_LIVE_CHANNELS,
};