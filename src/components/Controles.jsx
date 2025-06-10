const Controles = ({ onGol, onTargeta}) => {
  return (
    <div className="controles">
      <div>
        <h3>Local</h3>
        <button onClick={() => { onGol('local') }}>⚽ Gol</button>
        <button onClick={() => {onTargeta('local')}}>🟨 Amarilla</button>
        <button>🟥 Roja</button>
      </div>
      <div>
        <h3>Visitante</h3>
        <button onClick={() => { onGol('visitante') }}>⚽ Gol</button>
        <button onClick={() => {onTargeta('visitante')}}>🟨 Amarilla</button>
        <button>🟥 Roja</button>        
      </div>
    </div>
  )
}

export default Controles