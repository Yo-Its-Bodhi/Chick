import { TokenDataProvider } from './context/TokenDataContext';
import ErrorBoundary from './components/ui/ErrorBoundary';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import KpiDashboard from './components/KpiDashboard';
import TokenStats from './components/TokenStats';
import NftGallery from './components/NftGallery';
import EggSection from './components/EggSection';
import About from './components/About';
import LiveChart from './components/LiveChart';
import Community from './components/Community';
import Footer from './components/Footer';

export default function App() {
  return (
    <TokenDataProvider>
      <div className="relative min-h-screen bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
        {/* Film-grain overlay */}
        <div
          className="pointer-events-none fixed inset-0 z-[9999] opacity-[0.03] mix-blend-overlay"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
            backgroundRepeat: 'repeat',
          }}
        />

        <Navbar />
        <main>
          <ErrorBoundary>
            <Hero />
          </ErrorBoundary>
          <ErrorBoundary>
            <KpiDashboard />
          </ErrorBoundary>
          <ErrorBoundary>
            <TokenStats />
          </ErrorBoundary>
          <ErrorBoundary>
            <NftGallery />
          </ErrorBoundary>
          <ErrorBoundary>
            <EggSection />
          </ErrorBoundary>
          <ErrorBoundary>
            <About />
          </ErrorBoundary>
          <ErrorBoundary>
            <LiveChart />
          </ErrorBoundary>
          <ErrorBoundary>
            <Community />
          </ErrorBoundary>
        </main>
        <ErrorBoundary>
          <Footer />
        </ErrorBoundary>
      </div>
    </TokenDataProvider>
  );
}
