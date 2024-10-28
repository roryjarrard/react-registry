import { Link } from 'react-router-dom';
import SearchInput from './SearchInput';

const Header = () => {
    return (
        <div>
            <Link to="/" className="cursor-pointer">NPM Registry</Link>
            <SearchInput />
        </div>
    );
};

export default Header;