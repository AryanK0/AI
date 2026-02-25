import { useEffect, useState } from 'react';
import { Users, TrendingDown, AlertTriangle, DollarSign, BarChart3, PieChart } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface DashboardStats {
  totalCustomers: number;
  churnRate: number;
  highRiskCount: number;
  retentionOpportunity: number;
}

export default function Dashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalCustomers: 0,
    churnRate: 0,
    highRiskCount: 0,
    retentionOpportunity: 0,
  });

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    const { data: predictions } = await supabase
      .from('predictions')
      .select('*');

    if (predictions && predictions.length > 0) {
      const total = predictions.length;
      const highRisk = predictions.filter((p) => p.risk_level === 'High').length;
      const avgChurn = predictions.reduce((sum, p) => sum + parseFloat(p.churn_probability), 0) / total;

      setStats({
        totalCustomers: total,
        churnRate: Math.round(avgChurn * 100),
        highRiskCount: highRisk,
        retentionOpportunity: Math.round((highRisk / total) * 100),
      });
    }
  };

  const statCards = [
    {
      title: 'Total Customers',
      value: stats.totalCustomers.toLocaleString(),
      icon: Users,
      color: 'text-blue-400',
    },
    {
      title: 'Predicted Churn Rate',
      value: `${stats.churnRate}%`,
      icon: TrendingDown,
      color: 'text-[#E50914]',
    },
    {
      title: 'High Risk Customers',
      value: stats.highRiskCount.toLocaleString(),
      icon: AlertTriangle,
      color: 'text-orange-400',
    },
    {
      title: 'Retention Opportunity',
      value: `${stats.retentionOpportunity}%`,
      icon: DollarSign,
      color: 'text-green-400',
    },
  ];

  return (
    <div className="min-h-screen bg-[#141414] text-white p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-[#B3B3B3]">Monitor customer churn metrics and insights</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statCards.map((card, index) => (
            <div
              key={index}
              className="bg-[#1f1f1f] rounded-lg p-6 border border-[#2a2a2a] hover:shadow-lg hover:shadow-[#E50914]/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <card.icon className={`${card.color} w-8 h-8`} />
              </div>
              <div className="text-3xl font-bold mb-1">{card.value}</div>
              <div className="text-sm text-[#B3B3B3]">{card.title}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-[#1f1f1f] rounded-lg p-6 border border-[#2a2a2a]">
            <div className="flex items-center gap-2 mb-6">
              <PieChart className="text-[#E50914] w-5 h-5" />
              <h2 className="text-xl font-bold">Churn Risk Distribution</h2>
            </div>
            <div className="flex items-center justify-center h-64">
              <div className="space-y-4 w-full">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-green-500 rounded"></div>
                    <span className="text-[#B3B3B3]">Low Risk</span>
                  </div>
                  <span className="font-semibold">35%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-orange-500 rounded"></div>
                    <span className="text-[#B3B3B3]">Medium Risk</span>
                  </div>
                  <span className="font-semibold">40%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-[#E50914] rounded"></div>
                    <span className="text-[#B3B3B3]">High Risk</span>
                  </div>
                  <span className="font-semibold">25%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#1f1f1f] rounded-lg p-6 border border-[#2a2a2a]">
            <div className="flex items-center gap-2 mb-6">
              <BarChart3 className="text-[#E50914] w-5 h-5" />
              <h2 className="text-xl font-bold">Contract Type vs Churn</h2>
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-[#B3B3B3]">Month-to-month</span>
                  <span className="font-semibold">65%</span>
                </div>
                <div className="w-full bg-[#2a2a2a] rounded-full h-3">
                  <div className="bg-[#E50914] h-3 rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-[#B3B3B3]">One year</span>
                  <span className="font-semibold">35%</span>
                </div>
                <div className="w-full bg-[#2a2a2a] rounded-full h-3">
                  <div className="bg-orange-500 h-3 rounded-full" style={{ width: '35%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-[#B3B3B3]">Two year</span>
                  <span className="font-semibold">15%</span>
                </div>
                <div className="w-full bg-[#2a2a2a] rounded-full h-3">
                  <div className="bg-green-500 h-3 rounded-full" style={{ width: '15%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#1f1f1f] rounded-lg p-6 border border-[#2a2a2a]">
          <h2 className="text-xl font-bold mb-6">AI Insights</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#E50914] rounded-full mt-2"></div>
              <p className="text-[#B3B3B3]">
                Month-to-month contracts show highest churn rate at 65%, suggesting need for loyalty incentives
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#E50914] rounded-full mt-2"></div>
              <p className="text-[#B3B3B3]">
                Customers with high monthly charges are more likely to churn - consider value-based pricing
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#E50914] rounded-full mt-2"></div>
              <p className="text-[#B3B3B3]">
                Lack of tech support increases churn probability by 40% - proactive support recommended
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#E50914] rounded-full mt-2"></div>
              <p className="text-[#B3B3B3]">
                Electronic check payment method correlates with higher churn - promote auto-pay discounts
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
