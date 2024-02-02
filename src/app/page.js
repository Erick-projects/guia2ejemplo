// page.jsx

import React from "react";
import styles from "./page.module.css";

const Equipos = ({ equipos }) => {
  return (
    <div className={styles.container__list}>
      <h2 className={styles.title}>Equipos de Fútbol</h2>
      {equipos.map((equipo) => (
        <div key={equipo.id}>
          <h3 className={styles.nameclub}>{equipo.nombre}</h3>
          <ul>
            {equipo.plantilla.map((jugador) => (
              <li className={styles.container__list} key={jugador.id}>
                <strong>{jugador.nombre}</strong>
                <p>
                  Altura: {jugador.Altura}m <br /> Peso: {jugador.Peso}Kg
                </p>
                {jugador.img && (
                  <img
                    src={jugador.img}
                    alt={jugador.nombre}
                    className={styles.playerImage}
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default function Home() {
  const equiposData = [
    {
      id: 1,
      nombre: "Real Madrid",
      plantilla: [
        {
          id: 1,
          nombre: "Eden Hazard",
          Altura: "1.75",
          Peso: "74Kg",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Eden_Hazard_at_Baku_before_2019_UEFA_Europe_League_Final.jpg/330px-Eden_Hazard_at_Baku_before_2019_UEFA_Europe_League_Final.jpg",
        },
        { id: 2, nombre: "Gonzalo García", Altura: "1.82", Peso: "74Kg", img: "https://cdn.vox-cdn.com/thumbor/919hZ8VfLVsevPN_-LXA4xMNeiM=/0x0:5048x3365/920x613/filters:focal(2085x161:2891x967):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/72589036/1644088904.0.jpg" },
        { id: 3, nombre: "Karim Benzema", Altura: "1.85", Peso: "81Kg", img: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blte3ade1bfe6fcd20a/634d17b21f6f12784d5837da/GettyImages-1244015233.jpg?auto=webp&format=pjpg&width=1200&quality=60"},
      ],
    },
    {
      id: 2,
      nombre: "Barcelona",
      plantilla: [
        {
          id: 1,
          nombre: "Marc-André ter Stegen  ",
          Altura: "1.75",
          Peso: "74Kg",
          img: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt5b84dd62a915d257/656f8d2ec3ca7d040adb0a5f/GettyImages-1780572913_(1).jpg?auto=webp&format=pjpg&width=1200&quality=60"
        },
        { id: 2, nombre: "Iñigo  Martinez", Altura: "1.82", Peso: "74Kg", img: "https://cdn.vox-cdn.com/thumbor/9o5x_4PoIFkmtOsixna2uqFoDkk=/0x0:2357x1571/920x613/filters:focal(984x110:1360x486):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/73032733/1793442924.0.jpg" },
        { id: 3, nombre: "Gavi", Altura: "1.85", Peso: "81Kg", img: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltb52fb6c2bb93ebda/650a0cb7dfd7208003f8c6a4/Gavi_Barcelona_2023-24_(3).jpg?auto=webp&format=pjpg&width=1200&quality=60"},
      ],
    },
    {
      id: 3,
      nombre: "Manchester City",
      plantilla: [
        { id: 1, nombre: "Julian Alvarez", Altura: "1.75", Peso: "74Kg", img: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt3518f8eac2250784/644e8037c7c3b22724776d74/Julian_Alvarez_Manchester_City_2022-23_(3).jpg?auto=webp&format=pjpg&width=1200&quality=60"},
        { id: 2, nombre: "Kevin De Bruyne", Altura: "1.82", Peso: "74Kg", img: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltf4eb6706ceb9fae4/63a55c06b6f2166a77aaa1db/GettyImages-1435623465.jpg?auto=webp&format=pjpg&width=1200&quality=60"},
      ],
    },
    {
      id: 4,
      nombre: "Atletico de Madrid",
      plantilla: [
        { id: 1, nombre: "Griezman", Altura: "1.75", Peso: "74Kg", img: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltcad23169da4e1e2d/644ef9600cfe4f4753836a33/1484500495.jpg?auto=webp&format=pjpg&width=1200&quality=60"},
        { id: 2, nombre: "Oblack", Altura: "1.82", Peso: "74Kg", img: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltdb5c5b30e50c36e0/622e375c7206bf05fa7cf880/Jan_Oblak_Atletico_Madrid_2021-22.jpg?auto=webp&format=pjpg&width=1200&quality=60"},
      ],
    },
  ];

  return (
    <main className={styles.main}>
      <div>
        <h1>Mi Aplicación de Fútbol</h1>
        <Equipos equipos={equiposData} />
      </div>
    </main>
  );
}
