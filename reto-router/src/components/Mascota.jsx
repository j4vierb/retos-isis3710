import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Mascota(props) {
  return (
    <Card style={{ width: "18rem", minHeight: "17rem" }} className="mb-3">
      <Card.Img
        style={{ maxWidth: "18rem", objectFit: "cover"}}
        variant="top"
        src={props.mascota.foto}
        alt={"Not found: " + props.mascota.nombre}
      />
      <Card.Body>
        <Card.Title>
          <Link to={"/mascotas/" + props.mascota.id}>
            {props.mascota.nombre}
          </Link>
        </Card.Title>
        <Card.Text>{props.mascota.descripcion}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Mascota;
