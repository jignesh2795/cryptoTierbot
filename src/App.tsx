import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Sidebar } from './components/Sidebar';
import { DashboardView } from './components/DashboardView';
import { StrategiesView } from './components/StrategiesView';
import { HistoryView } from './components/HistoryView';
import { LearnView } from './components/LearnView';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isDemoMode, setIsDemoMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 800);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardView isLoading={isLoading} />;
      case 'strategies':
        return <StrategiesView />;
      case 'history':
        return <HistoryView />;
      case 'learn':
        return <LearnView />;
      default:
        return <DashboardView isLoading={isLoading} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      <Sidebar isDemoMode={isDemoMode} onToggleMode={() => setIsDemoMode(!isDemoMode)} />

      <main className="pt-16 pb-20 md:pb-6 lg:pl-72">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}

export default App;
