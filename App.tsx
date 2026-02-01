
import React, { useState, useEffect } from 'react';
import { ViewState, UserRole, Student } from './types';
import LoginView from './views/LoginView';
import DashboardView from './views/DashboardView';
import ActiveSearchView from './views/ActiveSearchView';
import AdminView from './views/AdminView';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StudentModal from './components/StudentModal';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('login');
  const [userRole, setUserRole] = useState<UserRole>('Professional');
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  const handleLogin = (role: UserRole) => {
    setUserRole(role);
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setCurrentView('login');
  };

  const openStudentDetail = (student: Student) => {
    setSelectedStudent(student);
  };

  if (currentView === 'login') {
    return <LoginView onLogin={handleLogin} />;
  }

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar - Fixed */}
      <Sidebar 
        activeView={currentView} 
        onViewChange={setCurrentView} 
        onLogout={handleLogout} 
        userRole={userRole}
      />

      {/* Main Content Area */}
      <div className="flex-1 ml-64 flex flex-col min-w-0">
        <Header userRole={userRole} />
        
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            {currentView === 'dashboard' && <DashboardView />}
            {currentView === 'active-search' && (
              <ActiveSearchView onRowClick={openStudentDetail} />
            )}
            {currentView === 'admin' && <AdminView userRole={userRole} />}
          </div>
        </main>
      </div>

      {/* Detail Modal */}
      {selectedStudent && (
        <StudentModal 
          student={selectedStudent} 
          onClose={() => setSelectedStudent(null)} 
        />
      )}
    </div>
  );
};

export default App;
