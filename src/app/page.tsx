import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* White background section */}
      <div className="grid items-center justify-items-center h-[750px] bg-white">
        <main className="grid grid-cols-6 grid-rows-4 gap-4 w-full max-w-7xl p-4 pt-8 h-[700px] bg-neutral-800 rounded-3xl">
          <div className="col-span-2 row-span-2 bg-neutral-900 rounded-3xl">
            <h1 className="text-4xl text-white font-bold">Jose Nunez</h1>
          </div>

          <div className="col-span-2 row-span-1 bg-neutral-900 rounded-3xl text-center">
            <p className="text-lg text-white">Software Engineer</p>
          </div>

          <div className="col-span-2 row-span-5 bg-neutral-900 h-full rounded-3xl text-center">
            <p className="text-lg text-white">Full Stack Developer</p>
          </div>

          <div className="col-span-2 row-span-2 bg-neutral-900 rounded-3xl text-center">
            <p className="text-lg text-white">Web Developer</p>
          </div>

          <div className="col-span-2 row-span-3 bg-neutral-900 rounded-3xl text-center">
            <p className="text-lg text-white">Mobile Developer</p>
          </div>

          <div className="col-span-2 row-span-2 bg-neutral-900 rounded-3xl text-center">
            <p className="text-lg text-white">Mobile Development</p>
          </div>
        </main>
      </div>

      {/* Black background section */}
      <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full max-w-7xl mx-auto p-4 mt-4 h-[400px] bg-neutral-800 rounded-3xl">
        <div className="bg-neutral-900 rounded-3xl flex items-center justify-center text-white text-lg">Box 1</div>
        <div className="bg-neutral-900 rounded-3xl flex items-center justify-center text-white text-lg">Box 2</div>
        <div className="bg-neutral-900 rounded-3xl flex items-center justify-center text-white text-lg">Box 3</div>
        <div className="bg-neutral-900 rounded-3xl flex items-center justify-center text-white text-lg">Box 4</div>
      </div>
    </div>
  );
}




