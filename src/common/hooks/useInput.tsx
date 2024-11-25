'use client';

import { useState, useEffect } from "react";

interface UseInputReturn {
  value: string | null;
  debouncedValue: string | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  reset: () => void;
}

const useInput = (initialValue: string | null, delay: number = 300): UseInputReturn => {
  const [value, setValue] = useState<string | null>(initialValue);
  const [debouncedValue, setDebouncedValue] = useState<string | null>(initialValue);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue('');
    setDebouncedValue('');
  };

  return { value, debouncedValue, onChange, reset };
};

export default useInput;
