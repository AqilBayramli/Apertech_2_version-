import { useEffect } from "react";

// Same look as the default Next.js 404 page.
export default function NotFound() {
  useEffect(() => {
    document.title = "404: This page could not be found.";
  }, []);

  return (
    <div className="flex h-[60vh] flex-col items-center justify-center text-center">
      <div className="flex items-center">
        <h1 className="mr-5 inline-block border-r border-black/30 pr-6 align-top text-2xl font-medium leading-[49px]">404</h1>
        <h2 className="text-sm font-normal leading-[49px]">This page could not be found.</h2>
      </div>
    </div>
  );
}
