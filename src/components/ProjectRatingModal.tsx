"use client";
import React, { useState } from 'react';
import { Star, X } from 'lucide-react';

const teammates = [
  { id: 1, name: 'Dr. Usman Khalid', role: 'Project Supervisor / Senior Researcher', avatar: '/avatar_aris.png' },
  { id: 2, name: 'Hamza Tariq', role: 'Undergraduate Researcher (CS)', avatar: '/avatar_elena.png' },
];

interface RatingModalProps {
  onClose: () => void;
}

const ProjectRatingModal: React.FC<RatingModalProps> = ({ onClose }) => {
  const [ratings, setRatings] = useState<Record<number, Record<string, number>>>({});

  const handleRating = (userId: number, category: string, score: number) => {
    setRatings(prev => ({
      ...prev,
      [userId]: {
        ...(prev[userId] || {}),
        [category]: score
      }
    }));
  };

  const renderStars = (userId: number, category: string) => {
    const score = ratings[userId]?.[category] || 0;
    return (
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map(star => (
          <button
            key={star}
            onClick={() => handleRating(userId, category, star)}
            className="group outline-none"
          >
            <Star 
              className={`w-6 h-6 transition-all duration-300 ${
                star <= score 
                  ? 'fill-primary text-primary scale-110 shadow-primary/20' 
                  : 'text-text-secondary group-hover:text-primary/50 group-hover:scale-105'
              }`}
            />
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-surface-alt backdrop-blur-sm animate-in fade-in duration-300">
      
      <div className="w-full max-w-3xl bg-surface shadow-2xl rounded-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-500">
        
        {/* Header */}
        <div className="p-8 md:px-12 border-b border-border relative shrink-0">
          <button 
            onClick={onClose}
            className="absolute top-8 right-8 text-text-secondary hover:text-text-primary transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <h2 className="text-3xl font-bold font-serif tracking-tight mb-2">
            Project Complete: Peer Review
          </h2>
          <p className="text-sm text-text-secondary">
            Please evaluate your teammates to officially close the project.
          </p>
        </div>

        {/* Scrollable Form Area */}
        <div className="p-8 md:px-12 overflow-y-auto scrollbar-hide space-y-12">
          {teammates.map((mate, index) => (
            <div key={mate.id} className={`${index > 0 ? 'pt-12 border-t border-border' : ''}`}>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-border shrink-0 shadow-sm">
                  <img src={mate.avatar} alt={mate.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text-primary">{mate.name}</h3>
                  <p className="text-xs font-medium text-text-secondary">{mate.role}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-text-secondary mb-2">Contribution Quality</p>
                    {renderStars(mate.id, 'quality')}
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-text-secondary mb-2">Assignment Completion</p>
                    {renderStars(mate.id, 'completion')}
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-text-secondary mb-2">Overall Performance</p>
                    {renderStars(mate.id, 'overall')}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-text-secondary mb-2">Additional Feedback (Optional)</p>
                  <textarea 
                    rows={6}
                    placeholder="Provide specific observations on collaboration, technical depth, and reliability..."
                    className="w-full p-5 text-sm bg-surface-alt border border-border outline-none focus:border-border focus:ring-4 focus:ring-secondary/5 focus:bg-surface transition-all shadow-sm resize-none rounded-xl placeholder:text-text-secondary"
                  />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Footer Actions */}
        <div className="p-8 md:px-12 border-t border-border bg-surface-alt shrink-0 flex flex-col sm:flex-row justify-between items-center gap-4">
          <button onClick={onClose} className="px-4 py-2 text-xs font-bold text-text-secondary hover:text-text-primary hover:bg-surface-alt rounded-full transition-all">
            Skip for Now
          </button>
          
          <div className="flex gap-4 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none px-8 py-4 border border-border bg-surface text-text-primary text-sm font-bold hover:bg-surface-alt transition-all rounded-xl">
              Save Draft
            </button>
            <button className="flex-1 sm:flex-none px-8 py-4 bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-all rounded-xl shadow-lg shadow-primary/20 active:scale-95">
              Submit Reviews & Close Project
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};

export default ProjectRatingModal;
