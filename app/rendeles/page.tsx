import OrderForm from "../OrderForm";

export default function RendelesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-8 md:p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex flex-col">
        <h1 className="text-4xl font-bold text-center mb-12">Rendelés</h1>
        <OrderForm />
      </div>
      <div className="mt-12 text-center text-base text-gray-700">
        <div className="mb-2 font-semibold">Elérhetőségek:</div>
        <div>
          <span className="font-bold">jelvenyrendeles@gmail.com</span> &nbsp;|&nbsp; <span className="font-bold">+36-30-3829773</span> &nbsp;|&nbsp; <span className="font-bold">jelvenydepo@gmail.com</span>
        </div>
        <div className="mt-4">Tibor és Ildikó</div>
      </div>
    </main>
  );
}
