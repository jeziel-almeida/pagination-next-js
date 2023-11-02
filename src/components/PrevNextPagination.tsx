import Link from 'next/link'
import React from 'react'

interface PrevNextPaginationProps {
    previousPage: number;
    nextPage: number;
    limit: number;
}

const PrevNextPagination = ({ previousPage, nextPage, limit }: PrevNextPaginationProps) => {
    return (
        <div className="my-4 flex gap-4 w-full justify-end">
            <Link
                className="p-2 border border-slate-600 rounded-md"
                href={`?page=${previousPage}&limit=${limit}`}
            >
                Previous
            </Link>
            <Link
                className="p-2 border border-slate-600 rounded-md"
                href={`?page=${nextPage}&limit=${limit}`}
            >
                Next
            </Link>
        </div>
    )
}

export default PrevNextPagination