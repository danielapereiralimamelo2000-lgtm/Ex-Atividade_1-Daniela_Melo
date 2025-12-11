function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.lenght == 0 || (fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
          gênero = 'Homem'
          if (idade >=0 && idade < 12) {
            // Criança
            img.setAttribute('src', 'baby_boy.jpg')
            } else if (idade < 21) {
            // Jovem
            img.setAttribute('src', 'young_man.jpg')
            } else if (idade < 65) {
            // Adulto
            img.setAttribute('src', 'man.jpg')
            } else {
            // Idoso
            img.setAttribute('src', 'elderly_man.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
          if (idade >=0 && idade < 12) {
            // Criança
            img.setAttribute('src', 'baby_girl.jpg')
            } else if (idade < 21) {
            // Jovem
            img.setAttribute('src', 'young_woman.jpg')
            } else if (idade < 65) {
            // Adulto
            img.setAttribute('src', 'woman.jpg')
            } else {
            // Idoso
            img.setAttribute('src', 'elderly_woman.jpg')
            } 
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}