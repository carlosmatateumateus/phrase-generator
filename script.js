let all_phrase = [
    '"O pessimismo torna os homens cautelosos, enquanto o otimismo torna os homens imprudentes."',
    '"Descobrir consiste em olhar para o que todo mundo está vendo e pensar uma coisa diferente."',
    '"Evite desencorajar-se: mantenha ocupações e faça do otimismo a maneira de viver. Isso restaura a fé em si."',
    '"Otimismo é esperar pelo melhor. Confiança é saber lidar com o pior."',
    '"Se a sua vida for a melhor coisa que já te aconteceu, acredite, você tem mais sorte do que pode imaginar."',
    '"Para os crentes, Deus está no princípio das coisas. Para os cientistas, no final de toda reflexão."',
    '"Perder tempo em aprender coisas que não interessam priva-nos de descobrir coisas interessantes."',
    '"O mundo não está ameaçado pelas pessoas más, e sim por aquelas que permitem a maldade."',
    '"O nacionalismo é uma doença infantil; é o sarampo da humanidade."',
    '"Os ideais que iluminaram o meu caminho são a bondade, a beleza e a verdade."',
    '"Se A é o sucesso, então A é igual a X mais Y mais Z. O trabalho é X; Y é o lazer; e Z é manter a boca fechada."',
    '"Duas coisas são infinitas: o universo e a estupidez humana. Mas, em relação ao universo, ainda não tenho certeza absoluta."'
]

let phrases = document.getElementById('phrases')


let random = Math.floor(Math.random() * all_phrase.length)
phrases.textContent = all_phrase[random]

const switchPhrases = () =>{
    random = Math.floor(Math.random() * all_phrase.length)
    phrases.textContent = all_phrase[random]
}

