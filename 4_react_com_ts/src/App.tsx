import React, {createContext} from 'react';

//4 importacao de componente
import FirstComponent from './components/FirstComponent';


//5 desestruturando props
import SecondComponent from './components/SecondComponent';

//6 desestruturando
import Desestructuring, {Category} from './components/Desestructuring';

//7 useState
import State from './components/State';
//10 context
import Context from './components/Context';


//8 - type
type textOrNull = string | null 

//9 context

interface IAppContext {
  language: string
  framework: string
  projects: number
}

export const AppContext = createContext<IAppContext | null>(null)


function App() {

  //1 variaveis

  const name: string = "Alan"
  const age: number = 28
  const isWorking: boolean = true

  //2 funçoes

  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`
  }

  //8 types

  const myText: textOrNull = "Tem alum texto aqui"
  let mySecondText: textOrNull = null

  mySecondText = "opa"


  //9 context
  const contextValue: IAppContext = {
    language: "JavaScript",
    framework: "Express",
    projects: 5,
  }


  return (
    <AppContext.Provider value={contextValue}>
    <div className="App">
        <h1>TypeScript com React</h1>
        <h2>Nome: {name}</h2>
        <p>Idade: {age}</p>
        {isWorking && (
          <p>Esta Trabalhando!</p>
        )}
        <h3>{userGreeting(name)}</h3>
        <FirstComponent/>
        <SecondComponent name='Segundo'/>
        <Desestructuring 
          title='Primeiro post'
          content='Algum conteudo'
          commentsQty={10}
          tags={["ts","js"]}
          category={Category.TS}
        />
        <Desestructuring 
          title='Segundo post'
          content='Algum conteudo 2'
          commentsQty={5}
          tags={["python"]}
          category={Category.P}
        />
        <State/>
        {myText &&<p>Tem texto na variavel</p>}
        {mySecondText && <p>Tem texto na variavel</p>}
        <Context/>
    </div>
    </AppContext.Provider>
  );
}

export default App;
