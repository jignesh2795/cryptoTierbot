import { Plus, TrendingUp, Activity, Pause } from 'lucide-react';
import { EmptyState } from './EmptyState';

export function StrategiesView() {
  const strategies = [
    { name: 'BTC Scalping Bot', status: 'active', profit: '+$1,245.50', trades: 156, winRate: '72%' },
    { name: 'ETH Swing Trader', status: 'active', profit: '+$892.30', trades: 45, winRate: '68%' },
    { name: 'Altcoin Momentum', status: 'paused', profit: '+$234.10', trades: 23, winRate: '61%' },
  ];

  if (strategies.length === 0) {
    return (
      <div className="bg-white rounded-xl border border-gray-200">
        <EmptyState
          icon={TrendingUp}
          title="No strategies configured"
          description="Start by creating your first automated trading strategy"
          actionLabel="Create Strategy"
          onAction={() => console.log('Create strategy')}
        />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Trading Strategies</h2>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2">
          <Plus className="w-4 h-4" />
          New Strategy
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {strategies.map((strategy, index) => (
          <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                <Activity className="w-5 h-5 text-blue-600" />
              </div>
              <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                strategy.status === 'active'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-gray-100 text-gray-700'
              }`}>
                {strategy.status === 'active' ? 'Active' : 'Paused'}
              </div>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-4">{strategy.name}</h3>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Total Profit</span>
                <span className="font-semibold text-green-600">{strategy.profit}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Trades</span>
                <span className="font-semibold text-gray-900">{strategy.trades}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Win Rate</span>
                <span className="font-semibold text-gray-900">{strategy.winRate}</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200 flex gap-2">
              <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
                <Pause className="w-4 h-4" />
                {strategy.status === 'active' ? 'Pause' : 'Resume'}
              </button>
              <button className="flex-1 bg-blue-50 hover:bg-blue-100 text-blue-600 px-3 py-2 rounded-lg text-sm font-medium transition-colors">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
