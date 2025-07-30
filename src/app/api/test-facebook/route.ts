
// src/app/api/test-facebook/route.ts
import { NextResponse } from 'next/server';

export async function POST() {
  // ADVERTENCIA: Reemplaza estos valores con los tuyos.
  const PIXEL_ID = 'YOUR_PIXEL_ID'; // Reemplaza con tu ID de Píxel
  const ACCESS_TOKEN = 'YOUR_ACCESS_TOKEN'; // Reemplaza con tu token de acceso de la API

  if (PIXEL_ID === 'YOUR_PIXEL_ID' || ACCESS_TOKEN === 'YOUR_ACCESS_TOKEN') {
    return NextResponse.json(
      { error: 'Por favor, configura tu PIXEL_ID y ACCESS_TOKEN en el archivo /src/app/api/test-facebook/route.ts' },
      { status: 500 }
    );
  }

  const url = `https://graph.facebook.com/v20.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`;

  const eventData = {
    data: [
      {
        event_name: 'Purchase',
        event_time: Math.floor(Date.now() / 1000),
        user_data: {
          // Puedes añadir datos de usuario de prueba si es necesario
          // Por ejemplo: "em": [ "7b17fb0bd173f625b58636fb796407c22b3d16fc78302d79f0de008741845e46" ]
        },
        custom_data: {
          currency: 'BRL',
          value: 123.45,
        },
        action_source: 'website',
      },
    ],
    // Aquí se añade tu código de prueba específico
    test_event_code: 'TEST61860',
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(eventData),
    });

    const responseData = await response.json();

    if (!response.ok) {
      console.error('Error de la API de Facebook:', responseData);
      return NextResponse.json({ success: false, error: 'Error al enviar el evento', details: responseData }, { status: response.status });
    }

    return NextResponse.json({ success: true, data: responseData });

  } catch (error) {
    console.error('Error al hacer fetch a la API de Facebook:', error);
    return NextResponse.json({ success: false, error: 'Error interno del servidor' }, { status: 500 });
  }
}
