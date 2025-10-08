import { History } from 'lucide-react';
import { EmptyState } from './EmptyState';

export function HistoryView() {
  return (
    <div className="bg-white rounded-xl border border-gray-200">
      <EmptyState
        icon={History}
        title="No trading history"
        description="Your completed trades and transaction history will appear here"
      />
    </div>
  );
}
