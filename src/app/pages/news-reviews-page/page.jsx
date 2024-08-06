import Image from "next/image";
import PopularTags from "../../components/news-reviews-page/popularTags/popularTags";
import ThisWeek from "../../components/news-reviews-page/thisWeek/ThisWeek";
import AdSection from "../../components/news-reviews-page/adSection/AdSection";
import NewsReviewsSection from "../../components/news-reviews-page/news-reviews-section/NewsReviewsSection";
import Categories from "../../components/news-reviews-page/categories/Categories";
import sidebarAd1 from "../../../../public/newspage-sidebar-ad1.png";
import sidebarAd2 from "../../../../public/newspage-sidebar-ad2.png";

function NewsReviewsPage() {
  return (
    <div>
      <section>
        <hr />
        <div className="grid sm:grid-cols-12 py-2  px-6 sm:px-24 md:px-16  lg:px-40">
          <div className="sm:col-span-12 flex items-center">
            <Image
              src={"/carLoanPage/home-icon.svg"}
              alt="home-icon"
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              src={"/carLoanPage/arrow-right.svg"}
              alt="home-icon"
              width={5}
              height={5}
              className="mx-3"
            />
            <div className=" font-base text-sm text-gray-500">News</div>
          </div>
        </div>
        <hr />
      </section>
      <section>
        <div className="sm:grid gap-20 grid-cols-4 px-3 my-6 sm:px-24 md:px-16  lg:px-40">
          <div className="sm:col-span-3 space-y-6">
            <NewsReviewsSection />
            <Categories />
          </div>
          <div className="hidden sm:block sm:col-span-1 space-y-6">
            <PopularTags />
            <AdSection image={sidebarAd1} />
            <ThisWeek />
            <AdSection image={sidebarAd2} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default NewsReviewsPage;
