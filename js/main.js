function buscar(){
rs = document.getElementById("rs").value
nfac = document.getElementById("nfac").value
fecha = document.getElementById("fecha").value
ide = document.getElementById("ide").value
nom = document.getElementById("nom").value
dir = document.getElementById("dir").value
tel = document.getElementById("tel").value
p = document.getElementById("p").value
vu = document.getElementById("vu").value
cant = document.getElementById("cant").value
subtotal =vu*cant
iva = subtotal*0.19
total = subtotal+iva

alert("Razón Social: " + rs + 
    "\n" + "# de Factura: " + nfac + "   Fecha: " + fecha +
    "\n" + "**************************************************"  +
    "\n" + "*************** DATOS DEL CLIENTE ****************" +
    "\n" + "**************************************************"  +
    "\n" + "Identificación: " + ide +
    "\n" + "Cliente: " + nom + 
    "\n" + "Dirección: " + dir + 
    "\n" + "Teléfono: " + tel +
    "\n" + "**************************************************"  +
    "\n" + "*************** DATOS DEL PRODUCTO ****************" +
    "\n" + "**************************************************"  +
    "\n" + "Descripción: " + p +
    "\n" + "Cantidad: " + cant + 
    "\n" + "Valor Unitario: $" + Number(vu).toLocaleString('es-CO') +
    "\n" + "IVA: $" + iva.toLocaleString('es-CO') +
    "\n" + "Subtotal: $" + subtotal.toLocaleString('es-CO') +
    "\n" + "*****************************************************" +
    "\n" + "Total: $" + total.toLocaleString('es-CO') +
    "\n" + "**************************************************"  +
    "\n" + "*************** GRACIAS POR SU COMPRA ************" +
    "\n" + "**************************************************"  )
     

}
