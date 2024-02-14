import { ChangeEvent, useState } from "react";

interface Props {
  onSearch: (value: string) => void;
}
export const SearchBox = ({ onSearch }: Props) => {
  const [value, setValue] = useState("");
  const handleSearch = () => {
    onSearch(value);
  };
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setValue(event.target.value)
        }
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};
