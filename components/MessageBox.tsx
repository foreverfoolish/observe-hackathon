import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface MessageBoxProps {
  message: string;
}
export default function MessageBox({ message }: MessageBoxProps) {
  return (
    <div className='message-container'>
      <div className="message-wrapper">
        <div className="h-full flex items-center">{message}</div>
      </div>
    </div>

  );
}
