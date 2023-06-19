

import { Formulario } from './Formulario';
import { InforConteudo } from './InforConteudo';
import { ListConteudo } from './ListConteudos';

import style from './Content.module.css';


export function Conteudo(){
    return (
        <article className={style.content}>
            
            <Formulario />
            {/* <InforConteudo /> */}
            <ListConteudo />
           
            
        </article>
    )
}



