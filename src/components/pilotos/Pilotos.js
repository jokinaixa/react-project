import React, { Component } from "react";
import "./Pilotos.scss";

import Piloto from "./Piloto";
import pilotosData from "../../data/pilotos.json";
import categoriasData from "../../data/categorias.json";

class Pilotos extends Component {
  cat = "MotoGP";

  state = {
    pilotos: [],
    categorias: []
  };

  async componentDidMount() {
    this.filtrar(this.cat);
    this.setState({ categorias: categoriasData });
  }

  filtrar = categoria => {
    this.cat = categoria;
    const data = pilotosData.filter(
      element => element.equipo.categoria === categoria
    );
    this.setState({ pilotos: data });
  };

  render() {
    return (
      <div>
        <h1>{this.state.pilotos.length} Pilotos</h1>
        <ul className="categoria list-inline">
          {this.state.categorias.map((categoria, index) => (
            <li
              className={categoria === this.cat ? "active" : ""}
              onClick={() => this.filtrar(categoria)}
              key={index}
            >
              {categoria}
            </li>
          ))}
        </ul>
        <ul className="listado">
          {this.state.pilotos.map(piloto => (
            <Piloto piloto={piloto} key={piloto.id} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Pilotos;
