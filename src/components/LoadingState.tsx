import { Loader2 } from 'lucide-react';

interface LoadingStateProps {
  message?: string;
}

export function LoadingState({ message = 'Loading...' }: LoadingStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <Loader2 className="w-8 h-8 text-blue-600 animate-spin mb-3" />
      <p className="text-sm text-gray-600">{message}</p>
    </div>
  );
}

export function CardLoadingState() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="animate-pulse space-y-4">
        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
        <div className="h-8 bg-gray-200 rounded w-1/2"></div>
        <div className="space-y-2">
          <div className="h-3 bg-gray-200 rounded"></div>
          <div className="h-3 bg-gray-200 rounded w-5/6"></div>
        </div>
      </div>
    </div>
  );
}
