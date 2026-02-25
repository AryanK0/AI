import { BarChart3, TrendingUp, DollarSign, Calendar } from 'lucide-react';

export default function Analytics() {
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-[#1f1f1f] rounded-lg p-6 border border-[#2a2a2a]">
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
                  <div className="w-full bg-[#2a2a2a] rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-[#E50914] to-orange-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${item.importance}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#1f1f1f] rounded-lg p-6 border border-[#2a2a2a]">
            <div className="flex items-center gap-2 mb-6">
              <Calendar className="text-[#E50914] w-5 h-5" />
              <h2 className="text-xl font-bold">Tenure vs Churn Rate</h2>
            </div>
            <div className="space-y-3">
              {tenureData.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-20 text-sm text-[#B3B3B3]">{item.range} mo</div>
                  <div className="flex-1">
                    <div className="w-full bg-[#2a2a2a] rounded-full h-8 relative">
                      <div
                        className="bg-gradient-to-r from-green-500 via-orange-500 to-[#E50914] h-8 rounded-full flex items-center justify-end pr-3 transition-all duration-500"
                        style={{ width: `${item.churnRate}%` }}
                      >
                        <span className="text-xs font-semibold">{item.churnRate}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#1f1f1f] rounded-lg p-6 border border-[#2a2a2a]">
            <div className="flex items-center gap-2 mb-6">
              <DollarSign className="text-[#E50914] w-5 h-5" />
              <h2 className="text-xl font-bold">Monthly Charges vs Churn</h2>
            </div>
            <div className="space-y-3">
              {chargesData.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-20 text-sm text-[#B3B3B3]">{item.range}</div>
                  <div className="flex-1">
                    <div className="w-full bg-[#2a2a2a] rounded-full h-8 relative">
                      <div
                        className="bg-gradient-to-r from-green-500 via-orange-500 to-[#E50914] h-8 rounded-full flex items-center justify-end pr-3 transition-all duration-500"
                        style={{ width: `${item.churnRate}%` }}
                      >
                        <span className="text-xs font-semibold">{item.churnRate}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#1f1f1f] rounded-lg p-6 border border-[#2a2a2a]">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="text-[#E50914] w-5 h-5" />
              <h2 className="text-xl font-bold">Contract Churn Comparison</h2>
            </div>
            <div className="space-y-6">
              {contractComparison.map((item, idx) => (
                <div key={idx} className="border-b border-[#2a2a2a] pb-4 last:border-b-0">
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <div className="font-semibold">{item.type}</div>
                      <div className="text-sm text-[#B3B3B3]">{item.customers.toLocaleString()} customers</div>
                    </div>
                    <div className="text-2xl font-bold text-[#E50914]">{item.churnRate}%</div>
                  </div>
                  <div className="w-full bg-[#2a2a2a] rounded-full h-2">
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

        <div className="bg-[#1f1f1f] rounded-lg p-6 border border-[#2a2a2a]">
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
