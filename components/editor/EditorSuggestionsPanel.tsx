import React from 'react';
import type { Suggestion } from '../../lib/types/proofreader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2 } from 'lucide-react';

interface EditorSuggestionsPanelProps {
  suggestions: Suggestion[];
  selectedIndex: number | null;
  onSelectIndex: (index: number | null) => void;
  onApplyAtIndex: (index: number) => void;
  onGoToIndex?: (index: number) => void;
  acceptedCount: number;
  onSaveDraft: () => void;
  saveDialogOpen: boolean;
  setSaveDialogOpen: (open: boolean) => void;
  projectName: string;
  setProjectName: (name: string) => void;
  onConfirmSave: () => void;
  isApplying: boolean;
  canApply: boolean;
}

const EditorSuggestionsPanel: React.FC<EditorSuggestionsPanelProps> = ({
  suggestions,
  selectedIndex,
  onSelectIndex,
  onApplyAtIndex,
  onGoToIndex,
  acceptedCount,
  onSaveDraft,
  saveDialogOpen,
  setSaveDialogOpen,
  projectName,
  setProjectName,
  onConfirmSave,
  isApplying,
  canApply,
}) => {
  return (
    <Card className="border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-emerald-600 dark:text-emerald-400">
            Suggestions
          </CardTitle>
        </div>
        <div className="mt-2 grid grid-cols-2 gap-2">
          <div className="flex items-center justify-between rounded-md border border-zinc-200 dark:border-zinc-800 px-3 py-2">
            <div className="text-sm text-zinc-600 dark:text-zinc-300">All</div>
            <Badge variant="secondary" className="rounded-full">
              {suggestions.length + acceptedCount}
            </Badge>
          </div>
          <div className="flex items-center justify-between rounded-md border border-zinc-200 dark:border-zinc-800 px-3 py-2">
            <div className="text-sm text-zinc-600 dark:text-zinc-300">Accepted</div>
            <Badge variant="secondary" className="rounded-full">
              {acceptedCount}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {suggestions.length === 0 ? (
            <p className="text-sm text-zinc-600 dark:text-zinc-300">No suggestions yet.</p>
          ) : (
            suggestions.map((s, i) => (
              <div
                key={`${s.page}-${i}-${s.original.slice(0, 16)}`}
                className={`rounded-md border p-3 cursor-pointer transition ${
                  selectedIndex === i
                    ? 'border-emerald-400 bg-emerald-50/50 dark:bg-emerald-900/20'
                    : 'border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/40'
                }`}
                onClick={() => onSelectIndex(i)}
              >
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="rounded-full">Page {s.page}</Badge>
                  <span className="text-xs text-zinc-500">Click to highlight</span>
                </div>
                <div className="mt-2 text-sm text-zinc-800 dark:text-zinc-100">
                  {s.explanation}
                </div>
                <div className="mt-2 text-sm">
                  <span className="text-zinc-500">Original:</span>{' '}
                  <span className="font-medium">{s.original}</span>
                </div>
                <div className="text-sm">
                  <span className="text-zinc-500">Suggestion:</span>{' '}
                  <span className="font-medium text-emerald-700 dark:text-emerald-300">{s.suggestion}</span>
                </div>
                <div className="mt-3 flex gap-2">
                  <Button 
                    variant="outline"
                    size="sm"
                    onClick={(e) => { e.stopPropagation(); onGoToIndex?.(i); }}
                  >
                    Go to
                  </Button>
                  <Button 
                    size="sm" 
                    onClick={(e) => { e.stopPropagation(); onApplyAtIndex(i); }}
                    disabled={isApplying || !canApply}
                  >
                    {isApplying ? (
                      <>
                        <Loader2 className="h-3 w-3 mr-1 animate-spin" />
                        Applying...
                      </>
                    ) : (
                      'Apply to PDF'
                    )}
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>

        <Separator className="my-4" />

        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" onClick={onSaveDraft}>Save as draft</Button>
          <Button>Send file to</Button>
        </div>

        <Dialog open={saveDialogOpen} onOpenChange={setSaveDialogOpen}>
          <DialogContent className="bg-white dark:bg-zinc-900">
            <DialogHeader>
              <DialogTitle className="text-gray-900 dark:text-gray-50">Save Project as Draft</DialogTitle>
              <DialogDescription className="text-gray-600 dark:text-gray-400">
                Enter a name for your project
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="project-name" className="text-gray-900 dark:text-gray-50">
                  Project Name
                </Label>
                <Input
                  id="project-name"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  placeholder="Enter project name"
                  className="bg-white dark:bg-zinc-800 text-gray-900 dark:text-gray-50"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && projectName.trim()) {
                      onConfirmSave();
                    }
                  }}
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setSaveDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={onConfirmSave} disabled={!projectName.trim()}>
                Save
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default EditorSuggestionsPanel;

