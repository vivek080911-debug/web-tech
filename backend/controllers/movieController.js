const STATIC_MOVIE_LIST = [
    {
        id: "tt0133093",
        title: "KGF CHAPTER 2 ",
        overview: "Rocky, a high-ranking mercenary in Mumbai seeks power and wealth to fulfill his mother's promise. Due to his high fame, his bosses hire him to assassinate Garuda, the son of the founder of Kolar Gold Fields.",
        poster_path: "https://i.ibb.co/yTgGj7b/kgf-chapter-2-movie-poster-c89d51.jpg", 
        backdrop_path: "https://i.ibb.co/mrXRknhR/kgf.jpg", 
        original_language: "KANNADA",
        release_date: "2022-04-14",
        trailer_key: "jQsE85cI384", 
        full_movie_key: "http://localhost:5000/movies/KGF 2.mkv"
    },
    {
        id: "tt0468569",
        title: "Kantara: A Legend Chapter-1",
        overview: "Exploring the origins of Kaadubettu Shiva during the Kadamba dynasty era, it delves into the untamed wilderness and forgotten lore surrounding his past ",
        poster_path: "https://i.ibb.co/pjTN56bk/images.webp", 
        backdrop_path: "https://i.ibb.co/fYWJmC61/kantara.jpg", 
        original_language: "KANNADA",
        release_date: "2025-10-02",
        trailer_key: "TMQUFhWm8C0", 
        full_movie_key: "http://localhost:5000/movies/kantara.mkv"
    },
    {
        id: "tt0848228",
        title: "Captain America The First Avengers",
        overview: "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.",
        poster_path: "https://i.ibb.co/3msgJqCZ/war.webp",
        backdrop_path: "https://i.ibb.co/0p4JLYYj/capt.jpg",
        original_language: "English",
        release_date: "2012-04-11",
        trailer_key: "JerVrbLldXw", 
        full_movie_key: "http://localhost:5000/movies/.mkv"
    },
    {
        id: "tt0816692",
        title: "Bahubali the conclusion",
        overview: "Baahubali 2: The Conclusion is a 2017 Indian Telugu-language[15] epic action film directed by S. S. Rajamouli, who co-wrote the script with V. Vijayendra Prasad. ",
        poster_path: "https://i.ibb.co/mCFVByTm/Bahubali-poster.jpg",
        backdrop_path: "https://i.ibb.co/xSj2N9p1/bahubali.jpg",
        original_language: "telugu",
        release_date: "2014-11-05",
        trailer_key: "qD-6d8Wo3do", 
        full_movie_key: "http://localhost:5000/movies/Bahubali 2.mkv"
    },
    {
        id: "tt0816695",
        title: "Dead Pool",
        overview: "Deadpool is a 2016 American superhero film based on the Marvel Comics character of the same name",
        poster_path: "https://i.ibb.co/Q3tSFX0L/deadpool.webp",
        backdrop_path: "https://i.ibb.co/mVyx449J/deadpool5.jpg",
        original_language: "telugu",
        release_date: "2014-11-06",
        trailer_key: "VHAK-gU9gi0", 
        full_movie_key: "rNeMNlTKd48"
    },
    {
        id: "tt1375666",
        title: "The Lokah chapter 1 :Chandra",
        overview: "Lokah Chapter 1: Chandra is a 2025 Indian Malayalam-language superhero film written and directed by Dominic Arun and produced by Dulquer Salmaan under his banner Wayfarer Films.",
        poster_path: "https://i.ibb.co/b51cZXd2/lokah-chapter-one-chandra.jpg",
        backdrop_path: "https://i.ibb.co/LDvzQJbj/lokah.webp",
        original_language: "Malyalam",
        release_date: "2025-07-28",
        trailer_key: "64XHtNWTB5o", 
        full_movie_key: "http://localhost:5000/movies/Lokah Chapter 1 Chandra.mkv"
    },
];
const STATIC_TV_SHOW_LIST = [
    {
        id: "tv_0848228", 
        title: "Wednesday",
        overview: "A middle-class man secretly works as an intelligence officer.",
        poster_path: "https://i.ibb.co/Kz86dfbs/wednesday.jpg",
        backdrop_path: "https://i.ibb.co/xScVZdzr/wednesday.jpg",
        original_language: "hi",
        release_date: "2019-09-20",
        trailer_key: "eOrNdBpGM9s",
        seasons: [
            {
                season_number: 1,
                name: "Season 1",
                episodes: [
                    { episode_number: 1, title: "The Beginning (E1)", duration: "45m", key: "ep2_key_567" },
                    { episode_number: 2, title: "Mission in Pakistan (E2)", duration: "50m", key: "ep2_key_456" },
                ]
            },
            {
                season_number: 2,
                name: "Season 2",
                episodes: [
                    { episode_number: 1, title: "Return to TASC (E1)", duration: "48m", key: "ep3_key_789" },
                    { episode_number: 2, title: "Chennai Assignment (E2)", duration: "52m", key: "ep4_key_012" },
                ]
            }
        ]
    },

    {
        id: "tv_0848238", 
        title: "Farzi (season 1)",
        overview: "A middle-class man secretly works on money scam",
        poster_path: "https://i.ibb.co/Kxwp8MmF/Farzi-Web-Series-Poster.webp",
        backdrop_path: "https://i.ibb.co/KzW8NkPF/farzi.jpg",
        original_language: "hindi",
        release_date: "2023-02-10",
        trailer_key: "GYVLGMmk3po",
        seasons: [
            {
                season_number: 1,
                name: "Season 1",
                episodes: [
                    { episode_number: 1, title: "Artist", duration: "59m", key: "http://localhost:5000/movies/Farzi_S01E01.mkv" },
                   { episode_number: 2, title: "Social Service", duration: "01h01m", key: "http://localhost:5000/movies/Farzi_S01E02.mkv" },
                   { episode_number: 3, title: "CCFART", duration: "59m", key: "http://localhost:5000/movies/Farzi_S01E03.mkv" },
                   { episode_number: 4, title: "Dhanrakshak", duration: "50m", key: "http://localhost:5000/movies/Farzi_S01E04.mkv" },
                   { episode_number: 5, title: "Second Oldest Profession", duration: "59m", key: "http://localhost:5000/movies/Farzi_S01E05.mkv" },
                   { episode_number: 6, title: "Cat and Mouse", duration: "41m", key: "http://localhost:5000/movies/Farzi_S01E06.mkv" },
                   { episode_number: 7, title: "Supernote", duration: "52m", key: "http://localhost:5000/movies/Farzi_S01E07.mkv" },
                   { episode_number: 8, title: "Crash and Burn", duration: "01h06m", key: "http://localhost:5000/movies/Farzi_S01E08.mkv"},

                ]
            },
            
        ]
    },

    {
        id: "tv_0948238", 
        title: "Scam 1992",
        overview: "A middle-class man secretly works on money scam in share market",
        poster_path: "https://i.ibb.co/r2QBQMZM/harshtmehata.webp",
        backdrop_path: "https://i.ibb.co/yv4tFKH/harshat2.webp",
        original_language: "Kannada",
        release_date: "2023-02-10",
        trailer_key: "ISORfez27og",
        seasons: [
            {
                season_number: 1,
                name: "Season 1",
                episodes: [
                  { episode_number: 1, title: "Risk Se Ishq", duration: "49m", key: "http://localhost:5000/movies/SCAM 1992 KANNADA S01 E01.mkv" },
                  { episode_number: 2, title: "Cobra Killer", duration: "54m", key: "http://localhost:5000/movies/SCAM 1992 KANNADA S01 E02.mkv" },
                  { episode_number: 3, title: "Paise Ki Dukaan", duration: "53m", key: "http://localhost:5000/movies/SCAM 1992 KANNADA S01 E03.mkv" },
                  { episode_number: 4, title: "Harshad Mehta Is A Liar", duration: "55m", key: "http://localhost:5000/movies/SCAM 1992 KANNADA S01 E04.mkv" },
                  { episode_number: 5, title: "Kundli Mein Shani", duration: "52m", key: "http://localhost:5000/movies/SCAM 1992 KANNADA S01 E05.mkv" },
                  { episode_number: 6, title: "Stop Press", duration: "42m", key: "http://localhost:5000/movies/SCAM 1992 KANNADA S01 E06.mkv" },
                  { episode_number: 7, title: "Dalal Street Ka Dariya", duration: "42m", key: "http://localhost:5000/movies/SCAM 1992 KANNADA S01 E07.mkv" },
                  { episode_number: 8, title: "Matador", duration: "56m", key: "http://localhost:5000/movies/SCAM 1992 KANNADA S01 E08.mkv" },
                  { episode_number: 9, title: "Ek Crore Ka Suitcase", duration: "58m", key: "http://localhost:5000/movies/SCAM 1992 KANNADA S01 E09.mkv" },
                   { episode_number: 10, title: "Main History Banana Chahta hoon", duration: "01h", key: "http://localhost:5000/movies/SCAM 1992 KANNADA S01 E010.mkv" },

                ]
            },
            
        ]
    },
    
];

