'use client';

import { useState, useEffect } from "react";

interface UseInputReturn {
  value: string;
  debouncedValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  reset: () => void;
}

const useInput = (initialValue: string, delay: number = 500): UseInputReturn => {
  const [value, setValue] = useState<string>(initialValue);
  const [debouncedValue, setDebouncedValue] = useState<string>(initialValue);

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
