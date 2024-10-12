import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { Resend } from "resend";

export const server = {
  sendContactEmail: defineAction({
    accept: "form",
    input: z.object({
      name: z.string().min(1),
      email: z.string().email(),
      message: z.string().min(1),
    }),
    async handler(data) {
      console.log("🚀 ~ handler ~ data:", data);
      const resend = new Resend(import.meta.env.RESEND_API_KEY);
      const { data: response, error } = await resend.emails.send({
        from: "nathan@n8js.com",
        to: ["nathan.brachotte@gmail.com"],
        subject: "Gîte: Nouveau message de la part de " + data.name,
        html: `<p>Nom: ${data.name}</p><p>Email: ${data.email}</p><p>Message: ${data.message}</p>`,
      });
      console.log("🚀 ~ handler ~ response:", response);

      if (error) {
        return { success: false, error: error.message };
      }

      return { success: true };
    },
  }),
};
