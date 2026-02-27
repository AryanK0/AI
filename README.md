# 🎬 Churn Prediction AI - Customer Churn Prediction Platform

<div align="center">

![Churn Prediction AI](https://img.shields.io/badge/Churn_Prediction-AI-E50914?style=for-the-badge&logo=robot)

A full-stack machine learning platform for predicting customer churn in telecom services, featuring three different ML models, real-time predictions, bulk CSV processing, and comprehensive analytics.

[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-Latest-009688?style=flat&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
[![Python](https://img.shields.io/badge/Python-3.10+-3776AB?style=flat&logo=python&logoColor=white)](https://www.python.org/)
[![Vercel](https://img.shields.io/badge/Vercel-Deploy-000000?style=flat&logo=vercel&logoColor=white)](https://vercel.com)
[![Supabase](https://img.shields.io/badge/Supabase-Database-3ECF8E?style=flat&logo=supabase&logoColor=white)](https://supabase.com)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

[Live Demo](#) | [Documentation](START_HERE.md) | [API Docs](API_DOCUMENTATION.md)

</div>

---

## Features

- **Real-time Predictions**: Instant churn probability with risk assessment
- **Three ML Models**: Compare PyCaret LR, H2O AutoML, and Gradient Boosting Ensemble
- **Bulk CSV Upload**: Process thousands of customers at once
- **Model Comparison**: Side-by-side performance metrics and graphs
- **Prediction History**: Track and analyze past predictions with filtering
- **Analytics Dashboard**: Feature importance, churn patterns, and insights
- **Premium UI**: Netflix-inspired design with glassmorphism effects
- **Serverless Architecture**: Deployed on Vercel with zero-config

## Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for blazing-fast builds
- **TailwindCSS** for styling
- **React Router** for navigation
- **Lucide Icons** for UI elements

### Backend
- **FastAPI** for serverless API endpoints
- **PyCaret** for automated ML
- **H2O AutoML** for ensemble models
- **XGBoost, LightGBM, CatBoost** for gradient boosting
- **Pandas** for data processing

### Database & Deployment
- **Supabase** (PostgreSQL) for prediction storage
- **Vercel** for frontend and serverless functions
- **GitHub** for version control

## Project Structure

```
churn-prediction-ai/
├── src/                          # React frontend
│   ├── components/
│   │   └── Navbar.tsx           # Navigation with glassmorphism
│   ├── pages/
│   │   ├── Dashboard.tsx        # Overview with stats
│   │   ├── Predict.tsx          # Single prediction form
│   │   ├── Upload.tsx           # Bulk CSV upload
│   │   ├── Analytics.tsx        # Model comparison & insights
│   │   ├── History.tsx          # Prediction history
│   │   └── About.tsx            # Project documentation
│   ├── lib/
│   │   ├── api.ts               # API client
│   │   └── supabase.ts          # Supabase client
│   ├── App.tsx                  # Main app component
│   └── main.tsx                 # Entry point
├── api/                          # FastAPI serverless functions
│   ├── models.py                # Shared ML logic
│   ├── final.py                 # PyCaret Logistic Regression
│   ├── benchmark.py             # H2O AutoML ensemble
│   ├── test.py                  # XGBoost/LightGBM/CatBoost
│   ├── predict.py               # Unified prediction endpoint
│   └── upload.py                # Bulk CSV processing
├── notebooks/                    # Jupyter notebooks (training)
│   ├── Final.ipynb              # PyCaret model training
│   ├── Benchmark.ipynb          # H2O AutoML training
│   └── Test.ipynb               # Ensemble model training
├── vercel.json                   # Vercel configuration
├── package.json                  # Frontend dependencies
├── requirements.txt              # Python dependencies
└── README.md                     # This file
```

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/final` | POST | PyCaret Logistic Regression predictions |
| `/api/benchmark` | POST | H2O AutoML ensemble predictions |
| `/api/test` | POST | Gradient Boosting ensemble predictions |
| `/api/predict` | POST | Unified endpoint (accepts model parameter) |
| `/api/upload` | POST | Bulk CSV processing with model selection |

## Model Comparison

| Model | Accuracy | ROC-AUC | Precision | Recall | Approach |
|-------|----------|---------|-----------|--------|----------|
| **Final** | 80.3% | 84.5% | 78.2% | 72.5% | Logistic Regression (PyCaret) |
| **Benchmark** | 80.0% | 85.1% | 79.1% | 71.8% | Stacked Ensemble (H2O AutoML) |
| **Test** | 80.2% | 83.5% | 77.8% | 73.2% | XGBoost + LightGBM + CatBoost |

## Installation & Setup

### Prerequisites
- Node.js 18+ and npm
- Python 3.10+
- Supabase account (free tier)
- Vercel account (optional, for deployment)

### Local Development

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/churn-prediction-ai.git
cd churn-prediction-ai
```

2. **Install frontend dependencies**
```bash
npm install
```

3. **Install backend dependencies**
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

4. **Configure environment variables**

Create a `.env` file in the root directory:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_API_URL=http://localhost:8000  # For local dev
```

5. **Set up Supabase database**

Run this SQL in your Supabase SQL Editor:
```sql
CREATE TABLE predictions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  gender TEXT,
  senior_citizen INTEGER,
  partner TEXT,
  dependents TEXT,
  tenure INTEGER,
  phone_service TEXT,
  multiple_lines TEXT,
  internet_service TEXT,
  online_security TEXT,
  device_protection TEXT,
  tech_support TEXT,
  streaming_tv TEXT,
  streaming_movies TEXT,
  contract_type TEXT,
  paperless_billing TEXT,
  payment_method TEXT,
  monthly_charges NUMERIC,
  total_charges NUMERIC,
  churn_probability NUMERIC,
  risk_level TEXT
);
```

6. **Run the development servers**

Terminal 1 (Frontend):
```bash
npm run dev
```

Terminal 2 (Backend - optional for local testing):
```bash
uvicorn api.predict:app --reload --port 8000
```

Or use Vercel CLI for full-stack local development:
```bash
npm i -g vercel
vercel dev
```

## Deployment to Vercel

1. **Push to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Deploy to Vercel**
- Go to [vercel.com/new](https://vercel.com/new)
- Import your GitHub repository
- Vercel auto-detects Vite + Python
- Add environment variables in Project Settings:
  - `VITE_SUPABASE_URL`
  - `VITE_SUPABASE_ANON_KEY`
- Deploy!

## Usage

### Single Prediction
1. Navigate to **Predict** page
2. Select ML model (Final/Benchmark/Test)
3. Fill in customer details
4. Click "Predict Churn"
5. View churn probability, risk level, drivers, and retention strategies

### Bulk Upload
1. Navigate to **Upload** page
2. Select ML model
3. Upload CSV file with customer data
4. View batch prediction summary
5. Download results

### Analytics
- View model performance comparison
- Analyze feature importance
- Explore churn patterns by tenure, charges, contract type
- Get actionable insights

### History
- View all past predictions
- Filter by risk level
- Search by contract type
- Paginated results

## Dataset Features

The model uses 18 customer features:

**Demographics**: Gender, Senior Citizen, Partner, Dependents

**Services**: Phone Service, Multiple Lines, Internet Service, Online Security, Device Protection, Tech Support, Streaming TV, Streaming Movies

**Account**: Contract Type, Paperless Billing, Payment Method, Tenure

**Financial**: Monthly Charges, Total Charges

## Model Training

The three notebooks in the root directory contain the model training code:

- `Final.ipynb`: PyCaret AutoML with Logistic Regression
- `Benchmark.ipynb`: H2O AutoML with stacked ensemble
- `Test.ipynb`: Custom ensemble (XGBoost + LightGBM + CatBoost)

To retrain models:
1. Open the notebook in Jupyter/Colab
2. Load your dataset
3. Run all cells
4. Export trained models to `api/models.py`

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - feel free to use this project for learning or commercial purposes.

## Acknowledgments

- Dataset: Telco Customer Churn (Kaggle)
- UI Inspiration: Netflix
- ML Libraries: PyCaret, H2O, XGBoost, LightGBM, CatBoost

## Contact

For questions or feedback, please open an issue on GitHub.

---

Built with ❤️ using React, FastAPI, and Machine Learning
