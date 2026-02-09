import type { APIRoute } from "astro";
import { Resend } from "resend";

export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  
  const name = formData.get("name")?.toString();
  const email = formData.get("email")?.toString();
  const phone = formData.get("phone")?.toString();
  const company = formData.get("company")?.toString();
  const message = formData.get("message")?.toString();
  
  // Campo trampa (Honeypot)
  const botField = formData.get("bot_field")?.toString();

  // 1. Si el bot rellena el campo oculto, devolvemos éxito falso (para engañarlo) o error.
  if (botField) {
    return new Response(JSON.stringify({ message: "Bot detectado" }), { status: 400 });
  }

  // 2. Validación
  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({ message: "Faltan campos obligatorios" }), 
      { status: 400 }
    );
  }

  try {
    const { error } = await resend.emails.send({
      from: "Formulario Web <onboarding@resend.dev>",
      to: ["jsanchezpla@gmail.com"],
      replyTo: email,
      subject: `Lead Web: ${name} (${company || "Particular"})`,
      html: `
        <h2>Nueva solicitud de contacto</h2>
        <ul>
            <li><strong>Nombre:</strong> ${name}</li>
            <li><strong>Empresa:</strong> ${company || "No indicada"}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Teléfono:</strong> ${phone || "No indicado"}</li>
        </ul>
        <hr />
        <h3>Mensaje:</h3>
        <p>${message}</p>
      `,
    });

    if (error) {
      return new Response(JSON.stringify({ message: error }), { status: 500 });
    }

    // ÉXITO: Devolvemos JSON
    return new Response(
      JSON.stringify({ message: "Email enviado correctamente" }), 
      { status: 200 }
    );

  } catch (e) {
    return new Response(JSON.stringify({ message: e }), { status: 500 });
  }
};