import React,{Component} from 'react';



class App extends Component{

//Iremos alterar o estado de um elemento através do Construtor

constructor(props){

    //Passamos o props para o component com o super
    super(props);
    //Criamos um obj com o estado inicial do nosso form

    this.stateInicial ={
        codigoProduto:'',
        nomeProduto:'',
        precoProduto:'',
        categoriaProduto:'',
        descricaoProduto:'',
        validadeProduto:'',

    }

    //setamos o state com o stateInicial 
    this.state = this.stateInicial;
}

}
