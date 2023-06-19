import { Trash } from 'phosphor-react';
import style from './ListConteudo.module.css';



export function ListConteudo(){
    return (
        <article className={style.content}>
            
            
            <main>
                <div className={style.contElementos}>
                    <div className={style.canteinerTarefas}>
                        <strong>Tarefas criadas</strong>
                        <p className={style.numeros}>
                            5
                        </p>

                    </div>
                    <div className={style.canteinerTarefas}>
                        <span>Concluídas</span>
                        <p className={style.numeros2}>
                            500 de 2
                        </p>

                    </div>
                    
                </div>
                <div className={style.elementos}>
                    <div className={style.checkbox}>
                        <input type='checkbox' id="checkbox" name="trarefa feita" />
                        <label htmlFor="checkbox" ></label>
                    </div>
                    <div className={style.tarefa}>
                        <strong>Eu estou estudando react no curso ignite da rocketseat onde estou aprendendo </strong> 
                    </div>
                    <div>
                         <Trash size={24} />
                    </div>
                </div>
                <div className={style.elementos}>
                    <div className={style.checkbox}>
                        <input type='checkbox' id="checkbox" name="trarefa feita" />
                        <label htmlFor="checkbox" ></label>
                    </div>
                    <div className={style.tarefa}>
                        <strong>Eu estou estudando react no curso ignite da rocketseat onde estou aprendendo </strong> 
                    </div>
                    <div>
                         <Trash size={24} />
                    </div>
                </div>
                <div className={style.elementos}>
                    <div className={style.checkbox}>
                        <input type='checkbox' id="checkbox" name="trarefa feita" />
                        <label htmlFor="checkbox" ></label>
                    </div>
                    <div className={style.tarefa}>
                        <strong>Eu estou estudando react no curso ignite da rocketseat onde estou aprendendo </strong> 
                    </div>
                    <div>
                         <Trash size={24} />
                    </div>
                </div>











            </main>

            
            
        </article>
    )
}