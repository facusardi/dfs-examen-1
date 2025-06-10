const Controles = ({ onGol, onTargetaA, onTargetaR}) => {
  return (
    <div className="controles">
      <div>
        <h3>Local</h3>
        <button onClick={() => { onGol('local') }}>⚽ Gol</button>
        <button onClick={() => {onTargetaA('local')}}>🟨 Amarilla</button>
        <button onClick={() => {onTargetaR('local')}}>🟥 Roja</button>
      </div>
      <div>
        <h3>Visitante</h3>
        <button onClick={() => { onGol('visitante') }}>⚽ Gol</button>
        <button onClick={() => {onTargetaA('visitante')}}>🟨 Amarilla</button>
        <button onClick={() => {onTargetaR('visitante')}}>🟥 Roja</button>        
      </div>
    </div>
  )
}

export default Controles