import { Trash } from 'phosphor-react';
import style from './ListConteudo.module.css';
import { useState } from 'react';



export function ListConteudo({listElementos, deletarElemento, tarefaCompleta,onChecked}){
    const contChecked = listElementos.reduce((acumulador, atual) => {
        if (atual.completa){
            acumulador.t++
        }else{
            acumulador.f++
        }
        if (atual.id){
            acumulador.total++
        }
        return acumulador;

    },{f:0, t:0, total:0})
    console.log(contChecked.total)

    return (
        <article className={style.content}>
            
            
            <main>
                

                    <div className={style.contElementos}>
                        <div className={style.canteinerTarefas}>
                            <strong>Tarefas criadas</strong>
                            <p className={style.numeros}>
                                {contChecked.total}
                            </p>

                        </div>
                        <div className={style.canteinerTarefas}>
                            <span>Concluídas</span>
                            <p className={style.numeros2}>
                                {contChecked.t} de {contChecked.total}
                            </p>
                        </div>
                    </div>
              

                    
                {listElementos.reverse().map(item=>
                    
                    <div className={style.elementos} key={item.id}>
                        <div className={style.checkbox}>
                            <input 
                                type='checkbox'  
                                id="checkbox" name="trarefa feita"  
                                
                                checked={onChecked}
                                onChange={() => tarefaCompleta(item.id)}
                            />
                            <label htmlFor="checkbox"></label>
                        </div>

                        <div className={style.tarefa}>
                            <p>{item.texto}</p> 
                        </div>

                        <div className={style.lixeira}>
                            
                            <Trash size={20} onClick={() => deletarElemento(item.id)}/>
                        </div>
                    </div>
                )}
                    
                













            </main>

            
            
        </article>
    )
}