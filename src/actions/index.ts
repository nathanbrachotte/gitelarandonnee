import { EMAIL } from "@/data.constants";
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
    async handler(data, context) {
      console.log("🚀 ~ handler ~ data:", data);

      // https://alexweberk.com/blog/astro-actions-on-cloudflare
      // Support both local dev (import.meta.env) and Cloudflare (runtime.env)
      const apiKey =
        // @ts-expect-error i ain't do this right now
        context.locals.runtime?.env?.RESEND_API_KEY ||
        import.meta.env.RESEND_API_KEY;

      if (!apiKey) {
        console.error("RESEND_API_KEY is missing");
        return { success: false, error: "Missing API key configuration" };
      }

      const resend = new Resend(apiKey);

      const { data: response, error } = await resend.emails.send({
        from: "nathan@n8js.com",
        to: [EMAIL],
        replyTo: data.email,
        subject: "[La Randonnée] Nouveau message - " + data.name,
        html: `<p>Nom: ${data.name}</p><p>Email: ${data.email}</p><p>Message: ${data.message}</p>`,
      });
      console.log("🚀 ~ handler ~ response:", response);

      if (error) {
        return { success: false, error: error.message };
      }

      return { success: true };
    },
  }),
  submitFeedback: defineAction({
    accept: "json",
    input: z.object({
      rating: z.number().min(1).max(5),
      comment: z.string().min(1),
    }),
    async handler(data, context) {
      console.log("🚀 ~ Feedback received ~ data:", data);

      try {
        // https://alexweberk.com/blog/astro-actions-on-cloudflare
        // Support both local dev (import.meta.env) and Cloudflare (runtime.env)
        const apiKey =
          // @ts-expect-error i ain't do this right now
          context.locals.runtime?.env?.RESEND_API_KEY ||
          import.meta.env.RESEND_API_KEY;

        if (!apiKey) {
          console.error("RESEND_API_KEY is missing");
          return { success: false, error: "Missing API key configuration" };
        }

        const resend = new Resend(apiKey);

        const { data: response, error } = await resend.emails.send({
          from: "nathan@n8js.com",
          to: [EMAIL],
          subject: `[La Randonnée] Avis client - ${data.rating} étoile${data.rating > 1 ? "s" : ""}`,
          html: `
          <h2>Avis client reçu</h2>
          <p><strong>Note :</strong> ${data.rating}/5 étoiles</p>
          <p><strong>Commentaire :</strong></p>
          <p>${data.comment.replace(/\n/g, "<br>")}</p>
        `,
        });
        console.log("🚀 ~ handler ~ response:", response);

        if (error) {
          return { success: false, error: error.message };
        }

        return { success: true };
      } catch (error: unknown) {
        console.error("🚀 ~ Feedback received ~ error:", error);
        return {
          success: false,
          error: error instanceof Error ? error.message : "Unknown error",
        };
      }
    },
  }),
};
