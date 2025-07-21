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
      <p class="lead">Willkommen zu Ihrem 30-Tage-Gehprogramm! Dieser Leitfaden ist Ihr Begleiter auf dem Weg zu einem gesünderen und aktiveren Leben.</p>
      <p>Hier finden Sie alle Informationen, die Sie benötigen, um das Programm erfolgreich zu absolvieren, die Prinzipien dahinter zu verstehen und langfristige Gewohnheiten zu etablieren.</p>
      <p><i>Inhalt für dieses Kapitel wird noch hinzugefügt.</i></p>
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
