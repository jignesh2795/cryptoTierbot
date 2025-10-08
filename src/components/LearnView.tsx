import { BookOpen, Video, FileText, Award } from 'lucide-react';

export function LearnView() {
  const resources = [
    {
      title: 'Getting Started Guide',
      description: 'Learn the basics of crypto trading and how to use CryptoTierBot',
      icon: BookOpen,
      type: 'Article',
      duration: '10 min read'
    },
    {
      title: 'Strategy Building 101',
      description: 'Create your first automated trading strategy step by step',
      icon: Video,
      type: 'Video',
      duration: '15 min'
    },
    {
      title: 'Risk Management',
      description: 'Essential principles for protecting your trading capital',
      icon: FileText,
      type: 'Guide',
      duration: '8 min read'
    },
    {
      title: 'Advanced Techniques',
      description: 'Master advanced trading strategies and optimization',
      icon: Award,
      type: 'Course',
      duration: '2 hours'
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Learning Center</h2>
        <p className="text-gray-600">Enhance your trading skills with our comprehensive resources</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resources.map((resource, index) => {
          const Icon = resource.icon;
          return (
            <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded">
                      {resource.type}
                    </span>
                    <span className="text-xs text-gray-500">{resource.duration}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
                  <p className="text-sm text-gray-600">{resource.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
