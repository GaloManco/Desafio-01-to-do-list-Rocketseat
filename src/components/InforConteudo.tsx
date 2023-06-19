import agenda from '../assets/agenda.svg';
import style from './InforConteudo.module.css';

export function InforConteudo(){
    return (
        <main>
            <div className={style.contElementos}>
                <div className={style.canteinerTarefas}>
                    <strong>Tarefas criadas</strong>
                    <p className={style.numeros}>0</p>

                </div>
                <div className={style.canteinerTarefas}>
                    <span>Concluidas</span>
                    <p className={style.numeros}>0</p>

                </div>
                
            </div>
            <div className={style.elementos}>

                <img src={agenda} alt="Imagem vazia" />
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <span className={style.texto02}>Crie tarefas e organize seus itens a fazer</span>
            </div>
        </main>
    )
}