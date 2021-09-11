import React from "react";
import { classNames } from "shared/function";
import SettingIcon from "assets/imgs/icon/settings.png";
import LandloadIcon from "assets/imgs/icon/landlord.png";
import balanceIcon from "assets/imgs/icon/balance.png";
import SearchIcon from "assets/imgs/icon/search.png";
import TeamIcon from "assets/imgs/icon/team.png";
import ProgressIcon from "assets/imgs/icon/progress.png";
import InstructionIcon from "assets/imgs/icon/instructions.png";
import Bg1 from "assets/imgs/background/team-building-630x315.jpg";
import Bg2 from "assets/imgs/background/MAG-Top10-00-775x500.jpg";
import Bg3 from "assets/imgs/background/blog-010319.jpg";

const areaItem = [
  {
    icon: SettingIcon,
    text: "Setup property listing with optimized settings",
    bg: "bg-gray-100",
  },
  {
    icon: LandloadIcon,
    text: "Hosting core concepts",
    bg: "bg-gray-300",
  },
  {
    icon: balanceIcon,
    text: "Creating a “Lifestyle Business” concepts",
    bg: "bg-gray-100",
  },
  {
    icon: SearchIcon,
    text: "Behind the scenes from our properties",
    bg: "bg-gray-300",
  },
  {
    icon: TeamIcon,
    text: "Build an outsourcing team",
    bg: "bg-gray-100",
  },
  {
    icon: ProgressIcon,
    text: "Scale up your business",
    bg: "bg-gray-300",
  },
];

export default function Example() {
  return (
    <div>
      <div className="max-w-5xl mx-auto py-16 px-5">
        <span className="text-3xl font-extrabold tracking-tight text-gray-900">What makes Airbnb so profitable?</span>
        <div className="pt-5">
          <span className="text-gray-600">
            Is your goal to earn more income in 2021? Can you believe how fast last year went by? If increasing your income while
            decreasing your work time is one of them, then look no further this course is your ticket!
          </span>
        </div>
        <div className="py-2">
          <span className="text-gray-600">
            You can start learning the proven methods we have used for the past 2 years to earn over $10,000 a month,
            that`&apos;`s over $100,000 a year. The infamous 6 figures everyone chases!
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 py-10 text-gray-600">
          <div>
            <img src={Bg1} className="w-full h-auto object-cover" />
            <div className="p-5">
              <span>
                This business requires very little time which gives you something more precious than money…TIME FREEDOM! Think
                about what you could do if you had that? You could spend more time with your family, travel, or finally pursue
                that passion you have always wanted to.
              </span>
            </div>
            <img src={Bg2} className="w-full h-auto object-cover" />
          </div>
          <div>
            <div className="p-5 w-full h-auto">
              <span>
                We are creating a real community of online entrepreneurs. With Airbnb becoming a first choice over Hotel stays, it
                gives you an opportunity to make profit for your Vacation Property! This course will show you how to make money
                from other people`&apos;`s properties without the risk of having to pay a closing cost for owning.
              </span>
            </div>
            <img src={Bg3} className="w-full h-auto object-cover my-5 md:my-10" />
            <div className="p-5 w-full h-auto">
              <span>
                Be one of the students to enroll and learn all of my closely guarded secrets! Am I going to guarantee you
                overnight success? Absolutely not, that would be unrealistic, we`&apos;`re all mature enough to know that there
                are no guarantees in life. Anyone promising that is lying. This is a real business that requires real work that
                can take months to even a year to produce the income you`&apos;`re looking for Here is what I can promise you…
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="text-center py-5">
            <span className="text-3xl font-extrabold tracking-tight text-gray-900">What you’ll learn and get</span>
            <div className="py-3 px-5">
              <span>
                If you `&apos;`re coach-able with a good attitude, a willingness to work, and you follow my system you will earn
                <br /> income. Even after your first 90 days the profits can be awesome!
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-gray-600">
            {areaItem.map((item, index) => (
              <div key={index} className={classNames(item.bg, "py-12 px-16 flex items-center justify-between")}>
                <img src={item.icon} className="h-16 w-16 mr-3" />
                <div className="text-center">
                  <span>{item.text}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-gray-100 py-12 px-16 flex items-center justify-center text-gray-600">
            <img src={InstructionIcon} className="h-16 w-16 mr-3" />
            <div className="text-center">
              <span>
                Complete guide on every aspect
                <br /> of the business
              </span>
            </div>
          </div>
          <div className="text-center my-5">
            <a
              href=" https://legendaryestatesairbnb.teachable.com/purchase?product_id=3392803"
              target="_blank"
              className="bg-red-500 py-3 px-8 text-white rounded-md"
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
