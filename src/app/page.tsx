import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="custom-grey dark:bg-blue-800 rounded-lg shadow-md p-4 flex flex-col gap-4">
          <h1>This is a Test </h1>
          <p className="text-gray-700 dark:text-gray-300">
            This is a test of the Next.js application with Tailwind CSS and
            custom fonts.
          </p>
          <button className="bg-red-500 text-white px-4 py-2 rounded">
            Click Me
          </button>
        </div>
       
      </main>
    </div>
  );
}
