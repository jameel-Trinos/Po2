import React from 'react';
import type { Suggestion } from '../../lib/types/proofreader';
import { CheckCircle, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

interface SuggestionSidebarProps {
  suggestions: Suggestion[];
  onSuggestionClick: (suggestion: Suggestion) => void;
  selectedSuggestion: Suggestion | null;
  onApplySuggestion?: (index: number) => void;
}

const SuggestionSidebar: React.FC<SuggestionSidebarProps> = ({ 
  suggestions, 
  onSuggestionClick, 
  selectedSuggestion,
  onApplySuggestion 
}) => {
  React.useEffect(() => {
    console.log('[SuggestionSidebar] Received suggestions:', suggestions);
    console.log('[SuggestionSidebar] Number of suggestions:', suggestions?.length || 0);
  }, [suggestions]);

  return (
    <Card className="border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 sticky top-24">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-emerald-600 dark:text-emerald-400">
            AI Suggestions
          </CardTitle>
          <Badge variant="secondary" className="rounded-full">
            {suggestions.length}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="max-h-[calc(100vh-12rem)] overflow-y-auto space-y-3">
          {suggestions.length === 0 ? (
            <div className="p-6 text-center flex flex-col items-center gap-4">
              <CheckCircle className="w-12 h-12 text-green-500" />
              <div>
                <p className="font-semibold text-gray-900 dark:text-gray-50">No suggestions found!</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  The document looks great from a grammatical standpoint.
                </p>
              </div>
            </div>
          ) : (
            suggestions.map((s, index) => (
              <div
                key={index}
                onClick={() => onSuggestionClick(s)}
                className={`rounded-md border p-3 cursor-pointer transition-colors ${
                  selectedSuggestion === s
                    ? 'border-emerald-400 bg-emerald-50/50 dark:bg-emerald-900/20'
                    : 'border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="rounded-full">
                    <FileText className="w-3 h-3 mr-1" />
                    Page {s.page}
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Original:</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 line-through">{s.original}</p>
                  </div>
                  
                  <div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Suggestion:</p>
                    <p className="text-sm text-green-600 dark:text-green-400 font-medium">{s.suggestion}</p>
                  </div>
                  
                  {s.explanation && (
                    <div>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Reason:</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400 italic">{s.explanation}</p>
                    </div>
                  )}
                </div>

                {onApplySuggestion && (
                  <>
                    <Separator className="my-3" />
                    <Button
                      size="sm"
                      className="w-full"
                      onClick={(e) => {
                        e.stopPropagation();
                        onApplySuggestion(index);
                      }}
                    >
                      Apply Change
                    </Button>
                  </>
                )}
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default SuggestionSidebar;
