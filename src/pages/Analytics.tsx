import { BarChart3, TrendingUp, DollarSign, Calendar, Zap } from 'lucide-react';

export default function Analytics() {
  const modelComparison = [
    { 
      name: 'Final (PyCaret LR)', 
      accuracy: 80.3, 
      rocAuc: 84.5, 
      precision: 78.2, 
      recall: 72.5,
      color: '#E50914'
    },
    { 
      name: 'Benchmark (H2O)', 
      accuracy: 80.0, 
      rocAuc: 85.1, 
      precision: 79.1, 
      recall: 71.8,
      color: '#F59E0B'
    },
    { 
      name: 'Test (Ensemble)', 
      accuracy: 80.2, 
      rocAuc: 83.5, 
      precision: 77.8, 
      recall: 73.2,
      color: '#10B981'
    },
  ];

  const featureImportance = [
    { feature: 'Contract Type', importance: 92 },
    { feature: 'Monthly Charges', importance: 78 },
    { feature: 'Tenure', importance: 71 },
    { feature: 'Tech Support', importance: 65 },
    { feature: 'Payment Method', importance: 58 },
    { feature: 'Internet Service', importance: 52 },
  ];

  const tenureData = [
    { range: '0-12', churnRate: 55 },
    { range: '13-24', churnRate: 42 },
    { range: '25-36', churnRate: 28 },
    { range: '37-48', churnRate: 18 },
    { range: '49-60', churnRate: 12 },
    { range: '60+', churnRate: 8 },
  ];

  const chargesData = [
    { range: '$0-30', churnRate: 15 },
    { range: '$31-50', churnRate: 28 },
    { range: '$51-70', churnRate: 45 },
    { range: '$71-90', churnRate: 62 },
    { range: '$91+', churnRate: 75 },
  ];

  const contractComparison = [
    { type: 'Month-to-month', customers: 3875, churnRate: 65 },
    { type: 'One year', customers: 1473, churnRate: 35 },
    { type: 'Two year', customers: 1695, churnRate: 15 },
  ];

  return (
    <div className="min-h-screen bg-[#141414] text-white p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Analytics</h1>
          <p className="text-[#B3B3B3]">Deep dive into churn patterns and feature analysis</p>
        </div>

        <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10 shadow-2xl">
          <div className="flex items-center gap-2 mb-6">
            <Zap className="text-[#E50914] w-5 h-5" />
            <h2 className="text-xl font-bold">Model Performance Comparison</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-6">
              {modelComparison.map((model, idx) => (
                <div key={idx} className="p-4 backdrop-blur-xl bg-white/5 rounded-xl border border-white/10">
                  <div className="font-semibold mb-3" style={{ color: model.color }}>{model.name}</div>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-[#B3B3B3]">Accuracy</span>
                        <span className="font-semibold">{model.accuracy}%</span>
                      </div>
                      <div className="w-full bg-black/40 rounded-full h-2">
                        <div
                          className="h-2 rounded-full transition-all duration-500"
                          style={{ width: `${model.accuracy}%`, backgroundColor: model.color }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-[#B3B3B3]">ROC-AUC</span>
                        <span className="font-semibold">{model.rocAuc}%</span>
                      </div>
                      <div className="w-full bg-black/40 rounded-full h-2">
                        <div
                          className="h-2 rounded-full transition-all duration-500"
                          style={{ width: `${model.rocAuc}%`, backgroundColor: model.color }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <div className="p-4 backdrop-blur-xl bg-white/5 rounded-xl border border-white/10">
                <h4 className="font-semibold mb-4">Precision Comparison</h4>
                <div className="space-y-3">
                  {modelComparison.map((model, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-24 text-sm text-[#B3B3B3] truncate">{model.name.split(' ')[0]}</div>
                      <div className="flex-1">
                        <div className="w-full bg-black/40 rounded-full h-6">
                          <div
                            className="h-6 rounded-full flex items-center justify-end pr-2 transition-all duration-500"
                            style={{ width: `${model.precision}%`, backgroundColor: model.color }}
                          >
                            <span className="text-xs font-semibold">{model.precision}%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 backdrop-blur-xl bg-white/5 rounded-xl border border-white/10">
                <h4 className="font-semibold mb-4">Recall Comparison</h4>
                <div className="space-y-3">
                  {modelComparison.map((model, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-24 text-sm text-[#B3B3B3] truncate">{model.name.split(' ')[0]}</div>
                      <div className="flex-1">
                        <div className="w-full bg-black/40 rounded-full h-6">
                          <div
                            className="h-6 rounded-full flex items-center justify-end pr-2 transition-all duration-500"
                            style={{ width: `${model.recall}%`, backgroundColor: model.color }}
                          >
                            <span className="text-xs font-semibold">{model.recall}%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10 shadow-2xl">
            <div className="flex items-center gap-2 mb-6">
              <BarChart3 className="text-[#E50914] w-5 h-5" />
              <h2 className="text-xl font-bold">Feature Importance</h2>
            </div>
            <div className="space-y-4">
              {featureImportance.map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-[#B3B3B3]">{item.feature}</span>
                    <span className="font-semibold">{item.importance}%</span>
                  </div>
                  <div className="w-full bg-black/40 rounded-full h-2">
                    <div
                      className="bg-[#E50914] h-2 rounded-full transition-all duration-500"
                      style={{ width: `${item.importance}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10 shadow-2xl">
            <div className="flex items-center gap-2 mb-6">
              <Calendar className="text-[#E50914] w-5 h-5" />
              <h2 className="text-xl font-bold">Tenure vs Churn Rate</h2>
            </div>
            <div className="space-y-3">
              {tenureData.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-20 text-sm text-[#B3B3B3]">{item.range} mo</div>
                  <div className="flex-1">
                    <div className="w-full bg-black/40 rounded-full h-8 relative">
                      <div
                        className="h-8 rounded-full flex items-center justify-end pr-3 transition-all duration-500"
                        style={{ 
                          width: `${item.churnRate}%`,
                          backgroundColor: item.churnRate > 40 ? '#E50914' : item.churnRate > 25 ? '#F59E0B' : '#10B981'
                        }}
                      >
                        <span className="text-xs font-semibold">{item.churnRate}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10 shadow-2xl">
            <div className="flex items-center gap-2 mb-6">
              <DollarSign className="text-[#E50914] w-5 h-5" />
              <h2 className="text-xl font-bold">Monthly Charges vs Churn</h2>
            </div>
            <div className="space-y-3">
              {chargesData.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-20 text-sm text-[#B3B3B3]">{item.range}</div>
                  <div className="flex-1">
                    <div className="w-full bg-black/40 rounded-full h-8 relative">
                      <div
                        className="h-8 rounded-full flex items-center justify-end pr-3 transition-all duration-500"
                        style={{ 
                          width: `${item.churnRate}%`,
                          backgroundColor: item.churnRate > 60 ? '#E50914' : item.churnRate > 40 ? '#F59E0B' : '#10B981'
                        }}
                      >
                        <span className="text-xs font-semibold">{item.churnRate}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10 shadow-2xl">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="text-[#E50914] w-5 h-5" />
              <h2 className="text-xl font-bold">Contract Churn Comparison</h2>
            </div>
            <div className="space-y-6">
              {contractComparison.map((item, idx) => (
                <div key={idx} className="border-b border-white/10 pb-4 last:border-b-0">
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <div className="font-semibold">{item.type}</div>
                      <div className="text-sm text-[#B3B3B3]">{item.customers.toLocaleString()} customers</div>
                    </div>
                    <div className="text-2xl font-bold text-[#E50914]">{item.churnRate}%</div>
                  </div>
                  <div className="w-full bg-black/40 rounded-full h-2">
                    <div
                      className="bg-[#E50914] h-2 rounded-full transition-all duration-500"
                      style={{ width: `${item.churnRate}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10 shadow-2xl">
          <h2 className="text-xl font-bold mb-6">Key Findings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-[#E50914]">65%</div>
              <div className="text-sm text-[#B3B3B3]">Month-to-month contracts have the highest churn rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-orange-400">55%</div>
              <div className="text-sm text-[#B3B3B3]">Customers with tenure under 12 months are at risk</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-400">75%</div>
              <div className="text-sm text-[#B3B3B3]">High monthly charges ($91+) strongly correlate with churn</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
