
import barbie from '../assets/barbie.jpg';
import oppenheimer from '../assets/oppenheimer.jpg';
import dune from '../assets/dune.jpg';


const movies = [

    {
        id: 1,
        title: "Дюна: Частина друга",
        description: "Фантастична сага про боротьбу за контроль над пустельною планетою Арракіс.",
        genre: "Фантастика",
        poster: dune,
        dateTime: "2025-05-20 18:00"
    }
,
  {
    id: 2,
    title: "Барбі",
    description: "Фільм про пригоди у світі Барбі.",
    genre: "Комедія",
    poster: barbie,
    dateTime: "2025-05-21 16:30",
  },
  {
    id: 3,
    title: "Оппенгеймер",
    description: "Біографічна драма про творця атомної бомби.",
    genre: "Драма",
    poster: oppenheimer,
    dateTime: "2025-05-22 20:00",
  }
];

export default movies;
