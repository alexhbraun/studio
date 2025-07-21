import Dashboard from "@/components/dashboard";
import { Header } from "@/components/header";
import { Heart, Droplets, Utensils, Bed } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8 mt-16">
        <header className="text-center mb-10">
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
            <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight text-white">
              Abnehm-Gehprogramm
            </h1>
            <Heart className="text-primary h-8 w-8" />
          </div>
          <p className="text-muted-foreground mt-2 text-lg">
            Verändere dein Leben Schritt für Schritt! Jeder Tag ist eine neue
            Chance zur Verbesserung.
          </p>
        </header>
        <Dashboard />
        <footer className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-card border-border/60">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg text-yellow-400">
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
          <Card className="bg-card border-border/60">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg text-yellow-400">
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
          <Card className="bg-card border-border/60">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg text-yellow-400">
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
