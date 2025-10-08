import { TrendingUp, Activity, DollarSign, Users, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { EmptyState } from './EmptyState';
import { CardLoadingState } from './LoadingState';

interface DashboardViewProps {
  isLoading: boolean;
}

export function DashboardView({ isLoading }: DashboardViewProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CardLoadingState />
        <CardLoadingState />
        <CardLoadingState />
        <CardLoadingState />
        <CardLoadingState />
        <CardLoadingState />
      </div>
    );
  }

  const metrics = [
    { label: 'Total Portfolio Value', value: '$12,450.00', change: '+12.5%', positive: true, icon: DollarSign },
    { label: 'Active Strategies', value: '8', change: '3 profitable', positive: true, icon: Activity },
    { label: 'Win Rate', value: '68.5%', change: '+5.2%', positive: true, icon: TrendingUp },
    { label: 'Active Traders', value: '1,234', change: '+18%', positive: true, icon: Users },
  ];

  const recentTrades = [
    { pair: 'BTC/USDT', type: 'BUY', amount: '0.125', price: '$42,150', profit: '+$127.50', positive: true, time: '2 min ago' },
    { pair: 'ETH/USDT', type: 'SELL', amount: '2.5', price: '$2,234', profit: '+$85.20', positive: true, time: '15 min ago' },
    { pair: 'SOL/USDT', type: 'BUY', amount: '50', price: '$98.45', profit: '-$23.10', positive: false, time: '1 hour ago' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Icon className="w-5 h-5 text-blue-600" />
                </div>
                <div className={`flex items-center gap-1 text-sm font-medium ${metric.positive ? 'text-green-600' : 'text-red-600'}`}>
                  {metric.positive ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                  {metric.change}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</h3>
              <p className="text-sm text-gray-600">{metric.label}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Trades</h3>
          <div className="space-y-3">
            {recentTrades.map((trade, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className={`px-2 py-1 rounded text-xs font-semibold ${
                    trade.type === 'BUY' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {trade.type}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{trade.pair}</p>
                    <p className="text-xs text-gray-500">{trade.amount} @ {trade.price}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-semibold ${trade.positive ? 'text-green-600' : 'text-red-600'}`}>
                    {trade.profit}
                  </p>
                  <p className="text-xs text-gray-500">{trade.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performing Strategies</h3>
          <EmptyState
            icon={TrendingUp}
            title="No strategies yet"
            description="Create your first trading strategy to start automated trading"
            actionLabel="Create Strategy"
            onAction={() => console.log('Create strategy')}
          />
        </div>
      </div>
    </div>
  );
}
