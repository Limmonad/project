"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели ?1", "1");
console.log(numberOfFilms);

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};
console.log(personalMovieDB.private);

const a = prompt("Один из последних просмотренных фильмов", ""),
b = prompt("На сколько оцените его ?", ""),
c = prompt("Один из последних просмотренных фильмов", ""),
d = prompt("На сколько оцените его ?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB)