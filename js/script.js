function captura() {

    var nome = document.getElementById("nome").value
    var email = document.getElementById("email").value
    var mensagem = document.getElementById("msg").value

    if (nome == "" || nome == null) {
        alert("Favor preencher o campo corretamente.")
        document.getElementById("nome").focus()
    } else if (email == "" || email == null) {
        alert("Favor preencher o campo corretamente.")
        document.getElementById("email").focus()
    } else if (msg == "" || msg == null) {
        alert("Favor preencher o campo corretamente.")
        document.getElementById("msg").focus()
    } else

        alert("Mensagem enviada com sucesso! Logo entraremos em contato com você.")

}

$(document).ready(function() {
    $("#contato").click(function() {
        $("#form").show(1000)
    })

})

$(document).ready(function() {
    $("#contact").click(function() {
        $("#form").show(1000)
    })

})

$(document).ready(function() {
    $("#contato").click(function() {
        $("#contato2").show(500)
    })

})

$(document).ready(function() {
    $("#contact").click(function() {
        $("#contato2").show(500)
    })

})


$(document).ready(function() {
    $("#agenda").click(function() {
        $("#calender").show(1000)
    })

})
$(document).ready(function() {
    $("#agenda2").click(function() {
        $("#calender").show(1000)
    })

})

$(document).ready(function() {
    $("#integrantes").click(function() {
        $("#musicos").show(100)
    })

})

$(document).ready(function() {
    $("#integrantes2").click(function() {
        $("#musicos").show(100)
    })

})

$(document).ready(function() {
    $("#integrantes").click(function() {
        $("#instrumental").show(1000)
    })

})

$(document).ready(function() {
    $("#integrantes2").click(function() {
        $("#instrumental").show(1000)
    })

})