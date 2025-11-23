import * as React from "react";
import { Rating } from "./Rating";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { actions } from "astro:actions";
import { LINKS } from "@/data.constants";
import { CrossCircledIcon } from "@radix-ui/react-icons";
import { MessageCircle, Star } from "lucide-react";
import { H3, Text, Small, H2, Quote } from "./Typography";

type FeedbackState =
  | "rating"
  | "comment"
  | "submitting"
  | "success"
  | "error"
  | "redirecting";

//! FIXME: STOP USING LUCIDE ICONS AND USE RADIX ONES.
export const FeedbackForm = () => {
  const [rating, setRating] = React.useState<number>(0);
  const [comment, setComment] = React.useState("");
  const [state, setState] = React.useState<FeedbackState>("rating");
  const [countdown, setCountdown] = React.useState<number>(7);

  const handleRatingChange = async (selectedRating: number) => {
    setRating(selectedRating);

    // Only proceed if a rating was actually selected (not cleared)
    if (selectedRating > 0) {
      if (selectedRating === 5) {
        // Submit 5-star feedback immediately (without comment)
        try {
          actions.submitFeedback({
            rating: 5,
            comment: "5 étoiles - Aucun commentaire fourni",
          });
        } catch (error) {
          console.error("Error submitting 5-star feedback:", error);
          // Continue anyway to show redirect
        }
        // Show thank you message and start countdown
        setState("redirecting");
        setCountdown(7);
      } else {
        // Show comment form
        setState("comment");
      }
    }
  };

  // Handle countdown and redirect for 5-star ratings
  React.useEffect(() => {
    if (state !== "redirecting") return undefined;

    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      window.location.href = LINKS.GITE_LA_RANDONNEE.reviewUrl;
      return undefined;
    }
  }, [state, countdown]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (rating === 0 || !comment.trim()) {
      return;
    }

    setState("submitting");

    try {
      const result = await actions.submitFeedback({
        rating,
        comment: comment.trim(),
      });

      console.log("🚀 ~ handleSubmit ~ result:", result);

      // Check for errors first
      if (result.error) {
        console.error("Action error:", result.error);
        setState("error");
        return;
      }

      // Check if the action succeeded
      if (result.data?.success === true) {
        setState("success");
      } else {
        console.error("Action returned failure:", result.data);
        setState("error");
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <div className="flex flex-col items-center justify-center border border-primary p-4 sm:p-6 md:p-8 rounded-lg gap-4">
        <MessageCircle className="w-12 h-12 text-primary" />
        <H2>Merci pour votre retour 🙏</H2>
        <Quote className="text-center">
          "Merci d'avoir pris le temps de partager votre avis avec nous!"
        </Quote>
        <Text className="text-center text-sm text-gray-600 mt-2">
          — Cécile & Patrice
        </Text>
      </div>
    );
  }

  if (state === "error") {
    return (
      <div className="flex flex-col items-center justify-center border border-red-500 p-4 sm:p-6 md:p-8 rounded-lg gap-4">
        <CrossCircledIcon className="w-12 h-12 text-red-500" />
        <H3 className="text-red-700">Une erreur est survenue</H3>
        <Text className="text-center text-gray-600">
          Veuillez réessayer. Si le problème persiste, n'hésitez pas à nous
          contacter directement.
        </Text>
        <Button
          onClick={() => {
            setState("rating");
            setRating(0);
            setComment("");
          }}
        >
          Réessayer
        </Button>
      </div>
    );
  }

  if (state === "redirecting") {
    return (
      <div className="flex flex-col items-center justify-center border-2 border-primary p-4 sm:p-6 md:p-8 rounded-lg gap-4">
        <H2>Merci pour votre avis ! 😊</H2>
        <Quote className="text-center">
          "Nous vous serions très reconnaissants si vous pouviez nous noter 5
          étoiles sur Google Maps pour nous aider à faire connaître notre gîte"
        </Quote>
        <Text className="text-center text-sm text-gray-600 mt-2">
          — Cécile & Patrice
        </Text>
        <Small className="mt-2">
          Redirection automatique dans {countdown} secondes
        </Small>
      </div>
    );
  }

  if (state === "rating") {
    return (
      <div className="flex flex-col items-center p-4 sm:p-6 md:p-8 border-2 border-primary rounded-lg text-center">
        <H2 className="text-balance">
          Comment avez-vous trouvé votre séjour ?
        </H2>
        <Text className="text-balance text-lg">
          Votre avis est précieux pour nous aider à améliorer l'expérience de
          nos hôtes 🙏
        </Text>
        <div className="p-4">
          <Rating
            value={rating}
            onValueChange={handleRatingChange}
            variant="yellow"
            size={48}
            max={5}
            precision={1}
            Icon={<Star />}
            className="my-4"
          />
        </div>
      </div>
    );
  }

  if (state === "comment" || state === "submitting") {
    const isSubmitting = state === "submitting";
    return (
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 p-4 sm:p-6 md:p-8 border-2 border-primary rounded-lg"
      >
        <div className="text-center">
          <H2>Merci pour votre retour 🙏</H2>
          <div className="flex items-center justify-center gap-2 mt-2">
            <Small>Votre note :</Small>
            <Rating
              value={rating}
              onValueChange={() => {}}
              variant="yellow"
              size={24}
              max={5}
              precision={1}
              Icon={<Star />}
              readOnly={true}
              className="pointer-events-none"
            />
          </div>
          <Text asChild={true} className="mt-4">
            <p>
              Nous sommes désolés que votre expérience n'ait pas été à la
              hauteur de vos attentes.
            </p>
          </Text>

          <Text asChild={true} className="mt-6">
            <p>
              Votre avis nous est précieux pour améliorer nos services! <br />
              Pouvez-vous nous en dire plus ?
            </p>
          </Text>
        </div>

        <div className="space-y-2">
          <Label htmlFor="comment">
            Tout ce que vous écrivez nous aide à mieux servir nos futurs hôtes.
          </Label>
          <Textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Votre avis..."
            className="min-h-[120px]"
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="flex gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              setState("rating");
              setComment("");
            }}
            className="flex-1"
            disabled={isSubmitting}
          >
            Retour
          </Button>
          <Button
            type="submit"
            disabled={isSubmitting || !comment.trim()}
            className="flex-1"
          >
            {isSubmitting ? "Envoi..." : "Envoyer"}
          </Button>
        </div>
      </form>
    );
  }

  return null;
};
