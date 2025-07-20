"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { generateMotivationalMessage } from "@/ai/flows/generate-motivational-message";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const formSchema = z.object({
  fitnessGoal: z.string().min(5, { message: "Please share a bit more about your goal." }),
  preferences: z.string().optional(),
});

type MotivationalQuoteFormValues = z.infer<typeof formSchema>;

interface MotivationalQuoteProps {
  progressPercentage: number;
}

export function MotivationalQuote({ progressPercentage }: MotivationalQuoteProps) {
  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<MotivationalQuoteFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fitnessGoal: "improve my overall health",
      preferences: "A friendly and encouraging tone",
    },
  });

  const onSubmit = async (data: MotivationalQuoteFormValues) => {
    setIsLoading(true);
    setError(null);
    setMessage(null);
    try {
      const result = await generateMotivationalMessage({
        progressPercentage,
        fitnessGoal: data.fitnessGoal,
        preferences: data.preferences,
      });
      setMessage(result.message);
    } catch (e) {
      setError("Sorry, I couldn't generate a message right now. Please try again later.");
      console.error(e);
    }
    setIsLoading(false);
  };

  return (
    <Card className="mt-12 mb-8 shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline">Need a Boost?</CardTitle>
        <CardDescription>
          Your progress is at {progressPercentage.toFixed(0)}%. Let's generate a personalized motivational message to keep you going!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="fitnessGoal"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>My Fitness Goal</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., lose weight, run a 5k" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="preferences"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message Style (Optional)</FormLabel>
                  <FormControl>
                    <Textarea placeholder="e.g., tough love, gentle and kind" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} className="bg-accent text-accent-foreground hover:bg-accent/90">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                "Motivate Me!"
              )}
            </Button>
          </form>
        </Form>
        {error && (
          <Alert variant="destructive" className="mt-6">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        {message && (
          <Alert className="mt-6 border-primary/50">
             <AlertTitle className="font-headline text-primary">Your Daily Motivation</AlertTitle>
            <AlertDescription className="text-foreground text-base">
              {message}
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
}
