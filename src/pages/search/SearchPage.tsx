import type { SearchLoaderResult } from './searchLoader';
import { useLoaderData } from 'react-router-dom';

const SearchPage = () => {
    const data = useLoaderData() as SearchLoaderResult;

    console.log( data.searchResults );

    return (
        <div>
            <h1>Search Page</h1>
        </div>
    );
};

export default SearchPage;