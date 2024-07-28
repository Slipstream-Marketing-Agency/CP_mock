import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen font-gilroy m-2 p-1 text-xl font-semibold">
      <Link className="m-4" href="/pages/insuranceCalculatorPage">
        Insurance Calculator Page
      </Link>
      <Link className="m-4" href="/pages/carLoanCalculatorPage">
        Car Loan Calculator Page
      </Link>
    </main>
  );
}
