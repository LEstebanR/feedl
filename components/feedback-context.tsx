'use client';

import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

export type FeedbackType = 'positive' | 'negative' | 'neutral' | 'bug';

export interface Feedback {
  id: string;
  type: FeedbackType;
  message: string;
  page: string;
  user: string;
  time: string;
  timestamp: number;
}

interface FeedbackContextType {
  feedbacks: Feedback[];
  addFeedback: (
    feedback: Omit<Feedback, 'id' | 'timestamp'>,
    onAdd?: () => void
  ) => void;
}

const FeedbackContext = createContext<FeedbackContextType | undefined>(
  undefined
);

const STORAGE_KEY = 'feedl-feedbacks';

function loadFeedbacksFromStorage(): Feedback[] {
  if (typeof window === 'undefined') return [];
  try {
    // eslint-disable-next-line no-undef
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored) as Feedback[];
      return parsed.slice(0, 5);
    }
  } catch (error) {
    // eslint-disable-next-line no-undef
    console.error('Error loading feedbacks from localStorage:', error);
  }
  return [];
}

function saveFeedbacksToStorage(feedbacks: Feedback[]) {
  if (typeof window === 'undefined') return;
  try {
    // eslint-disable-next-line no-undef
    localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbacks));
  } catch (error) {
    // eslint-disable-next-line no-undef
    console.error('Error saving feedbacks to localStorage:', error);
  }
}

export function FeedbackProvider({ children }: { children: ReactNode }) {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  useEffect(() => {
    const loadedFeedbacks = loadFeedbacksFromStorage();
    setFeedbacks(loadedFeedbacks);
  }, []);

  const addFeedback = useCallback(
    (feedback: Omit<Feedback, 'id' | 'timestamp'>, onAdd?: () => void) => {
      const newFeedback: Feedback = {
        ...feedback,
        id: Date.now().toString(),
        timestamp: Date.now(),
      };

      setFeedbacks(prev => {
        const updated = [newFeedback, ...prev].slice(0, 5);
        saveFeedbacksToStorage(updated);
        return updated;
      });

      if (onAdd) {
        onAdd();
      }
    },
    []
  );

  return (
    <FeedbackContext.Provider value={{ feedbacks, addFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
}

export function useFeedback() {
  const context = useContext(FeedbackContext);
  if (context === undefined) {
    throw new Error('useFeedback must be used within a FeedbackProvider');
  }
  return context;
}
