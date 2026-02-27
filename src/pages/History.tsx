import { useEffect, useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Prediction {
  id: string;
  created_at: string;
  contract_type: string;
  monthly_charges: number;
  churn_probability: number;
  risk_level: string;
  tenure: number;
}

export default function History() {
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [filteredPredictions, setFilteredPredictions] = useState<Prediction[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [riskFilter, setRiskFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    loadPredictions();
  }, []);

  useEffect(() => {
    filterPredictions();
  }, [predictions, searchTerm, riskFilter]);

  const loadPredictions = async () => {
    try {
      const { data, error } = await supabase
        .from('predictions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error loading predictions:', error);
        setPredictions([]);
      } else if (data) {
        setPredictions(data);
      }
    } catch (err) {
      console.error('Failed to load predictions:', err);
      setPredictions([]);
    }
  };

  const filterPredictions = () => {
    let filtered = predictions;

    if (riskFilter !== 'All') {
      filtered = filtered.filter((p) => p.risk_level === riskFilter);
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (p) =>
          p.contract_type.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.risk_level.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredPredictions(filtered);
    setCurrentPage(1);
  };

  const getRiskBadge = (level: string) => {
    const styles = {
      High: 'bg-[#E50914]/20 text-[#E50914] border-[#E50914]',
      Medium: 'bg-orange-400/20 text-orange-400 border-orange-400',
      Low: 'bg-green-400/20 text-green-400 border-green-400',
    };
    return styles[level as keyof typeof styles] || styles.Low;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const totalPages = Math.ceil(filteredPredictions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPredictions = filteredPredictions.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen bg-[#141414] text-white p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Prediction History</h1>
          <p className="text-[#B3B3B3]">View and analyze past churn predictions</p>
        </div>

        <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10 shadow-2xl">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#B3B3B3] w-5 h-5" />
              <input
                type="text"
                placeholder="Search by contract type or risk level..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full backdrop-blur-xl bg-black/30 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#E50914]/50"
              />
            </div>

            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#B3B3B3] w-5 h-5" />
              <select
                value={riskFilter}
                onChange={(e) => setRiskFilter(e.target.value)}
                className="w-full md:w-48 backdrop-blur-xl bg-black/30 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#E50914]/50"
              >
                <option>All</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-sm font-semibold text-[#B3B3B3]">Date</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-[#B3B3B3]">Contract Type</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-[#B3B3B3]">Tenure</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-[#B3B3B3]">Monthly Charges</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-[#B3B3B3]">Probability</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-[#B3B3B3]">Risk Level</th>
                </tr>
              </thead>
              <tbody>
                {currentPredictions.length > 0 ? (
                  currentPredictions.map((prediction) => (
                    <tr key={prediction.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="py-4 px-4 text-sm">{formatDate(prediction.created_at)}</td>
                      <td className="py-4 px-4 text-sm">{prediction.contract_type}</td>
                      <td className="py-4 px-4 text-sm">{prediction.tenure} months</td>
                      <td className="py-4 px-4 text-sm">${prediction.monthly_charges}</td>
                      <td className="py-4 px-4 text-sm font-semibold">
                        {Math.round(parseFloat(prediction.churn_probability.toString()) * 100)}%
                      </td>
                      <td className="py-4 px-4">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${getRiskBadge(
                            prediction.risk_level
                          )}`}
                        >
                          {prediction.risk_level}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="py-12 text-center text-[#B3B3B3]">
                      No predictions found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {totalPages > 1 && (
            <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/10">
              <div className="text-sm text-[#B3B3B3]">
                Showing {startIndex + 1} to {Math.min(endIndex, filteredPredictions.length)} of{' '}
                {filteredPredictions.length} results
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 backdrop-blur-xl bg-white/5 rounded-lg text-sm font-medium hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors border border-white/10"
                >
                  Previous
                </button>
                <div className="flex gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        currentPage === page
                          ? 'bg-[#E50914] text-white border border-[#E50914]'
                          : 'backdrop-blur-xl bg-white/5 hover:bg-white/10 border border-white/10'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 backdrop-blur-xl bg-white/5 rounded-lg text-sm font-medium hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors border border-white/10"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
