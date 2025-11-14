import React, { useState, useEffect, useRef } from 'react';
import type { Suggestion } from '../../lib/types/proofreader';
import { CheckCircleIcon } from './icons';

interface EditableHighlightProps {
    suggestion: Suggestion;
    box: {
        left: number;
        top: number;
        width: number;
        height: number;
    };
    onApplyEdit: (pageNumber: number, originalText: string, newText: string) => void;
    onCancelEdit: () => void;
}

const EditableHighlight: React.FC<EditableHighlightProps> = ({ suggestion, box, onApplyEdit, onCancelEdit }) => {
    const [editedText, setEditedText] = useState(suggestion.suggestion);
    const wrapperRef = useRef<HTMLDivElement>(null);

    // Close on click outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                onCancelEdit();
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef, onCancelEdit]);
    
    const handleApply = () => {
        if (suggestion.original) {
            onApplyEdit(suggestion.page, suggestion.original, editedText);
        }
    };

    return (
        <div
            ref={wrapperRef}
            className="absolute z-10 bg-slate-800 border border-cyan-500 rounded-lg shadow-2xl p-4 w-96 transform -translate-y-full -translate-x-1/2"
            style={{
                left: `${box.left + box.width / 2}px`,
                top: `${box.top - 10}px`,
                // Basic boundary detection to prevent going off-screen
                maxWidth: 'calc(100vw - 32px)', 
            }}
            onClick={e => e.stopPropagation()}
        >
            <div className="flex justify-between items-center mb-2">
                 <h3 className="text-md font-semibold text-white">Apply Suggestion</h3>
                 <button onClick={onCancelEdit} className="text-slate-400 hover:text-white text-2xl leading-none">&times;</button>
            </div>

            <div className="space-y-3 text-sm">
                <div>
                    <span className="text-slate-400">Original: </span>
                    <span className="line-through text-red-400">{suggestion.original}</span>
                </div>
                 <p className="text-xs text-slate-500 italic">Reason: {suggestion.explanation}</p>
                <div>
                     <label htmlFor="suggestion-edit" className="block text-slate-300 font-medium mb-1">Correction:</label>
                     <textarea
                        id="suggestion-edit"
                        value={editedText}
                        onChange={(e) => setEditedText(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-600 rounded-md p-2 text-slate-200 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition text-sm"
                        rows={3}
                     />
                </div>
            </div>
           
            <div className="mt-4 flex justify-end gap-2">
                <button
                    onClick={onCancelEdit}
                    className="px-3 py-1.5 bg-slate-600 hover:bg-slate-700 rounded-md text-white font-semibold transition-colors text-xs"
                >
                    Cancel
                </button>
                <button
                    onClick={handleApply}
                    className="px-3 py-1.5 bg-green-600 hover:bg-green-700 rounded-md text-white font-semibold transition-colors text-xs flex items-center gap-1.5"
                >
                    <CheckCircleIcon className="w-4 h-4" />
                    Apply Change
                </button>
            </div>
        </div>
    );
};

export default EditableHighlight;
