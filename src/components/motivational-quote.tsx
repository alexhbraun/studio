
// src/components/motivational-quote.tsx
"use client";

import { useState, useEffect } from "react";
import { Lightbulb } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { quotes } from "@/lib/quotes";

export function MotivationalQuote() {
  const [message, setMessage] = useState<string>('');
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Set an initial quote when the component mounts
    setMessage(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  const getNewQuote = () => {
    setIsAnimating(true);
    setTimeout(() => {
      let newQuote = quotes[Math.floor(Math.random() * quotes.length)];
      while (newQuote === message) {
        newQuote = quotes[Math.floor(Math.random() * quotes.length)];
      }
      setMessage(newQuote);
      setIsAnimating(false);
    }, 300); // Duration of the fade-out animation
  };
  
  return (
    <Card className="mt-8 bg-gradient-to-br from-primary via-green-900 to-cyan-900 border-primary/20 shadow-lg text-primary-foreground rounded-lg overflow-hidden">
      <CardHeader className="text-center">
        <CardTitle className="font-headline text-2xl flex items-center justify-center gap-2">
           <Lightbulb /> Tu motivación de hoy
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <div className={`transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
          {message && (
              <div className="space-y-2">
                  <p className="text-xl italic font-semibold">
                    "{message}"
                  </p>
                  <p className="text-sm text-primary-foreground/80">¡Cada entrenamiento te acerca a tu meta. No te rindas, tu cuerpo y tu mente te lo agradecerán!</p>
              </div>
          )}
        </div>
        <div className="mt-6">
            <Button onClick={getNewQuote} variant="secondary" className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
                Obtener nueva motivación
            </Button>
        </div>
      </CardContent>
    </Card>
  );
}
