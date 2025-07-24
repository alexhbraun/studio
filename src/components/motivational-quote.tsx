// src/components/motivational-quote.tsx
"use client";

import { useState, useEffect } from "react";
import { Lightbulb } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { quotes } from "@/lib/quotes";

export function MotivationalQuote() {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    // Set an initial quote when the component mounts
    setMessage(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  const getNewQuote = () => {
    let newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    // Ensure the new quote is different from the current one
    while (newQuote === message) {
      newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    }
    setMessage(newQuote);
  };
  
  return (
    <Card className="mt-8 bg-primary/90 border-primary/20 shadow-lg text-primary-foreground rounded-lg">
      <CardHeader className="text-center">
        <CardTitle className="font-headline text-2xl flex items-center justify-center gap-2">
           <Lightbulb /> Tu motivación de hoy
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        {message && (
            <div className="space-y-2">
                <p className="text-xl italic">
                  "{message}"
                </p>
                <p className="text-sm text-primary-foreground/80">¡Cada entrenamiento te acerca a tu meta. No te rindas, tu cuerpo y tu mente te lo agradecerán!</p>
            </div>
        )}
        <div className="mt-4">
            <Button onClick={getNewQuote} variant="outline" className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
                Obtener nueva motivación
            </Button>
        </div>
      </CardContent>
    </Card>
  );
}
