import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  const [mascota, setMascota] = useState({});
  const params = useParams();

  useEffect(() => {
    const URL = "https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json";
    fetch(URL)
      .then((data) => data.json())
      .then((data) => {
        let mascota = data.find(e => e.id === Number(params.mascotaId));
        setMascota(mascota);
      });
  }, [params.mascotaId]);

  return (
    <div>
      <h1>{mascota.nombre}</h1>
      <img src={mascota.foto} style={{maxWidth: "20rem"}} alt={"Not found " + mascota.nombre}/>
      <h2>{mascota.raza}</h2>
    </div>
  );
}