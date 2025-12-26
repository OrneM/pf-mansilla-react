import { useSearch } from '../../context/SearchContext';
import { BsSearch } from "react-icons/bs";

const SearchWidget = () => {
    const { searchTerm, setSearchTerm } = useSearch();

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="search-widget-container">
            <input
                type="text"
                placeholder="Buscar..."
                value={searchTerm}
                onChange={handleChange}
                className="search-input"
            />
            <BsSearch className="search-icon" />
        </div>
    );
};

export default SearchWidget;
