import Dashboard from "@/components/dashboard";
import { Header } from "@/components/header";
import { Heart, Droplets, Utensils, Bed, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function DashboardPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8 mt-16">
        <header className="text-center mb-10 animate-fade-in-down">
          <div className="flex justify-center items-center gap-4 mb-2">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-primary"
            >
              <path
                d="M2 12H4.5L7.5 4.5L10.5 19.5L13.5 12L16.5 17L19.5 9.5L22 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-green-400 to-primary">
              Abnehm-Gehprogramm
            </h1>
            <Heart className="text-primary h-8 w-8" />
          </div>
          <p className="text-muted-foreground mt-2 text-lg">
            Verändere dein Leben Schritt für Schritt! Jeder Tag ist eine neue
            Chance zur Verbesserung.
          </p>
        </header>

        <Accordion type="single" collapsible className="w-full mb-8 bg-card/60 backdrop-blur-sm border-border/60 shadow-lg rounded-lg">
          <AccordionItem value="item-1" className="border-b-0">
            <AccordionTrigger className="p-6 text-lg font-semibold text-primary hover:no-underline">
              <div className="flex items-center gap-3">
                <BookOpen className="h-6 w-6" />
                Willkommen beim Programm! Was dich erwartet:
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6 text-muted-foreground">
              <p className="mb-4">
                Dieses Programm wurde entwickelt, um dir dabei zu helfen, durch die einfachste und natürlichste Form der Bewegung – das Gehen – Gewicht zu verlieren, deine Fitness zu steigern und eine nachhaltige, gesunde Routine aufzubauen. In den nächsten 30 Tagen wirst du durch tägliche, sorgfältig geplante Trainingseinheiten geführt, die sich in Intensität und Dauer schrittweise steigern.
              </p>
              <p>
                Egal, ob du gerade erst anfängst oder deine bestehende Routine auf das nächste Level heben möchtest – dieses Programm ist für dich. Wir konzentrieren uns auf konstante Fortschritte, nicht auf Perfektion. Höre auf deinen Körper, bleib dran und feiere jeden einzelnen Schritt auf deinem Weg zu einem gesünderen Ich. Lasst uns gemeinsam loslegen!
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
        <Dashboard />

        <footer className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up">
          <Card className="bg-card/60 backdrop-blur-sm border-border/60 shadow-lg hover:shadow-primary/20 transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg text-accent">
                <Droplets className="h-5 w-5" />
                Tipp des Tages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Denke daran, während des Trainings regelmäßig Wasser zu trinken.
                Hydration ist der Schlüssel zur effektiven Kalorienverbrennung.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card/60 backdrop-blur-sm border-border/60 shadow-lg hover:shadow-primary/20 transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg text-accent">
                <Utensils className="h-5 w-5" />
                Gesunde Ernährung
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Kombiniere das Training mit einer leichten, proteinreichen
                Mahlzeit 30 Minuten nach dem Training.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card/60 backdrop-blur-sm border-border/60 shadow-lg hover:shadow-primary/20 transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg text-accent">
                <Bed className="h-5 w-5" />
                Erholung
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Guter Schlaf ist die Grundlage der Regeneration. Strebe 7-8
                Stunden Schlaf für optimale Ergebnisse an.
              </p>
            </CardContent>
          </Card>
        </footer>
      </main>
    </>
  );
}