const STATIC_LIVE_CHANNELS = [
    { 
        id: "ch101", 
        name: "News 24 Live", 
        logo_url: "https://i.ibb.co/TqvbJ6mG/24.jpg",
        stream_key: "rNeMNlTKd48" 
    },
    { 
        id: "ch102", 
        name: "tv9 kannada", 
        logo_url: "https://i.ibb.co/PGkZHJpj/maxresdefault.jpg",
        stream_key: "jdJoOhqCipA"
    },
    { 
        id: "ch103", 
        name: "Kids Zone", 
        logo_url: "https://i.ibb.co/j3qV0Z1/kids-channel.png",
        stream_key: "jfKfPfyqkG0"
    },
]

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

exports.getPopularMovies = async (req, res) => {
    const combinedData = [...STATIC_MOVIE_LIST, ...STATIC_TV_SHOW_LIST];
    const shuffledData = shuffleArray([...combinedData]); 
    
    const finalData = {
        page: 1,
        results: shuffledData,
        total_pages: 1,
        total_results: shuffledData.length,
    };
    res.status(200).json(finalData);
};

exports.getTVShows = async (req, res) => {
    const shuffledTV = shuffleArray([...STATIC_TV_SHOW_LIST]); 
    
    const finalData = {
        page: 1,
        results: shuffledTV,
        total_pages: 1,
        total_results: shuffledTV.length,
    };
    res.status(200).json(finalData);
};

exports.getLiveChannels = async (req, res) => {
    const finalData = {
        channels: STATIC_LIVE_CHANNELS,
        total_results: STATIC_LIVE_CHANNELS.length,
    };
    res.status(200).json(finalData);
};

exports.getMovieTrailer = async (req, res) => { 
    const movieId = req.params.id;
    
    const videoType = req.query.type || 'trailer'; 

   
    const allStaticData = [...STATIC_MOVIE_LIST, ...STATIC_TV_SHOW_LIST];
    const movieFound = allStaticData.find(item => item.id === movieId);

    let keyToReturn = null;
    
    if (movieFound) {
        if (videoType === 'full') {
            keyToReturn = movieFound.full_movie_key; 
        } else { 
            keyToReturn = movieFound.trailer_key;
        }
    }
    
    res.status(200).json({ key: keyToReturn }); 
};