"use client";
import React, { useState } from 'react';
import { Star, X } from 'lucide-react';

const teammates = [
  { id: 1, name: 'Dr. Usman Khalid', role: 'PROJECT SUPERVISOR / SENIOR RESEARCHER' },
  { id: 2, name: 'Hamza Tariq', role: 'UNDERGRADUATE RESEARCHER (CS)' },
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
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map(star => (
          <Star 
            key={star}
            onClick={() => handleRating(userId, category, star)}
            className={`w-5 h-5 cursor-pointer transition-colors ${star <= score ? 'fill-primary text-primary' : 'text-secondary/20 hover:text-secondary/50'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-secondary/90 backdrop-blur-sm animate-in fade-in duration-300">
      
      <div className="w-full max-w-3xl bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-500">
        
        {/* Header */}
        <div className="p-8 md:px-12 border-b border-secondary/10 relative shrink-0">
          <button 
            onClick={onClose}
            className="absolute top-8 right-8 text-secondary/40 hover:text-secondary transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <h2 className="text-3xl font-black font-serif uppercase tracking-tight mb-2">
            Project Complete: Peer Review
          </h2>
          <p className="text-sm text-secondary/60">
            Please evaluate your teammates to officially close the project.
          </p>
        </div>

        {/* Scrollable Form Area */}
        <div className="p-8 md:px-12 overflow-y-auto space-y-12">
          {teammates.map((mate, index) => (
            <div key={mate.id} className={`${index > 0 ? 'pt-12 border-t border-secondary/10' : ''}`}>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-secondary/5 border border-secondary/10 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-[12px] font-bold text-secondary/40">{mate.name.charAt(0)}</span>
                </div>
                <div>
                  <h3 className="text-lg font-black uppercase tracking-tight">{mate.name}</h3>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/50">{mate.role}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-secondary/60 mb-2">Contribution Quality</p>
                    {renderStars(mate.id, 'quality')}
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-secondary/60 mb-2">Assignment Completion</p>
                    {renderStars(mate.id, 'completion')}
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-secondary/60 mb-2">Overall Performance</p>
                    {renderStars(mate.id, 'overall')}
                  </div>
                </div>

                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-secondary/60 mb-2">Additional Feedback (Optional)</p>
                  <textarea 
                    rows={6}
                    placeholder="Observation log..."
                    className="w-full p-4 text-sm bg-white border border-secondary/10 outline-none focus:border-primary/50 transition-colors shadow-sm resize-none rounded-md"
                  />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Footer Actions */}
        <div className="p-8 md:px-12 border-t border-secondary/10 bg-secondary/[0.02] shrink-0 flex flex-col sm:flex-row justify-between items-center gap-4">
          <button onClick={onClose} className="text-xs font-bold underline underline-offset-4 hover:text-primary transition-colors">
            Skip for Now
          </button>
          
          <div className="flex gap-4 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none px-6 py-4 border border-secondary/20 text-secondary text-xs font-bold uppercase tracking-widest hover:bg-secondary/5 transition-colors rounded-md">
              Save Draft
            </button>
            <button className="flex-1 sm:flex-none px-6 py-4 bg-primary text-white text-xs font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors rounded-md shadow-sm">
              Submit Reviews & Close Project
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};

export default ProjectRatingModal;
