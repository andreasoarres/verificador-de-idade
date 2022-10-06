function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector("div#res")
    if (fano.value.length == 0 || fano.value > ano) {
      window.alert('Verifique os dados e tente novamente!')
  
    } else {
      var fsex = document.getElementsByName('radsex')
      var idade = ano - Number(fano.value)
      var genero = ''
      var img = document.createElement('img')
      img.setAttribute('id', 'foto')
      if (fsex[0].checked) {
        genero = 'Homem'
        if (idade >= 0 && idade <= 2) {
          //Bebe
          img.setAttribute('src', 'https://images.unsplash.com/photo-1544126592-807ade215a0b?utm_medium=medium&w=250&q=50&auto=format')
        } else if (idade > 2 && idade <= 10) {
          //Criança
          img.setAttribute('src', 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?utm_medium=medium&w=250&q=50&auto=format')
        } else if (idade > 10 && idade <= 18) {
          //Adolescente
          img.setAttribute('src', 'https://images.unsplash.com/photo-1483726234545-481d6e880fc6?utm_medium=medium&w=250&q=50&auto=format')
        } else if (idade > 18 && idade <= 35) {
          //Adulto jovem
          img.setAttribute('src', 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?utm_medium=medium&w=250&q=50&auto=format')
        } else if (idade > 35 && idade < 55) {
          //Adulto maduro
          img.setAttribute('src', 'https://cdn-images-1.medium.com/max/250/0*HBHnCPfBQTu1ebyP')
        } else if (idade > 55 && idade < 65) {
          //Senhor
          img.setAttribute('src', 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?utm_medium=medium&w=250&q=50&auto=format')
        } else if (idade > 65 && idade < 105) {
          //Idoso
          img.setAttribute('src', 'https://images.unsplash.com/photo-1472066719480-ecc7314ed065?utm_medium=medium&w=250&q=50&auto=format')
        } else if (idade > 105) {
          //Caveira
          img.setAttribute('src', 'https://images.unsplash.com/photo-1530210124550-912dc1381cb8?utm_medium=medium&w=250&q=50&auto=format')
        }
  
      } else if (fsex[1].checked) {
        genero = 'Mulher'
        if (idade >= 0 && idade <= 2) {
          //Bebe
          img.setAttribute('src', 'https://images.unsplash.com/flagged/photo-1562488596-d8677c0ea152?utm_medium=medium&w=250&q=50&auto=format')
        } else if (idade > 2 && idade <= 10) {
          //Criança
          img.setAttribute('src', 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?utm_medium=medium&w=250&q=50&auto=format')
        } else if (idade > 10 && idade <= 18) {
          img.setAttribute('src', 'https://images.unsplash.com/photo-1506980595904-70325b7fdd90?utm_medium=medium&w=250&q=50&auto=format')
          //Adolescente
        } else if (idade > 18 && idade <= 35) {
          //Adulto jovem
          img.setAttribute('src', 'https://images.unsplash.com/photo-1571745330032-0ed6630a9ccb?utm_medium=medium&w=250&q=50&auto=format')
        } else if (idade > 35 && idade < 55) {
          //Adulto maduro
          img.setAttribute('src', 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?utm_medium=medium&w=250&q=50&auto=format')
        } else if (idade > 55 && idade < 65) {
          //Senhor
          img.setAttribute('src', 'https://images.unsplash.com/photo-1543430720-fa600c67e423?utm_medium=medium&w=250&q=50&auto=format')
        } else if (idade > 65 && idade < 105) {
          //Idoso
          img.setAttribute('src', 'https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?utm_medium=medium&w=250&q=50&auto=format')
        } else if (idade > 105) {
          //Caveira
          img.setAttribute('src', 'https://images.unsplash.com/photo-1530210124550-912dc1381cb8?utm_medium=medium&w=250&q=50&auto=format')
        }
      }
      res.style.textAlign = 'center'
      res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
      res.appendChild(img)
    }
  }