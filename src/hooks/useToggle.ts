import { useState, useCallback } from 'react';

/**
 * Custom hook for managing boolean toggle state
 * @param initialValue - Initial boolean value (default: false)
 * @returns [value, toggle, setValue] tuple
 */
export function useToggle(
  initialValue = false
): [boolean, () => void, (value: boolean) => void] {
  const [value, setValue] = useState<boolean>(initialValue);

  // Toggle function that flips the boolean value
  const toggle = useCallback(() => {
    setValue(prev => !prev);
  }, []);

  return [value, toggle, setValue];
}
