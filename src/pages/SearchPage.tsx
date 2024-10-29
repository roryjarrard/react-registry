import { useLoaderData } from 'react-router-dom';

const SearchPage = () => {
    const data = useLoaderData();

    console.log({data});
    
    return (
        <div>
            <h1>Search Page</h1>
        </div>
    );
};

export default SearchPage;