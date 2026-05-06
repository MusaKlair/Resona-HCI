"use client";
import React from 'react';
import { MessageSquare, CheckSquare, Archive, FileText, CheckCircle2, Clock, ChevronDown, ChevronUp, X, Paperclip, Send, LayoutGrid, Folder, Award, Star } from 'lucide-react';
import ProjectRatingModal from './ProjectRatingModal';

const documents = [
  { id: 1, name: 'Windows_Artifact_Analysis.pdf', updated: 'Modified 2h ago', version: 'v1.2', type: 'pdf' },
  { id: 2, name: 'Triage_Execution_Logs.xlsx', updated: 'Modified 5h ago', version: 'v0.9', type: 'excel' },
  { id: 3, name: 'TraceHunter_Architecture_Specs.docx', updated: 'Modified Yesterday', version: 'v2.1', type: 'word' },
  { id: 4, name: 'Asset_Sheet_Placeholder.png', updated: 'Modified 3 days ago', version: 'v1.0', type: 'img' },
];

const tasks = [
  { id: 1, title: 'Configure Linux test environment', status: 'DONE' },
  { id: 2, title: 'Develop artifact extraction script', status: 'IN PROGRESS' },
  { id: 3, title: 'Automate anti-forensic detection', status: 'PENDING' },
  { id: 4, title: 'Finalize Network Analysis', status: 'DONE' },
];

const workspaceProjects = [
  { id: 1, name: 'TraceHunter Dev', progress: 64, collaborators: ['/avatar_aris.png', '/avatar_elena.png', '/avatar_marcus.png'] },
  { id: 2, name: 'Quantum Pipeline', progress: 28, collaborators: ['/avatar_sarah.png', '/avatar_marcus.png', '/avatar_aris.png'] },
  { id: 3, name: 'UI Overhaul', progress: 85, collaborators: ['/avatar_elena.png', '/avatar_sarah.png', '/avatar_marcus.png'] },
];

const urgentActivity = [
  { id: 1, type: 'MENTION', user: 'Dr. Ahmed Raza', project: 'TraceHunter Dev', text: 'mentioned you in a comment: "Should we use the new GNN model?"', time: '10m ago' },
  { id: 2, type: 'TASK', user: 'System', project: 'Quantum Pipeline', text: 'Task "Validation Script" is overdue by 2 days.', time: '2h ago' },
  { id: 3, type: 'FILE', user: 'Hira Sheikh', project: 'UI Overhaul', text: 'uploaded "v2_layout_specs.pdf" to the file hub.', time: '5h ago' },
];

