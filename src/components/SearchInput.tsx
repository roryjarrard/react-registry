import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchInput = () => {
    const [term, setTerm] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        navigate(`/search?term=${term}`);
        setTerm('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={term} onChange={(e) => setTerm(e.target.value)} />
        </form>
    );
};

export default SearchInput;