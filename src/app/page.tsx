import { getGames } from '@/lib/api';
import Link from "next/link";

type PageProps = {
  searchParams?: { 
    page?: string; 
    limit?: string 
  };
}

export default async function Home({ searchParams }: PageProps) {

  const page = Number(searchParams?.page) || 1;
  const limit = Number(searchParams?.limit) || 10;

  const { 
    data, 
    metadata: { 
      pagination: { 
        previousPage, nextPage 
      }
    } 
  } = await getGames(page, limit);

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl my-4">Games</h1>

      <ul className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
        <li className="bg-gray-100 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
          <div className="flex">
            <div className="w-6/12 px-6 py-3">Name</div>
            <div className="w-2/12 px-6 py-3">Year</div>
            <div className="w-4/12 px-6 py-3">Publisher</div>
          </div>
        </li>

        {data ? data.map((item, idx) => (
          <li key={item.Game + idx} className="border-b bg-white last:border-b-0 dark:border-gray-700">
            <div className="flex">
              <div className="w-6/12 px-6 py-3">{item.Game}</div>
              <div className="w-2/12 px-6 py-3">{item.Year}</div>
              <div className="w-4/12 px-6 py-3">{item.Publisher}</div>
            </div>
          </li>
        )) : null}

      </ul>

      <div className="my-4 flex gap-4 w-full justify-end">
          <Link
            className="p-2 border border-slate-600 rounded-md"
            href={`?page=${ previousPage }&limit=${limit}`}
          >
            Previous
          </Link>
          <Link
            className="p-2 border border-slate-600 rounded-md"
            href={`?page=${ nextPage }&limit=${limit}`}
          >
            Next
          </Link>
      </div>

    </div>
  )
}