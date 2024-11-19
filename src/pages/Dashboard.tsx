import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Zap,
  User,
  Users,
  Bell,
  FileText,
  Settings,
  Eye,
  Search,
  Brain,
  Calculator,
  Video,
  AlertTriangle,
  FileSpreadsheet,
  BookOpen,
  Mail
} from 'lucide-react';

export default function Dashboard() {
  const [showProfile, setShowProfile] = useState(false);
  const userData = JSON.parse(localStorage.getItem('userData') || '{}');

  return (
    <div className="min-h-screen bg-[#1C1C1E] text-white flex">
      {/* Sidebar */}
      <div className="w-64 bg-[#2A2A2D] p-4 space-y-6">
        <div className="flex items-center gap-2 mb-8">
          <Zap className="w-8 h-8 text-[#FFD700]" />
          <span className="font-bold text-xl">Team Volty</span>
        </div>

        <nav className="space-y-2">
          <Link to="#" className="flex items-center gap-3 px-4 py-2 rounded hover:bg-[#1C1C1E] text-[#FFD700]">
            <FileText size={20} />
            <span>Dashboard</span>
          </Link>
          <button
            onClick={() => setShowProfile(!showProfile)}
            className="flex items-center gap-3 px-4 py-2 rounded hover:bg-[#1C1C1E] w-full text-left"
          >
            <User size={20} />
            <span>My Profile</span>
          </button>
          <Link to="#" className="flex items-center gap-3 px-4 py-2 rounded hover:bg-[#1C1C1E]">
            <Users size={20} />
            <span>Team</span>
          </Link>
          <Link to="#" className="flex items-center gap-3 px-4 py-2 rounded hover:bg-[#1C1C1E]">
            <Bell size={20} />
            <span>Notifications</span>
          </Link>
          <Link to="#" className="flex items-center gap-3 px-4 py-2 rounded hover:bg-[#1C1C1E]">
            <FileText size={20} />
            <span>Reports</span>
          </Link>
          <Link to="#" className="flex items-center gap-3 px-4 py-2 rounded hover:bg-[#1C1C1E]">
            <Settings size={20} />
            <span>Settings</span>
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Welcome back, {userData.name}!</h1>

          {showProfile && (
            <div className="bg-[#2A2A2D] p-6 rounded-lg mb-8">
              <h2 className="text-xl font-semibold mb-4">My Profile</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-400">Name</p>
                  <p>{userData.name}</p>
                </div>
                <div>
                  <p className="text-gray-400">Email</p>
                  <p>{userData.email}</p>
                </div>
                <div>
                  <p className="text-gray-400">Phone</p>
                  <p>{userData.phone}</p>
                </div>
                <div>
                  <p className="text-gray-400">Company</p>
                  <p>{userData.company}</p>
                </div>
                <div>
                  <p className="text-gray-400">User Type</p>
                  <p>{userData.userType}</p>
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Field Observations */}
            <a
              href="https://fieldobservation.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2A2A2D] p-6 rounded-lg hover:bg-[#3A3A3D] transition-colors"
            >
              <Eye className="w-8 h-8 text-[#FFD700] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Submit a Field Observation</h3>
              <p className="text-gray-400">Record and submit field observations quickly and efficiently</p>
            </a>

            {/* Investigation Automation */}
            <a
              href="https://talktotaught.volty.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2A2A2D] p-6 rounded-lg hover:bg-[#3A3A3D] transition-colors"
            >
              <Brain className="w-8 h-8 text-[#FFD700] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Investigation Automation</h3>
              <p className="text-gray-400">AI-powered incident investigation and analysis</p>
            </a>

            {/* Volty Value Calculator */}
            <a
              href="https://volty-value-calculator.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2A2A2D] p-6 rounded-lg hover:bg-[#3A3A3D] transition-colors"
            >
              <Calculator className="w-8 h-8 text-[#FFD700] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Volty Value Calculator</h3>
              <p className="text-gray-400">Calculate the value based on your organizational learning goals</p>
            </a>

            {/* Watch Video */}
            <a
              href="https://youtu.be/veG7ROoKajc"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2A2A2D] p-6 rounded-lg hover:bg-[#3A3A3D] transition-colors"
            >
              <Video className="w-8 h-8 text-[#FFD700] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Watch Demo Video</h3>
              <p className="text-gray-400">Learn more about Volty's capabilities</p>
            </a>

            {/* JHA Automation */}
            <div className="bg-[#2A2A2D] p-6 rounded-lg">
              <AlertTriangle className="w-8 h-8 text-[#FFD700] mb-4" />
              <h3 className="text-xl font-semibold mb-2">JHA Automation</h3>
              <p className="text-gray-400 mb-4">Beta Testing</p>
              <button
                onClick={() => window.location.href = 'mailto:contact@volty.ai'}
                className="text-[#FFD700] hover:underline"
              >
                Contact us for details
              </button>
            </div>

            {/* Daily Activity Report */}
            <div className="bg-[#2A2A2D] p-6 rounded-lg">
              <FileSpreadsheet className="w-8 h-8 text-[#FFD700] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Daily Activity Report</h3>
              <p className="text-gray-400 mb-4">Beta Testing</p>
              <button
                onClick={() => window.location.href = 'mailto:contact@volty.ai'}
                className="text-[#FFD700] hover:underline"
              >
                Contact us
              </button>
            </div>

            {/* SOP Automation */}
            <div className="bg-[#2A2A2D] p-6 rounded-lg">
              <BookOpen className="w-8 h-8 text-[#FFD700] mb-4" />
              <h3 className="text-xl font-semibold mb-2">SOP Automation</h3>
              <p className="text-gray-400 mb-4">Beta Testing</p>
              <button
                onClick={() => window.location.href = 'mailto:contact@volty.ai'}
                className="text-[#FFD700] hover:underline"
              >
                Contact us
              </button>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://volty.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFD700] hover:underline inline-flex items-center gap-2"
            >
              Visit Volty Website <Zap size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}