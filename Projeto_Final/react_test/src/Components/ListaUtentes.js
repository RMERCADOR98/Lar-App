import React from "react";
import Utente from "../Layout/Utente";
import { Link } from "react-router-dom";

const ProjectList = ({ utentes }) => {
  console.log(utentes);
  return (
    <div>
      {/* //tambem podemos fazer fora do return como nos outros tutoriais */}
      {/* estamos a utilizar os && porque provavelmente não teriamos nenhuns projeto e então estamos a dizer que a partir do momento em que recebemos os projetos , queremos que eles sejam mapeados */}
      {utentes &&
        utentes.map((utente) => {
          return (
            <div key={utente.id}>
              <Link to={"/utente/" + utente.id}>
                <Utente utente={utente} />
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default ProjectList;
