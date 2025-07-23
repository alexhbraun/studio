import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Settings, LogOut } from 'lucide-react';
import { Header } from '@/components/header';

export default function ProfilePage() {
  return (
    <>
    <Header />
    <div className="flex min-h-screen w-full flex-col bg-muted/40 pt-16">
      <div className="flex flex-col sm:gap-4 sm:py-4">
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div className="mx-auto grid max-w-4xl flex-1 auto-rows-max gap-4">
            <div className="flex items-center gap-4">
              <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                Perfil de usuario
              </h1>
            </div>
            <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
              <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Información personal</CardTitle>
                    <CardDescription>
                      Aquí puede ver y editar su información personal.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-20 w-20">
                          <AvatarImage src="/avatar-profile.png" alt="Benutzer" data-ai-hint="user avatar" />
                          <AvatarFallback>MM</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-lg font-semibold">Max Mustermann</p>
                          <p className="text-sm text-muted-foreground">max.mustermann@ejemplo.com</p>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold">Sobre mí</h3>
                        <p className="text-muted-foreground">
                          Participante motivado del programa de caminata de 30 días que quiere alcanzar sus metas de fitness.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                 <Card>
                    <CardHeader>
                        <CardTitle>Acciones del perfil</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-2">
                         <Button variant="outline" className="justify-start gap-2">
                           <User className="h-4 w-4" /> Editar perfil
                        </Button>
                         <Button variant="outline" className="justify-start gap-2">
                           <Settings className="h-4 w-4" /> Configuración de la cuenta
                        </Button>
                        <Link href="/login">
                         <Button variant="destructive" className="w-full justify-start gap-2">
                           <LogOut className="h-4 w-4" /> Cerrar sesión
                        </Button>
                        </Link>
                    </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    </>
  );
}
