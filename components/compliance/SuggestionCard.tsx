"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle2, AlertTriangle, Info } from 'lucide-react';

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
        return <AlertTriangle className="h-4 w-4 text-red-500" />;
      case 'warning':
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      default:
        return <Info className="h-4 w-4 text-blue-500" />;
    }
  };

  const getSeverityColor = () => {
    switch (suggestion.severity) {
      case 'critical':
        return 'destructive';
      case 'warning':
        return 'default';
      default:
        return 'secondary';
    }
  };

  const getCategoryColor = () => {
    switch (suggestion.category) {
      case 'FINRA':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'SEC':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Grammar':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  if (suggestion.isApplied) {
    return (
      <Card className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/30">
        <CardContent className="p-3">
          <div className="flex items-center gap-2 text-green-700 dark:text-green-300">
            <CheckCircle2 className="h-4 w-4" />
            <span className="text-sm font-medium">Applied</span>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card
      className={`border cursor-pointer transition-all hover:shadow-md ${
        isSelected
          ? 'border-emerald-500 dark:border-emerald-600 bg-emerald-50 dark:bg-emerald-950/30 shadow-lg'
          : 'border-zinc-200 dark:border-zinc-700'
      }`}
      onClick={onSelect}
    >
      <CardContent className="p-4 space-y-3">
        {/* Header */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2">
            {getSeverityIcon()}
            <Badge variant={getSeverityColor() as any} className="text-xs">
              {suggestion.severity}
            </Badge>
          </div>
          <Badge className={`text-xs ${getCategoryColor()}`}>
            {suggestion.category}
          </Badge>
        </div>

        {/* Explanation */}
        <p className="text-sm text-gray-700 dark:text-gray-300">
          {suggestion.explanation}
        </p>

        {/* Original vs Suggested Text */}
        <div className="space-y-2 text-xs">
          <div className="p-2 bg-red-50 dark:bg-red-950/30 rounded border border-red-200 dark:border-red-800">
            <p className="text-red-700 dark:text-red-300 font-medium mb-1">Original:</p>
            <p className="text-red-900 dark:text-red-100">{suggestion.originalText}</p>
          </div>
          <div className="p-2 bg-green-50 dark:bg-green-950/30 rounded border border-green-200 dark:border-green-800">
            <p className="text-green-700 dark:text-green-300 font-medium mb-1">Suggested:</p>
            <p className="text-green-900 dark:text-green-100">{suggestion.suggestedText}</p>
          </div>
        </div>

        {/* Page Number */}
        {suggestion.page && (
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Page {suggestion.page}
          </p>
        )}

        {/* Apply Button */}
        <Button
          variant="default"
          size="sm"
          className="w-full"
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
  );
}

