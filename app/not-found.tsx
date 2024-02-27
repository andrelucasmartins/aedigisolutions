import Link from "next/link";

export default async function NotFound() {

  return (
    <main className="grid place-items-center  px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-5xl font-semibold text-indigo-600">404</p>
        <h1 className="mt-4 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl">
          Página não encontrada
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-300">
          Desculpe, mas não podemos encontrar a página que você está procurando.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Voltar a página inicial
          </Link>
          <Link
            href="/contact"
            className="text-sm font-semibold text-gray-900 dark:text-gray-200"
          >
            Contactar o suporte <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
