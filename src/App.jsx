import './App.css'
import { Portada } from './Components/Portada.jsx'
import {Info} from './Components/Info.jsx' 
import {Instagram} from './Components/Instagram.jsx'
import {Regalos} from './Components/Regalos.jsx'
import{FormMusica} from './Components/FormMusica.jsx'
import {CountDown} from './Components/CountDown.jsx'
import {Carrusel} from './Components/Carrusel.jsx'

export const App= () => {
  return (
    <div className='app'>
      <Portada/>
      <CountDown/>
      <Info/>
      <Carrusel/>
      <Instagram/>
      <FormMusica/>
      <Regalos />
    </div>
  )
}



