import { useCallback, useEffect, useRef } from 'react';

interface IUseBottomSheet {
  active: boolean;
  onClose: () => void;
}

export const useBottomSheet = ({ active, onClose }: IUseBottomSheet) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const closeBottomSheet = () => {
    if (onClose) {
      onClose();
    }
  };

  const handleOutsideClick = useCallback((event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      closeBottomSheet();
    }
  }, []);

  useEffect(() => {
    if (active) {
      window.addEventListener('click', handleOutsideClick);
    }

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [active]);

  return { ref };
};
