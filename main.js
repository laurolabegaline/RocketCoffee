//  Uma equipe da Fórmula 1 deseja calcular o número mínimo de litros que deverá colocar no tanque de um de seus carros para que ele possa percorrer um determinado número de voltas até o primeiro reabastecimento.
//  Escreva um programa (EM QUALQUER LINGUAGEM) que leia o comprimento da pista (em metros),
//  o número total de voltas a serem percorridas no grande prêmio,
//  o número de reabastecimentos desejados
//  e o consumo de combustível do carro (em Km/L).

// Calcular e escrever o número mínimo de litros necessários para percorrer até o primeiro reabastecimento.

// Considere que o número de voltas entre os reabastecimentos é o mesmo.

function MinimoLitrosF1() {
  var TrackSize = window.prompt('Qual o comprimento da pista (Metros)?')
  var Lap = window.prompt('Qual a quantidade de voltas?')
  var Pitstop = window.prompt('Qual a quantidade de abastecimentos desejados?')
  var MédiaKmL = window.prompt('Qual a média (KM/L) do veículo?')
  const TrackSizeMax = TrackSize * Lap // Tamanho total da pista * quantidade de voltas
  const FirtStop = TrackSizeMax / Pitstop // Divido o tamanho da pista pela quantidade de abastecimentos.
  const MinimunLiters = FirtStop / MédiaKmL // O resultado eu divido pela autonomia (media km/l) do veículo para saber a quantidade de litros que preciso.
  const MinimunLitersFormatado = MinimunLiters.toFixed(2)
  const LapsForPitstop = Lap / Pitstop
  const LapsForPitstopFormatado = LapsForPitstop.toFixed(2)
  window.alert(
    `No primeiro pitstop seu veiculo precisaria estar abastecido com no minimo ${MinimunLitersFormatado} litros, com essa autonomia o veiculo realizaria um total de ${LapsForPitstopFormatado} voltas por pitstop.`
  )
}

MinimoLitrosF1()