const CollaborativeWorkspace: React.FC = () => {
  const [expandedSections, setExpandedSections] = React.useState<Set<string>>(new Set(['Active Projects']));
  const [activeItem, setActiveItem] = React.useState('Dashboard');
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [isRatingModalOpen, setIsRatingModalOpen] = React.useState(false);
  const toggleSection = (section: string) => {
    setExpandedSections(prev => {
      const next = new Set(prev);
      if (next.has(section)) next.delete(section);
      else next.add(section);
      return next;
    });
  };

  const activeProjects = ['TraceHunter', 'Quantum', 'UI Overhaul'];

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in fade-in duration-500">
      
      {/* Left Sidebar Menu - Multi-Project Accordion */}
      {/* Left Sidebar Menu - Multi-Project Accordion */}
      <aside className="lg:col-span-2 space-y-6 sticky top-28 self-start max-h-[calc(100vh-8rem)] overflow-y-auto scrollbar-hide">
        <h2 className="font-bold font-serif text-lg tracking-tight text-text-primary">Workspace</h2>
        
        <nav className="flex flex-col gap-1">
          {/* Overview Section */}
          <div>
            <button 
              onClick={() => toggleSection('Overview')}
              className="w-full flex items-center justify-between px-1 py-2.5 group text-text-secondary hover:text-text-primary active:scale-[0.98] transition-all"
            >
              <div className="flex items-center gap-3">
                <LayoutGrid className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-text-secondary" style={{fontFamily: 'var(--font-sans)'}}>Overview</span>
              </div>
              {expandedSections.has('Overview') ? <ChevronUp className="w-4 h-4 transition-colors" /> : <ChevronDown className="w-4 h-4 transition-colors" />}
            </button>
            {expandedSections.has('Overview') && (
              <div className="space-y-1 mt-2 animate-in fade-in slide-in-from-top-1 duration-200">
                {[
                  { name: 'Dashboard', icon: <LayoutGrid className="w-4 h-4 text-primary" /> },
                  { name: 'Team', icon: <Archive className="w-4 h-4 text-primary" /> },
                  { name: 'Timeline', icon: <Clock className="w-4 h-4 text-primary" /> }
                ].map(item => (
                  <button
                    key={item.name}
                    onClick={() => setActiveItem(item.name)}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm active:scale-[0.97] transition-all ${activeItem === item.name ? 'bg-surface-alt text-text-primary font-bold' : 'text-text-secondary hover:bg-surface-alt hover:text-text-primary font-semibold'}`}
                  >
                    {item.icon}
                    {item.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* My Tasks Section */}
          <div>
            <button 
              onClick={() => toggleSection('My Tasks')}
              className="w-full flex items-center justify-between px-1 py-2.5 group text-text-secondary hover:text-text-primary active:scale-[0.98] transition-all"
            >
              <div className="flex items-center gap-3">
                <CheckSquare className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-text-secondary" style={{fontFamily: 'var(--font-sans)'}}>Tasks</span>
              </div>
              {expandedSections.has('My Tasks') ? <ChevronUp className="w-4 h-4 transition-colors" /> : <ChevronDown className="w-4 h-4 transition-colors" />}
            </button>
            {expandedSections.has('My Tasks') && (
              <div className="space-y-1 mt-2 animate-in fade-in slide-in-from-top-1 duration-200">
                {[
                  { name: 'Assigned', icon: <CheckSquare className="w-4 h-4 text-primary" /> },
                  { name: 'Pending', icon: <Clock className="w-4 h-4 text-primary" /> },
                  { name: 'Completed', icon: <CheckCircle2 className="w-4 h-4 text-primary" /> }
                ].map(item => (
                  <button
                    key={item.name}
                    onClick={() => setActiveItem(item.name)}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm active:scale-[0.97] transition-all ${activeItem === item.name ? 'bg-surface-alt text-text-primary font-bold' : 'text-text-secondary hover:bg-surface-alt hover:text-text-primary font-semibold'}`}
                  >
                    {item.icon}
                    {item.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Active Projects Section */}
          <div>
            <button 
              onClick={() => toggleSection('Active Projects')}
              className="w-full flex items-center justify-between px-1 py-2.5 group text-text-secondary hover:text-text-primary active:scale-[0.98] transition-all"
            >
              <div className="flex items-center gap-3">
                <Folder className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-text-secondary" style={{fontFamily: 'var(--font-sans)'}}>Projects</span>
              </div>
              {expandedSections.has('Active Projects') ? <ChevronUp className="w-4 h-4 transition-colors" /> : <ChevronDown className="w-4 h-4 transition-colors" />}
            </button>
            {expandedSections.has('Active Projects') && (
              <div className="space-y-1 mt-2 animate-in fade-in slide-in-from-top-1 duration-200">
                {activeProjects.map(project => (
                  <button
                    key={project}
                    onClick={() => setActiveItem(project)}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm active:scale-[0.97] transition-all ${activeItem === project ? 'bg-surface-alt text-text-primary font-bold' : 'text-text-secondary hover:bg-surface-alt hover:text-text-primary font-semibold'}`}
                  >
                    <Folder className="w-4 h-4 text-primary" />
                    {project}
                  </button>
                ))}
                <button className="w-full text-left px-4 py-2.5 text-xs font-bold text-primary hover:bg-primary/5 rounded-lg transition-colors mt-2">
                  + New Project
                </button>
              </div>
            )}
          </div>

          {/* Completed Projects Section */}
          <div>
            <button 
              onClick={() => toggleSection('Completed Projects')}
              className="w-full flex items-center justify-between px-1 py-2.5 group text-text-secondary hover:text-text-primary active:scale-[0.98] transition-all"
            >
              <div className="flex items-center gap-3">
                <Folder className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-text-secondary" style={{fontFamily: 'var(--font-sans)'}}>Completed</span>
              </div>
              {expandedSections.has('Completed Projects') ? <ChevronUp className="w-4 h-4 transition-colors" /> : <ChevronDown className="w-4 h-4 transition-colors" />}
            </button>
            {expandedSections.has('Completed Projects') && (
              <div className="space-y-1 mt-2 animate-in fade-in slide-in-from-top-1 duration-200">
                <button
                  onClick={() => setActiveItem('Carbon V1')}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm active:scale-[0.97] transition-all ${activeItem === 'Carbon V1' ? 'bg-surface-alt text-text-primary font-bold' : 'text-text-secondary hover:bg-surface-alt hover:text-text-primary font-semibold'}`}
                >
                  <Folder className="w-4 h-4 text-primary" />
                  <span className="truncate">Carbon V1</span>
                </button>
              </div>
            )}
          </div>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="lg:col-span-7 p-8 md:p-12 animate-in fade-in duration-700 space-y-12">
        
        {/* Header Area */}
        {activeItem === 'TraceHunter Dev' ? (
          <div className="animate-in fade-in slide-in-from-top-4 duration-700">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h1 className="text-4xl font-black font-serif tracking-tight text-text-primary">TraceHunter Dev</h1>
                <p className="text-sm text-text-secondary font-semibold mt-2">Developing malware triage protocols and volatile memory capture methods.</p>
              </div>
              <button className="btn-primary !px-5 !py-2.5 shadow-soft whitespace-nowrap">
                + New Task
              </button>
            </div>
            
            {/* Horizontal Tab Navigation */}
            <div className="mt-8 border-b border-border flex gap-8">
              {['Overview', 'Tasks', 'Files', 'Discussions'].map(tab => (
                <button 
                  key={tab}
                  className={`pb-3 text-sm font-bold transition-colors relative ${tab === 'Overview' ? 'text-text-primary font-black' : 'text-text-secondary hover:text-text-secondary'}`}
                >
                  {tab}
                  {tab === 'Overview' && (
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary" />
                  )}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="animate-in fade-in slide-in-from-top-4 duration-700">
            <h1 className="text-3xl font-black font-serif tracking-tight text-text-primary mb-2 uppercase">Workspace Overview</h1>
            <p className="text-sm text-text-secondary font-semibold tracking-wide">Track progress and recent activity across all active collaborations.</p>
          </div>
        )}

        {/* Dynamic Content Based on activeItem */}
        {activeItem === 'TraceHunter Dev' ? (
          <div className="animate-in fade-in duration-500 mt-8 space-y-8">
            {/* Top Row (Progress & Team) */}
            <div className="bg-surface border border-border rounded-2xl p-6 shadow-sm">
              <div className="flex justify-between items-end mb-4">
                <h2 className="text-xl font-bold text-text-primary font-serif">Project Health</h2>
                <div className="flex gap-4 items-center">
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Top Contributor</span>
                    <span className="text-sm font-bold text-text-primary">Dr. Ahmed Raza</span>
                  </div>
                  <div className="flex -space-x-2">
                    {workspaceProjects[0].collaborators.map((avatar, i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden shadow-sm">
                        <img src={avatar} alt="collaborator" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-bold text-text-primary">
                  <span>Overall Progress</span>
                  <span>64%</span>
                </div>
                <div className="w-full h-2.5 bg-surface-alt rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full transition-all duration-1000" style={{ width: '64%' }} />
                </div>
              </div>
            </div>

            {/* Task Tracker */}
            <div className="bg-surface border border-border rounded-2xl shadow-sm overflow-hidden">
              <div className="p-6 border-b border-border">
                <h2 className="text-lg font-bold text-text-primary font-serif">Upcoming Tasks</h2>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <h3 className="text-xs font-bold text-text-secondary uppercase tracking-widest mb-4">To Do</h3>
                  <div className="space-y-3">
                    {tasks.filter(t => t.status !== 'DONE').map(task => (
                      <div key={task.id} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full border-2 border-border flex-shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-text-primary">{task.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xs font-bold text-text-secondary uppercase tracking-widest mb-4">Done</h3>
                  <div className="space-y-3">
                    {tasks.filter(t => t.status === 'DONE').map(task => (
                      <div key={task.id} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span className="text-sm font-medium text-text-secondary line-through">{task.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-12">
            {/* Project Summary Cards */}
            <section>
              <div className="flex items-center justify-between border-b-2 border-secondary pb-4 mb-10">
                <h2 className="text-2xl font-bold font-serif text-text-primary">Active Projects</h2>
                <button className="text-[10px] font-black uppercase tracking-[0.15em] text-primary border-b border-primary pb-0.5 hover:text-primary/80 transition-all">
                  View All Projects
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {workspaceProjects.map(project => (
                  <div key={project.id} className="bg-surface border border-border rounded-2xl p-6 shadow-sm hover:shadow-soft transition-all group cursor-pointer" onClick={() => setActiveItem(project.name)}>
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="font-bold text-lg text-text-primary group-hover:text-primary transition-colors">{project.name}</h3>
                      <button className="text-text-secondary hover:text-text-primary transition-colors">⋮</button>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                        <span className="text-text-secondary">Progress</span>
                        <span className="text-text-primary">{project.progress}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-surface-alt rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary transition-all duration-1000" 
                          style={{ width: `${project.progress}%` }} 
                        />
                      </div>
                      
                      <div className="flex items-center justify-between pt-4">
                        <div className="flex -space-x-2">
                          {project.collaborators.map((avatar, i) => (
                            <div key={i} className="w-7 h-7 rounded-full border-2 border-white overflow-hidden shadow-sm">
                              <img src={avatar} alt="collaborator" className="w-full h-full object-cover" />
                            </div>
                          ))}
                        </div>
                        <span className="text-[9px] font-black uppercase tracking-[0.15em] text-text-secondary">Active Now</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Global Activity Feed */}
            <section>
              <div className="flex items-center justify-between border-b-2 border-secondary pb-4 mb-10">
                <h2 className="text-2xl font-bold font-serif text-text-primary">Urgent Notifications</h2>
                <button className="text-[10px] font-black uppercase tracking-[0.15em] text-primary border-b border-primary pb-0.5 hover:text-primary/80 transition-all">
                  Mark All Read
                </button>
              </div>
              
              <div className="bg-surface border border-border rounded-2xl shadow-sm overflow-hidden">
                {urgentActivity.map((activity, i) => (
                  <div 
                    key={activity.id} 
                    onClick={() => activity.id === 1 && setIsDrawerOpen(true)}
                    className={`p-6 flex items-start gap-4 transition-colors ${
                      activity.id === 1 ? 'hover:bg-surface-alt cursor-pointer' : 'hover:bg-surface-alt'
                    } ${i !== urgentActivity.length - 1 ? 'border-b border-border' : ''}`}
                  >
                    <div className={`w-10 h-10 rounded-xl shrink-0 flex items-center justify-center ${
                      activity.type === 'MENTION' ? 'bg-primary/10 text-primary' : 
                      activity.type === 'TASK' ? 'bg-red-50 text-red-500' : 'bg-blue-50 text-blue-500'
                    }`}>
                      {activity.type === 'MENTION' ? <MessageSquare className="w-5 h-5" /> : 
                       activity.type === 'TASK' ? <CheckSquare className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <p className="text-sm font-bold text-text-primary">
                          <span className="text-primary">{activity.user}</span> 
                          <span className="text-text-secondary font-medium"> in </span> 
                          {activity.project}
                        </p>
                        <span className="text-[10px] font-bold text-text-secondary">{activity.time}</span>
                      </div>
                      <p className="text-sm text-text-secondary leading-relaxed">{activity.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            {/* Completed Projects - Main Content Bottom */}
            <section className="pt-16">
              <div className="flex items-center justify-between border-b-2 border-secondary pb-4 mb-10">
                <h2 className="text-2xl font-bold font-serif text-text-primary">Completed Projects</h2>
                <button className="text-[10px] font-black uppercase tracking-[0.15em] text-primary border-b border-primary pb-0.5 hover:text-primary/80 transition-all">
                  Archive View
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="p-6 bg-surface border border-border rounded-2xl shadow-sm transition-all flex items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-surface-alt text-text-primary flex items-center justify-center shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-text-primary">Carbon V1</h4>
                      <p className="text-sm text-text-secondary font-medium">Completed Oct 24, 2024</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-8">
                    <div className="flex items-center -space-x-2">
                      {['/avatar_aris.png', '/avatar_elena.png', '/avatar_marcus.png'].map((src, i) => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden shadow-sm">
                          <img src={src} alt="Team" className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                    <button 
                      onClick={() => setIsRatingModalOpen(true)}
                      className="px-6 py-3 border border-primary text-primary hover:bg-primary/5 text-xs font-bold rounded-xl transition-all active:scale-95 flex items-center gap-2"
                    >
                      <Star className="w-3.5 h-3.5 fill-current" /> Rate Team
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
      </main>

      {/* Right Sidebar - Activity & Syncs */}
      <aside className="lg:col-span-3 space-y-10 sticky top-28 self-start">
        
        {activeItem === 'TraceHunter Dev' ? (
          <>
            <section>
              <h3 className="text-[10px] font-black uppercase tracking-widest text-text-secondary mb-6">Recent Files</h3>
              <div className="space-y-2">
                {documents.slice(0, 3).map(doc => (
                  <div key={doc.id} className="flex items-center gap-3 p-3 hover:bg-surface-alt rounded-xl transition-colors cursor-pointer border border-transparent hover:border-border">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center shrink-0">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-sm font-bold text-text-primary truncate">{doc.name}</p>
                      <p className="text-[10px] font-semibold text-text-secondary uppercase tracking-wider">{doc.updated}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 btn-outline !py-3 !text-[10px] !rounded-xl !border-border !text-text-secondary hover:!text-text-primary">
                View File Hub
              </button>
            </section>

            <section>
              <h3 className="text-[10px] font-black uppercase tracking-widest text-text-secondary mb-6">Latest Activity</h3>
              <div className="space-y-6">
                {urgentActivity.slice(0, 3).map((act, i) => (
                  <div key={act.id} className="flex gap-4 relative">
                    {i !== 2 && <div className="absolute top-10 bottom-[-24px] left-[19px] w-px bg-surface-alt" />}
                    <div className="w-10 h-10 rounded-full bg-surface-alt flex items-center justify-center shrink-0 z-10 border-4 border-white">
                      <MessageSquare className="w-4 h-4 text-text-secondary" />
                    </div>
                    <div className="pt-1">
                      <p className="text-xs font-bold text-text-primary">{act.user}</p>
                      <p className="text-xs text-text-secondary mt-1 leading-relaxed line-clamp-2">{act.text}</p>
                      <p className="text-[10px] font-bold text-text-secondary mt-2">{act.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        ) : (
          <section>
            <h3 className="text-[10px] font-black uppercase tracking-widest text-text-secondary mb-6">Upcoming Syncs</h3>
            <div className="space-y-4">
              {/* Mini Calendar */}
              <div className="bg-surface border border-border rounded-2xl p-4 shadow-sm mb-6">
                <div className="grid grid-cols-7 gap-1 text-center mb-4">
                  {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                    <span key={i} className="text-[9px] font-black text-text-secondary">{day}</span>
                  ))}
                  {Array.from({ length: 7 }).map((_, i) => {
                    const date = 28 + i > 31 ? (28 + i) - 31 : 28 + i;
                    const active = date === 31;
                    return (
                      <div key={i} className={`h-8 flex items-center justify-center rounded-lg text-[10px] font-bold transition-all ${active ? 'bg-primary text-white shadow-sm' : 'text-text-secondary hover:bg-surface-alt'}`}>
                        {date}
                      </div>
                    );
                  })}
                </div>
                <p className="text-[9px] font-black text-text-secondary text-center uppercase tracking-widest">October 31st, 2024</p>
              </div>

              {/* Meetings */}
              <div className="space-y-4">
                <div className="p-4 bg-surface border border-border rounded-2xl shadow-sm hover:border-primary/20 transition-all cursor-pointer group">
                  <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-text-secondary mb-2">
                    <Clock className="w-3 h-3" /> 14:00 - 15:00
                  </div>
                  <h4 className="font-bold text-sm text-text-primary group-hover:text-primary transition-colors">Blueprint Review Sync</h4>
                  <span className="inline-block mt-2 px-2 py-0.5 bg-primary/5 text-primary text-[8px] font-black uppercase tracking-widest rounded">TraceHunter Dev</span>
                </div>

                <div className="p-4 bg-surface border border-border rounded-2xl shadow-sm opacity-60 hover:opacity-100 transition-all cursor-pointer group">
                  <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-text-secondary mb-2">
                    <Clock className="w-3 h-3" /> Tomorrow, 09:30
                  </div>
                  <h4 className="font-bold text-sm text-text-primary group-hover:text-primary transition-colors">Structural Audit Q3</h4>
                  <span className="inline-block mt-2 px-2 py-0.5 bg-surface-alt text-text-primary text-[8px] font-black uppercase tracking-widest rounded">General Admin</span>
                </div>
              </div>
              
              <button className="w-full mt-4 btn-primary !py-3 !text-[10px] !rounded-xl !bg-secondary">
                Schedule New
              </button>
            </div>
          </section>
        )}
      </aside>

      {/* Slide-Over Chat Drawer */}
      {isDrawerOpen && (
        <>
          <div 
            className="fixed inset-0 bg-surface-alt backdrop-blur-sm z-[60] animate-in fade-in duration-300"
            onClick={() => setIsDrawerOpen(false)}
          />
          <aside className="fixed right-0 top-0 bottom-0 w-[400px] md:w-[450px] lg:w-[500px] bg-surface z-[70] shadow-2xl flex flex-col animate-in slide-in-from-right duration-500">
            <header className="p-6 border-b border-border flex justify-between items-center bg-surface sticky top-0">
              <h3 className="text-sm font-bold text-text-primary font-serif">Thread: TraceHunter Dev</h3>
              <button 
                onClick={() => setIsDrawerOpen(false)}
                className="p-2 hover:bg-surface-alt rounded-full transition-colors text-text-secondary hover:text-text-primary"
              >
                <X className="w-5 h-5" />
              </button>
            </header>

            <div className="flex-1 overflow-y-auto p-6 space-y-8 bg-surface">
              <div className="flex flex-col items-end">
                <div className="bg-surface-alt text-text-primary p-4 rounded-2xl rounded-tr-none max-w-[85%] text-sm shadow-sm">
                  I've uploaded the preliminary results for the pipeline efficiency test.
                </div>
                <span className="text-[10px] font-bold text-text-secondary mt-2">10:45 AM</span>
              </div>

              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full border border-border shrink-0 overflow-hidden shadow-sm">
                  <img src="/avatar_aris.png" alt="Aris" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col gap-2 max-w-[85%]">
                  <div className="bg-primary/5 border border-primary/20 text-text-primary p-4 rounded-2xl rounded-tl-none text-sm shadow-sm ring-2 ring-primary/5">
                    Looks solid. Should we use the new GNN model for the next iteration to handle the larger dataset?
                  </div>
                  <span className="text-[10px] font-bold text-text-secondary">10:46 AM • <span className="text-primary font-black">STAKED MENTION</span></span>
                </div>
              </div>
            </div>

            <footer className="p-6 border-t border-border bg-surface">
              <div className="flex items-center gap-4 bg-surface-alt rounded-2xl p-2 pr-3 border border-border focus-within:border-primary/30 transition-all shadow-inner">
                <button className="p-2 text-text-secondary hover:text-text-primary transition-colors">
                  <Paperclip className="w-4 h-4" />
                </button>
                <input 
                  type="text" 
                  placeholder="Reply to Dr. Ahmed Raza..."
                  className="flex-1 bg-transparent text-sm py-2 outline-none placeholder:text-text-secondary font-medium"
                />
                <button className="p-2 bg-secondary text-white rounded-xl shadow-soft hover:bg-surface-alt transition-all">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </footer>
          </aside>
        </>
      )}

      {/* Project Rating Modal */}
      {isRatingModalOpen && (
        <ProjectRatingModal onClose={() => setIsRatingModalOpen(false)} />
      )}
    </div>
  );
};

export default CollaborativeWorkspace;
