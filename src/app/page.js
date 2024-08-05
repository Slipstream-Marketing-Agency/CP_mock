import Link from "next/link";

export default function Home() {
  return (
    <main className=" font-gilroy m-2 p-1 text-base font-semibold grid gap-y-2 font-custom">
      <Link className="" href="/pages/insuranceCalculatorPage">
        Insurance Calculator
      </Link>
      <Link className="" href="/pages/carLoanCalculatorPage">
        Car Loan Calculator
      </Link>
      <Link className="" href="/pages/compareCars">
        Compare Cars
      </Link>
      <Link className="" href="/pages/news-reviews-page">
        News & Reviews
      </Link>
    </main>
  );
}
