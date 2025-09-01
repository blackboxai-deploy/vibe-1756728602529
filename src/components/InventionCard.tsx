```tsx
'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { X, Calendar, User, MapPin } from 'lucide-react';

export interface Invention {
  id: number;
  title: string;
  inventor: string;
  year: string;
  description: string;
  impact: string;
  category: string;
  location: string;
  image?: string;
}

interface InventionCardProps {
  invention: Invention;
  isVisible: boolean;
  onClose: () => void;
}

const InventionCard: React.FC<InventionCardProps> = ({ invention, isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white shadow-2xl border-2 border-blue-600">
        <CardHeader className="relative bg-gradient-to-r from-blue-600 to-red-600 text-white">
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="absolute top-2 right-2 text-white hover:bg-white hover:bg-opacity-20"
          >
            <X className="h-4 w-4" />
          </Button>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="secondary" className="bg-yellow-400 text-black">
              {invention.category}
            </Badge>
          </div>
          <CardTitle className="text-2xl font-bold">{invention.title}</CardTitle>
          <CardDescription className="text-blue-100 text-lg">
            A Filipino Innovation
          </CardDescription>
        </CardHeader>
        
        <CardContent className="p-6 space-y-6">
          {invention.image && (
            <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Image Placeholder</span>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <User className="h-4 w-4 text-blue-600" />
              <span className="font-medium">Inventor:</span>
              <span>{invention.inventor}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Calendar className="h-4 w-4 text-red-600" />
              <span className="font-medium">Year:</span>
              <span>{invention.year}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin className="h-4 w-4 text-green-600" />
              <span className="font-medium">Location:</span>
              <span>{invention.location}</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Description</h3>
              <p className="text-gray-600 leading-relaxed">{invention.description}</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Impact & Significance</h3>
              <p className="text-gray-600 leading-relaxed">{invention.impact}</p>
            </div>
          </div>
          
          <div className="flex justify-center pt-4">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <div className="w-8 h-5 bg-blue-600"></div>
              <div className="w-8 h-5 bg-red-600"></div>
              <div className="w-8 h-5 bg-yellow-400"></div>
              <span className="ml-2 font-medium">Proudly Filipino</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InventionCard;
```