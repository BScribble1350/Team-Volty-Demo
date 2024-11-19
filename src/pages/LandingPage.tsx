import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Zap, Brain, Mic, FileSpreadsheet } from 'lucide-react';

const userTypes = ['Field Technician', 'Supervisor', 'Safety Manager', 'Administrator'];

export default function LandingPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    userType: userTypes[0]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('userData', JSON.stringify(formData));
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#1C1C1E] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left side - Hero Content */}
          <div className="lg:w-1/2 space-y-8">
            <div className="flex items-center gap-3">
              <Zap className="w-12 h-12 text-[#FFD700]" />
              <h1 className="text-4xl font-bold">Team Volty</h1>
            </div>
            
            <h2 className="text-3xl font-bold leading-tight">
              Turn Every Field Interaction into Complete Documentation with Your Voice
            </h2>

            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <Mic className="text-[#FFD700]" />
                  For Observations - Use Your Words
                </h3>
                <p className="text-gray-300 ml-8">
                  → Captured, Processed, Ranked & Reported in Under 10 Minutes
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <Brain className="text-[#FFD700]" />
                  For Investigations - Let AI Do the Heavy Lifting
                </h3>
                <ul className="text-gray-300 ml-8 space-y-2">
                  <li>→ Investigation Prep: One Click</li>
                  <li>→ Documentation: Automated</li>
                  <li>→ Root Cause Analysis: AI-Powered</li>
                  <li>→ Lessons Learned: Shared Now & On-Demand</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">And That's Just the Beginning</h3>
                <ul className="text-gray-300 ml-8 space-y-2">
                  <li>→ Job Hazard Analysis: Let's Talk About It</li>
                  <li>→ Daily Activity Reports: Hands-Free</li>
                  <li>→ Standard Operating Procedures: Your Experts + Our AI</li>
                </ul>
              </div>

              <p className="text-2xl font-semibold text-[#FFD700]">
                Many Minds → One Voice
              </p>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="lg:w-1/2">
            <div className="bg-[#2A2A2D] p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Get Started with Volty</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 rounded bg-[#1C1C1E] border border-gray-700 focus:border-[#FFD700] focus:ring-1 focus:ring-[#FFD700] outline-none"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 rounded bg-[#1C1C1E] border border-gray-700 focus:border-[#FFD700] focus:ring-1 focus:ring-[#FFD700] outline-none"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-2 rounded bg-[#1C1C1E] border border-gray-700 focus:border-[#FFD700] focus:ring-1 focus:ring-[#FFD700] outline-none"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Company</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 rounded bg-[#1C1C1E] border border-gray-700 focus:border-[#FFD700] focus:ring-1 focus:ring-[#FFD700] outline-none"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">User Type</label>
                  <select
                    className="w-full px-4 py-2 rounded bg-[#1C1C1E] border border-gray-700 focus:border-[#FFD700] focus:ring-1 focus:ring-[#FFD700] outline-none"
                    value={formData.userType}
                    onChange={(e) => setFormData({...formData, userType: e.target.value})}
                  >
                    {userTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#FFD700] text-[#1C1C1E] py-3 rounded-lg font-semibold hover:bg-[#FFE44D] transition-colors"
                >
                  Get Started
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}