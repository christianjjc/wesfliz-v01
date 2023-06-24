const peliculas = [
  {
    Title: "The Lego Movie",
    Year: "2014",
    imdbID: "tt1490017",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTg4MDk1ODExN15BMl5BanBnXkFtZTgwNzIyNjg3MDE@._V1_SX300.jpg",
  },
  {
    Title: "The Simpsons Movie",
    Year: "2007",
    imdbID: "tt0462538",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTgxMDczMTA5N15BMl5BanBnXkFtZTcwMzk1MzMzMw@@._V1_SX300.jpg",
  },
  {
    Title: "Scary Movie",
    Year: "2000",
    imdbID: "tt0175142",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMGEzZjdjMGQtZmYzZC00N2I4LThiY2QtNWY5ZmQ3M2ExZmM4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  },
  {
    Title: "El Camino: A Breaking Bad Movie",
    Year: "2019",
    imdbID: "tt9243946",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNjk4MzVlM2UtZGM0ZC00M2M1LThkMWEtZjUyN2U2ZTc0NmM5XkEyXkFqcGdeQXVyOTAzMTc2MjA@._V1_SX300.jpg",
  },
  {
    Title: "Bee Movie",
    Year: "2007",
    imdbID: "tt0389790",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjE1MDYxOTA4MF5BMl5BanBnXkFtZTcwMDE0MDUzMw@@._V1_SX300.jpg",
  },
  {
    Title: "Scary Movie 2",
    Year: "2001",
    imdbID: "tt0257106",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMzQxYjU1OTUtYjRiOC00NDg2LWI4MWUtZGU5YzdkYTcwNTBlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  },
  {
    Title: "The Lego Batman Movie",
    Year: "2017",
    imdbID: "tt4116284",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg",
  },
  {
    Title: "Scary Movie 3",
    Year: "2003",
    imdbID: "tt0306047",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDE2NTIyMjg2OF5BMl5BanBnXkFtZTYwNDEyMTg3._V1_SX300.jpg",
  },
  {
    Title: "The Super Mario Bros. Movie",
    Year: "2023",
    imdbID: "tt6718170",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTJhNzlmNzctNTU5Yy00N2YwLThhMjQtZDM0YjEzN2Y0ZjNhXkEyXkFqcGdeQXVyMTEwMTQ4MzU5._V1_SX300.jpg",
  },
  {
    Title: "Scary Movie 4",
    Year: "2006",
    imdbID: "tt0362120",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmFkMzc2NTctN2U1Ni00MzE5LWJmMzMtYWQ4NjQyY2MzYmM1XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
  },
  {
    Title: "Not Another Teen Movie",
    Year: "2001",
    imdbID: "tt0277371",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGM1NDA5MDktMWFjZi00MmNkLWJmYTEtMTgwMWFmZTJjMzA4XkEyXkFqcGdeQXVyMTUyOTc1NDYz._V1_SX300.jpg",
  },
  {
    Title: "Movie 43",
    Year: "2013",
    imdbID: "tt1333125",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTg4NzQ3NDM1Nl5BMl5BanBnXkFtZTcwNjEzMjM3OA@@._V1_SX300.jpg",
  },
  {
    Title: "Epic Movie",
    Year: "2007",
    imdbID: "tt0799949",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTA3NDM5ODU3NzleQTJeQWpwZ15BbWU3MDgyMjgyNDE@._V1_SX300.jpg",
  },
  {
    Title: "Jackass: The Movie",
    Year: "2002",
    imdbID: "tt0322802",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTgwMmU0YzktOGNhNi00MDcyLTg1OGEtZGQwM2RlMTAyYzhlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  },
  {
    Title: "The Angry Birds Movie",
    Year: "2016",
    imdbID: "tt1985949",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTY3MjU0NDA0OF5BMl5BanBnXkFtZTgwNTc0MTU3OTE@._V1_SX300.jpg",
  },
  {
    Title: "The SpongeBob SquarePants Movie",
    Year: "2004",
    imdbID: "tt0345950",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZjM5YjI0NmQtOTk4OS00NTNiLThkNzQtNTZlNGE4Y2VmNmU3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  },
  {
    Title: "Disaster Movie",
    Year: "2008",
    imdbID: "tt1213644",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTIzMDQyNDgwNl5BMl5BanBnXkFtZTcwMDA0MTc3MQ@@._V1_SX300.jpg",
  },
  {
    Title: "A Silent Voice: The Movie",
    Year: "2016",
    imdbID: "tt5323662",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZGRkOGMxYTUtZTBhYS00NzI3LWEzMDQtOWRhMmNjNjJjMzM4XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Scary Movie V",
    Year: "2013",
    imdbID: "tt0795461",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5OTIxMjQ4NF5BMl5BanBnXkFtZTcwOTAyNDcyOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Superhero Movie",
    Year: "2008",
    imdbID: "tt0426592",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc0Njc1MTU5Nl5BMl5BanBnXkFtZTcwMjA4NDE2MQ@@._V1_SX300.jpg",
  },
  {
    Title: "The Lego Movie 2: The Second Part",
    Year: "2019",
    imdbID: "tt3513498",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTkyOTkwNDc1N15BMl5BanBnXkFtZTgwNzkyMzk3NjM@._V1_SX300.jpg",
  },
  {
    Title: "The Emoji Movie",
    Year: "2017",
    imdbID: "tt4877122",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTkzMzM3OTM2Ml5BMl5BanBnXkFtZTgwMDM0NDU3MjI@._V1_SX300.jpg",
  },
  {
    Title: "Demon Slayer the Movie: Mugen Train",
    Year: "2020",
    imdbID: "tt11032374",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BODI2NjdlYWItMTE1ZC00YzI2LTlhZGQtNzE3NzA4MWM0ODYzXkEyXkFqcGdeQXVyNjU1OTg4OTM@._V1_SX300.jpg",
  },
  {
    Title: "Date Movie",
    Year: "2006",
    imdbID: "tt0466342",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYjA0NGUyMDQtY2RlNy00Y2YzLWIyODItNWE1ZTM1NTM3MWM1XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
  },
  {
    Title: "A Goofy Movie",
    Year: "1995",
    imdbID: "tt0113198",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZDczYjU4MDMtY2RjMy00Y2UyLWE2MmMtZjliYWUwNzQ3YjExXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  },
  {
    Title: "The SpongeBob Movie: Sponge Out of Water",
    Year: "2015",
    imdbID: "tt2279373",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMGEzNGRjYzYtNmRjNy00ZTI0LTgwOTYtOTViMGM0MWUwMzQ5XkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_SX300.jpg",
  },
  {
    Title: "Cowboy Bebop: The Movie",
    Year: "2001",
    imdbID: "tt0275277",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNTE5YTAyZDctNjFhYi00YmJhLTg4ZGUtNDk1OTE0ZTY4NTYwL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "The Peanuts Movie",
    Year: "2015",
    imdbID: "tt2452042",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNTE5NzMxNzkwNl5BMl5BanBnXkFtZTgwOTQ0Nzk5NzE@._V1_SX300.jpg",
  },
  {
    Title: "Pokémon: The First Movie - Mewtwo Strikes Back",
    Year: "1998",
    imdbID: "tt0190641",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZGM3MjQ3NTQtNzRiZi00MDUzLWFjYjEtZWJjMjUwYzExYjRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
  },
  {
    Title: "Hannah Montana: The Movie",
    Year: "2009",
    imdbID: "tt1114677",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTkxNjUxODY3NF5BMl5BanBnXkFtZTcwMjQyMzMzMg@@._V1_SX300.jpg",
  },
  {
    Title: "Shaun the Sheep Movie",
    Year: "2015",
    imdbID: "tt2872750",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTc1ODY5MTQ1Nl5BMl5BanBnXkFtZTgwMDM5ODI1NjE@._V1_SX300.jpg",
  },
  {
    Title: "The Lizzie McGuire Movie",
    Year: "2003",
    imdbID: "tt0306841",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTMzNDg1NDc0NF5BMl5BanBnXkFtZTYwOTY2OTU3._V1_SX300.jpg",
  },
  {
    Title: "The Transformers: The Movie",
    Year: "1986",
    imdbID: "tt0092106",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZGM1MGY4OTYtOGZkOC00NjYyLTk3OTMtODUyZDdhYWQ3NGFjXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SX300.jpg",
  },
  {
    Title: "Twilight Zone: The Movie",
    Year: "1983",
    imdbID: "tt0086491",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYjQ2NzgzYjEtMzAxNy00MzhkLWE5ZTUtZDA1ODY3MTBjOTRiXkEyXkFqcGdeQXVyNTAyNDQ2NjI@._V1_SX300.jpg",
  },
  {
    Title: "The Muppet Movie",
    Year: "1979",
    imdbID: "tt0079588",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMGQ0OGM5YjItYzYyMi00NmVmLWI3ODMtMTY2NGRkZmI5MWU2XkEyXkFqcGdeQXVyMzI0NDc4ODY@._V1_SX300.jpg",
  },
  {
    Title: "Between Two Ferns: The Movie",
    Year: "2019",
    imdbID: "tt9398640",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYzgyNzUyZjAtNDRiZS00MjQwLTgzMzQtZThhY2Y3YjFmYTc1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
  },
  {
    Title: "Batman: The Movie",
    Year: "1966",
    imdbID: "tt0060153",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMmM1OGIzM2UtNThhZS00ZGNlLWI4NzEtZjlhOTNhNmYxZGQ0XkEyXkFqcGdeQXVyNTkxMzEwMzU@._V1_SX300.jpg",
  },
  {
    Title: "The Angry Birds Movie 2",
    Year: "2019",
    imdbID: "tt6095472",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNTgyZTc0MzMtNzIzNi00ZTBhLTk1Y2ItOWViMjBhMzY1OGNkXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_SX300.jpg",
  },
  {
    Title: "Captain Underpants: The First Epic Movie",
    Year: "2017",
    imdbID: "tt2091256",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMmQwMzdiOGMtNGZiYS00YjgyLWJlMjItYzQ3Nzc2OGIwYjQwXkEyXkFqcGdeQXVyMzQ1MTM3NjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lego Ninjago Movie",
    Year: "2017",
    imdbID: "tt3014284",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDI3MDljMTQtYzBiYS00NDk2LTlhYzUtYmM0NWIyMmZkMDZkXkEyXkFqcGdeQXVyNjk5NDA3OTk@._V1_SX300.jpg",
  },
  {
    Title: "DuckTales the Movie: Treasure of the Lost Lamp",
    Year: "1990",
    imdbID: "tt0099472",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMGY1NjdiMmItMmE5MS00NjllLWJmM2ItMmU1ZTRjMWYyZjc4XkEyXkFqcGdeQXVyMjA0MDQ0Mjc@._V1_SX300.jpg",
  },
  {
    Title: "Man with a Movie Camera",
    Year: "1929",
    imdbID: "tt0019760",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYTc3NGVlN2QtYWJlZi00YjhjLThiZjctZDA1MmE1NGI4ZmE4XkEyXkFqcGdeQXVyODQyNDU4OTk@._V1_SX300.jpg",
  },
  {
    Title: "Deadwood: The Movie",
    Year: "2019",
    imdbID: "tt4943998",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BM2Y1OGQ4ZjEtZWUzMi00MzZmLTk3MmEtMThiNjIwNzg4MjRkXkEyXkFqcGdeQXVyMTE5NDkxMA@@._V1_SX300.jpg",
  },
  {
    Title: "The Brady Bunch Movie",
    Year: "1995",
    imdbID: "tt0112572",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNmVmYzkzY2YtZWNkNC00YzVhLTk4MzYtZWMxZWQ0YzBhZmYzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  },
  {
    Title: "Pokémon the Movie 2000",
    Year: "1999",
    imdbID: "tt0210234",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzE1NjBiODAtNDVhNS00ZTI1LTg4ZjUtZTk3OWVhODljMjNjXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SX300.jpg",
  },
  {
    Title: "Indie Game: The Movie",
    Year: "2012",
    imdbID: "tt1942884",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA5NTUzMjQ1MV5BMl5BanBnXkFtZTcwMzc1MzQ4Nw@@._V1_SX300.jpg",
  },
  {
    Title: "The Rugrats Movie",
    Year: "1998",
    imdbID: "tt0134067",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZjNiMWE1M2ItMTdlNi00NmZiLWEwYzctODJiMjU1MmY0MTlmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  },
  {
    Title: "The SpongeBob Movie: Sponge on the Run",
    Year: "2020",
    imdbID: "tt4823776",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYjlhOGVjOGYtMjZjOS00MzUxLThlZmUtMzE0OTZlMGM4ZTc3XkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_SX300.jpg",
  },
  {
    Title: "The Tigger Movie",
    Year: "2000",
    imdbID: "tt0220099",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjgwMjljMmItZGNkZC00MTY0LTllZDctZWQzYjYyMzczMTI0XkEyXkFqcGdeQXVyOTg4MDk3MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Wizards of Waverly Place: The Movie",
    Year: "2009",
    imdbID: "tt1369845",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZDVmMjFjZTEtMjc3NC00YTNmLWEwN2EtYzA2MGY3NDJlOTYxL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTEwMTkwOTI@._V1_SX300.jpg",
  },
  {
    Title: "The Kentucky Fried Movie",
    Year: "1977",
    imdbID: "tt0076257",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGRjZTJiMjYtNjkyZS00NTgwLWI3ODAtMDRlODdkMjQ2YjY3XkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_SX300.jpg",
  },
  {
    Title: "The Bob's Burgers Movie",
    Year: "2022",
    imdbID: "tt7466442",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYzFhNDNkY2UtYjc3ZS00NzVkLTlhNzEtYmZiZGMzYmRjMjVhXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_SX300.jpg",
  },
  {
    Title: "American Movie",
    Year: "1999",
    imdbID: "tt0181288",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxMDFhYzQtZDZmZS00ZDBjLWIzY2QtNDBiMDQ5YjBlNTk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Mystery Science Theater 3000: The Movie",
    Year: "1996",
    imdbID: "tt0117128",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYzNmN2UzNTAtNmZkMS00MmI3LThhNzEtNjI1YjJlN2JiZjU0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  },
  {
    Title: "Tales from the Darkside: The Movie",
    Year: "1990",
    imdbID: "tt0100740",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BODI4ZTI1ZjMtYmE5MC00NTM5LTgwMDgtNWI1ZTI1MDYyOGYyXkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg",
  },
  {
    Title: "Silent Movie",
    Year: "1976",
    imdbID: "tt0075222",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZWFkMmJhODItMDA2MC00NDFmLTllNzItYzE1YWMzYjVmYjFiXkEyXkFqcGdeQXVyNjQzNDI3NzY@._V1_SX300.jpg",
  },
  {
    Title: "The Last: Naruto the Movie",
    Year: "2014",
    imdbID: "tt3717532",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjk1NzA4Njg4Ml5BMl5BanBnXkFtZTgwMDgxODQ5MzE@._V1_SX300.jpg",
  },
  {
    Title: "The Onion Movie",
    Year: "2008",
    imdbID: "tt0392878",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDdkMDUxMmUtNWQ1Yi00OWY3LWI2ZDktOTBmNzVkMTAwODM5XkEyXkFqcGdeQXVyMTY5Nzc4MDY@._V1_SX300.jpg",
  },
  {
    Title: "The Greatest Movie Ever Sold",
    Year: "2011",
    imdbID: "tt1743720",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5NzQxOTQwNV5BMl5BanBnXkFtZTcwNDAwODM2NA@@._V1_SX300.jpg",
  },
  {
    Title: "A Shaun the Sheep Movie: Farmageddon",
    Year: "2019",
    imdbID: "tt6193408",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNTdjZjBkMDMtODBlNi00N2E0LWE1OGItOTgxODNmMDkzNGJmXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX300.jpg",
  },
  {
    Title: "Pokémon 3 the Movie: Spell of the Unown",
    Year: "2000",
    imdbID: "tt0235679",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTk0NzM3MDY1OV5BMl5BanBnXkFtZTYwNTkwODc5._V1_SX300.jpg",
  },
  {
    Title: "Santa Claus: The Movie",
    Year: "1985",
    imdbID: "tt0089961",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZDc1OGVkMmQtYTU0NC00ZTc4LWIyNjItM2IzYzcwNTA1ZmJmXkEyXkFqcGdeQXVyMjY3MjUzNDk@._V1_SX300.jpg",
  },
  {
    Title: "Cheech and Chong's Next Movie",
    Year: "1980",
    imdbID: "tt0080520",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BODk3YmQxZmYtNTdkMi00MDI2LTg1Y2ItNjVjMzhmNWQwYzA1XkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_SX300.jpg",
  },
  {
    Title: "Aqua Teen Hunger Force Colon Movie Film for Theaters",
    Year: "2007",
    imdbID: "tt0455326",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc0OTQwNzYyNF5BMl5BanBnXkFtZTcwMDc5NTM0MQ@@._V1_SX300.jpg",
  },
  {
    Title: "My Scientology Movie",
    Year: "2015",
    imdbID: "tt5111874",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTQ5NTI2NDc3NF5BMl5BanBnXkFtZTgwNDA3ODk2MTI@._V1_SX300.jpg",
  },
  {
    Title: "Trailer Park Boys: The Movie",
    Year: "2006",
    imdbID: "tt0425601",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTY5Mzg4MDM1M15BMl5BanBnXkFtZTcwNTk4MzkzMQ@@._V1_SX300.jpg",
  },
  {
    Title: "Teen Beach Movie",
    Year: "2013",
    imdbID: "tt2325989",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZDFjYjdlODItN2MzMC00YzgxLWJiMDktOTI3MGQyOGY2YmQxXkEyXkFqcGdeQXVyMTIwMjY0NjQz._V1_SX300.jpg",
  },
  {
    Title: "Absolutely Fabulous: The Movie",
    Year: "2016",
    imdbID: "tt2112096",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjI4NDI5MDg2OV5BMl5BanBnXkFtZTgwNzA5ODQ3ODE@._V1_SX300.jpg",
  },
  {
    Title: "Phineas and Ferb the Movie: Across the 2nd Dimension",
    Year: "2011",
    imdbID: "tt1825918",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2M4YTE0YWYtNDIxZC00MmQyLThhYjgtYTNjMTJhZjU2NzM0XkEyXkFqcGdeQXVyMTIwMjY0NjQz._V1_SX300.jpg",
  },
  {
    Title: "Teen Wolf: The Movie",
    Year: "2023",
    imdbID: "tt15486810",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWYyZWU5NzctYjY4Zi00MzYyLTgxZTMtZjBmYWE2NGMwYTllXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];
