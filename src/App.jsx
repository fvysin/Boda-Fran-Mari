import './App.css'
import { Portada } from './Components/Portada.jsx'
import {Info} from './Components/Info.jsx' 
import{Traslados} from './Components/Traslados.jsx'
import {Regalos} from './Components/Regalos.jsx'
import {CountDown} from './Components/CountDown.jsx'
import {Carrusel} from './Components/Carrusel.jsx'
import {Final} from './Components/Final.jsx'
import { Tips } from './Components/Tips.jsx'
import { CeremoniaCelebracion } from './Components/CeremoniaCelebracion.jsx'

export const App= () => {
  return (
    <div className='app'>
      <Portada/>
      <Info/>
      <CountDown/>
      <CeremoniaCelebracion/>
      <Carrusel/>
      <Regalos />
      <Traslados/>
      <Tips/>
      <Final/>
    </div>
  )
}



