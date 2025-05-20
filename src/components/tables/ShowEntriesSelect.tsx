'use client';
import Image from "next/image";

interface ShowEntriesSelectProps {
    currentPage: number;
    totalPages: number;
    itemsPerPage: number;
    onItemsPerPageChange: (value: number) => void;
}

const ShowEntriesSelect: React.FC<ShowEntriesSelectProps> = ({
    currentPage,
    totalPages,
    itemsPerPage,
    onItemsPerPageChange,
}) => {
    const pagesAroundCurrent = Array.from(
        { length: Math.min(3, totalPages) },
        (_, i) => i + Math.max(currentPage - 1, 1)
    );

    const entriesOptions = [5, 10, 25, 50, 100];

    return (
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <span>Show</span>
            <div className="relative inline-block">
                <select
                    value={itemsPerPage}
                    onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
                    className="appearance-none bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md px-3 py-1 pr-7 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 dark:text-gray-300"
                >
                    {entriesOptions.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
                <span className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 dark:text-gray-400">
                    <Image src="/images/icons/chevron-down.svg" width={20} height={20} alt="Chevron Down" />
                </span>
            </div>
            <span>entries</span>
        </div>
    );
};

export default ShowEntriesSelect;
