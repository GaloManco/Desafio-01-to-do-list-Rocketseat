

import { Formulario } from './Formulario';
import { InforConteudo } from './InforConteudo';
import { ListConteudo } from './ListConteudos';

import style from './Content.module.css';


export function Conteudo({
    onTexto, 
    onButton, 
    listElementos, 
    limparForm, 
    contTexto, 
    deletarElemento,
    tarefaCompleta,
    onChecked,
    
}){




    return (
        <article className={style.content}>
            
            <Formulario 
                onTexto={onTexto} 
                onButton={onButton}
                limparFormularo={limparForm}
                contTexto={contTexto}
               
            />
            {listElementos.length == 0 ? 
            (   
                <InforConteudo />  
            ):
            (
                <ListConteudo 
                listElementos={listElementos}
                deletarElemento={deletarElemento}
                tarefaCompleta={tarefaCompleta}               
                />
            )}
                
           
            
            
            
 
         
                
            
            
           
            
        </article>
    )
}



