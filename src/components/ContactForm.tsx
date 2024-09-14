/**
 * v0 by Vercel.
 * @see https://v0.dev/t/oYvRX9AiaKF
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  return (
    <form action="/actions/send-email" method="post">
      <div className="w-full max-w-2xl space-y-8 p-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Nous contacter</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Pour toute réservation ou question
          </p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name" name="name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="Enter your email"
              type="email"
              name="email"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Enter your message"
              className="min-h-[100px]"
              name="message"
            />
          </div>
          <Button type="submit">Submit</Button>
        </div>
      </div>
    </form>
  );
}
