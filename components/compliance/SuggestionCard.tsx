"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle2, AlertTriangle, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface ComplianceSuggestion {
  id?: string;
  category: string;
  severity: 'critical' | 'warning' | 'info';
  originalText: string;
  suggestedText: string;
  explanation: string;
  page?: number;
  isApplied?: boolean;
}

interface SuggestionCardProps {
  suggestion: ComplianceSuggestion;
  index: number;
  isSelected: boolean;
  onSelect: () => void;
  onApply: () => void;
  isApplying?: boolean;
}

export default function SuggestionCard({
  suggestion,
  index,
  isSelected,
  onSelect,
  onApply,
  isApplying = false
}: SuggestionCardProps) {
  const getSeverityIcon = () => {
    switch (suggestion.severity) {
      case 'critical':
        return <AlertTriangle className="h-5 w-5 text-red-400 drop-shadow-[0_0_6px_rgba(255,0,0,0.7)]" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-yellow-400 drop-shadow-[0_0_6px_rgba(255,255,0,0.7)]" />;
      default:
        return <Info className="h-5 w-5 text-cyan-400 drop-shadow-[0_0_6px_rgba(0,255,255,0.7)]" />;
    }
  };

  const getCategoryGradient = () => {
    switch (suggestion.category) {
      case 'FINRA':
        return 'bg-gradient-to-r from-purple-600 via-pink-500 to-purple-400 text-white';
      case 'SEC':
        return 'bg-gradient-to-r from-sky-500 via-teal-400 to-cyan-400 text-white';
      case 'Grammar':
        return 'bg-gradient-to-r from-green-500 via-lime-400 to-green-400 text-white';
      default:
        return 'bg-gray-700 text-gray-200';
    }
  };

  if (suggestion.isApplied) {
    return (
      <Card className="bg-gradient-to-r from-green-800/20 via-green-700/10 to-green-900/20 border border-green-400 shadow-glow">
        <CardContent className="p-4 flex items-center gap-2">
          <CheckCircle2 className="h-5 w-5 text-green-400 drop-shadow-[0_0_8px_rgba(0,255,0,0.7)]" />
          <span className="text-sm font-semibold text-green-200">Applied</span>
        </CardContent>
      </Card>
    );
  }

  return (
    <motion.div whileHover={{ scale: 1.02 }} className="cursor-pointer">
      <Card
        className={cn(
          "border border-white/10 bg-[radial-gradient(ellipse_at_top_right,_#0f172a,_#050816)] shadow-glow transition-all duration-300 rounded-xl",
          isSelected && 'border-cyan-400 shadow-[0_0_20px_rgba(0,255,255,0.4)]'
        )}
        onClick={onSelect}
      >
        <CardContent className="p-4 space-y-3">
          {/* Header */}
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2">
              {getSeverityIcon()}
              <Badge className="text-xs bg-white/5 text-white/80">{suggestion.severity}</Badge>
            </div>
            <Badge className={cn('text-xs px-2 py-1 rounded-md', getCategoryGradient())}>
              {suggestion.category}
            </Badge>
          </div>

          {/* Explanation */}
          <p className="text-sm text-slate-200">{suggestion.explanation}</p>

          {/* Original vs Suggested Text */}
          <div className="space-y-2 text-xs">
            <div className="p-2 bg-red-900/10 rounded border border-red-700/30">
              <p className="text-red-400 font-medium mb-1">Original:</p>
              <p className="text-red-200">{suggestion.originalText}</p>
            </div>
            <div className="p-2 bg-green-900/10 rounded border border-green-700/30">
              <p className="text-green-400 font-medium mb-1">Suggested:</p>
              <p className="text-green-200">{suggestion.suggestedText}</p>
            </div>
          </div>

          {/* Page Number */}
          {suggestion.page && <p className="text-xs text-slate-400">Page {suggestion.page}</p>}

          {/* Apply Button */}
          <Button
            variant="default"
            size="sm"
            className="w-full bg-gradient-to-r from-purple-700/30 via-pink-600/20 to-sky-700/20 hover:scale-105 transform transition text-white shadow-glow"
            onClick={(e) => {
              e.stopPropagation();
              onApply();
            }}
            disabled={isApplying}
          >
            {isApplying ? 'Applying...' : 'Apply Change'}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
