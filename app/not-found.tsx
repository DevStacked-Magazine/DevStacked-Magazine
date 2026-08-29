"use client";
import Link from "next/link";

function NotFound() {
  return (
    <div className="sheet-grid relative flex min-h-screen w-full items-center justify-center px-5">
      <div className="sheet relative w-full max-w-2xl p-8 sm:p-12">
        <p className="meta-label text-red-active">Error 404</p>
        <h1 className="h-display mt-5 text-4xl text-ink sm:text-6xl">
          Page missing
          <br />
          <span className="text-ink-dim">from this site.</span>
        </h1>
        <p className="mt-6 max-w-md text-base leading-7 text-ink-dim">
          The page you asked for is not here. It may have moved, or the address
          was mistyped.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Link href="/" className="btn-ink">
            Back home
          </Link>
          <button
            type="button"
            onClick={() => window.history.back()}
            className="btn-line"
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
