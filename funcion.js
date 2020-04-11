var pagina=1;

function apiCall(){
    
    var titulo=document.getElementById("cajaText").value;
    
    var detalles="";
    if(titulo == ""){
        detalles="<tr>" + "<td colspan='S'> Debe ingresar un titulo, por ejm: Batman </td>" + "</tr>";
        document.getElementById("informacion").innerHTML = detalles;
    }else{
        if(window.XMLHttpRequest){
            xmlhttp = new XMLHttpRequest();

        }else{
            xmlhttp= new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status ==200){
                var datos = JSON.parse(this.responseText)
                datos.Search.forEach(pelicula => {
                    detalles += "<tr>" +
                                "<td><a href='#' onclick=\"buscarPeliculaPorId('" + pelicula.imdbID + "')\">Mas informacion</td>" +
                                "<td>" + pelicula.Title + "</td>" +
                                "<td>" + pelicula.Year + "</td>" +
                                "<td>" + pelicula.Type + "</td>" +
                                "<td><img src=" + pelicula.Poster + "></td>" +
                                "</tr>" ;
                                
                });
                detalles += "<input type='button' value='Anterior' onclick='paginas()' class='boton'>"+
                            "<input type='button' value='Siguiente' onclick='paginas()' class='boton'>";
                            
                document.getElementById("informacion").innerHTML = detalles;
            }
        };
        xmlhttp.open("GET","http://www.omdbapi.com/?apikey=adcd043d&s=" + titulo + "&page="+pagina , true);
        xmlhttp.send();
    }

}

function paginas(){
    pagina= pagina+1;
    var titulo=document.getElementById("cajaText").value;
    
    var detalles="";
    if(titulo == ""){
        detalles="<tr>" + "<td colspan='S'> Debe ingresar un titulo, por ejm: Batman </td>" + "</tr>";
        document.getElementById("informacion").innerHTML = detalles;
    }else{
        if(window.XMLHttpRequest){
            xmlhttp = new XMLHttpRequest();

        }else{
            xmlhttp= new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status ==200){
                var datos = JSON.parse(this.responseText)
                datos.Search.forEach(pelicula => {
                    detalles += "<tr>" +
                                "<td><a href='#' onclick=\"buscarPeliculaPorId('" + pelicula.imdbID + "')\">Mas informacion</td>" +
                                "<td>" + pelicula.Title + "</td>" +
                                "<td>" + pelicula.Year + "</td>" +
                                "<td>" + pelicula.Type + "</td>" +
                                "<td><img src=" + pelicula.Poster + "></td>" +
                                "</tr>" ;
                                
                });
                detalles += "<input type='button' value='Anterior' onclick='paginas2()' class='boton'>"+
                            "<input type='button' value='Siguiente' onclick='paginas()' class='boton'>";
                
                document.getElementById("informacion").innerHTML = detalles;
            }
        };
        xmlhttp.open("GET","http://www.omdbapi.com/?apikey=adcd043d&s=" + titulo + "&page="+pagina , true);
        xmlhttp.send();
    }
}

function paginas2(){
    pagina= pagina-1;
    var titulo=document.getElementById("cajaText").value;
    
    var detalles="";
    if(titulo == ""){
        detalles="<tr>" + "<td colspan='S'> Debe ingresar un titulo, por ejm: Batman </td>" + "</tr>";
        document.getElementById("informacion").innerHTML = detalles;
    }else{
        if(window.XMLHttpRequest){
            xmlhttp = new XMLHttpRequest();

        }else{
            xmlhttp= new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status ==200){
                var datos = JSON.parse(this.responseText)
                datos.Search.forEach(pelicula => {
                    detalles += "<tr>" +
                                "<td><a href='#' onclick=\"buscarPeliculaPorId('" + pelicula.imdbID + "')\">Mas informacion</td>" +
                                "<td>" + pelicula.Title + "</td>" +
                                "<td>" + pelicula.Year + "</td>" +
                                "<td>" + pelicula.Type + "</td>" +
                                "<td><img src=" + pelicula.Poster + "></td>" +
                                "</tr>" ;
                                
                });
                detalles += "<input type='button' value='Anterior' onclick='paginas2()' class='boton'>"+
                            "<input type='button' value='Siguiente' onclick='paginas()' class='boton'>";
                
                document.getElementById("informacion").innerHTML = detalles;
            }
        };
        xmlhttp.open("GET","http://www.omdbapi.com/?apikey=adcd043d&s=" + titulo + "&page="+pagina , true);
        xmlhttp.send();
    }
}



function buscarPeliculaPorId(Objeto){
    var plot="";
    var cuerpo="";
    if(window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest();

    }else{
        xmlhttp= new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var data = JSON.parse(this.responseText);
            for(var i in data){
                if(data.hasOwnProperty(i)){
                    if(`${i}`=="Poster"){
                        plot +="";
                    }else{
                        plot += "<table class='info'>" +
                                    "<tr>" +
                                        "<thead>"+
                                        "<th>"+ `${i}` +"</th>"+
                                        "</thead>"+
                                        "<td>"+`${data[i]}` + "</td>" +
                                    "</tr>"+
                                "</table>";

                    //cuerpo +=   "<tr>" + 
                      //          "<td>"+`${data[i]}` + "</td>" +
                        //        "</tr>";
                    
                    //plot += data[i];
                    }   
                }
                                
            };
            //console.log(data["Year"]);
            console.log(plot);
            document.getElementById("respuesta").innerHTML= plot;
            //document.getElementById("tcuerpo").innerHTML= cuerpo;
        }
        
    };
    xmlhttp.open("GET", "http://www.omdbapi.com/?apikey=adcd043d&i="+ Objeto+ "&plot=full",true);
    xmlhttp.send();
}




