import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Settings, LogOut } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div className="mx-auto grid max-w-4xl flex-1 auto-rows-max gap-4">
            <div className="flex items-center gap-4">
              <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                Benutzerprofil
              </h1>
              <div className="hidden items-center gap-2 md:ml-auto md:flex">
                <Link href="/dashboard">
                  <Button variant="outline" size="sm">
                    Zurück zum Dashboard
                  </Button>
                </Link>
                <Link href="/settings">
                  <Button size="sm">Einstellungen</Button>
                </Link>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
              <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Persönliche Informationen</CardTitle>
                    <CardDescription>
                      Hier können Sie Ihre persönlichen Daten einsehen und bearbeiten.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-20 w-20">
                          <AvatarImage src="https://placehold.co/100x100.png" alt="Benutzer" data-ai-hint="user avatar" />
                          <AvatarFallback>MM</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-lg font-semibold">Max Mustermann</p>
                          <p className="text-sm text-muted-foreground">max.mustermann@beispiel.com</p>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold">Über mich</h3>
                        <p className="text-muted-foreground">
                          Motivierter Teilnehmer des 30-Tage-Gehprogramms, der seine Fitnessziele erreichen will.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                 <Card>
                    <CardHeader>
                        <CardTitle>Profil-Aktionen</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-2">
                         <Button variant="outline" className="justify-start gap-2">
                           <User className="h-4 w-4" /> Profil bearbeiten
                        </Button>
                         <Button variant="outline" className="justify-start gap-2">
                           <Settings className="h-4 w-4" /> Kontoeinstellungen
                        </Button>
                        <Link href="/login">
                         <Button variant="destructive" className="w-full justify-start gap-2">
                           <LogOut className="h-4 w-4" /> Abmelden
                        </Button>
                        </Link>
                    </CardContent>
                </Card>
              </div>
            </div>
             <div className="flex items-center justify-center gap-2 md:hidden">
                <Link href="/dashboard">
                  <Button variant="outline" size="sm">
                    Dashboard
                  </Button>
                </Link>
                <Link href="/settings">
                  <Button size="sm">Einstellungen</Button>
                </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
