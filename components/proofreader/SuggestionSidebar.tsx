import React from 'react';
import type { Suggestion } from '../../lib/types/proofreader';
import { EditIcon, CheckCircleIcon } from './icons';

interface SuggestionSidebarProps {
  suggestions: Suggestion[];
  onSuggestionClick: (suggestion: Suggestion) => void;
  selectedSuggestion: Suggestion | null;
  onEditPage: (pageNum: number) => void;
}

const SuggestionSidebar: React.FC<SuggestionSidebarProps> = ({ suggestions, onSuggestionClick, selectedSuggestion, onEditPage }) => {
  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-xl shadow-lg sticky top-24">
      <div className="p-4 border-b border-slate-700">
        <h2 className="text-lg font-semibold text-white">AI Suggestions ({suggestions.length})</h2>
      </div>
      <div className="max-h-[calc(100vh-12rem)] overflow-y-auto">
        {suggestions.length === 0 ? (
          <div className="p-6 text-center text-slate-400 flex flex-col items-center gap-4">
            <CheckCircleIcon className="w-12 h-12 text-green-500" />
            <p className="font-semibold">No suggestions found!</p>
            <p>The document looks great from a grammatical standpoint.</p>
          </div>
        ) : (
          <ul className="divide-y divide-slate-700">
            {suggestions.map((s, index) => (
              <li
                key={index}
                onClick={() => onSuggestionClick(s)}
                className={`p-4 cursor-pointer transition-colors duration-200 ${selectedSuggestion === s ? 'bg-cyan-900/50' : 'hover:bg-slate-700/50'}`}
              >
                <div className="flex justify-between items-start mb-2">
                    <p className="text-sm font-semibold text-cyan-400">Page {s.page}</p>
                    <button onClick={(e) => { e.stopPropagation(); onEditPage(s.page); }} className="text-xs flex items-center gap-1 text-slate-300 hover:text-white transition-colors">
                        <EditIcon className="w-3 h-3"/> Edit Page
                    </button>
                </div>
                <p className="text-sm text-slate-400 mb-1 line-through">{s.original}</p>
                <p className="text-sm text-green-400 font-medium">"{s.suggestion}"</p>
                <p className="text-xs text-slate-500 mt-2 italic">Reason: {s.explanation}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SuggestionSidebar;
