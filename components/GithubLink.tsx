import Image from 'next/image';
import GithubLogo from '../public/assets/github.svg';
export function GithubLink() {
  const handleClick = () => {
    window?.open('https://observe.ai', '_blank')?.focus();
  };
  return (
    <div className='observe-logo'>
      <button onClick={handleClick}>
        <Image src={GithubLogo} alt='Observe.ai logo'/>
      </button>
    </div>
  );
}
