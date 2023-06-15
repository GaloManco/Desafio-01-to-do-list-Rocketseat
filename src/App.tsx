
import { Header } from './components/Header';
import { Conteudo} from './components/Conteudo';

import style from './App.module.css';
import './global.css';

function App() {


  return (
    <>
      <div className={style.container}>
          <Header />


          <Conteudo />

      </div>

    </>
  )
}

export default App
