import React from "react";

type SearchBarProps = {
    value: string;
    onChange: (value: string) => void;
    onSubmit: () => void;
};

const SearchBar =({ value, onChange, onSubmit }: SearchBarProps) => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            onSubmit();
        }
    };
    return (
        <div>
            <input 
            type="text"
            placeholder="Search albums..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={handleKeyDown}
            />
            <button onClick={onSubmit}>Search</button>
        </div>
    );
};

export default SearchBar
