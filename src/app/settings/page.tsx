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


export default function SettingsPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
       <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h1 className="text-3xl font-semibold">Einstellungen</h1>
        </div>
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
          <nav
            className="grid gap-4 text-sm text-muted-foreground"
          >
            <Link href="#" className="font-semibold text-primary">
              Allgemein
            </Link>
            <Link href="#">Sicherheit</Link>
            <Link href="#">Benachrichtigungen</Link>
            <Link href="#">Anzeige</Link>
            <Link href="#">Support</Link>
          </nav>
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Persönliche Informationen</CardTitle>
                <CardDescription>
                  Aktualisieren Sie Ihre persönlichen Daten hier.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="grid gap-4">
                  <Input placeholder="Name" defaultValue="Max Mustermann" />
                  <Input placeholder="E-Mail" type="email" defaultValue="max.mustermann@beispiel.com" />
                </form>
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <Button>Speichern</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Fitness-Ziele</CardTitle>
                <CardDescription>
                    Legen Sie Ihre primären Fitnessziele fest.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <Select defaultValue="weight-loss">
                    <SelectTrigger>
                      <SelectValue placeholder="Wählen Sie ein Ziel" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weight-loss">Gewicht verlieren</SelectItem>
                      <SelectItem value="endurance">Ausdauer steigern</SelectItem>
                      <SelectItem value="health">Allgemeine Gesundheit</SelectItem>
                      <SelectItem value="muscle">Muskeln aufbauen</SelectItem>
                    </SelectContent>
                  </Select>
                </form>
              </CardContent>
               <CardFooter className="border-t px-6 py-4">
                <Button>Ziele speichern</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Benachrichtigungen</CardTitle>
                <CardDescription>
                  Verwalten Sie Ihre Benachrichtigungseinstellungen.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                 <div className="flex items-center justify-between space-x-2">
                    <Label htmlFor="daily-reminders" className="flex flex-col space-y-1">
                        <span>Tägliche Erinnerungen</span>
                        <span className="font-normal leading-snug text-muted-foreground">
                        Erhalten Sie tägliche Erinnerungen, um Ihr Training abzuschließen.
                        </span>
                    </Label>
                    <Switch id="daily-reminders" defaultChecked />
                </div>
                 <div className="flex items-center justify-between space-x-2">
                    <Label htmlFor="progress-updates" className="flex flex-col space-y-1">
                        <span>Fortschritts-Updates</span>
                        <span className="font-normal leading-snug text-muted-foreground">
                        Wöchentliche Zusammenfassungen Ihres Fortschritts erhalten.
                        </span>
                    </Label>
                    <Switch id="progress-updates" defaultChecked />
                </div>
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <Button>Speichern</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
