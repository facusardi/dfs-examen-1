import { useState } from 'react'
import './App.css'
import Controles from './components/Controles'
import Display from './components/Display'

function App() {
  const [partido, setPartido] = useState({
    golesLocal: 0,
    golesVisitante: 0,
    targeta_AmarillaVisitante: 0,
    targeta_AmarillaLocal: 0,
    targeta_RojaVisitante: 0,
    targeta_RojaLocal: 0
  })

  const onGol = (equipo) => {
  if(equipo=='local')
    {
      setPartido({ ...partido, golesLocal: partido.golesLocal + 1 })  
    }else{
      setPartido({ ...partido, golesVisitante: partido.golesVisitante + 1 })
    }
  }
  const onTargetaA = (equipo) => {
    if(equipo=='local')
      {
        setPartido({...partido, targeta_AmarillaLocal: partido.targeta_AmarillaLocal + 1})
      }else{
        setPartido({...partido,targeta_AmarillaVisitante: partido.targeta_AmarillaVisitante + 1})
      }
  }
const onTargetaR = (equipo) => {
    if(equipo=='local')
      {
        setPartido({...partido, targeta_RojaLocal: partido.targeta_RojaLocal + 1})
      }else{
        setPartido({...partido,targeta_RojaVisitante: partido.targeta_RojaVisitante + 1})
      }
  }

  return (
    <div className='container'>
      <h1>Partido</h1>
      <Controles onGol={onGol} onTargetaA={onTargetaA} onTargetaR={onTargetaR}/>
      <Display partido={partido} />
    </div>
  )
}

export default App
