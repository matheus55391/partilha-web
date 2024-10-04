/**
 * v0 by Vercel.
 * @see https://v0.dev/t/aqOHCgcz2P5
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh] bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-2xl text-center space-y-4">
        <h1 className="text-4xl font-bold  tracking-tight text-foreground sm:text-6xl">Partilha</h1>
        <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-xl">
          Divida suas contas facilmente com amigos!
        </h2>
        <p className="text-muted-foreground text-lg">
          Nosso aplicativo torna o compartilhamento de contas com amigos e familiares simples e intuitivo. Divida
          despesas, acompanhe pagamentos e mantenha suas finanças organizadas.
        </p>
        <div>
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            prefetch={false}
          >
            Começar Agora
          </Link>
        </div>
      </div>
    </div>
  )
}