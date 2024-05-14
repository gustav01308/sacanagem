document.addEventListener('DOMContentLoaded',function(){

        const xingamentos = ["viado","baitola","puto","esquizofrenico","bosta","lixo","resto de aborto","fudido","arrombado","cuzao","limitado","retardado","doente","animal","energumeno","babaca","quadrupede","mazanza","mama rola","burro","jumento"];
        const id = document.getElementById('xingamento');
       let i=0;
        function mudarXingamento(){
            id.textContent=xingamentos[i].toUpperCase();
            i = (i+1)%xingamentos.length;

        }
        setInterval(mudarXingamento,1000);

});
function redirecionar() {
    window.location.href = "https://sacanagem.vercel.app";
}
function redirecionar2(){
    window.location.href = "https://sacanagem.vercel.app/EuSouGay.html"

}
