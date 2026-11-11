import { CloudSun } from 'lucide-react';

function App() {
  return (
    <main className="setup-shell">
      <section className="setup-card" aria-label="Weatherly setup check">
        <CloudSun className="setup-icon" size={48} aria-hidden="true" />
        <h1>Weatherly</h1>
        <p className="setup-tagline">Your weather, beautifully presented.</p>
        <p className="setup-status">
          Phase 1 complete: Vite, React, CSS, and Lucide icons are ready.
        </p>
      </section>
    </main>
  );
}

export default App;
