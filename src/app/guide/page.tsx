'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Header } from '@/components/header';
import { guideContent, type GuideChapter } from '@/lib/guide-content';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';
import { useProfile } from '@/hooks/use-profile';
import { OnboardingForm } from '@/components/onboarding-form';

export default function GuidePage() {
  const [activeChapter, setActiveChapter] = useState<GuideChapter>(guideContent[0]);
  const { userProfile, loading } = useProfile();
  
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Cargando...</p>
      </div>
    );
  }

  if (!userProfile) {
    return <OnboardingForm />;
  }
  
  const userName = userProfile.name || 'Usuario';
  
  const renderContent = (content: any) => {
    if (typeof content === 'string') {
      return <div dangerouslySetInnerHTML={{ __html: content }} />;
    }
  
    return (
      <div>
        {content.map((item: any, index: number) => {
          if (item.type === 'image') {
            return (
              <div key={index} className="my-6 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={800}
                  height={400}
                  className="w-full"
                  data-ai-hint={item.aiHint}
                />
              </div>
            );
          }
          if (item.type === 'html') {
            return <div key={index} dangerouslySetInnerHTML={{ __html: item.content }} />;
          }
          return null;
        })}
      </div>
    );
  };

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8 mt-32">
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight text-primary">
            Manual del Programa para {userName}
          </h1>
          <p className="text-muted-foreground mt-2 text-lg">
            Tu guía completa para el máximo éxito y comprensión.
          </p>
        </header>

        <div className="grid md:grid-cols-[250px_1fr] gap-8">
          <aside className="h-full">
            <nav className="sticky top-24">
              <h2 className="text-lg font-semibold mb-3 text-accent">Índice</h2>
              <ul>
                {guideContent.map((chapter) => (
                  <li key={chapter.id}>
                    <button
                      onClick={() => setActiveChapter(chapter)}
                      className={cn(
                        'w-full text-left px-3 py-2 rounded-md text-sm transition-colors flex items-center justify-between',
                        activeChapter.id === chapter.id
                          ? 'bg-primary text-primary-foreground font-semibold'
                          : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                      )}
                    >
                      {chapter.title}
                      <ChevronRight className={cn('h-4 w-4 transition-transform', activeChapter.id === chapter.id && 'transform rotate-90')} />
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
          
          <main className="bg-card/60 backdrop-blur-sm border-border/60 shadow-lg rounded-lg p-6 md:p-8">
            <article className="prose prose-lg dark:prose-invert max-w-none">
                <h2 className="text-3xl font-bold font-headline text-primary border-b-2 border-primary/50 pb-2 mb-4">{activeChapter.title}</h2>
                {renderContent(activeChapter.content)}
            </article>
          </main>
        </div>
      </div>
    </>
  );
}
