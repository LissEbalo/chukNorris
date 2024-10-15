async function cambiarFrase() {
    const respuesta = await fetch("https://api.chucknorris.io/jokes/random")
    const data = await respuesta.json()
    console.log(data);
    let phrase_div = document.getElementById("reload");
    phrase_div.innerHTML = data.value;
}
cambiarFrase();

