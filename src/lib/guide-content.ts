// src/lib/guide-content.ts

export interface GuideChapter {
  id: number;
  title: string;
  content: string;
}

export const guideContent: GuideChapter[] = [
  {
    id: 1,
    title: "Einleitung",
    content: `
      <p class="lead">Herzlich willkommen zu <strong>StrideSculpt</strong>, Ihrem persönlichen 30-Tage-Gehprogramm! Sie stehen am Anfang einer aufregenden Reise, die nicht nur Ihren Körper, sondern auch Ihre Denkweise über Fitness und Wohlbefinden verändern wird. Dieser Leitfaden ist Ihr treuer Begleiter, vollgepackt mit Wissen, Motivation und praktischen Tipps, um jeden Schritt zu einem Erfolg zu machen.</p>
      
      <div class="my-6 rounded-lg overflow-hidden shadow-lg">
        <img src="https://placehold.co/800x400.png" alt="Eine inspirierende Landschaftsansicht mit einem Weg, der in die Ferne führt und den Beginn einer Reise symbolisiert. Das Licht ist warm und einladend." class="w-full" data-ai-hint="path landscape" />
      </div>

      <h3>Was Sie von diesem Programm erwarten können</h3>
      <p>In den nächsten 30 Tagen werden Sie entdecken, dass Gehen weit mehr ist als nur eine Fortbewegungsart. Es ist ein kraftvolles Werkzeug zur Transformation. Wir haben dieses Programm sorgfältig entwickelt, um Sie schrittweise zu führen – von sanften Anfängen bis hin zu herausfordernden Einheiten, die Ihre Ausdauer steigern und die Fettverbrennung ankurbeln. Es geht nicht um Perfektion, sondern um Beständigkeit. Es geht darum, auf Ihren Körper zu hören, Fortschritte zu feiern und eine nachhaltige, gesunde Gewohnheit zu etablieren, die Ihnen auch lange nach den 30 Tagen erhalten bleibt.</p>

      <h3>Für wen ist dieses Programm?</h3>
      <p>Dieses Programm ist für jeden gemacht! Egal, ob Sie nach einer langen Pause wieder in die Bewegung einsteigen, Ihr aktuelles Fitnesslevel verbessern oder eine gelenkschonende Alternative zu intensivem Training suchen. Unsere Mission ist es, Ihnen zu zeigen, wie Sie mit der einfachsten und natürlichsten Form der Bewegung erstaunliche Ergebnisse erzielen können.</p>
      
      <h3>So nutzen Sie diesen Leitfaden</h3>
      <p>Dieser Leitfaden ist in übersichtliche Kapitel unterteilt. Sie können ihn von Anfang bis Ende lesen oder gezielt die Themen nachschlagen, die Sie gerade am meisten interessieren. Wir empfehlen, sich zu Beginn mit den Kapiteln über die richtige Technik und Ernährung vertraut zu machen, um eine solide Grundlage zu schaffen. Kehren Sie jederzeit hierher zurück, wenn Sie eine Frage haben oder einen Motivationsschub benötigen.</p>

      <div class="my-6 rounded-lg overflow-hidden shadow-lg">
          <img src="https://placehold.co/800x400.png" alt="Eine Person, die glücklich und energiegeladen auf einem malerischen Weg geht, was die Freude und die positiven Ergebnisse des Programms darstellt." class="w-full" data-ai-hint="happy walking" />
      </div>

      <p>Sind Sie bereit, den ersten Schritt zu tun? Wir sind begeistert, Sie auf diesem Weg zu begleiten. Lassen Sie uns gemeinsam loslegen und eine gesündere, fittere und glücklichere Version Ihrer selbst formen – Schritt für Schritt.</p>
    `,
  },
  {
    id: 2,
    title: "Die Kraft des Gehens",
    content: `
      <h3>Warum Gehen so effektiv ist</h3>
      <p>Gehen ist eine der natürlichsten und zugänglichsten Formen der Bewegung. Es ist gelenkschonend, erfordert keine spezielle Ausrüstung und kann fast überall praktiziert werden.</p>
      <ul>
        <li>Verbesserung der Herz-Kreislauf-Gesundheit</li>
        <li>Unterstützung beim Gewichtsmanagement</li>
        <li>Stärkung von Knochen und Muskeln</li>
        <li>Reduzierung von Stress und Verbesserung der Stimmung</li>
      </ul>
      <p><i>Detaillierte Erklärungen und wissenschaftliche Hintergründe werden noch hinzugefügt.</i></p>
    `,
  },
  {
    id: 3,
    title: "Grundlagen der Ernährung",
    content: `
      <h3>Ernährung als Erfolgsfaktor</h3>
      <p>Bewegung ist nur die halbe Miete. Eine ausgewogene Ernährung ist entscheidend, um Ihre Ziele zu erreichen und Ihren Körper optimal zu versorgen.</p>
      <h4>Makro- und Mikronährstoffe</h4>
      <p>Ein kurzer Überblick über Proteine, Kohlenhydrate, Fette, Vitamine und Mineralstoffe und ihre Rolle für Ihren Körper.</p>
      <h4>Hydration</h4>
      <p>Warum ausreichend Wasser zu trinken für Energie, Stoffwechsel und allgemeines Wohlbefinden unerlässlich ist.</p>
      <p><i>Praktische Tipps, einfache Rezepte und Mahlzeitenpläne werden noch hinzugefügt.</i></p>
    `,
  },
  {
    id: 4,
    title: "Die richtige Technik",
    content: `
      <h3>Effizient und verletzungsfrei gehen</h3>
      <p>Die richtige Haltung und Technik können den Unterschied ausmachen, wie effektiv Ihr Training ist und wie Sie sich dabei fühlen.</p>
      <ul>
        <li><strong>Haltung:</strong> Aufrecht gehen, Schultern zurück, Blick nach vorne.</li>
        <li><strong>Armbewegung:</strong> Arme im 90-Grad-Winkel beugen und locker mitschwingen.</li>
        <li><strong>Fußarbeit:</strong> Mit der Ferse aufsetzen und über den ganzen Fuß abrollen.</li>
      </ul>
      <p><i>Visuelle Anleitungen und häufige Fehlerkorrekturen werden noch hinzugefügt.</i></p>
    `,
  },
  {
    id: 5,
    title: "Motivation und Dranbleiben",
    content: `
      <h3>Langfristige Gewohnheiten schaffen</h3>
      <p>Motivation ist das, was Sie anfangen lässt. Gewohnheit ist das, was Sie weitermachen lässt.</p>
      <p>Tipps, um motiviert zu bleiben:</p>
      <ul>
        <li>Setzen Sie sich realistische Zwischenziele.</li>
        <li>Verfolgen Sie Ihren Fortschritt.</li>
        <li>Finden Sie einen Trainingspartner.</li>
        <li>Belohnen Sie sich für erreichte Meilensteine.</li>
      </ul>
      <p><i>Strategien zur Überwindung von Demotivation und zum Umgang mit Rückschlägen werden noch hinzugefügt.</i></p>
    `,
  },
  {
    id: 6,
    title: "Ruhe und Regeneration",
    content: `
        <h3>Warum Pausen so wichtig sind</h3>
        <p>Ihr Körper wird nicht während des Trainings stärker, sondern in den Ruhephasen danach. Regeneration ist ein aktiver Prozess und entscheidend für Ihren Fortschritt.</p>
        <h4>Die Rolle des Schlafs</h4>
        <p>Guter Schlaf ist die Grundlage für die Reparatur von Muskelgewebe, die hormonelle Regulation und die geistige Erholung.</p>
        <h4>Aktive Erholung</h4>
        <p>Leichte Aktivitäten wie Dehnen oder sanftes Yoga an Ruhetagen können die Regeneration fördern.</p>
        <p><i>Anleitungen für Dehnübungen und Entspannungstechniken werden noch hinzugefügt.</i></p>
    `
  }
];
