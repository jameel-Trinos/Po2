export type SuggestionCategory = 'grammar' | 'compliance' | 'style';
export type SuggestionSeverity = 'critical' | 'warning' | 'suggestion';

export interface Suggestion {
  issue: string; // Issue description (e.g., "Performance disclaimer missing")
  page: number;
  text: string; // Original problematic text
  suggestion: string; // Suggested replacement text
  // Optional fields for backward compatibility and enhanced features
  original?: string; // Alias for text
  explanation?: string; // Alias for issue
  category?: SuggestionCategory;
  severity?: SuggestionSeverity;
}
