"use client";
import React from 'react';
import { MessageSquare, Folder, CheckSquare, Calendar, HelpCircle, Archive, UploadCloud, Send, FileText, CheckCircle2, Clock, Calendar as CalendarIcon, Plus } from 'lucide-react';

const chatHistory = [
  { id: 1, sender: 'other', text: 'Initial draft of the malware triage protocols is ready for review.', time: '10:42 AM' },
  { id: 2, sender: 'me', text: 'Confirmed. Reviewing the volatile memory capture methods now.', time: '10:45 AM' },
  { id: 3, sender: 'other', text: 'Don\'t forget to integrate the new timestomp detection algorithms before we push to the main branch.', time: '10:48 AM' },
];

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

const CollaborativeWorkspace: React.FC = () => {
  return (
    <div className="max-w-[1600px] mx-auto min-h-[calc(100vh-100px)] flex bg-white border-t border-secondary/10 animate-in fade-in duration-500 relative">
      
      {/* Left Sidebar Menu */}
      <aside className="w-64 border-r border-secondary/10 shrink-0 flex flex-col hidden md:flex bg-secondary/[0.02]">
        <div className="p-6 border-b border-secondary/10">
          <h2 className="font-black font-serif text-xl leading-tight">TraceHunter<br/>Development</h2>
          <p className="text-[8px] font-black uppercase tracking-widest text-secondary/40 mt-2">Collaborative Workspace</p>
        </div>
        
        <nav className="flex-1 py-6 space-y-1">
          {[
            { name: 'Dashboard', icon: <CheckSquare />, active: true },
            { name: 'Chat', icon: <MessageSquare /> },
            { name: 'Files', icon: <Folder /> },
            { name: 'Tasks', icon: <CheckSquare /> },
            { name: 'Meetings', icon: <Calendar /> },
          ].map(item => (
            <a key={item.name} href="#" className={`flex items-center gap-4 px-6 py-3 text-sm font-bold transition-colors ${item.active ? 'bg-primary/10 text-primary border-r-4 border-primary' : 'text-secondary/60 hover:text-secondary hover:bg-secondary/5 border-r-4 border-transparent'}`}>
              <div className="w-5 h-5 opacity-70">{item.icon}</div>
              {item.name}
            </a>
          ))}
        </nav>

        <div className="p-6 border-t border-secondary/10 space-y-4">
          <a href="#" className="flex items-center gap-3 text-xs font-bold text-secondary/60 hover:text-secondary transition-colors">
             <Archive className="w-4 h-4" /> Archive
          </a>
          <a href="#" className="flex items-center gap-3 text-xs font-bold text-secondary/60 hover:text-secondary transition-colors">
             <HelpCircle className="w-4 h-4" /> Support
          </a>
        </div>
      </aside>

      {/* Main Grid Content */}
      <main className="flex-1 p-6 md:p-10 lg:p-12 overflow-y-auto bg-white grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-12 content-start relative pb-32">
        
        {/* Threaded Messaging */}
        <section className="flex flex-col h-[500px] border border-secondary/10 rounded-xl shadow-sm bg-white">
          <header className="p-4 border-b border-secondary/10 flex justify-between items-center bg-secondary/[0.02]">
             <h3 className="text-[10px] font-black uppercase tracking-widest">Threaded Messaging</h3>
             <button className="text-secondary/40 hover:text-secondary">⋮</button>
          </header>
          
          <div className="flex-1 overflow-y-auto p-6 space-y-6 flex flex-col">
            {chatHistory.map(msg => (
              <div key={msg.id} className={`flex flex-col max-w-[80%] ${msg.sender === 'me' ? 'self-end items-end' : 'self-start items-start'}`}>
                <div className={`p-4 rounded-xl text-sm shadow-sm ${msg.sender === 'me' ? 'bg-primary text-white' : 'bg-secondary/5 text-secondary border border-secondary/10'}`}>
                  {msg.text}
                </div>
                <span className="text-[10px] font-bold text-secondary/40 mt-1">{msg.time}</span>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-secondary/10 bg-white">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Type a message..."
                className="w-full text-sm p-4 pr-12 rounded-lg border border-secondary/20 outline-none focus:border-primary/50 bg-secondary/5"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-secondary hover:text-primary transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* Milestones & Tasks */}
        <section className="border border-secondary/10 rounded-xl shadow-sm bg-white flex flex-col">
          <header className="p-4 border-b border-secondary/10 flex justify-between items-center bg-secondary/[0.02]">
             <h3 className="text-[10px] font-black uppercase tracking-widest">Milestones & Tasks</h3>
             <span className="text-xs font-black">64%</span>
          </header>
          <div className="p-6">
             <div className="w-full h-2 bg-secondary/10 rounded-full mb-8 overflow-hidden">
               <div className="h-full bg-primary w-[64%]" />
             </div>
             
             <div className="space-y-4">
               {tasks.map(task => (
                 <div key={task.id} className="flex items-center justify-between p-4 border border-secondary/10 rounded-lg hover:border-secondary/30 transition-colors">
                   <div className="flex items-center gap-4">
                     {task.status === 'DONE' ? (
                       <CheckCircle2 className="w-5 h-5 text-secondary" />
                     ) : (
                       <div className="w-5 h-5 border-2 border-secondary/30 rounded-sm" />
                     )}
                     <span className={`text-sm font-bold ${task.status === 'DONE' ? 'text-secondary/50 line-through' : 'text-secondary'}`}>{task.title}</span>
                   </div>
                   <span className={`text-[10px] font-black uppercase tracking-widest ${task.status === 'IN PROGRESS' ? 'text-primary' : 'text-secondary/40'}`}>
                     {task.status}
                   </span>
                 </div>
               ))}
             </div>
          </div>
        </section>

        {/* Shared Documents */}
        <section className="border border-secondary/10 rounded-xl shadow-sm bg-white flex flex-col">
          <header className="p-4 border-b border-secondary/10 flex justify-between items-center bg-secondary/[0.02]">
             <h3 className="text-[10px] font-black uppercase tracking-widest">Shared Documents</h3>
             <button className="bg-primary text-white px-4 py-2 rounded-md text-[10px] font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors shadow-sm">Upload</button>
          </header>
          <div className="p-6 space-y-4">
            {documents.map(doc => (
              <div key={doc.id} className="flex items-center justify-between p-4 border-b border-secondary/5 hover:bg-secondary/5 transition-colors group cursor-pointer">
                <div className="flex items-center gap-4">
                  <FileText className="w-5 h-5 text-secondary/40 group-hover:text-secondary" />
                  <div>
                    <h4 className="text-sm font-bold">{doc.name}</h4>
                    <p className="text-[10px] text-secondary/50 mt-1">{doc.updated}</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-muted rounded-full text-[10px] font-bold text-secondary/70 uppercase tracking-wider">
                  {doc.version}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Meeting Widget */}
        <section className="border border-secondary/10 rounded-xl shadow-sm bg-white flex flex-col">
          <header className="p-4 border-b border-secondary/10 flex justify-between items-center bg-secondary/[0.02]">
             <h3 className="text-[10px] font-black uppercase tracking-widest">Meeting Widget</h3>
             <button className="text-[10px] font-black uppercase tracking-widest underline underline-offset-4 text-secondary/60 hover:text-secondary">Schedule New</button>
          </header>
          <div className="p-6">
            <div className="flex justify-between items-center text-center mb-8 border-b border-secondary/10 pb-6">
               {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => {
                 const date = 28 + i > 31 ? (28 + i) - 31 : 28 + i;
                 const active = i === 3;
                 return (
                   <div key={i} className="flex flex-col gap-2">
                     <span className="text-[10px] font-black uppercase tracking-widest text-secondary/50">{day}</span>
                     <div className={`w-8 h-8 flex items-center justify-center rounded-md text-xs font-bold ${active ? 'bg-primary text-white shadow-sm' : 'text-secondary/70'}`}>
                       {date}
                     </div>
                   </div>
                 );
               })}
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-secondary/5 border border-secondary/10 rounded-lg">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-secondary/60 mb-2">
                  <Clock className="w-3 h-3" /> 14:00 - 15:00
                </div>
                <h4 className="font-bold text-sm mb-1">Blueprint Review Sync</h4>
                <p className="text-xs text-secondary/50">Attendees: Team Alpha</p>
              </div>

              <div className="p-4 border border-secondary/10 rounded-lg">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-secondary/40 mb-2">
                  <Clock className="w-3 h-3" /> TOMORROW, 09:30
                </div>
                <h4 className="font-bold text-sm text-secondary/70 mb-1">Structural Audit Q3</h4>
                <p className="text-xs text-secondary/40">Attendees: Management</p>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Floating Action Button */}
      <button className="absolute bottom-8 right-8 w-14 h-14 bg-primary rounded-full text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center z-50 group">
        <Plus className="w-6 h-6 group-hover:rotate-90 transition-transform" />
      </button>

    </div>
  );
};

export default CollaborativeWorkspace;
