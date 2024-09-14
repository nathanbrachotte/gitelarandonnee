import { defineAction } from "astro:actions";
import { z } from "astro:schema";

export const server = {
  sendContactEmail: defineAction({
    accept: "form",
    input: z.object({
      name: z.string().min(1),
      email: z.string().email(),
      message: z.string().min(1),
    }),
    async handler(data) {
      console.log(data);
    },
  }),
};
