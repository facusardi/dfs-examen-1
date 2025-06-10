const Display = ({ partido }) => {
  return (
    <div className="display">    
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Local</th>
            <th>Visitante</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">⚽</th>
            <td>{partido.golesLocal}</td>
            <td>{partido.golesVisitante}</td>
          </tr>
          <tr>
            <th scope="row">🟨</th>
            <td>{partido.targeta_AmarillaLocal}</td>
            <td>{partido.targeta_AmarillaVisitante}</td>
          </tr>
          <tr>
            <th scope="row">🟥</th>
            <td>{partido.targeta_RojaLocal}</td>
            <td>{partido.targeta_RojaVisitante}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Display