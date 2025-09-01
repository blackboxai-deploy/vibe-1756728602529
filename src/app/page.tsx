```tsx
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Play, Pause, RotateCcw } from 'lucide-react';
import Link from 'next/link';

interface Invention {
  id: number;
  title: string;
  year: string;
  inventor: string;
  description: string;
  impact: string;
  category: string;
}

const inventions: Invention[] = [
  {
    id: 1,
    title: "Jeepney",
    year: "1940s",
    inventor: "Leonardo Sarao Sr.",
    description: "The iconic Filipino public utility vehicle, originally made from U.S. military jeeps left over from World War II.",
    impact: "Became the most popular means of public transportation in the Philippines.",
    category: "Transportation"
  },
  {
    id: 2,
    title: "Yo-yo",
    year: "16th Century",
    inventor: "Ancient Filipino Hunters",
    description: "A traditional Filipino hunting weapon that evolved into the popular toy known worldwide today.",
    impact: "Became one of the most popular toys globally, with modern versions still based on Filipino designs.",
    category: "Recreation"
  },
  {
    id: 3,
    title: "Bamboo Incubator",
    year: "1960s",
    inventor: "Dr. Fe del Mundo",
    description: "A low-cost bamboo incubator designed to help newborns in rural areas without electricity.",
    impact: "Saved countless newborn lives in remote areas of the Philippines and other developing countries.",
    category: "Medical"
  },
  {
    id: 4,
    title: "Saltwater Lamp",
    year: "2014",
    inventor: "Aisa Mijeno",
    description: "A sustainable lamp that runs on saltwater, providing light for 8 hours with just one glass of saltwater.",
    impact: "Provides eco-friendly lighting solution for remote coastal communities.",
    category: "Energy"
  },
  {
    id: 5,
    title: "E-Jeepney",
    year: "2007",
    inventor: "Robert Puckett & Filipino Engineers",
    description: "An electric-powered version of the traditional jeepney, designed to reduce pollution and fuel costs.",
    impact: "Modernizing public transportation while maintaining Filipino cultural identity.",
    category: "Transportation"
  },
  {
    id: 6,
    title: "Erythromycin",
    year: "1949",
    inventor: "Dr. Abelardo Aguilar",
    description: "An antibiotic derived from soil samples from his backyard, effective against various bacterial infections.",
    impact: "Became one of the most widely used antibiotics worldwide, saving millions of lives.",
    category: "Medical"
  }
];

export default function Home() {
  const [currentStop, setCurrentStop] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [jeepneyPosition, setJeepneyPosition] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlay) {
      interval = setInterval(() => {
        setCurrentStop((prev) => (prev + 1) % inventions.length);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  useEffect(() => {
    setJeepneyPosition((currentStop / (inventions.length - 1)) * 100);
    setShowCard(true);
    const timer = setTimeout(() => setShowCard(false), 100);
    const showTimer = setTimeout(() => setShowCard(true), 200);
    return () => {
      clearTimeout(timer);
      clearTimeout(showTimer);
    };
  }, [currentStop]);

  const nextStop = () => {
    setCurrentStop((prev) => (prev + 1) % inventions.length);
  };

  const prevStop = () => {
    setCurrentStop((prev) => (prev - 1 + inventions.length) % inventions.length);
  };

  const goToStop = (index: number) => {
    setCurrentStop(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
  };

  const reset = () => {
    setCurrentStop(0);
    setIsAutoPlay(false);
  };

  const currentInvention = inventions[currentStop];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-200 to-green-200">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Filipino Inventions Timeline</h1>
          <Link href="/references">
            <Button variant="outline" className="text-blue-600 border-white hover:bg-white">
              References
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Controls */}
        <div className="flex justify-center gap-4 mb-8">
          <Button onClick={prevStop} variant="outline" size="sm">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Previous
          </Button>
          <Button onClick={toggleAutoPlay} variant={isAutoPlay ? "destructive" : "default"} size="sm">
            {isAutoPlay ? <Pause className="w-4 h-4 mr-1" /> : <Play className="w-4 h-4 mr-1" />}
            {isAutoPlay ? "Pause" : "Auto Play"}
          </Button>
          <Button onClick={reset} variant="outline" size="sm">
            <RotateCcw className="w-4 h-4 mr-1" />
            Reset
          </Button>
          <Button onClick={nextStop} variant="outline" size="sm">
            Next
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>

        {/* Road Timeline */}
        <div className="relative w-full max-w-6xl mx-auto mb-8">
          {/* Road */}
          <div className="relative h-32 bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            {/* Road markings */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-yellow-400 transform -translate-y-1/2">
              <div className="flex justify-between h-full">
                {[...Array(20)].map((_, i) => (
                  <div key={i} className="w-8 h-full bg-gray-800"></div>
                ))}
              </div>
            </div>

            {/* Stops */}
            <div className="absolute top-0 left-0 right-0 h-full flex justify-between items-center px-8">
              {inventions.map((invention, index) => (
                <div key={invention.id} className="relative">
                  <button
                    onClick={() => goToStop(index)}
                    className={`w-8 h-8 rounded-full border-4 transition-all duration-300 ${
                      index === currentStop
                        ? 'bg-red-500 border-yellow-400 scale-125'
                        : index < currentStop
                        ? 'bg-green-500 border-white'
                        : 'bg-gray-400 border-gray-600'
                    }`}
                  >
                    <span className="text-white text-xs font-bold">{index + 1}</span>
                  </button>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-700 whitespace-nowrap">
                    {invention.year}
                  </div>
                </div>
              ))}
            </div>

            {/* Jeepney */}
            <div
              className="absolute top-1/2 transform -translate-y-1/2 transition-all duration-1000 ease-in-out"
              style={{ left: `calc(${jeepneyPosition}% - 24px)` }}
            >
              <div className="w-12 h-8 bg-gradient-to-r from-red-500 to-yellow-500 rounded-lg shadow-lg relative">
                {/* Jeepney body */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-yellow-500 rounded-lg">
                  <div className="absolute top-1 left-1 right-1 h-2 bg-white rounded opacity-80"></div>
                  <div className="absolute bottom-1 left-1 right-1 h-1 bg-yellow-300 rounded"></div>
                </div>
                {/* Wheels */}
                <div className="absolute -bottom-1 left-1 w-2 h-2 bg-black rounded-full"></div>
                <div className="absolute -bottom-1 right-1 w-2 h-2 bg-black rounded-full"></div>
                {/* Front */}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-4 bg-blue-600 rounded-l"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Invention Card */}
        <div className={`transition-all duration-300 ${showCard ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
          <Card className="max-w-2xl mx-auto shadow-xl border-2 border-blue-200">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-red-600 text-white">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl mb-2">{currentInvention.title}</CardTitle>
                  <CardDescription className="text-blue-100">
                    {currentInvention.year} • {currentInvention.category}
                  </CardDescription>
                </div>
                <div className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-bold">
                  Stop {currentStop + 1} of {inventions.length}
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-1">Inventor:</h4>
                  <p className="text-gray-600">{currentInvention.inventor}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-1">Description:</h4>
                  <p className="text-gray-600">{currentInvention.description}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-1">Impact:</h4>
                  <p className="text-gray-600">{currentInvention.impact}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Progress Indicator */}
        <div className="mt-8 max-w-2xl mx-auto">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Progress</span>
            <span>{currentStop + 1} / {inventions.length}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-600 to-red-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStop + 1) / inventions.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-6 mt-12">
        <div className="container mx-auto text-center">
          <p className="mb-2">Filipino Inventions Timeline</p>
          <p className="text-gray-400 text-sm">Celebrating Filipino innovation and ingenuity</p>
        </div>
      </footer>
    </div>
  );
}
```