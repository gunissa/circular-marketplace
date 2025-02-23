import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          src="/logo.png" 
          alt="Circular Marketplace Logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-2xl font-bold">Welcome to Circular Marketplace</h1>
        <p className="text-center sm:text-left">
          Share and discover items to promote sustainability and reduce waste.
        </p>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-blue-500 text-white gap-2 hover:bg-blue-600 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/items"
          >
            Explore Items
          </a>
          <a
            className="rounded-full border border-solid border-gray-300 transition-colors flex items-center justify-center hover:bg-gray-200 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/add-item"
          >
            Share an Item
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p className="text-sm text-gray-500">
          &copy; 2025 Circular Marketplace. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
