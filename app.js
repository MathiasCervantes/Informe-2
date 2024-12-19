document.getElementById("form_registro").addEventListener("submit", function(event){
    event.preventDefault();
    const nombres = document.getElementById("nombres_apellidos").value;
    const nacionalidad = document.getElementById("nacionalidad").value;
    const edad = document.getElementById("edad").value;
    const Celular = document.getElementById("fonoxd").value;
    const Correo = document.getElementById("correoxd").value;
    const Domiciio = document.getElementById("casita").value;
    const Sede = document.getElementById("sede").value;
    
    
    if(edad < 18){
    
        alert("Debe ser mayor de 18 aÃ±os");
        return;
    }
    
    if(nacionalidad!=="Peruano"){
        alert("Este evento es realizado solo para peruanos");
        return;
    }
    if(edad>100){
        alert("Ingresar una edad valida");
        return;
    }

    

    const tablebody2xd = document.createElement('tr');
    const tablebody = document.getElementById("tablebody");
    tablebody2xd.innerHTML=`
        <tr>
            <td>${nombres}</td>
            <td>${nacionalidad}</td>
            <td>${Sede}</td>
            <td>${edad}</td>
            <td>${Celular}</td>
            <td>${Correo}</td>
            <td>${Domiciio}</td>
        <tr>
    `;

    tablebody.appendChild(tablebody2xd);
    document.getElementById("tablas_datos").style.display="";

});
