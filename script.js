function carregar(){
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`
    if (hora>=6 && hora<=12){
        //BOM DIA!
        img.src = "fotomanha.png"
        document.body.style.background = "#ffe556"
    } else if (hora>12 && hora <=18){
        //BOA TARDE!
        img.src = "fototarde.png"
        document.body.style.background = "#db8754"
    } else if (hora>18 && minutos>0){
        //BOA NOITE!
        img.src = "fotonoite.png"
        document.body.style.background = "#023c79"
    } else if (hora>=0 && hora <6){
        //VAI DORMIR!
        img.src = "fotomadrugada.png"
        document.body.style.background = "#0f1014"
        msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.` + " <strong>Vai dormir!<strong>"
    }


}