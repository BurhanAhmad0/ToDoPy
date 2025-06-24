import React from 'react'

const HomeSkeleton = () => {
    return (
        <div className="flex h-screen bg-gray-100 dark:bg-green-950 animate-pulse text-black dark:text-white">
            {/* Sidebar Skeleton */}
            <aside className="w-64 bg-white dark:bg-green-900 p-6 rounded-xl shadow-md">
                <div className="h-6 bg-gray-300 dark:bg-green-700 rounded w-24 mb-6"></div>
                <div className="h-10 bg-gray-200 dark:bg-green-700 rounded mb-4"></div>

                <div className="space-y-4">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="h-5 bg-gray-200 dark:bg-green-700 rounded w-40"></div>
                    ))}
                </div>

                <div className="mt-10">
                    <div className="h-5 bg-gray-300 dark:bg-green-700 rounded w-24 mb-2"></div>
                    <div className="space-y-2">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="flex items-center space-x-2">
                                <div className="h-3 w-3 rounded-full bg-gray-400 dark:bg-green-600"></div>
                                <div className="h-4 bg-gray-200 dark:bg-green-700 rounded w-28"></div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-10 space-y-4">
                    <div className="h-5 bg-gray-200 dark:bg-green-700 rounded w-28"></div>
                    <div className="h-5 bg-gray-200 dark:bg-green-700 rounded w-24"></div>
                </div>
            </aside>

            {/* Main Content Skeleton */}
            <main className="flex-1 p-10">
                <div className="h-10 bg-gray-300 dark:bg-green-700 rounded w-1/3 mb-6"></div>

                <div className="space-y-4 max-w-2xl">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="h-4 bg-gray-200 dark:bg-green-700 rounded w-full"></div>
                    ))}
                </div>

                <div className="mt-10">
                    <div className="h-10 w-36 bg-gray-300 dark:bg-green-700 rounded"></div>
                </div>
            </main>
        </div>
    );
};

export default HomeSkeleton;
