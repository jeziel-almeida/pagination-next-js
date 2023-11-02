import Link from 'next/link';
import React from 'react'

interface NumberPaginationProps {
    currentPage: number;
    lastPage: number;
    limit: number;
}

const generatePagination = (current: number, total: number) => {

    const sides = 2;

    let pages = [];
    let start = Math.max(current - sides, 1);
    let end = Math.min(current + sides, total);

    for(let i = start; i <= end; i++) {
        pages.push(i);
    }

    return pages;

}

const NumberPagination = ({ currentPage, lastPage, limit }: NumberPaginationProps) => {

    const pages = generatePagination(currentPage, lastPage);

    const baseStyles = "flex h-10 w-[6ch] items-center bg-white text-gray-500 justify-center border-x border-gray-400 px-4 leading-tight hover:bg-gray-100 hover:text-gray-700 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white";

    return (
        <div className='my-4 flex gap-4'>
            <ul className='w-full flex justify-center h-10 -space-x-px text-base'>
                {pages.map((page) => {     
                        return (
                            <li key={page}>
                                <Link
                                    className={`${baseStyles} ${
                                        currentPage === page
                                            ? 'text-gray-900 dark:text-indigo-400'
                                            : 'text-gray-500 dark:text-gray-400'
                                    }`}
                                    href={`?page=${page}&limit=${limit}`}
                                >
                                    {page}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default NumberPagination