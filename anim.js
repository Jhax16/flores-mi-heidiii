window.addEventListener("load", () => {

  const audio = document.getElementById("musica");
  const lyrics = document.getElementById("lyrics");

  if (!audio || !lyrics) {
    console.error("No se encontró #musica o #lyrics");
    return;
  }

  const lyricsData = [
    { text: "Nos miramos y sin palabras yo", time: 16 },
    { text: "Me enamoré de ti", time: 22 },
    { text: "Y sentimos algo especial no sé como decírtelo", time: 24 },
    { text: "No sabes cuantas noches vi la luna llena", time: 32 },
    { text: "Y el cielo lleno de estrellas", time: 37 },
    { text: "Y preguntaba si algún día encontraría", time: 40 },
    { text: "Al amor de mi vida", time: 46 },
    { text: "Una caricia me llevó a conocer", time: 50 },
    { text: "Tu forma de sentir", time: 54 },
    { text: "Tu forma de querer", time: 55 },
    { text: "Y sin pensarlo sacas lo mejor de mi", time: 58 },
    { text: "Si tú eres el deseo que siempre pedí", time: 62 },
    { text: "Te soñé", time: 66 },
    { text: "Te busqué, porque tu me haces bien", time: 68 },
    { text: "Ven aquí quedate", time: 74 },
    { text: "Porque tu eres el deseo que pedí", time: 78 },

    { text: "Nos miramos y sin palabras yo", time: 98 },
    { text: "Me enamoré de ti", time: 104 },
    { text: "Y sentimos algo especial no sé como decírtelo", time: 106 },
    { text: "No sabes cuantas noches vi la luna llena", time: 115 },
    { text: "Y el cielo lleno de estrellas", time: 120 },
    { text: "Y preguntaba si algún día encontraría", time: 123 },
    { text: "Al amor de mi vida", time: 128 },
    { text: "Una caricia me llevó a conocer", time: 133 },
    { text: "Tu forma de sentir", time: 136 },
    { text: "Tu forma de querer", time: 138 },
    { text: "Y sin pensarlo sacas lo mejor de mi", time: 140 },
    { text: "Si tú eres el deseo que siempre pedí", time: 144 },
    { text: "Te soñé", time: 148 },
    { text: "Te busqué, porque tu me haces bien", time: 150 },
    { text: "Ven aquí quedate", time: 156 },
    { text: "Porque tu eres el deseo que pedí", time: 160 }
  ];

  let currentIndex = -1;

  audio.addEventListener("timeupdate", () => {

    const currentTime = audio.currentTime;

    let newIndex = -1;

    for (let i = 0; i < lyricsData.length; i++) {

      if (
        currentTime >= lyricsData[i].time &&
        (
          i === lyricsData.length - 1 ||
          currentTime < lyricsData[i + 1].time
        )
      ) {
        newIndex = i;
        break;
      }
    }

    /*
      No hacemos nada si seguimos
      en la misma frase.
    */
    if (newIndex === currentIndex) {
      return;
    }

    currentIndex = newIndex;

    /*
      Si no hay letra:
      ocultamos.
    */
    if (newIndex === -1) {

      lyrics.classList.remove("mostrar");
      lyrics.classList.add("salida");

      return;
    }

    /*
      Primero quitamos las animaciones anteriores.
    */
    lyrics.classList.remove("mostrar");
    lyrics.classList.remove("salida");

    /*
      Cambiamos el texto.
    */
    lyrics.textContent = lyricsData[newIndex].text;

    /*
      Forzamos al navegador a reiniciar
      la animación.
    */
    void lyrics.offsetWidth;

    /*
      Ahora comienza nuevamente
      la animación de entrada.
    */
    lyrics.classList.add("mostrar");

  });

  /*
    Cuando se reinicia la canción,
    reiniciamos también las letras.
  */
  audio.addEventListener("seeked", () => {

    currentIndex = -1;

    lyrics.classList.remove("mostrar");
    lyrics.classList.remove("salida");

    lyrics.textContent = "";

  });

});
