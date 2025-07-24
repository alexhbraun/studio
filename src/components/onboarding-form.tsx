
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useProfile } from '@/hooks/use-profile';
import Image from 'next/image';

const onboardingSchema = z.object({
  name: z.string().min(1, { message: 'Por favor, ingrese su nombre.' }),
  currentWeight: z.coerce.number().min(1, { message: 'Por favor, ingrese su peso actual.' }),
  goalWeightReduction: z.coerce.number().min(1, { message: 'Por favor, seleccione un objetivo.' }),
});

type OnboardingFormValues = z.infer<typeof onboardingSchema>;

export function OnboardingForm() {
  const { setUserProfile } = useProfile();
  
  const form = useForm<OnboardingFormValues>({
    resolver: zodResolver(onboardingSchema),
    defaultValues: {
      name: '',
      currentWeight: undefined,
      goalWeightReduction: undefined,
    },
  });

  const onSubmit = (data: OnboardingFormValues) => {
    const goalWeight = data.currentWeight - data.goalWeightReduction;
    setUserProfile({
        name: data.name,
        currentWeight: data.currentWeight,
        goalWeight: goalWeight,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4">
       <Image 
        src="/logo.png"
        alt="SlimWalk Logo" 
        width={1040} 
        height={256}
        className="h-24 w-auto mb-8"
      />
      <Card className="mx-auto max-w-lg w-full">
        <CardHeader>
          <CardTitle className="text-2xl">¡Bienvenido a SlimWalk!</CardTitle>
          <CardDescription>
            Comencemos con algunos datos para personalizar tu plan.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tu nombre</FormLabel>
                    <FormControl>
                      <Input placeholder="Escribe tu nombre" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="currentWeight"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Peso actual (en kg)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Ej: 75" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="goalWeightReduction"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Objetivo de pérdida de peso</FormLabel>
                    <Select onValueChange={(value) => field.onChange(Number(value))} defaultValue={String(field.value)}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona cuántos kg quieres perder" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {Array.from({ length: 10 }, (_, i) => i + 1).map((kg) => (
                            <SelectItem key={kg} value={String(kg)}>
                                Perder {kg} kg
                            </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full bg-brand-green hover:bg-brand-green/90" size="lg" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? 'Guardando...' : 'Comenzar mi viaje'}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
