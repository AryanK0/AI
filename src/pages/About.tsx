import { BookOpen, Code, Database, Cpu, GitBranch, Zap } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-[#141414] text-white p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#E50914] to-orange-500 bg-clip-text text-transparent">
            Churn Prediction AI AI
          </h1>
          <p className="text-xl text-[#B3B3B3]">Customer Churn Prediction Platform</p>
        </div>

        <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 shadow-2xl">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <BookOpen className="text-[#E50914]" />
            Project Overview
          </h2>
          <p className="text-[#B3B3B3] leading-relaxed mb-4">
            Churn Prediction AI AI is a full-stack machine learning platform designed to predict customer churn in telecom services.
            The system combines three different ML approaches (PyCaret, H2O AutoML, and ensemble models) with a modern
            React frontend and FastAPI backend, deployed on Vercel.
          </p>
          <p className="text-[#B3B3B3] leading-relaxed">
            This project demonstrates end-to-end ML deployment, from data preprocessing and model training to
            production-ready API endpoints and an intuitive user interface.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-[#E50914]/50 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <Code className="text-[#E50914] w-6 h-6" />
              <h3 className="text-xl font-bold">Tech Stack</h3>
            </div>
            <div className="space-y-3 text-[#B3B3B3]">
              <div><span className="text-white font-semibold">Frontend:</span> React, TypeScript, Vite, TailwindCSS</div>
              <div><span className="text-white font-semibold">Backend:</span> FastAPI, Python 3.10+</div>
              <div><span className="text-white font-semibold">ML Libraries:</span> PyCaret, H2O, XGBoost, LightGBM, CatBoost</div>
              <div><span className="text-white font-semibold">Database:</span> Supabase (PostgreSQL)</div>
              <div><span className="text-white font-semibold">Deployment:</span> Vercel (Frontend + Serverless Functions)</div>
            </div>
          </div>

          <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-[#E50914]/50 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <Cpu className="text-[#E50914] w-6 h-6" />
              <h3 className="text-xl font-bold">Three ML Models</h3>
            </div>
            <div className="space-y-3">
              <div className="p-3 bg-[#1f1f1f] rounded-lg border border-[#2a2a2a]">
                <div className="font-semibold text-white mb-1">Final (PyCaret LR)</div>
                <div className="text-sm text-[#B3B3B3]">Logistic Regression with automated feature engineering</div>
              </div>
              <div className="p-3 bg-[#1f1f1f] rounded-lg border border-[#2a2a2a]">
                <div className="font-semibold text-white mb-1">Benchmark (H2O AutoML)</div>
                <div className="text-sm text-[#B3B3B3]">Stacked ensemble with automated hyperparameter tuning</div>
              </div>
              <div className="p-3 bg-[#1f1f1f] rounded-lg border border-[#2a2a2a]">
                <div className="font-semibold text-white mb-1">Test (Ensemble)</div>
                <div className="text-sm text-[#B3B3B3]">XGBoost + LightGBM + CatBoost weighted ensemble</div>
              </div>
            </div>
          </div>
        </div>

        <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <Database className="text-[#E50914] w-6 h-6" />
            <h3 className="text-xl font-bold">Dataset & Features</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Customer Demographics</h4>
              <ul className="space-y-2 text-[#B3B3B3]">
                <li>• Gender, Senior Citizen status</li>
                <li>• Partner & Dependents</li>
                <li>• Tenure (months with company)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Services</h4>
              <ul className="space-y-2 text-[#B3B3B3]">
                <li>• Phone Service & Multiple Lines</li>
                <li>• Internet Service (DSL/Fiber/None)</li>
                <li>• Online Security, Device Protection</li>
                <li>• Tech Support, Streaming TV/Movies</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Account Information</h4>
              <ul className="space-y-2 text-[#B3B3B3]">
                <li>• Contract Type (Month-to-month/1yr/2yr)</li>
                <li>• Paperless Billing</li>
                <li>• Payment Method</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Financial</h4>
              <ul className="space-y-2 text-[#B3B3B3]">
                <li>• Monthly Charges</li>
                <li>• Total Charges</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <GitBranch className="text-[#E50914] w-6 h-6" />
            <h3 className="text-xl font-bold">API Architecture</h3>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-[#1f1f1f] rounded-lg border border-[#2a2a2a]">
                <div className="font-mono text-sm text-[#E50914] mb-2">POST /api/final</div>
                <div className="text-sm text-[#B3B3B3]">PyCaret Logistic Regression predictions</div>
              </div>
              <div className="p-4 bg-[#1f1f1f] rounded-lg border border-[#2a2a2a]">
                <div className="font-mono text-sm text-[#E50914] mb-2">POST /api/benchmark</div>
                <div className="text-sm text-[#B3B3B3]">H2O AutoML ensemble predictions</div>
              </div>
              <div className="p-4 bg-[#1f1f1f] rounded-lg border border-[#2a2a2a]">
                <div className="font-mono text-sm text-[#E50914] mb-2">POST /api/test</div>
                <div className="text-sm text-[#B3B3B3]">XGBoost/LightGBM/CatBoost ensemble</div>
              </div>
            </div>
            <div className="p-4 bg-[#1f1f1f] rounded-lg border border-[#2a2a2a]">
              <div className="font-mono text-sm text-[#E50914] mb-2">POST /api/predict</div>
              <div className="text-sm text-[#B3B3B3]">Unified endpoint - accepts model parameter (final/benchmark/test)</div>
            </div>
            <div className="p-4 bg-[#1f1f1f] rounded-lg border border-[#2a2a2a]">
              <div className="font-mono text-sm text-[#E50914] mb-2">POST /api/upload</div>
              <div className="text-sm text-[#B3B3B3]">Bulk CSV processing with model selection</div>
            </div>
          </div>
        </div>

        <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="text-[#E50914] w-6 h-6" />
            <h3 className="text-xl font-bold">Key Features</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#E50914] rounded-full mt-2"></div>
              <div>
                <div className="font-semibold mb-1">Real-time Predictions</div>
                <div className="text-sm text-[#B3B3B3]">Instant churn probability with risk assessment</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#E50914] rounded-full mt-2"></div>
              <div>
                <div className="font-semibold mb-1">Bulk CSV Upload</div>
                <div className="text-sm text-[#B3B3B3]">Process thousands of customers at once</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#E50914] rounded-full mt-2"></div>
              <div>
                <div className="font-semibold mb-1">Model Comparison</div>
                <div className="text-sm text-[#B3B3B3]">Compare three different ML approaches</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#E50914] rounded-full mt-2"></div>
              <div>
                <div className="font-semibold mb-1">Actionable Insights</div>
                <div className="text-sm text-[#B3B3B3]">Risk drivers and retention strategies</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#E50914] rounded-full mt-2"></div>
              <div>
                <div className="font-semibold mb-1">Prediction History</div>
                <div className="text-sm text-[#B3B3B3]">Track and analyze past predictions</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#E50914] rounded-full mt-2"></div>
              <div>
                <div className="font-semibold mb-1">Analytics Dashboard</div>
                <div className="text-sm text-[#B3B3B3]">Feature importance and churn patterns</div>
              </div>
            </div>
          </div>
        </div>

        <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10">
          <h3 className="text-xl font-bold mb-4">Model Performance Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-[#B3B3B3]">Model</th>
                  <th className="text-left py-3 px-4 text-[#B3B3B3]">Accuracy</th>
                  <th className="text-left py-3 px-4 text-[#B3B3B3]">ROC-AUC</th>
                  <th className="text-left py-3 px-4 text-[#B3B3B3]">Approach</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 font-semibold">Final</td>
                  <td className="py-3 px-4">80.3%</td>
                  <td className="py-3 px-4">84.5%</td>
                  <td className="py-3 px-4 text-sm text-[#B3B3B3]">Logistic Regression</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 font-semibold">Benchmark</td>
                  <td className="py-3 px-4">80.0%</td>
                  <td className="py-3 px-4">85.1%</td>
                  <td className="py-3 px-4 text-sm text-[#B3B3B3]">H2O Stacked Ensemble</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Test</td>
                  <td className="py-3 px-4">80.2%</td>
                  <td className="py-3 px-4">83.5%</td>
                  <td className="py-3 px-4 text-sm text-[#B3B3B3]">Gradient Boosting Ensemble</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10">
          <h3 className="text-xl font-bold mb-6">Deployment Architecture</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#E50914]/20 flex items-center justify-center flex-shrink-0">
                <span className="text-[#E50914] font-bold">1</span>
              </div>
              <div>
                <div className="font-semibold mb-1">Frontend (Vite + React)</div>
                <div className="text-sm text-[#B3B3B3]">
                  Built with Vite for optimal performance, deployed to Vercel CDN. Includes responsive UI,
                  real-time predictions, and comprehensive analytics.
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#E50914]/20 flex items-center justify-center flex-shrink-0">
                <span className="text-[#E50914] font-bold">2</span>
              </div>
              <div>
                <div className="font-semibold mb-1">API Layer (FastAPI)</div>
                <div className="text-sm text-[#B3B3B3]">
                  Python serverless functions on Vercel. Each notebook (Final, Benchmark, Test) has its own
                  endpoint, plus unified predict/upload endpoints.
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#E50914]/20 flex items-center justify-center flex-shrink-0">
                <span className="text-[#E50914] font-bold">3</span>
              </div>
              <div>
                <div className="font-semibold mb-1">Database (Supabase)</div>
                <div className="text-sm text-[#B3B3B3]">
                  PostgreSQL database for storing prediction history, enabling analytics and historical tracking.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10">
          <h3 className="text-xl font-bold mb-4">How It Works</h3>
          <div className="space-y-6">
            <div>
              <div className="text-lg font-semibold mb-2 text-white">1. Data Collection</div>
              <p className="text-[#B3B3B3]">
                User inputs customer data (demographics, services, contract details) via the Predict page or uploads a CSV file.
              </p>
            </div>
            <div>
              <div className="text-lg font-semibold mb-2 text-white">2. Model Selection</div>
              <p className="text-[#B3B3B3]">
                Choose from three trained models: Final (conservative LR), Benchmark (balanced ensemble), or Test (aggressive tree-based).
              </p>
            </div>
            <div>
              <div className="text-lg font-semibold mb-2 text-white">3. Prediction</div>
              <p className="text-[#B3B3B3]">
                FastAPI serverless function processes the request, runs the selected model, and returns churn probability,
                risk level, key drivers, and retention strategies.
              </p>
            </div>
            <div>
              <div className="text-lg font-semibold mb-2 text-white">4. Storage & Analytics</div>
              <p className="text-[#B3B3B3]">
                Predictions are stored in Supabase, enabling historical tracking, filtering, and analytics visualization.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center py-8">
          <div className="inline-block px-6 py-3 bg-[#E50914] rounded-lg font-semibold hover:bg-[#E50914]/90 transition-all cursor-pointer">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <GitBranch className="w-5 h-5" />
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
