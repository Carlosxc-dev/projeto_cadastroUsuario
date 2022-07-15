import React, {Component} from "react";
import Main from "../template/main"

const headerProps = {
    icon: "users",
    title: "usuarios",
    subtitle: "cadastro de usuarios: incluir, listar, alterar e excluir"
}

export default class userscrud extends Component{
    render(){
        return (
            <Main {...headerProps}>
                cadastro de usuarios
            </Main>
        )
    }
}