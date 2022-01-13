/*
  01

  - Implemente uma função que recebe o nome da key de um item da localStorage 
    e retorna o valor da key parseado para objeto javascript.
*/
const personalData = [
  {firstName: 'Marcos'},
  {lastName: 'Lima'},
  {city: 'Suzano'},
]

const myData = JSON.stringify(personalData)

localStorage.setItem('myDataKey', myData)

const parsingDataStorage = key => JSON.parse(key)

const getKey = localStorage.getItem('myDataKey')

console.log(parsingDataStorage(getKey))

/*
  02

  - Mesmo com um input type="number", a expressão `event.target.value` abaixo 
    resulta em uma string;
  - Exiba, no console, o valor que foi inserido no input;
  - O exibido valor deve ser do tipo number;
  - Não utilize a invocação da Number() ou qualquer outro método que converta 
    strings em number.

  Dica: pesquise por valueAsNumber.
*/

const input = document.querySelector('[data-js="input"]')

input.addEventListener('input', event => 
  console.log(typeof event.target.valueAsNumber))

/*
  03

  - Implemente uma função 'combineOperations' que recebe 2 parâmetros:
    - Um valor inicial, do tipo number;
    - Um array de funções.
  - A combineOperations deve: 
    - Passar o valor inicial para a 1ª função do array;
    - Passar o valor retornado pela invocação da 1ª função para a 2ª função, e 
      assim por diante. Até que cada função do array tenha sido invocada;
    - Retornar o valor que a invocação da última função do array retornou.
  - Descomente o código abaixo. A primeira invocação da combineOperations deve 
    retornar 60 e a segunda invocação, 10.
*/

  function add100 (num) {
    return num + 100
  }
  
  function divByFive (num) {
    return num / 5
  }
  
  function multiplyByThree (num) {
    return num * 3
  }
  
  function multiplyFive (num) {
    return num * 5
  }
  
  function addTen (num) {
    return num + 10
  }
  
const combineOperations = (num,[func1, func2, func3]) => 
  Math.floor(func3(func2(func1(num))))

console.log(combineOperations(1, [add100, divByFive, multiplyByThree]))
console.log(combineOperations(0, [divByFive, multiplyFive, addTen]))

/*
  04

  - O código abaixo não está funcionando. Descubra o que ele está tentando 
    fazer e refatore-o.
*/

const albums = [
  {
    id: 537,
    title: 'The Dark Side of the Moon',
    artist: 'Pink Floyd',
    price: 59.90,
    genre: 'Progressive Rock'
  },
  {
    id: 975,
    title: 'Houses of the Holy',
    artist: 'Led Zeppelin',
    price: 81.00,
    genre: 'Rock'
  },
  {
    id: 359,
    title: 'Heaven and Hell',
    artist: 'Black Sabbath',
    price: 49.90,
    genre: 'Heavy metal'
  }
]

const searchAlbum = {
  id: 975,
  title: 'Houses of the Holy',
  artist: 'Led Zeppelin',
  price: 81.00,
  genre: 'Rock'
}

//NA: Através da condicional 'if', detreminar se um objeto está incluído no array de objetos, exibir e converter em 'string' usando o método 'JSON'; Mas a referência ao objeto é o seu 'namespace' no método 'includes()', que torna-se inviável pois os objetos no array não estão nomeados; Uma solução é usar o identificador 'id' como referência;

const searchID = albums
  .map(item => item.id)
  .includes(searchAlbum.id)

  if (searchID) console.log(`${JSON.stringify(searchAlbum)} existe no array albums.`)

  /*
  05

  - Baseado no que foi mostrado na aula passada, faça uma cópia do `obj`.
*/

const obj = {
  prop1: 'a',
  prop2: 'b',
  prop3: null,
  prop4: true,
  prop5: false,
  prop6: [9, { x: 1, y: 2 }],
  prop7: 7,
  prop8: { a: 'x', b: 'y' },
}

const objectCopied = JSON.stringify(obj)

localStorage.setItem('objectCopy',objectCopied)

/*
  06

  - Implemente uma função que cria e retorna um elemento HTML;
  - Ela deve receber o nome do elemento HTML a ser criado e um objeto com os 
    atributos que o elemento deve conter;
  - A quantidade de atributos que o elemento irá conter pode variar.

  Dica: pesquise por Object.entries.
*/
const newUL = document.querySelector(".newUL")

const myObj = {
  name: 'Marcos',
  weight: 100,
  city: 'Suzano',
  birthYear: 1971,
  carModel: 'Stingray 1980',
  favoriteMovie: 'Blade Runner',
  favoriteSong: 'Africa - ToTo'
}

const newElement = (elementName, obj) => {
  const propArray = Object.entries(obj)
  propArray.forEach( (item) => {
    const [key, value] = item
    newUL.innerHTML += `<${elementName}>${key} : ${value}</${elementName}`
  })
}

newElement('li', myObj)

/*
  07

  - Na weather app, faça com que quando o usuário recarregar a página ou sair 
    da aplicação e voltar, as informações da última cidade pesquisada sejam 
    exibidas na interface.
*/



























/*--------------------nested functions----------------------------------------


function A(x) {
  function B(y) {
    function C(z) {
      console.log(`X, Y, ${z}`,x + y + z);
    }//bloco C
    C(3);
    console.log(`X, ${y}, z`,x + y);
  }//bloco B
  B(2);
  console.log(`${x}, Y, Z`,x);
}//bloco A
A(1); // logs 6 (1 + 2 + 3)



  
  function add100 (num) {
    return num + 100
  }
  
  function divByFive (num) {
    return num / 5
  }
  
  function multiplyByThree (num) {
    return num * 3
  }
  
  function multiplyFive (num) {
    return num * 5
  }
  
  function addTen (num) {
    return num + 10
  }
  


const combineOperations2 = (num,[func1, func2, func3]) => {

return `O número é: ${num} e as funçções retornam ${func1(num)} - ${func2(num)} - ${func3(num)}`
  
}

console.log(combineOperations2(10, [add100, divByFive, multiplyByThree]))
console.log(combineOperations2(20, [divByFive, multiplyFive, addTen]))


// let idArray = []
// albums.forEach((item) => {
//   idArray.push(item.id)
//   if(idArray.includes(searchAlbum.id)){
//     // console.log("simmmmmm")
//   return console.log(`${JSON.stringify(searchAlbum)} existe no array albums.`)

  
//   }
//   console.log("naooooooooo")
// })

// console.log(idArray)

*/