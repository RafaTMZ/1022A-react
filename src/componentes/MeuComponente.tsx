//faça um componente que faça um retângulo da largura da tela do monitor por 200px

//crie uma variável com let no js que contém o valor "Meu Componente"

//Crie uma div no componente que dentro delo mostre um paraágrafo(<p>) contendo o valor da variável


import './MeuComponente.css'
export default MeuComponente;

function MeuComponente(){
    let nome = "Meu Componente"
    return(
        <div className="top">
            <p> {nome} </p>
        </div>
    )
    
}
