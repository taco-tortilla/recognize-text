'use client';

interface Props {
  handleSetImage: (image: string) => void;
  image: string;
}

export function ImageUploader({ image, handleSetImage }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const images = e.target.files;
    if (images && images.length > 0) {
      const selectedImage = images[0];
      const imageUrl = URL.createObjectURL(selectedImage);
      handleSetImage(imageUrl);
    }
  };

  return (
    <div className='flex flex-col items-center space-y-5'>
      <input
        type='file'
        accept='image/*'
        onChange={handleChange}
        className='block w-full cursor-pointer  border-indigo-400 text-sm text-gray-500 file:mr-4
         file:cursor-pointer file:rounded-l-md file:border-0 file:bg-indigo-600
         file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-indigo-400'
      />
      <div className='h-96 w-full rounded-lg border-2 border-dashed border-indigo-300 p-5'>
        {image && (
          <img
            src={image}
            alt='uploaded image'
            className='size-full rounded-lg object-contain'
          />
        )}
      </div>
    </div>
  );
}
