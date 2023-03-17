function algoritmo()
{
    let billetes_de_1000, billetes_de_10000, billetes_de_2000, billetes_de_20000, billetes_de_5000;
    let cambio, cantidad_entregada, compra, monedas_de_1;
    cantidad_entregada = parseInt (document.formulario1.cantidad_entregada.value);
    compra = parseInt (document.formulario1.compra.value);
    cambio=cantidad_entregada-compra;
    monedas_de_1=cambio;
    billetes_de_20000=(monedas_de_1-monedas_de_1%20000)/20000;
    monedas_de_1=monedas_de_1%20000;
    billetes_de_10000=(monedas_de_1-monedas_de_1%10000)/10000;
    monedas_de_1=monedas_de_1%10000;
    billetes_de_5000=(monedas_de_1-monedas_de_1%5000)/5000;
    monedas_de_1=monedas_de_1%5000;
    billetes_de_2000=(monedas_de_1-monedas_de_1%2000)/2000;
    monedas_de_1=monedas_de_1%2000;
    billetes_de_1000=(monedas_de_1-monedas_de_1%1000)/1000;
    monedas_de_1=monedas_de_1%1000;
    document.formulario1.billetes_de_1000.value = billetes_de_1000;
    document.formulario1.billetes_de_10000.value = billetes_de_10000;
    document.formulario1.billetes_de_2000.value = billetes_de_2000;
    document.formulario1.billetes_de_20000.value = billetes_de_20000;
    document.formulario1.billetes_de_5000.value = billetes_de_5000;
    document.formulario1.cambio.value = cambio;
    document.formulario1.monedas_de_1.value = monedas_de_1;
}