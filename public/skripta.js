var l=true;
function hamburgerMeni(){
    var meni=document.getElementById("meni");
    var linija1= document.getElementById("linija1");
    var linija2= document.getElementById("linija2");
    var linija3= document.getElementById("linija3");
    var meniSadrzaj= document.getElementById("meniSadr");
    var prijava= document.getElementById("prijava");
    var registracija= document.getElementById("registracija");
    var odjavise= document.getElementById("odjava");
    l=!l;
        meni.classList.toggle("iks");
        linija1.classList.toggle("iks");
        linija2.classList.toggle("iks");
        linija3.classList.toggle("iks");
        meniSadrzaj.classList.toggle("iks");
        prijava.classList.toggle("iks");
        registracija.classList.toggle("iks");
        odjavise.classList.toggle("iks");
   
}
function registrujse()
{
    var registracija=document.getElementById("glavnireg");
    registracija.classList.toggle("registracija");
    var prijava = document.getElementById("prijavaGla");
    hamburgerMeni();
    if(prijava.classList.contains("prijavaAktivno"))
    {
        prijava.classList.toggle("prijavaAktivno");
    }
}
function registrujse2()
{
    var registracija=document.getElementById("glavnireg");
    var ime = document.getElementById("ime");
    var prezime = document.getElementById("prezime");
    var mail = document.getElementById("mail");
    var lozinka = document.getElementById("lozinka");
    var lozinka2 = document.getElementById("lozinka2");
    var username = document.getElementById("username");
    if(lozinka.value==lozinka2.value && ime.value!='' && prezime.value !='' && mail.value!='' && lozinka.value!='' && username.value!='')
    {
        registracija.classList.toggle("registracija");
    }
}
function prijavise()
{
    var prijava = document.getElementById("prijavaGla");
    prijava.classList.toggle("prijavaAktivno");
    var registracija=document.getElementById("glavnireg");
    if(registracija.classList.contains("registracija"))
    {
        registracija.classList.toggle("registracija");
    }
    hamburgerMeni();
}
function prijavise2()
{
    var username = document.getElementById("usernamelog");
    var lozinka = document.getElementById("lozinkalog");
    var prijava = document.getElementById("prijavaGla");
    if(username.value != '' && lozinka.value != '')
    {
        prijava.classList.toggle("prijavaAktivno");
        document.getElementById("kime").innerHTML=username.value;
    }
}
function dodaj()
{
    var objavi= document.getElementById("objavii");
    var username = document.getElementById("usernamelog");
    if(username.value!='')
    {
    objavi.classList.toggle("objavljivanjeAktivno");
    }
    else
    {
        alert("Morate se prijaviti prvo");
    }
}