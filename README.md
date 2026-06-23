# Dominic — Bot de Admisiones Santoto

Chatbot de WhatsApp para el proceso de admisiones del **Colegio Bilingüe Santo Tomás de Aquino**.

---

## Despliegue paso a paso

### PASO 1 — Subir a GitHub

```bash
git init
git add .
git commit -m "Dominic bot - versión inicial"
git remote add origin https://github.com/TU_USUARIO/dominic-santoto-bot.git
git push -u origin main
```

---

### PASO 2 — Crear app en Meta for Developers

1. Ve a [developers.facebook.com](https://developers.facebook.com)
2. **Crear app** → Tipo: **Business**
3. Agregar producto: **WhatsApp**
4. En *API Setup* anota:
   - `PHONE_NUMBER_ID`
   - `WHATSAPP_TOKEN` (token temporal de 24h — luego se reemplaza por token permanente)

---

### PASO 3 — Desplegar en Render.com

1. Ve a [render.com](https://render.com) → **New Web Service**
2. Conecta tu repositorio GitHub `dominic-santoto-bot`
3. Configura:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Plan:** Free
4. En **Environment Variables** agrega:

| Variable | Valor |
|---|---|
| `WHATSAPP_TOKEN` | (tu token de Meta) |
| `PHONE_NUMBER_ID` | (tu Phone Number ID de Meta) |
| `VERIFY_TOKEN` | `santoto2026` |

5. Render te dará una URL pública tipo:
   `https://dominic-santoto-bot.onrender.com`

---

### PASO 4 — Configurar Webhook en Meta

1. En Meta for Developers → WhatsApp → **Configuration**
2. **Webhook URL:** `https://dominic-santoto-bot.onrender.com/webhook`
3. **Verify Token:** `santoto2026`
4. Clic en **Verify and Save**
5. Suscribir al evento: `messages`

---

### PASO 5 — Probar

Envía un mensaje de WhatsApp al número de prueba de Meta con el texto `hola` y Dominic responderá. 

---

## Documentos configurados

| Documento | Descripción |
|---|---|
| Presentación CSTA | Brochure institucional del colegio |
| Admisiones Jardín a 5° | Proceso para sección infantil y primaria |
| Admisiones 6° a 11° | Proceso para sección juvenil y mayores |

Para actualizar los PDFs, edita las URLs en `src/flows.js` en la sección `DOCS`.

---

## Desarrollo local

```bash
npm install
cp .env.example .env
# Edita .env con tus credenciales
npm run dev
```

---

## Soporte

Desarrollado por **Ing.Fabian Bravo Celis** para el Colegio Bilingüe Santo Tomás de Aquino.
