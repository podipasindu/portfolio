import { FaGithub } from 'react-icons/fa6';
import { FaSquareTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';
import logo from '../pasindu_logo.png';

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex items-center">
  <img src={logo} alt="Logo" className="h-20 w-auto ml-6 mt-6" /> {/* Increased logo size */}
</div>

        <div className="flex items-center justify-center gap-4 text-2xl text-white">
        <FaGithub className="mr-4" /> {/* Moved GitHub icon slightly to the right */}
<FaLinkedin className="text-3xl mr-4" /> {/* Increased LinkedIn icon size and moved right */}
<FaSquareTwitter className="mr-4" /> {/* Moved Twitter icon slightly to the right */}
<FaInstagram className="mr-8" /> {/* Moved Instagram icon slightly to the right */}
        </div>
    </nav>
  );
};

export default Navbar;