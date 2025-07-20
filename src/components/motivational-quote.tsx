"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { generateMotivationalMessage } from "@/ai/flows/generate-motivational-message";
import { Loader2, Lightbulb } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const formSchema = z.object({
  fitnessGoal: z.string(),
  preferences: z.string().optional(),
});

type MotivationalQuoteFormValues = z.infer<typeof formSchema>;

interface MotivationalQuoteProps {
  progressPercentage: number;
}

export function MotivationalQuote({ progressPercentage }: MotivationalQuoteProps) {
  const [message, setMessage] = useState<string | null>(`"Eine Reise von tausend Meilen beginnt mit einem einzigen Schritt"`);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<MotivationalQuoteFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fitnessGoal: "meine allgemeine Gesundheit verbessern",
      preferences: "Ein freundlicher und ermutigender Ton",
    },
  });

  const onSubmit = async (data: MotivationalQuoteFormValues) => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await generateMotivationalMessage({
        progressPercentage,
        fitnessGoal: data.fitnessGoal,
        preferences: data.preferences,
      });
      setMessage(result.message);
    } catch (e) {
      setError("Entschuldigung, ich konnte im Moment keine Nachricht generieren. Bitte versuche es später erneut.");
      console.error(e);
    }
    setIsLoading(false);
  };
  
  return (
    <Card className="mt-8 bg-accent/90 border-accent shadow-lg text-accent-foreground rounded-lg">
      <CardHeader className="text-center">
        <CardTitle className="font-headline text-2xl flex items-center justify-center gap-2">
           <Lightbulb /> Deine heutige Motivation
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        {error && (
          <Alert variant="destructive" className="mt-6 bg-red-900/50 border-red-700 text-white">
            <AlertTitle>Fehler</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        {message && !isLoading && (
            <div className="space-y-2">
                <p className="text-xl italic">
                {message}
                </p>
                <p className="text-sm text-accent-foreground/80">Jedes Training bringt dich deinem Ziel näher. Gib nicht auf - dein Körper und Geist werden es dir danken!</p>
            </div>
        )}
         {isLoading && (
            <div className="flex items-center justify-center gap-2 text-lg">
                <Loader2 className="h-6 w-6 animate-spin" />
                <span>Generiere...</span>
            </div>
         )}
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-4">
            <Button type="submit" variant="outline" className="bg-accent-foreground/10 border-accent-foreground/30 hover:bg-accent-foreground/20" disabled={isLoading}>
                Neue Motivation erhalten
            </Button>
        </form>
      </CardContent>
    </Card>
  );
}
