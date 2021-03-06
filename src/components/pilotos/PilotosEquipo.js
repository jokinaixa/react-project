import React, { Component } from "react";
import { Link } from "react-router-dom";

class PilotosEquipo extends Component {
  state = {
    pilotos: []
  };

  async componentDidMount() {
    const { equipoId } = this.props.equipoId;

    const res = await fetch(
      `http://localhost:8080/api/obtenerPilotosPorEquipo.php?equipo=${equipoId}`
    );
    const data = await res.json();

    this.setState({ pilotos: data });
  }

  render() {
    return (
      <div>
        <table className="table table-dark">
          <thead>
            <tr>
              <th>Pilotos</th>
              <th>País</th>
            </tr>
          </thead>

          <tbody>
            {this.state.pilotos.map(piloto => (
              <tr key={piloto.id}>
                <td>
                  <Link to={{ pathname: `/pilotoFicha/${piloto.id}` }}>
                    {piloto.nombre} {piloto.apellido.toUpperCase()}
                  </Link>
                </td>
                <td>{piloto.pais}</td>
              </tr>
            ))}
          </tbody>

          <tfoot>
            <tr>
              <td colSpan="2">TOTAL: {this.state.pilotos.length}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

export default PilotosEquipo;
