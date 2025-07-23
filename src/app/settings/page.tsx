
import Link from "next/link"
import {
  ChevronLeft,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Header } from "@/components/header"


export default function SettingsPage() {
  return (
    <>
      <Header />
      <div className="flex min-h-screen w-full flex-col bg-muted/40 pt-16">
        <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
          <div className="mx-auto grid w-full max-w-6xl gap-2">
            <h1 className="text-3xl font-semibold">Configuración</h1>
          </div>
          <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
            <nav
              className="grid gap-4 text-sm text-muted-foreground"
            >
              <Link href="#" className="font-semibold text-primary">
                General
              </Link>
              <Link href="#">Seguridad</Link>
              <Link href="#">Notificaciones</Link>
              <Link href="#">Pantalla</Link>
              <Link href="#">Soporte</Link>
            </nav>
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Información Personal</CardTitle>
                  <CardDescription>
                    Actualice su información personal aquí.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="grid gap-4">
                    <Input placeholder="Nombre" defaultValue="Max Mustermann" />
                    <Input placeholder="Correo electrónico" type="email" defaultValue="max.mustermann@ejemplo.com" />
                  </form>
                </CardContent>
                <CardFooter className="border-t px-6 py-4">
                  <Button>Guardar</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Metas de Fitness</CardTitle>
                  <CardDescription>
                      Establezca sus metas principales de fitness.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form>
                    <Select defaultValue="weight-loss">
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccione una meta" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="weight-loss">Perder peso</SelectItem>
                        <SelectItem value="endurance">Aumentar resistencia</SelectItem>
                        <SelectItem value="health">Salud general</SelectItem>
                        <SelectItem value="muscle">Desarrollar músculos</SelectItem>
                      </SelectContent>
                    </Select>
                  </form>
                </CardContent>
                 <CardFooter className="border-t px-6 py-4">
                  <Button>Guardar metas</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Notificaciones</CardTitle>
                  <CardDescription>
                    Administre la configuración de sus notificaciones.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6">
                   <div className="flex items-center justify-between space-x-2">
                      <Label htmlFor="daily-reminders" className="flex flex-col space-y-1">
                          <span>Recordatorios diarios</span>
                          <span className="font-normal leading-snug text-muted-foreground">
                          Reciba recordatorios diarios para completar su entrenamiento.
                          </span>
                      </Label>
                      <Switch id="daily-reminders" defaultChecked />
                  </div>
                   <div className="flex items-center justify-between space-x-2">
                      <Label htmlFor="progress-updates" className="flex flex-col space-y-1">
                          <span>Actualizaciones de progreso</span>
                          <span className="font-normal leading-snug text-muted-foreground">
                          Reciba resúmenes semanales de su progreso.
                          </span>
                      </Label>
                      <Switch id="progress-updates" defaultChecked />
                  </div>
                </CardContent>
                <CardFooter className="border-t px-6 py-4">
                  <Button>Guardar</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
