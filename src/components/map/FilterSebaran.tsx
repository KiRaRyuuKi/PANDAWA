import { useState } from 'react';

interface FilterProps {
    activePinFilters: Set<string>;
    togglePinFilter: (categoryId: string) => void;
    pinCategories: Array<{
        id: string;
        label: string;
        color: string;
    }>;
}

export const FilterPanel = ({
    activePinFilters,
    togglePinFilter,
    pinCategories
}: FilterProps) => {
    const [collapsed, setCollapsed] = useState(true);
    const [width, setWidth] = useState(200);

    const handleResize = (e: React.MouseEvent) => {
        e.preventDefault();
        const startX = e.clientX;
        const startWidth = width;

        const doDrag = (e: MouseEvent) => {
            const newWidth = startWidth + (startX - e.clientX);
            setWidth(Math.max(150, Math.min(400, newWidth)));
        };

        const stopDrag = () => {
            document.removeEventListener('mousemove', doDrag);
            document.removeEventListener('mouseup', stopDrag);
        };

        document.addEventListener('mousemove', doDrag);
        document.addEventListener('mouseup', stopDrag);
    };

    return (
        <div
            className={`absolute p-2 top-5 right-18 bg-white rounded-lg shadow-lg transition-all duration-200 overflow-hidden ${collapsed ? 'flex items-center justify-center' : ''
                }`}
            style={{ width: collapsed ? '40px' : `${width}px` }}
        >
            {collapsed ? (
                <>
                    <div className='flex flex-col items-center justify-between rounded-md'>
                        {/* Filter icon with tooltip */}
                        <button
                            onClick={() => setCollapsed(false)}
                            className="text-gray-600"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </>
            ) : (
                <>
                    {/* Header with improved styling */}
                    <div className="flex justify-between items-center mb-2 pl-2">
                            <div className="flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="size-5 text-gray-600"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3.792 2.938A49.069 49.069 0 0 1 12 2.25c2.797 0 5.54.236 8.209.688a1.857 1.857 0 0 1 1.541 1.836v1.044a3 3 0 0 1-.879 2.121l-6.182 6.182a1.5 1.5 0 0 0-.439 1.061v2.927a3 3 0 0 1-1.658 2.684l-1.757.878A.75.75 0 0 1 9.75 21v-5.818a1.5 1.5 0 0 0-.44-1.06L3.13 7.938a3 3 0 0 1-.879-2.121V4.774c0-.897.64-1.683 1.542-1.836Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <h3 className="font-bold text-gray-800 text-sm">Filters</h3>
                            </div>
                        <button
                            onClick={() => setCollapsed(true)}
                            className="text-gray-600 hover:text-gray-600 transition-colors"
                        >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clipRule="evenodd" />
                                </svg>
                        </button>
                    </div>

                    {/* Filter items with better card styling */}
                    <div
                        className="grid gap-1 px-2 py-1 overflow-y-auto"
                        style={{
                            gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
                            maxHeight: '78px'
                        }}
                    >
                        {pinCategories.map(category => (
                            <div key={category.id} className="flex items-center">
                                <button
                                    onClick={() => togglePinFilter(category.id)}
                                    className={`flex items-center px-2.5 py-1.5 rounded-md text-sm w-full transition-colors ${activePinFilters.has(category.id)
                                        ? 'bg-indigo-50 text-indigo-700 border border-indigo-100'
                                        : 'text-gray-600 hover:bg-gray-50 border border-transparent'
                                        }`}
                                >
                                    <div
                                        className="w-3 h-3 rounded-full mr-2 flex-shrink-0"
                                        style={{ backgroundColor: category.color }}
                                    />
                                    <span className="truncate text-left flex-grow">{category.label}</span>
                                    {activePinFilters.has(category.id) && (
                                        <svg
                                            className="w-3.5 h-3.5 ml-2 flex-shrink-0 text-indigo-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2.5}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Improved resize handle */}
                    <div
                        className="absolute left-0 top-0 h-full w-1.5 cursor-ew-resize bg-gray-100 hover:bg-indigo-100 group transition-colors"
                        onMouseDown={handleResize}
                    >
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-8 w-0.5 bg-gray-300 group-hover:bg-indigo-300 rounded-full transition-colors" />
                    </div>
                </>
            )}
        </div>
    );
};