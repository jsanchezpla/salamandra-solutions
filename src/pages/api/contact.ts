import type { APIRoute } from "astro";
import { Resend } from "resend";

export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  
  const name = formData.get("name")?.toString();
  const email = formData.get("email")?.toString();
  const message = formData.get("message")?.toString();
  const company = formData.get("company")?.toString(); // Honeypot

  // 1. Validación Honeypot (Si un bot llena esto, paramos)
  if (company) {
    return redirect("/contact?sent=1");
  }

  // 2. Validación de campos obligatorios
  if (!name || !email || !message) {
    return redirect("/contact?error=1");
  }

  try {
    // 3. Envío con Resend
    const { error } = await resend.emails.send({
      from: "Formulario Web <onboarding@resend.dev>",
      to: ["jsanchezpla@gmail.com"],
      replyTo: email,
      subject: `Nuevo mensaje de ${name}`,
      html: `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong> ${message}</p>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return redirect("/contact?error=1");
    }

    return redirect("/contact?sent=1");
  } catch (e) {
    console.error("Server Error:", e);
    return redirect("/contact?error=1");
  }
};