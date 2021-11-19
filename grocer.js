function grocer(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
    {
        if(this.readyState==4 && this.status==200){
            var response = JSON.parse(this.responseText);
           var row ="<table><th>Slno</th><th>ItemName</th><th>Quantity</th><th>Unit</th><th>Department</th><th>Notes</th></table>";

            var Jgrocery = response.grocery;
            for (var i = 0; i < Jgrocery.length; i++){
                row +="<tr>"
                row +="<td>"+Jgrocery[i].Slno+"</td>";
                row += "<td>"+Jgrocery[i].ItemName+"</td>";
                row += "<td>"+Jgrocery[i].Quantity+"</td>";
                row += "<td>"+Jgrocery[i].Unit+"</td>";
                row +="<td>"+Jgrocery[i].Department+"</td>";
                row += "<td>"+Jgrocery[i].Notes+"</td>"
                row +="</tr>"
            }   
             document.getElementById('demo').innerHTML= row;
             document.getElementById('demo').innerHTML= row;

        }
    }
xhttp.open("GET","grocery.json",true);
xhttp.send();


}

newFunction();

function newFunction() {
    window.addEventListener("load", grocer);
    
}
