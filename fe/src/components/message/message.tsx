import { MessageProps } from './message.types';

export const Message = ({ message }: MessageProps) => (
  <p className="text-center text-gray-500 text-xl mt-4">{message}</p>
);
