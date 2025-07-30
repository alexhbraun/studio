
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function TestFacebookPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSendEvent = async () => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch('/api/test-facebook', {
        method: 'POST',
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Ocurrió un error desconocido.');
      }

      setResult(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-muted/40 p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Prueba de la API de Conversiones de Facebook</CardTitle>
          <CardDescription>
            Haz clic en el botón para enviar un evento de prueba con el código <span className="font-mono bg-muted px-1.5 py-0.5 rounded">TEST61860</span> al servidor de Facebook.
            <br/>
            <strong className="text-destructive">Importante:</strong> Primero debes añadir tu `PIXEL_ID` y `ACCESS_TOKEN` en el archivo <code className="font-mono bg-muted px-1.5 py-0.5 rounded">/src/app/api/test-facebook/route.ts</code>.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center space-y-4">
          <Button onClick={handleSendEvent} disabled={loading} size="lg">
            {loading ? 'Enviando evento...' : 'Enviar Evento de Prueba'}
          </Button>

          {error && (
            <Alert variant="destructive" className="mt-4">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {result && (
            <Alert variant="default" className="mt-4 w-full">
              <AlertTitle>Éxito</AlertTitle>
              <AlertDescription>
                <p>El evento fue procesado. Respuesta de Facebook:</p>
                <pre className="mt-2 text-xs bg-muted p-2 rounded-md overflow-auto">
                  {JSON.stringify(result, null, 2)}
                </pre>
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
