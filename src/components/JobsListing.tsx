import { useState, useCallback } from 'react';
import { JobPositionCard } from '@/components/JobPositionCard';
import { jobPositions } from '@/utils/positions';
import { filterBySearchTerm, debounce } from '@/utils/helpers';

export default function JobsListing() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPositions, setFilteredPositions] = useState(
    filterBySearchTerm(searchTerm, jobPositions)
  );

  const handleSearchTermChange = useCallback(
    debounce((value: string) => {
      console.log('searching');
      setFilteredPositions(filterBySearchTerm(value, jobPositions));
    }, 500),
    [jobPositions, setFilteredPositions]
  );

  const onSearchChange = (
    event: React.ChangeEvent<HTMLInputElement> | string
  ) => {
    const searchValue = typeof event === 'string' ? event : event.target.value;
    setSearchTerm(searchValue);
    handleSearchTermChange(searchValue);
  };

  return (
    <main className="flex flex-col gap-6">
      <h2 className="text-2xl">Experience</h2>
      <div className="flex flex-row gap-2">
        <input
          className="border-b w-full border-gray-100 h-7 px-3 text-center bg-transparent"
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(event) => onSearchChange(event)}
        />
      </div>
      <div className="flex flex-col gap-10">
        {filteredPositions.map((jobPosition, index) => (
          <JobPositionCard
            jobPosition={jobPosition}
            setFilter={onSearchChange}
            key={index}
          />
        ))}
        {!filteredPositions.length && (
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold">No results found</h3>
            <p className="text-lg">Try searching for something else</p>
          </div>
        )}
      </div>
    </main>
  );
}
