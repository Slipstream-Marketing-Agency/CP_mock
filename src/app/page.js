import Link from "next/link";

export default function Home() {
  return (
    <main className=" font-gilroy m-2 p-1 text-xl font-semibold grid gap-y-4">
      <Link className="" href="/pages/insuranceCalculatorPage">
        Insurance Calculator Page
      </Link>
      <Link className="" href="/pages/carLoanCalculatorPage">
        Car Loan Calculator Page
      </Link>
    </main>
  );
}
