import React from "react";
import PaginaDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";

function CadastroCategoria(){
    return (
        <PaginaDefault>
            <h1>Cadastro de Categoria</h1>

            <Link to="/">
                Ir para Home
            </Link>
        </PaginaDefault>
    )
}

export default CadastroCategoria;