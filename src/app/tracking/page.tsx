

import { Header } from "@/components/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ChevronUp, Heart, Sun } from "lucide-react";
import Image from "next/image";

const activities = [
    { type: 'walk', distance: '2', time: '21:15', pace: '10:37', calories: '73' },
    { type: 'run', distance: '1.85', time: '14:37', pace: '7:54', calories: '81' },
    { type: 'walk', distance: '2.91', time: '35:25', pace: '12:10', calories: '106' },
    { type: 'run', distance: '2', time: '15:23', pace: '7:41', calories: '110' },
];

const WalkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary">
        <path d="M12.5 4a2 2 0 0 0-2-2v8l-3.2-2.1a2 2 0 0 0-2.8 2.8l4.2 5.5-2.2.5a2 2 0 0 0-1.4 2.8l1.4 3.5a2 2 0 0 0 2.8 1.4l3.5-1.4a2 2 0 0 0 1.4-2.8l-.5-2.2 5.5-4.2a2 2 0 0 0-2.8-2.8L13.5 12V4Z"/>
    </svg>
);

const RunIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-orange-400">
         <path d="M14.5 4a2 2 0 0 0-2-2v8l-3.2-2.1a2 2 0 0 0-2.8 2.8l4.2 5.5-2.2.5a2 2 0 0 0-1.4 2.8l1.4 3.5a2 2 0 0 0 2.8 1.4l3.5-1.4a2 2 0 0 0 1.4-2.8l-.5-2.2 5.5-4.2a2 2 0 0 0-2.8-2.8L15.5 12V4Z"/>
         <path d="M8.5 19.5 7 18l1.5-1.5"/>
         <path d="m7 15 1.5-1.5"/>
    </svg>
);

const SumIcon = () => (
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-foreground">
        <path d="M18 4H6v12h12V4Z" />
        <path d="M12 16V8" />
        <path d="M10 10l2 2 2-2" />
        <path d="M4 20h16" />
     </svg>
)

export default function TrackingPage() {
    return (
        <>
            <Header />
            <main className="container mx-auto px-4 py-8 mt-16 bg-blue-600 rounded-lg">
                <header className="text-center mb-10 animate-fade-in-down pt-8">
                    <h1 className="text-2xl font-bold tracking-tight text-yellow-400">
                        RASTREA
                    </h1>
                    <p className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                        TU DISTANCIA
                    </p>
                </header>
                <div className="animate-fade-in-up">
                    <Card className="overflow-hidden shadow-2xl">
                        <CardContent className="p-0">
                            <Image src="/map-route.png" width={1200} height={600} alt="Ruta del mapa" data-ai-hint="map with a walking route" className="w-full" />
                        </CardContent>
                    </Card>

                    <Card className="mt-[-50px] z-10 relative mx-4">
                        <CardContent className="p-4">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[50px]"></TableHead>
                                        <TableHead>DISTANCIA</TableHead>
                                        <TableHead>TIEMPO</TableHead>
                                        <TableHead>RITMO</TableHead>
                                        <TableHead>CALORÍAS</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow className="font-bold">
                                        <TableCell><SumIcon /></TableCell>
                                        <TableCell>8 <span className="text-xs font-normal text-muted-foreground">km</span></TableCell>
                                        <TableCell>86:40 <span className="text-xs font-normal text-muted-foreground">min</span></TableCell>
                                        <TableCell>10:50 <span className="text-xs font-normal text-muted-foreground">min/km</span></TableCell>
                                        <TableCell>370 <span className="text-xs font-normal text-muted-foreground">kcal</span></TableCell>
                                    </TableRow>
                                    {activities.map((activity, index) => (
                                        <TableRow key={index}>
                                            <TableCell>
                                                {activity.type === 'walk' ? <WalkIcon /> : <RunIcon />}
                                            </TableCell>
                                            <TableCell>{activity.distance} <span className="text-xs text-muted-foreground">km</span></TableCell>
                                            <TableCell>{activity.time} <span className="text-xs text-muted-foreground">min</span></TableCell>
                                            <TableCell>{activity.pace} <span className="text-xs text-muted-foreground">min/km</span></TableCell>
                                            <TableCell>{activity.calories} <span className="text-xs text-muted-foreground">kcal</span></TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            <div className="text-center mt-4">
                                <button className="flex items-center justify-center mx-auto text-sm text-muted-foreground font-semibold">
                                    <ChevronUp className="h-4 w-4 mr-1" />
                                    MOSTRAR DETALLES
                                </button>
                            </div>
                        </CardContent>
                    </Card>

                    <div className="px-4 py-6 space-y-4">
                        <Card>
                            <CardContent className="p-4 flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <Heart className="h-5 w-5 text-red-500" />
                                    <span className="font-medium text-muted-foreground">Frecuencia cardíaca media, lpm</span>
                                </div>
                                <span className="font-bold text-lg">105</span>
                            </CardContent>
                        </Card>
                        <div className="grid grid-cols-2 gap-4">
                            <Card>
                                <CardContent className="p-4 text-center">
                                    <p className="text-sm text-blue-500 font-semibold">SENSACIÓN</p>
                                    <p className="font-bold text-lg">DESAFIANTE</p>
                                </CardContent>
                            </Card>
                             <Card>
                                <CardContent className="p-4 flex flex-col items-center justify-center">
                                    <Sun className="h-8 w-8 text-yellow-500 mb-1" />
                                    <p className="font-bold text-lg">+25°C</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
