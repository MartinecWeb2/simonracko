import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex min-h-[70dvh] items-center justify-center px-6 pt-28">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-violet/90">
            404
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold text-white md:text-6xl">
            Stránka neexistuje.
          </h1>
          <p className="mt-4 text-muted">
            Odkaz je neplatný nebo byl přesunut.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex h-12 items-center rounded-full bg-white px-6 text-sm font-medium text-black"
          >
            Zpět na úvod
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
