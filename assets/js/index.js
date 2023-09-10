document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("contactForm").addEventListener("submit", function(){
    const mailTo = document.createElement("a");
    mailTo.href = `mailto:${this.elements.email}?subject=Entrando em contato via site para oportunidadades de negócios.&cc=mamaucar@gmail.com&bcc=mamaucar@gmail.com&body=${this.elements.description}`
    mailTo.click();
    mailTo.remove();
    this.reset();
  });
});