import Tesseract, { createWorker } from 'tesseract.js';

export async function recognizeText(
  image: Tesseract.ImageLike,
): Promise<string | null> {
  const worker = await createWorker(['eng', 'jpn']);

  try {
    const result = await worker.recognize(image);
    return result.data.text;
  } catch (e) {
    console.error(e);
  } finally {
    await worker.terminate();
  }

  return null;
}
