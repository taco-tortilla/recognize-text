'use client';
import { useState } from 'react';

import { ImageUploader } from '@/components/ImageUploader';
import { RecognizeText } from '@/components/RecognizeText';

export default function Home() {
  const [image, setImage] = useState('');

  const handleSetImage = (image: string) => {
    setImage(image);
  };

  return (
    <div className='flex flex-col space-y-10'>
      <ImageUploader image={image} handleSetImage={handleSetImage} />
      <RecognizeText image={image} />
    </div>
  );
}
