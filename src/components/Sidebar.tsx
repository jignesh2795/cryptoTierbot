import { User, Settings, Power, TrendingUp, TrendingDown, DollarSign } from 'lucide-react';

interface SidebarProps {
  isDemoMode: boolean;
  onToggleMode: () => void;
}

export function Sidebar({ isDemoMode, onToggleMode }: SidebarProps) {
  const stats = [
    { label: 'Total Balance', value: '$12,450.00', icon: DollarSign, change: '+12.5%', positive: true },
    { label: 'Today P/L', value: '+$287.50', icon: TrendingUp, change: '+2.3%', positive: true },
    { label: 'Open Positions', value: '5', icon: TrendingDown, change: '3 active', positive: true },
  ];

  return (
    <aside className="hidden lg:block w-72 bg-white border-r border-gray-200 fixed left-0 top-16 bottom-0 overflow-y-auto">
      <div className="p-6 space-y-6">
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-4 text-white">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <User className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold">John Trader</h3>
              <p className="text-sm text-blue-100">Premium Member</p>
            </div>
          </div>
          <button className="w-full bg-white/20 hover:bg-white/30 rounded-lg px-3 py-2 text-sm font-medium transition-colors flex items-center justify-center gap-2">
            <Settings className="w-4 h-4" />
            Account Settings
          </button>
        </div>

        <div className="bg-gray-50 rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">Trading Mode</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-semibold ${isDemoMode ? 'text-orange-600' : 'text-green-600'}`}>
                {isDemoMode ? 'DEMO' : 'LIVE'}
              </span>
              <Power className={`w-4 h-4 ${isDemoMode ? 'text-orange-600' : 'text-green-600'}`} />
            </div>
          </div>
          <button
            onClick={onToggleMode}
            className={`w-full rounded-lg px-4 py-2.5 font-medium transition-colors ${
              isDemoMode
                ? 'bg-orange-100 text-orange-700 hover:bg-orange-200'
                : 'bg-green-100 text-green-700 hover:bg-green-200'
            }`}
          >
            {isDemoMode ? 'Switch to Live Trading' : 'Switch to Demo Mode'}
          </button>
          <p className="text-xs text-gray-500 mt-2">
            {isDemoMode
              ? 'Practice trading with virtual funds'
              : 'Trading with real money - be careful!'}
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-gray-900">Quick Stats</h4>
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-gray-50 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-1">
                  <Icon className={`w-4 h-4 ${stat.positive ? 'text-green-600' : 'text-red-600'}`} />
                  <span className="text-xs text-gray-600">{stat.label}</span>
                </div>
                <div className="flex items-end justify-between">
                  <span className="text-lg font-bold text-gray-900">{stat.value}</span>
                  <span className={`text-xs font-medium ${stat.positive ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
