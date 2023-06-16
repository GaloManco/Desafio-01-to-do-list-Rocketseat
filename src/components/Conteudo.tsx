import agenda from '../assets/agenda.svg';

import { Formulario } from './Formulario';

import style from './Content.module.css';


export function Conteudo(){
    return (
        <article className={style.content}>
            
            <Formulario />
            <main>
                <div className={style.contElementos}>
                    <div className={style.canteinerTarefas}>
                        <strong>Tarefas criadas</strong>
                        <p className={style.numeros}>0</p>

                    </div>
                    <div className={style.canteinerTarefas}>
                        <span>concluidas</span>
                        <p className={style.numeros}>0</p>

                    </div>
                    
                </div>
                <div className={style.elementos}>

                    <img src={agenda} alt="Imagem vazia" />
                    <strong>Você ainda não tem tarefas cadastradas</strong>
                    <span className={style.texto02}>Crie tarefas e organize seus itens a fazer</span>
                </div>
            </main>

            
            
        </article>
    )
}



