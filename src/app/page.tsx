import Dashboard from "@/components/dashboard";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold font-headline text-primary tracking-tight">StrideSculpt</h1>
        <p className="text-muted-foreground mt-2 text-lg">Your personal 30-day weight loss walking plan.</p>
      </header>
      <Dashboard />
    </main>
  );
}
