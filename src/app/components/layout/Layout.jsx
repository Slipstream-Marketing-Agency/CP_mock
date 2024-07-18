import React from 'react'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import InsuranceQuote from '../insuranceQuote/InsuranceQuote';
import RecommendationDiv from '../recommendationDiv/RecommendationDiv';
import ChooseYourBrand from '../chooseYourBrand/ChooseYourBrand';
import DimensionSection from '../dimensionsSection/DimensionSection';
import ComparisonSection from '../comparisonSection/ComparisonSection';
import Sidebar2 from '../sidebar2/Sidebar2';
import SideBar1 from '../sidebar1/Sidebar1';

function Layout() {
    return (
        <div>
            <Header />
            <div className="p-4">
                <div className='m-4 grid gap-4 sm:grid-cols-12'>
                    <div className='min-h-[100px] rounded-lg sm:col-span-3 mx-6 sm:block hidden'>
                        <SideBar1 />
                        <Sidebar2 />
                        <SideBar1 />
                    </div>
                    <div className=" rounded-lg sm:col-span-9">
                        <InsuranceQuote />
                        <RecommendationDiv />
                        <ChooseYourBrand />
                        <DimensionSection />
                        <ComparisonSection />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Layout;