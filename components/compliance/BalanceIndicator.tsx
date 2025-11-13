"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DollarSign } from 'lucide-react';

interface BalanceIndicatorProps {
  balance: number;
  className?: string;
}

export default function BalanceIndicator({ balance, className = '' }: BalanceIndicatorProps) {
  const getBalanceColor = () => {
    if (balance >= 50) return 'bg-green-500 dark:bg-green-600';
    if (balance >= 20) return 'bg-yellow-500 dark:bg-yellow-600';
    return 'bg-red-500 dark:bg-red-600';
  };

  return (
    <Card className={`border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 ${className}`}>
      <CardContent className="p-3">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className={`p-2 rounded-full ${getBalanceColor()}`}>
              <DollarSign className="h-4 w-4 text-white" />
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Available Credits</p>
              <p className="text-lg font-bold text-gray-900 dark:text-gray-50">
                ${balance.toFixed(2)}
              </p>
            </div>
          </div>
          <Badge variant={balance >= 50 ? 'default' : balance >= 20 ? 'secondary' : 'destructive'}>
            {balance >= 50 ? 'Healthy' : balance >= 20 ? 'Low' : 'Critical'}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}

