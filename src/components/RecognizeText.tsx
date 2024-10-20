import { useRecognizeText } from '@/hooks/useRecognizeText';

import { ErrorMessage } from './ErrorMessage';
import { Loading } from './Loading';

interface Props {
  image: string;
}

export function RecognizeText({ image }: Props) {
  const [text, loading, error] = useRecognizeText(image);

  const recognitionResults = () => {
    if (loading) {
      return (
        <div className='flex size-full items-center justify-center'>
          <Loading />
        </div>
      );
    } else if (error) {
      return (
        <div className='flex size-full items-center justify-center'>
          <ErrorMessage />
        </div>
      );
    } else {
      return <p>{text}</p>;
    }
  };

  return (
    <div className='flex flex-col space-y-2'>
      <h1 className='mb-2 text-lg font-semibold text-gray-500'>
        Recognition Results
      </h1>
      <div className='h-96 w-full  rounded-lg border-2 border-solid border-indigo-300 p-5'>
        {recognitionResults()}
      </div>
    </div>
  );
}
