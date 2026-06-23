// ─── Links de documentos del Santoto ───
const DOCS = {
  jardin_quinto: {
    url: "https://drive.google.com/uc?export=download&id=1n9dmUWvOMapY8uULPGxQiFq-u1oTAqeT",
    filename: "Admisiones_Jardin_a_Quinto_Santoto.pdf",
    caption: "📋 Proceso de admisiones Jardín a 5°",
  },
  sexto_once: {
    url: "https://drive.google.com/uc?export=download&id=1WupWf_BhkgwhvFCCTdAKQRkaGbbu2GWI",
    filename: "Admisiones_Sexto_a_Undecimo_Santoto.pdf",
    caption: "📋 Proceso de admisiones 6° a 11°",
  },
  presentacion: {
    url: "https://drive.google.com/uc?export=download&id=1jT9lsVZ-gJW7qN_UASOYLTFf6PVxkGWw",
    filename: "Presentacion_CSTA_Santoto.pdf",
    caption: "🏫 Presentación institucional — Colegio Bilingüe Santo Tomás de Aquino",
  },
};

// ─── Flujos de conversación ───
module.exports = {
  start: {
    messages: [
      "👋🐯 ¡Hola! Soy *Dominic*, tu guía en el *Colegio Bilingüe Santo Tomás de Aquino* — Dominicos.\n\nEstoy aquí para contarte todo sobre nuestra comunidad. Ya seas papá, mamá o un futuro estudiante, ¡con gusto te ayudo!",
      "Escríbeme el número de lo que quieras saber:\n\n1️⃣ Idiomas que aprenden\n2️⃣ Cómo enseñamos\n3️⃣ ¿Cómo es el colegio?\n4️⃣ Horarios y calendario\n5️⃣ Actividades extracurriculares\n6️⃣ Convivencia y familia\n7️⃣ 📄 Documentos e información\n8️⃣ Hablar con un asesor\n9️⃣ 📱 Redes sociales y web",
    ],
    menuText: "¿En qué te puedo ayudar?",
    buttons: [],
  },

  idiomas: {
    messages: [
      "🌍 ¡Una de mis partes favoritas!\n\nEn el Santoto aprendemos *tres idiomas*:\n\n🇨🇴 *Español* — nuestra lengua base\n🇬🇧 *Inglés* — desde Prejardín hasta 11°, somos bilingües de verdad\n🇫🇷 *Francés* — tercera lengua desde grado 5° hasta 9°\n\n¡Cuando salgas del colegio te puedes mover por el mundo sin problema! 💪\n\nEscribe *menú* para ver más opciones o el número de otro tema.",
    ],
  },

  metodologia: {
    messages: [
      "📚 ¡Aquí no hay clases aburridas! Te cuento cómo trabajamos:\n\n🟡 *Sección infantil (Prejardín a 5°)*\nAprendemos jugando con intención — usando todos los sentidos.\n\n🟠 *Sección juvenil (5° a 8°)*\nAprendizaje por experiencia, indagación y emprendimiento transversal.\n\n🔵 *Sección de mayores (9° a 11°)*\nPreparación para el *Bachillerato Internacional (IB)*: pensamiento crítico, investigación y mentalidad global. 🌍\n\nEscribe *menú* para ver más opciones.",
    ],
  },

  info_general: {
    messages: [
      "🏫 ¡Con gusto te cuento sobre mi casa! 🐯\n\n✅ *Somos mixtos* desde 2015\n✝️ *Somos católicos*, guiados por los *Frailes Dominicos*\n📅 *Calendario A* — febrero a noviembre\n👶 Recibimos niños *desde los 3 años* (Prejardín)\n👥 *Grupos pequeños*: máximo 20 en preescolar, 25 en primaria y bachillerato\n\nNuestro propósito: formar ciudadanos del mundo con virtud y pensamiento crítico. 🌍\n\nEscribe *menú* para ver más opciones.",
    ],
  },

  horarios: {
    messages: [
      "⏰ ¡Aquí los horarios!\n\n🟡 *Preescolar (Prejardín a Transición)*\n• 8:00 a.m. – 2:00 p.m.\n• O ampliado: 7:00 a.m. – 2:50 p.m.\n\n🟠 *Primaria*\n7:00 a.m. – 2:50 p.m.\n\n🔵 *Bachillerato*\n7:00 a.m. – 3:00 p.m.\n\n📅 *Calendario A*: iniciamos en febrero, cerramos en noviembre.\n\nEscribe *menú* para ver más opciones.",
    ],
  },

  extracurriculares: {
    messages: [
      "🎉 ¡Esto sí me emociona contarte!\n\n⚽ *Deportes:*\nFútbol, Baloncesto, Voleibol, Atletismo y Patinaje\n\n🎵 *Arte y cultura:*\nPiano, Grupo de Vallenato, Porras y Taller de Arte\n\n🧩 *Académicas y lúdicas:*\nFrancés con juegos y Ajedrez\n\n¡Aquí siempre hay algo que te va a gustar! 🐯\n\nEscribe *menú* para ver más opciones.",
    ],
  },

  convivencia: {
    messages: [
      "🤝 En el Santoto nos cuidamos entre todos.\n\n🛡️ *Frente al bullying:*\nCampañas de buen trato y cátedra de habilidades socioemocionales. Contamos con *psicólogos y moderadores* de acompañamiento.\n\n📲 *Comunicación con familias:*\nUsamos la plataforma *Phidias*. Para Prejardín a Cuarto también la *agenda física*.\n\n📝 *¿Muchas tareas?*\nEn preescolar solo cuando es necesario. En primaria y bachillerato según cada asignatura. ¡Nada exagerado! 😊\n\nEscribe *menú* para ver más opciones.",
    ],
  },

  documentos: {
    messages: [
      "📄 ¡Claro! Te mando ahora mismo la información que necesitas. 🐯👇",
    ],
    documents: [
      DOCS.presentacion,
      DOCS.jardin_quinto,
      DOCS.sexto_once,
    ],
  },

  asesor: {
    messages: [
      "📞 ¡Con gusto te conectamos con un asesor de admisiones!\n\nUn miembro de nuestro equipo te contactará en menos de *24 horas hábiles*.\n\nPor favor escríbeme:\n• Tu *nombre completo*\n• El *grado* al que quieres inscribir al estudiante\n• Tu *número de contacto*\n\nTambién puedes visitarnos:\n📍 Cra. 2 Este # 18-80, La Candelaria, Bogotá\n🕗 Lunes a viernes, 7:00 a.m. – 4:00 p.m. 🐯",
    ],
  },

  redes: {
    messages: [
      "📱 ¡Síguenos y mantente al día con todo lo que pasa en el Santoto! 🐯\n\n🌐 *Páginas web:*\n• www.santotomas.edu.co\n• santotokids.santotomas.edu.co\n\n📘 *Facebook:*\nhttps://www.facebook.com/colsantoto\n\n📸 *Instagram:*\nhttps://www.instagram.com/colsantoto\n\n▶️ *YouTube:*\nhttps://www.youtube.com/@colsantoto\n\n🎵 *TikTok:*\nhttps://www.tiktok.com/@colsantoto\n\n💼 *LinkedIn:*\nhttps://www.linkedin.com/in/colegio-bilingüe-santo-tomás-de-aquino-dominicos-bogotá-0a8709338/\n\n¡Ahí te contamos todo lo que vivimos día a día! 🖤🤍\n\nEscribe *menú* para ver más opciones.",
    ],
  },

  no_entendi: {
    messages: [
      "🐯 Hmm, no entendí bien lo que me dijiste. ¡No te preocupes!\n\nEscribe *menú* o *hola* para ver todas las opciones disponibles, o escribe el número del tema que te interesa:\n\n1️⃣ Idiomas · 2️⃣ Metodología · 3️⃣ Info general\n4️⃣ Horarios · 5️⃣ Extracurriculares · 6️⃣ Convivencia\n7️⃣ Documentos · 8️⃣ Hablar con asesor · 9️⃣ Redes sociales",
    ],
  },
};
