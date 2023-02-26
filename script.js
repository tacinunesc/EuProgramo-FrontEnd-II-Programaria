
var content = document.getElementById("content");

for (var bio in biografias) {

  content.innerHTML +=

    '<div class="card">' +

    '<img src="' +

    biografias[bio].imagem +

    '"/>' +

    "<details>" +

    "<summary>" +

    biografias[bio].nome +

    "</summary>" +

    "<p>" +

    biografias[bio].descricao +

    "</p>" +

    "<blockquote><q>" +

    biografias[bio].citacao +

    "</q></blockquote>" +

    "</details></div>";

}



   