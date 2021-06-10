const books = [
    {
        id: 1,
        img: 'https://images-na.ssl-images-amazon.com/images/I/51wk0pzkD7L._SX322_BO1,204,203,200_.jpg',
        title: 'Treasure Island',
        author: 'By R.L. Stevenson',
        price: 113,
        rating: 4,
        altText: 'book_image',
        category: 'action and adventure'
    },
    {
        id: 2,
        img: 'https://images-na.ssl-images-amazon.com/images/I/510yzqD6ukL._SX302_BO1,204,203,200_.jpg',
        title: 'The Princess Bride',
        author: 'By William Goldman',
        price: 705,
        rating: 4,
        altText: 'book_image',
        category: 'action and adventure'
    },
    {
        id: 3,
        img: 'https://m.media-amazon.com/images/I/51UJsfRHTRL.jpg',
        title:'The Three Musketeers',
        author: 'By Alexandre Dumas',
        price: 199,
        rating: 4,
        altText: 'book_image',
        category: 'action and adventure'
    },
    {
        id: 4,
        img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328864746l/1086164.jpg',
        title: 'Journey to the Center of the Earth',
        author: 'By Jules Verne',
        price: 1312,
        rating: 4,
        altText: 'book_image',
        category: 'action and adventure'
    },
    {
        id: 5,
        img: 'https://m.media-amazon.com/images/I/51MV5rjhvUL.jpg',
        title: 'Heart of Darkness',
        author: 'By Joseph Conrad',
        price: 99,
        rating: 4,
        altText: 'book_image',
        category: 'action and adventure'
    },
    {
        id: 6,
        img: 'https://m.media-amazon.com/images/I/61FbXZT3CBL.jpg',
        title: 'Hatchet',
        author: 'By Gary Paulsen',
        price: 292,
        rating: 5,
        altText: 'book_image',
        category: 'action and adventure'
    },
    {
        id: 7,
        img: 'https://m.media-amazon.com/images/I/51L5b0jKznL._AC_UY218_.jpg',
        title: 'The Jungle Book',
        author: 'By Rudyard Kipling',
        price: 99,
        rating: 5,
        altText: 'book_image',
        category: 'action and adventure'
    },
    {
        id: 8,
        img: 'https://m.media-amazon.com/images/I/81LyhKwRdpL._AC_UY218_.jpg',
        title: 'The Lost World',
        author: 'By Arthur C. Doyle',
        price: 128,
        rating: 5,
        altText: 'book_image',
        category: 'action and adventure'
    },
    {
        id: 9,
        img: 'https://m.media-amazon.com/images/I/41M1iq7zdTL.jpg',
        title: '20,000 Leagues Under the Sea',
        author: 'By Jules Verne',
        price: 119,
        rating: 4,
        altText: 'book_image',
        category: 'action and adventure'
    },
    {
        id: 10,
        img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1552645011l/44434873.jpg',
        title: 'Jaws',
        author: 'By Jules Verne',
        price: 299,
        rating: 5,
        altText: 'book_image',
        category: 'action and adventure'
    },
    {
        id: 11,
        img: 'https://m.media-amazon.com/images/I/51MDljSTrTL.jpg',
        title: 'Alice’s Adventures in Wonderland',
        author: 'By Lewis Carroll',
        price: 89,
        rating: 4,
        altText: 'book_image',
        category: 'fantasy'
    },
    {
        id: 12,
        img: 'https://m.media-amazon.com/images/I/51YD0IGQTcL._AC_UY218_.jpg',
        title: 'The Hobbit',
        author: 'By J.R.R. Tolkien',
        price: 240,
        rating: 4,
        altText: 'book_image',
        category: 'fantasy'
    },
    {
        id: 13,
        img: 'https://m.media-amazon.com/images/I/61Iy1lOvd1L._AC_UY218_.jpg',
        title:'The Sword in the Stone',
        author: 'By T.H. White',
        price: 350,
        rating: 4,
        altText: 'book_image',
        category: 'fantasy'
    },
    {
        id: 14,
        img: 'https://m.media-amazon.com/images/I/51hQ4EstmyL.jpg',
        title: 'The Lion, the Witch, and the Wardrobe',
        author: 'By C.S. Lewis',
        price: 190,
        rating: 4,
        altText: 'book_image',
        category: 'fantasy'
    },
    {
        id: 15,
        img: 'https://m.media-amazon.com/images/I/51lLMPTPDDL.jpg',
        title: 'The Master and Margarita',
        author: 'By Mikhail Bulgakov',
        price: 349,
        rating: 4,
        altText: 'book_image',
        category: 'fantasy'
    },
    {
        id: 16,
        img: 'https://m.media-amazon.com/images/I/41OdHdVwcoL.jpg',
        title: 'The Last Unicorn',
        author: 'By Peter S. Beagle',
        price: 153,
        rating: 5,
        altText: 'book_image',
        category: 'fantasy'
    },
    {
        id: 17,
        img: 'https://m.media-amazon.com/images/I/51yBOHJFBqL.jpg',
        title: 'A Wizard of Earthsea',
        author: 'By Ursula K. Le Guin',
        price: 308,
        rating: 5,
        altText: 'book_image',
        category: 'fantasy'
    },
    {
        id: 18,
        img: 'https://m.media-amazon.com/images/I/51+cceyY8cL.jpg',
        title: 'The Dark is Rising',
        author: 'By Susan Cooper',
        price: 227,
        rating: 5,
        altText: 'book_image',
        category: 'fantasy'
    },
    {
        id: 19,
        img: 'https://m.media-amazon.com/images/I/514koDXXAbL.jpg',
        title: 'The Forgotten Beasts of Eld',
        author: 'By P.A. McKillip',
        price: 480,
        rating: 4,
        altText: 'book_image',
        category: 'fantasy'
    },
    {
        id: 20,
        img: 'https://m.media-amazon.com/images/I/514t7+BlU+L.jpg',
        title: ' The Famished Road',
        author: 'By Ben Okri',
        price: 454,
        rating: 5,
        altText: 'book_image',
        category: 'fantasy'
    },
    {
        id: 21,
        img: 'https://prodimage.images-bn.com/pimages/9781400201655_p0_v8_s600x595.jpg',
        title: 'Girl Wash Your Face',
        author: 'By Rachel Hollis',
        price: 299,
        rating: 4,
        altText: 'book_image',
        category: 'self_help'
    },
    {
        id: 22,
        img: 'https://prodimage.images-bn.com/pimages/9781594634727_p0_v5_s600x595.jpg',
        title: 'Big Magic',
        author: 'By Elizabeth Gilbert',
        price: 384,
        rating: 4,
        altText: 'book_image',
        category: 'self_help'
    },
    {
        id: 23,
        img: 'https://images-na.ssl-images-amazon.com/images/I/51fESaIGgVL._SX323_BO1,204,203,200_.jpg',
        title:'The Intelligent Investor Revised Edition',
        author: 'By Benjamin Graham',
        price: 1608,
        rating: 4,
        altText: 'book_image',
        category: 'self_help'
    },
    {
        id: 24,
        img: 'https://images-na.ssl-images-amazon.com/images/I/61mEFHtyGVL._SX394_BO1,204,203,200_.jpg',
        title: 'The Secret',
        author: 'By Rhonda Byrne',
        price: 379,
        rating: 5,
        altText: 'book_image',
        category: 'self_help'
    },
    {
        id: 25,
        img: 'https://images-na.ssl-images-amazon.com/images/I/51wOOMQ+F3L._SX312_BO1,204,203,200_.jpg',
        title: 'Rich Dad Poor Dad',
        author: 'By Robert T. Kiyosaki',
        price: 302,
        rating: 4,
        altText: 'book_image',
        category: 'self_help'
    },
    {
        id: 26,
        img: 'https://images-na.ssl-images-amazon.com/images/I/41S8TQ9aNoL._SX323_BO1,204,203,200_.jpg',
        title: 'Life\'s Amazing Secrets',
        author: 'By Gaur Gopal Das',
        price: 183,
        rating: 5,
        altText: 'book_image',
        category: 'self_help'
    },
    {
        id: 27,
        img: 'https://m.media-amazon.com/images/I/61McMhLCIuL._AC_UY218_.jpg',
        title: 'The Power of Your Subconscious Mind',
        author: 'By Joseph Murphy',
        price: 175,
        rating: 5,
        altText: 'book_image',
        category: 'self_help'
    },
    {
        id: 28,
        img: 'https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UY218_.jpg',
        title: 'The Lean Startup',
        author: 'By Eric Ries',
        price: 521,
        rating: 5,
        altText: 'book_image',
        category: 'self_help'
    },
    {
        id: 29,
        img: 'https://m.media-amazon.com/images/I/71iEVsSP1GL._AC_UY218_.jpg',
        title: 'The Power of Habit',
        author: 'By Charles Duhigg',
        price: 359,
        rating: 4,
        altText: 'book_image',
        category: 'self_help'
    },
    {
        id: 30,
        img: 'https://m.media-amazon.com/images/I/81ND4ZcIsxL._AC_UY218_.jpg',
        title: 'The Power of Positive Thinking',
        author: 'By  N.V.Peale',
        price: 140,
        rating: 5,
        altText: 'book_image',
        category: 'self_help'
    },
    {
        id: 31,
        img: 'https://m.media-amazon.com/images/I/81gepf1eMqL._AC_UY218_.jpg',
        title: 'To Kill A Mockingbird',
        author: 'By Harper Lee',
        price: 260,
        rating: 4,
        altText: 'book_To Kill A Mockingbird',
        category: 'classic'
    },
    {
        id: 32,
        img: 'https://www.penguin.co.uk/content/dam/prh/books/562/56215/9780241968581.jpg.transform/PRHDesktopWide_small/image.jpg',
        title: 'One Hundred Years of Solitude',
        author: 'By Gabriel García Márquez',
        price: 247,
        rating: 4,
        altText: 'book_One Hundred Years of Solitude',
        category: 'classic'
    },
    {
        id: 33,
        img: 'https://m.media-amazon.com/images/I/912ImsMUelL._AC_UY218_.jpg',
        title:'I Capture the Castle',
        author: 'By Dodie Smith',
        price: 183,
        rating: 4,
        altText: 'book_I Capture the Castle',
        category: 'classic'
    },
    {
        id: 34,
        img: 'https://m.media-amazon.com/images/I/51SAycRsX3L._AC_UY218_.jpg',
        title: 'The Call of the Wild',
        author: 'By Jack London',
        price: 86,
        rating: 5,
        altText: 'book_The Call of the Wild',
        category: 'classic'
    },
    {
        id: 35,
        img: 'https://m.media-amazon.com/images/I/51erHMLhIzL._AC_UY218_.jpg',
        title: 'The Lion, the Witch and the Wardrobe',
        author: 'By C.S.Lewis & Pauline Baynes',
        price: 587,
        rating: 5,
        altText: 'book_The Lion',
        category: 'classic'
    },
    {
        id: 36,
        img: 'https://m.media-amazon.com/images/I/919SO4qe9UL._AC_UY218_.jpg',
        title: 'The Death of the Heart',
        author: 'By Elizabeth Bowen',
        price: 280,
        rating: 4,
        altText: 'book_The Death of the Heart',
        category: 'classic'
    },
    {
        id: 37,
        img: 'https://m.media-amazon.com/images/I/71CQGlGhjrL._AC_UY218_.jpg',
        title: 'Tess of the D\'Urbervilles',
        author: 'By Thomas Hardy',
        price: 264,
        rating: 4,
        altText: 'book_Tess of the D\'Urbervilles',
        category: 'classic'
    },
    {
        id: 38,
        img: 'https://www.penguin.co.uk/content/dam/prh/books/571/57119/9780141187785.jpg.transform/PRHDesktopWide_small/image.jpg',
        title: 'The Go-Between',
        author: 'By L.P. Hartley',
        price: 521,
        rating: 5,
        altText: 'book_The Go-Between',
        category: 'classic'
    },
    {
        id: 39,
        img: 'https://m.media-amazon.com/images/I/711fvwpBvkL._AC_UY218_.jpg',
        title: 'The Code of the Woosters',
        author: 'By P.G. Wodehouse',
        price: 237,
        rating: 4,
        altText: 'book_The Code',
        category: 'classic'
    },
    {
        id: 40,
        img: 'https://m.media-amazon.com/images/I/91dR5VlLTVL._AC_UY218_.jpg',
        title: 'The Lord of the Rings',
        author: 'By J.R.R. Tolkien',
        price: 358,
        rating: 5,
        altText: 'book_ The Lord of the Rings',
        category: 'classic'
    },
    {
        id: 41,
        img: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1587067757-51bMsa8YpuL.jpg?crop=1xw:1xh;center,top&resize=768:*',
        title: 'Dead Until Dark',
        author: 'By Charlaine Harris',
        price: 350,
        rating: 4,
        altText: 'book_Dead Until Dark',
        category: 'detective and mystery'
    },
    {
        id: 42,
        img: 'https://m.media-amazon.com/images/I/91nh+RL7nPL._AC_UY218_.jpg',
        title: 'The Devil in the White City',
        author: 'By Erik Larson',
        price: 897,
        rating: 4,
        altText: 'book_The Devil in the White City',
        category: 'detective and mystery'
    },
    {
        id: 43,
        img: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1587067797-416TH3igfOL.jpg?crop=1xw:1xh;center,top&resize=768:*',
        title: 'Gone Girl',
        author: 'By Gillian Flynn',
        price: 300,
        rating: 4,
        altText: 'book_Gone Girl',
        category: 'detective and mystery'
    },
    {
        id: 44,
        img: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1587068047-516VlzBlS2L.jpg?crop=1xw:1xh;center,top&resize=768:*',
        title: 'In the Woods',
        author: 'By Tana French',
        price: 280,
        rating: 4,
        altText: 'book_In the Woods',
        category: 'detective and mystery'
    },
    {
        id: 45,
        img: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1587068167-51KK16nBqqL.jpg?crop=1xw:1xh;center,top&resize=768:*',
        title: 'Still Life',
        author: 'By Louise Penny',
        price: 338,
        rating: 4,
        altText: 'book_Still Life',
        category: 'detective and mystery'
    },
    {
        id: 46,
        img: 'https://m.media-amazon.com/images/I/81roqJbATwL._AC_UY218_.jpg',
        title: 'Luckiest Girl Alive',
        author: 'By Louise Penny',
        price: 355,
        rating: 4,
        altText: 'book_Luckiest Girl Alive',
        category: 'detective and mystery'
    },
    {
        id: 47,
        img: 'https://m.media-amazon.com/images/I/615oBH7yFsL._AC_UY218_.jpg',
        title: 'Everything I Never Told You',
        author: 'By Celeste Ng',
        price: 399,
        rating: 4,
        altText: 'book_Everything I Never Told You',
        category: 'detective and mystery'
    },
    {
        id: 48,
        img: 'https://m.media-amazon.com/images/I/81GAJnQAKkL._AC_UY218_.jpg',
        title: 'The Eight',
        author: 'By Katherine Neville',
        price: 375,
        rating: 4,
        altText: 'book_The Eight',
        category: 'detective and mystery'
    },
    {
        id: 49,
        img: 'https://m.media-amazon.com/images/I/91T2l0SqOcL._AC_UY218_.jpg',
        title: 'American Spy: A Novel',
        author: 'By Lauren Wilkinson',
        price: 371,
        rating: 4,
        altText: 'book_American Spy: A Novel',
        category: 'detective and mystery'
    },
    {
        id: 50,
        img: 'https://m.media-amazon.com/images/I/91TDv7XKJkS._AC_UY218_.jpg',
        title: 'Big Little Lies',
        author: 'By Lauren Wilkinson',
        price: 299,
        rating: 4,
        altText: 'book_Big Little Lies',
        category: 'detective and mystery'
    },
    {
        id: 51,
        img: 'https://m.media-amazon.com/images/I/71axO6jrMtL._AC_UY218_.jpg',
        title: 'At the Mountains of Madness',
        author: 'By H.P.Lovecraft & I.N.J. Culbard',
        price: 1189,
        rating: 4,
        altText: 'book_At the Mountains of Madness',
        category: 'horror'
    },
    {
        id: 52,
        img: 'https://m.media-amazon.com/images/I/91Pmd1UMdlL._AC_UY218_.jpg',
        title: 'The Bad Seed',
        author: 'By William March',
        price: 126,
        rating: 5,
        altText: 'book_The Bad Seed',
        category: 'horror'
    },
    {
        id: 53,
        img: 'https://m.media-amazon.com/images/I/71qZg5ZEhpL._AC_UY218_.jpg',
        title: 'Beloved',
        author: 'By Toni Morrison',
        price: 315,
        rating: 5,
        altText: 'book_Beloved',
        category: 'horror'
    },
    {
        id: 54,
        img: 'https://m.media-amazon.com/images/I/71JqAKE52ZL._AC_UY218_.jpg',
        title: 'Carrie',
        author: 'By Stephen King',
        price: 329,
        rating: 5,
        altText: 'book_Carrie',
        category: 'horror'
    },
    {
        id: 55,
        img: 'https://m.media-amazon.com/images/I/91rsR3TpdML._AC_UY218_.jpg',
        title: 'The Case Against Satan',
        author: 'By Ray Russell',
        price: 599,
        rating: 5,
        altText: 'book_The Case Against Satan',
        category: 'horror'
    },
    {
        id: 56,
        img: 'https://m.media-amazon.com/images/I/51Irc9fWeSL._AC_UY218_.jpg',
        title: 'The Drowning Girl',
        author: 'By Caitlin R.Kiernan',
        price: 462,
        rating: 4,
        altText: 'book_The Drowning Girl',
        category: 'horror'
    },
    {
        id: 57,
        img: 'https://m.media-amazon.com/images/I/81UIdsDOybL._AC_UY218_.jpg',
        title: 'The Changeling',
        author: 'By Victor LaValle',
        price: 329,
        rating: 5,
        altText: 'book_The Changeling',
        category: 'horror'
    },
    {
        id: 58,
        img: 'https://m.media-amazon.com/images/I/91ffbgrydwL._AC_UY218_.jpg',
        title: 'Come Closer',
        author: 'By Sara Gran',
        price: 909,
        rating: 5,
        altText: 'book_Come Closer',
        category: 'horror'
    },
    {
        id: 59,
        img: 'https://m.media-amazon.com/images/I/91YZpSnLFsL._AC_UY218_.jpg',
        title: 'The Devil in Silver',
        author: 'By Victor LaValle',
        price: 1270,
        rating: 5,
        altText: 'book_The Devil in Silver',
        category: 'horror'
    },
    {
        id: 60,
        img: 'https://m.media-amazon.com/images/I/61MPICUO0BL._AC_UY218_.jpg',
        title: 'Dracula',
        author: 'By Bram Stoker',
        price: 255,
        rating: 5,
        altText: 'book_Dracula',
        category: 'horror'
    },
    {
        id: 61,
        img: 'https://m.media-amazon.com/images/I/714xPFBXpPL._AC_UY218_.jpg',
        title: 'Altered Carbon',
        author: 'By Richard Morgan',
        price: 411,
        rating: 4,
        altText: 'book_Altered Carbon',
        category: 'sci_fi'
    },
    {
        id: 62,
        img: 'https://m.media-amazon.com/images/I/71lkQ7g+qGL._AC_UY218_.jpg',
        title: 'Ammonite',
        author: 'By Nicola Griffith',
        price: 725,
        rating: 4,
        altText: 'book_Ammonite',
        category: 'sci_fi'
    },
    {
        id: 63,
        img: 'https://m.media-amazon.com/images/I/818tvYXQ+0L._AC_UY218_.jpg',
        title: 'The Best of All Possible Worlds',
        author: 'By Karen Lord',
        price: 534,
        rating: 5,
        altText: 'book_The Best of All Possible Worlds',
        category: 'sci_fi'
    },
    {
        id: 64,
        img: 'https://m.media-amazon.com/images/I/71zPftGi69L._AC_UY218_.jpg',
        title: 'The Blazing World and Other Writings',
        author: 'By Margaret Cavendish',
        price: 429,
        rating: 5,
        altText: 'book_The Blazing World and Other Writings',
        category: 'sci_fi'
    },
    {
        id: 65,
        img: 'https://m.media-amazon.com/images/I/71ze8MLsV+L._AC_UY218_.jpg',
        title: 'A Canticle for Leibowitz',
        author: 'By Walter Miller',
        price: 317,
        rating: 4,
        altText: 'book_A Canticle for Leibowitz',
        category: 'sci_fi'
    },
    {
        id: 66,
        img: 'https://m.media-amazon.com/images/I/81iM8KeK1bL._AC_UY218_.jpg',
        title: 'The Children of Men',
        author: 'By P.D. James',
        price: 405,
        rating: 5,
        altText: 'book_The Children of Men',
        category: 'sci_fi'
    },
    {
        id: 67,
        img: 'https://m.media-amazon.com/images/I/91A+jbtrOUL._AC_UY218_.jpg',
        title: 'Do Androids Dream of Electric Sheep?',
        author: 'By Philip K Dick',
        price: 1419,
        rating: 5,
        altText: 'book_Do Androids',
        category: 'sci_fi'
    },
    {
        id: 68,
        img: 'https://m.media-amazon.com/images/I/71O+fKB-jlL._AC_UL320_.jpg',
        title: 'Downbelow Station',
        author: '',
        price: 1152,
        rating: 5,
        altText: 'book_Downbelow Station',
        category: 'sci_fi'
    },
    {
        id: 69,
        img: 'https://m.media-amazon.com/images/I/91F1VkEUbzS._AC_UL320_.jpg',
        title: 'Dragonflight',
        author: 'By Anne McCaffrey',
        price: 246,
        rating: 5,
        altText: 'book_Dragonflight',
        category: 'sci_fi'
    },
    {
        id: 70,
        img: 'https://m.media-amazon.com/images/I/91hQOaBzweL._AC_UY218_.jpg',
        title: 'Dust',
        author: 'By Elizabeth Bear',
        price: 266,
        rating: 5,
        altText: 'book_Dust',
        category: 'sci_fi'
    },
    {
        id: 71,
        img: 'https://m.media-amazon.com/images/I/81A7SiRaaiL._AC_UY218_.jpg',
        title: 'Invaluable',
        author: 'By Maya Grossman',
        price: 499,
        rating: 5,
        altText: 'book_Invaluable',
        category: 'eductional'
    },
    {
        id: 72,
        img: 'https://m.media-amazon.com/images/I/41+aN7ZbS9L.jpg',
        title: 'Educated',
        author: 'By Tara Westover',
        price: 300,
        rating: 5,
        altText: 'book_Educated',
        category: 'eductional'
    },
    {
        id: 73,
        img: 'https://m.media-amazon.com/images/I/41+ThRMjtKL.jpg',
        title: 'The Privileged Poor',
        author: '699',
        price: 255,
        rating: 5,
        altText: 'book_The Privileged Poor',
        category: 'eductional'
    },
    {
        id: 74,
        img: 'https://m.media-amazon.com/images/I/81Bwg+eOiaL._AC_UL320_.jpg',
        title: 'Culturize',
        author: 'By Jimmy Casas',
        price: 499,
        rating: 5,
        altText: 'book_Culturize',
        category: 'eductional'
    },
    {
        id: 75,
        img: 'https://m.media-amazon.com/images/I/81R83KVSXDL._AC_UY218_.jpg',
        title: 'Learning Transformed',
        author: 'By Eric C. Sheninger',
        price: 1993,
        rating: 5,
        altText: 'book_Learning Transformed',
        category: 'eductional'
    },
    {
        id: 76,
        img: 'https://m.media-amazon.com/images/I/71AV4pa7izL._AC_UL320_.jpg',
        title: 'Wrightslaw',
        author: 'By MS Pamela Darr Wright Ma',
        price: 1920,
        rating: 5,
        altText: 'book_Wrightslaw',
        category: 'eductional'
    },
    {
        id: 77,
        img: 'https://m.media-amazon.com/images/I/71qxawlXwCL._AC_UY218_.jpg',
        title: 'Take Control of the Noisy Class',
        author: 'By Rob Plevin',
        price: 1498,
        rating: 5,
        altText: 'book_Take Control',
        category: 'eductional'
    },
    {
        id: 78,
        img: 'https://m.media-amazon.com/images/I/51a+BbaKwjL.jpg',
        title: 'The School of Life',
        author: 'By Alain de Botton',
        price: 449,
        rating: 5,
        altText: 'book_The School of Life',
        category: 'eductional'
    },
    {
        id: 79,
        img: 'https://m.media-amazon.com/images/I/71VQzOvPh8L._AC_UY218_.jpg',
        title: 'Teaching from Rest',
        author: 'By Sarah Mackenzie',
        price: 678,
        rating: 4,
        altText: 'book_Teaching',
        category: 'eductional'
    },
    {
        id: 80,
        img: 'https://m.media-amazon.com/images/I/715iqSVvdKL._AC_UY218_.jpg',
        title: 'Unconscious Bias in Schools',
        author: 'By Tracey A. Benson',
        price: 2242,
        rating: 4,
        altText: 'book_Unconscious',
        category: 'eductional'
    },
    {
        id: 81,
        img: 'https://m.media-amazon.com/images/I/915-ZyDsXmL._AC_UY218_.jpg',
        title: 'The Thing Around Your Neck',
        author: 'By Chimamanda Ngozi Adichie',
        price: 272,
        rating: 4,
        altText: 'book_A thing',
        category: 'short_stories'
    },
    {
        id: 82,
        img: 'https://m.media-amazon.com/images/I/81MpL3UZJzL._AC_UY218_.jpg',
        title: 'The Safety of Objects',
        author: 'By A.M. Homes',
        price: 859,
        rating: 3,
        altText: 'book_The Safety',
        category: 'short_stories'
    },
    {
        id: 83,
        img: 'https://m.media-amazon.com/images/I/41AFpxXA1KL._AC_UY218_.jpg',
        title: 'American Housewife',
        author: 'By Helen Ellis',
        price: 771,
        rating: 5,
        altText: 'book_American Housewife',
        category: 'short_stories'
    },
    {
        id: 83,
        img: 'https://m.media-amazon.com/images/I/818uz9QQ6lL._AC_UL320_.jpg',
        title: 'Awayland',
        author: 'By Ramona Ausubel',
        price: 1327,
        rating: 4,
        altText: 'book_Awayland',
        category: 'short_stories'
    },
    {
        id: 84,
        img: 'https://m.media-amazon.com/images/I/41FiPYO09bL._AC_UL320_.jpg',
        title: 'Sour Heart',
        author: 'By Jenny Zhang',
        price: 395,
        rating: 4,
        altText: 'book_Sour Heart',
        category: 'short_stories'
    },
    {
        id: 85,
        img: 'https://m.media-amazon.com/images/I/41cRrOP6BwL._AC_UY218_.jpg',
        title: 'The King Is Always Above the People',
        author: 'By Jenny Zhang',
        price: 185,
        rating: 4,
        altText: 'book_The King',
        category: 'short_stories'
    },
    {
        id: 86,
        img: 'https://m.media-amazon.com/images/I/41hTYlPepOL._AC_UY218_.jpg',
        title: 'After the Quake',
        author: 'By Haruki Murakami',
        price: 251,
        rating: 4,
        altText: 'book_After Quake',
        category: 'short_stories'
    },
    {
        id: 87,
        img: 'https://m.media-amazon.com/images/I/91382RVTr3L._AC_UY218_.jpg',
        title: 'Arrival (Stories of Your Life MTI)',
        author: 'By Ted Chiang',
        price: 973,
        rating: 4,
        altText: 'book_Arrival',
        category: 'short_stories'
    },
    {
        id: 88,
        img: 'https://m.media-amazon.com/images/I/81k+O7UDOML._AC_UY218_.jpg',
        title: 'The Boat',
        author: 'By Nam Le',
        price: 968,
        rating: 4,
        altText: 'book_The Boat',
        category: 'short_stories'
    },
    {
        id: 89,
        img: 'https://m.media-amazon.com/images/I/71M0b7isP-L._AC_UY218_.jpg',
        title: 'Tenth of December',
        author: 'By George Saunders',
        price: 355,
        rating: 4,
        altText: 'book_Tenth of December',
        category: 'short_stories'
    },
    {
        id: 90,
        img: 'https://m.media-amazon.com/images/I/91Z4p92lI8L._AC_UY218_.jpg',
        title: 'Dear Life',
        author: 'By Alice Munro',
        price: 500,
        rating: 4,
        altText: 'book_Dear Life',
        category: 'short_stories'
    },
    {
        id: 91,
        img: 'https://m.media-amazon.com/images/I/71yTtSNH2LL._AC_UY218_.jpg',
        title: 'Enduring Love',
        author: 'By Ian McEwan',
        price: 391,
        rating: 4,
        altText: 'book_Enduring Love',
        category: 'suspense and thrillers'
    },
    {
        id: 92,
        img: 'https://m.media-amazon.com/images/I/61vrAu3FrIL._AC_UY218_.jpg',
        title: 'The Shining',
        author: 'By Ian McEwan',
        price: 391,
        rating: 4,
        altText: 'book_The Shining',
        category: 'suspense and thrillers'
    },
    {
        id: 93,
        img: 'https://m.media-amazon.com/images/I/81OQbPBjtLL._AC_UY218_.jpg',
        title: 'The Widow',
        author: 'By Fiona Barton',
        price: 578,
        rating: 5,
        altText: 'book_The Widow',
        category: 'suspense and thrillers'
    },
    {
        id: 94,
        img: 'https://m.media-amazon.com/images/I/81ndRz1RekL._AC_UY218_.jpg',
        title: 'Strangers',
        author: 'By Dean Koontz',
        price: 5977,
        rating: 5,
        altText: 'book_Strangers',
        category: 'suspense and thrillers'
    },
    {
        id: 95,
        img: 'https://m.media-amazon.com/images/I/91+Z6-2bFVL._AC_UY218_.jpg',
        title: 'Eileen',
        author: 'By Ottessa Moshfegh',
        price: 321,
        rating: 4,
        altText: 'book_Eileen',
        category: 'suspense and thrillers'
    },
    {
        id: 96,
        img: 'https://m.media-amazon.com/images/I/71ErsKpwmrS._AC_UY218_.jpg',
        title: 'The Girl on the Train',
        author: 'By Paula Hawkins',
        price: 248,
        rating: 3,
        altText: 'book_The Girl on the Train',
        category: 'suspense and thrillers'
    },
    {
        id: 97,
        img: 'https://m.media-amazon.com/images/I/91QN7WmG8JL._AC_UY218_.jpg',
        title: 'Dead Letters',
        author: 'By Caite Dolan-Leach',
        price: 252,
        rating: 5,
        altText: 'book_Dead Letters',
        category: 'suspense and thrillers'
    },
    {
        id: 98,
        img: 'https://m.media-amazon.com/images/I/71pkPxJbR+L._AC_UY218_.jpg',
        title: 'The Annotated Big Sleep',
        author: 'By Raymond Chandler',
        price: 1904,
        rating: 4,
        altText: 'book_The Annotated Big Sleep',
        category: 'suspense and thrillers'
    },
    {
        id: 99,
        img: 'https://m.media-amazon.com/images/I/61O0lSDyZ7S._AC_UY218_.jpg',
        title: 'The Hound of the Baskervilles',
        author: 'By Arthur Conan Doyle',
        price: 2713,
        rating: 4,
        altText: 'book_The Hound of the Baskervilles',
        category: 'suspense and thrillers'
    },
    {
        id: 100,
        img: 'https://m.media-amazon.com/images/I/811q7gUIs1L._AC_UY218_.jpg',
        title: 'The Night of the Hunter',
        author: 'By Davis Grubb',
        price: 902,
        rating: 4,
        altText: 'book_The Night of the Hunter',
        category: 'suspense and thrillers'
    },
];


export default books;
