import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to="/" className="cursor-pointer">NPM Registry</Link>
        </div>
    );
};

export default Header;