const express = require("express");
const axios = require("axios");
const app = express();
app.use(express.json());

const WHATSAPP_TOKEN = process.env.WHATSAPP_TOKEN;
const PHONE_NUMBER_ID = process.env.PHONE_NUMBER_ID;
const VERIFY_TOKEN = process.env.VERIFY_TOKEN;

// ─── Verificación del webhook (Meta lo llama una sola vez al configurar) ───
app.get("/webhook", (req, res) => {
  const mode = req.query["hub.mode"];
  const token = req.query["hub.verify_token"];
  const challenge = req.query["hub.challenge"];
  if (mode === "subscribe" && token === VERIFY_TOKEN) {
    console.log("✅ Webhook verificado");
    res.status(200).send(challenge);
  } else {
    res.sendStatus(403);
  }
});

// ─── Recepción de mensajes ───
app.post("/webhook", async (req, res) => {
  res.sendStatus(200); // Responder rápido a Meta
  try {
    const entry = req.body?.entry?.[0];
    const changes = entry?.changes?.[0];
    const value = changes?.value;
    const message = value?.messages?.[0];
    if (!message) return;

    const from = message.from;
    const text = message.text?.body?.toLowerCase().trim() || "";
    const session = getSession(from);
    await handleMessage(from, text, session);
  } catch (err) {
    console.error("Error procesando mensaje:", err.message);
  }
});

// ─── Sesiones simples en memoria ───
const sessions = {};
function getSession(phone) {
  if (!sessions[phone]) sessions[phone] = { step: "start" };
  return sessions[phone];
}

// ─── Lógica principal de Dominic ───
async function handleMessage(to, text, session) {
  const flows = require("./flows");
  let flowKey = detectFlow(text, session);
  session.step = flowKey;
  const flow = flows[flowKey];
  if (!flow) return;

  for (const msg of flow.messages) {
    await sendMessage(to, msg);
    await delay(600);
  }

  if (flow.buttons?.length) {
    await sendButtons(to, flow.menuText, flow.buttons);
  }

  if (flow.documents?.length) {
    for (const doc of flow.documents) {
      await sendDocument(to, doc.url, doc.filename, doc.caption);
      await delay(400);
    }
  }
}

// ─── Detección de intención ───
function detectFlow(text, session) {
  if (/hola|inicio|empezar|buenas|dominic|menú|menu/i.test(text) || text === "0") return "start";
  if (/idioma|inglés|francés|bilingüe|lengua/i.test(text) || text === "1") return "idiomas";
  if (/metodolog|enseñan|aprenden|IB|bachillerato internacional|experiencial/i.test(text) || text === "2") return "metodologia";
  if (/mixto|católic|dominic|edad|años|grupos|colegio/i.test(text) || text === "3") return "info_general";
  if (/horario|calendario|hora|entrada|salida/i.test(text) || text === "4") return "horarios";
  if (/extracurricular|deporte|arte|fútbol|piano|ajedrez|patinaje/i.test(text) || text === "5") return "extracurriculares";
  if (/bullying|tarea|comunicaci|padres|phidias|convivencia|acoso/i.test(text) || text === "6") return "convivencia";
  if (/documento|requisito|pdf|brochure|presentación|proceso|admisión|inscripci/i.test(text) || text === "7") return "documentos";
  if (/asesor|hablar|contacto|llamar|persona/i.test(text) || text === "8") return "asesor";
  if (/red|social|facebook|instagram|youtube|tiktok|linkedin|web|página|sitio/i.test(text) || text === "9") return "redes";
  return "no_entendi";
}

// ─── Enviar mensaje de texto ───
async function sendMessage(to, text) {
  await axios.post(
    `https://graph.facebook.com/v19.0/${PHONE_NUMBER_ID}/messages`,
    {
      messaging_product: "whatsapp",
      to,
      type: "text",
      text: { body: text },
    },
    { headers: { Authorization: `Bearer ${WHATSAPP_TOKEN}` } }
  );
}

// ─── Enviar botones interactivos ───
async function sendButtons(to, bodyText, buttons) {
  await axios.post(
    `https://graph.facebook.com/v19.0/${PHONE_NUMBER_ID}/messages`,
    {
      messaging_product: "whatsapp",
      to,
      type: "interactive",
      interactive: {
        type: "button",
        body: { text: bodyText },
        action: {
          buttons: buttons.map((b, i) => ({
            type: "reply",
            reply: { id: `btn_${i}`, title: b.label.substring(0, 20) },
          })),
        },
      },
    },
    { headers: { Authorization: `Bearer ${WHATSAPP_TOKEN}` } }
  );
}

// ─── Enviar documento PDF ───
async function sendDocument(to, url, filename, caption) {
  await axios.post(
    `https://graph.facebook.com/v19.0/${PHONE_NUMBER_ID}/messages`,
    {
      messaging_product: "whatsapp",
      to,
      type: "document",
      document: { link: url, filename, caption },
    },
    { headers: { Authorization: `Bearer ${WHATSAPP_TOKEN}` } }
  );
}

const delay = (ms) => new Promise((r) => setTimeout(r, ms));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🐯 Dominic escuchando en puerto ${PORT}`));
