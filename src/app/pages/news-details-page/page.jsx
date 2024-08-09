import Image from "next/image";
import ThisWeek from "../../components/news-reviews-page/thisWeek/ThisWeek";
import AdSection from "../../components/news-reviews-page/adSection/AdSection";
import MainSection from "../../components/news-details-page/mainSection/MainSection";
import sidebarAd1 from "../../../../public/newspage-sidebar-ad1.png";
import sidebarAd2 from "../../../../public/newspage-sidebar-ad2.png";
import NewsFeeds from "../../components/news-reviews-page/newsFeeds/NewsFeeds";
import CarTypeSection from "../../components/news-details-page/carTypeSection/CarTypeSection";
function NewsDetailsPage() {
  return (
    <div>
      <section>
        <hr />
        <div className=" flex items-center py-2 px-6 sm:px-24 md:px-16  lg:px-40">
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
          <div className=" font-base  text-xs sm:text-sm text-gray-500">
            News
          </div>
          <Image
            src={"/carLoanPage/arrow-right.svg"}
            alt="home-icon"
            width={5}
            height={5}
            className="mx-3"
          />
          <div className="truncate font-semibold text-xs sm:text-sm">All-New Geely Starray Launched in UAE at AED 84,900 !</div>
        </div>
        <hr />
      </section>
      <section>
        <div className="sm:grid gap-20 grid-cols-4 px-3 my-6 sm:px-24 md:px-16  lg:px-40">
          <div className="sm:col-span-3 space-y-6">
            <MainSection />
            <div>
              <div className=" text-heading-blue font-semibold text-xs uppercase leading-5 tracking-wider">Trending automotive news</div>
              <div className="flex items-center justify-between font-semibold mt-1">
                <div className="capitalize  text-lg sm:text-xl">Latest Automotive News</div>
                <div className="sm:mr-6 text-xs sm:text-sm">View more</div>
              </div>
            </div>
            <NewsFeeds />
          </div>
          <div className="hidden sm:block sm:col-span-1 space-y-6">
            <ThisWeek />
            <AdSection image={sidebarAd1} />
            <CarTypeSection />
            <AdSection image={sidebarAd2} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default NewsDetailsPage;
