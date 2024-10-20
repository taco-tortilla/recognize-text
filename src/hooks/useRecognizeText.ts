import { useEffect, useState } from 'react';

import { recognizeText } from '@/logic/recognizeText';

export function useRecognizeText(image: string) {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const recognize = async () => {
      setLoading(true);
      try {
        const text = await recognizeText(image);
        if (text) {
          setText(text);
        }
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    if (image !== '') {
      recognize().catch((e) => {
        console.error(e);
        setError(true);
      });
    }
  }, [image]);

  return [text, loading, error];
}
