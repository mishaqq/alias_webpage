import React, { useState } from "react";
import {
  Star,
  Zap,
  Shield,
  SmartphoneNfc,
  Instagram,
  Github,
  BookA,
  Languages,
  Sparkles,
} from "lucide-react";
import { Button } from "./components/Button";
import { FeatureCard } from "./components/FeatureCard";
import { PhoneMockup } from "./components/PhoneMockup";
import LogoIcon from "/assets/logov3.svg";
import RedditIcon from "/assets/reddit.svg";
import RedditEmbed from "./components/RedditEmbed";
import AdditionalContentExample from "./components/Alert";

function App() {
  // State to control alert visibility
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div className="min-h-screen bg-[#3468C0] font-sans overflow-x-hidden">
      {/* Hero Section */}
      <header className="container mx-auto px-4 pt-8 pb-20">
        <nav className="flex justify-between items-center py-6">
          <div className="flex items-center gap-2">
            <img src={LogoIcon} alt="Custom Icon" className="w-12 h-12" />
          </div>
          {/* Buttons moved to the left */}
          <div className="flex gap-2">
            <Button
              icon={Instagram}
              variant="link"
              onClick={() => {
                window.open("https://www.instagram.com/m1ka_qq/", "_blank");
              }}
              children={undefined}
            />
            <Button
              icon={Github}
              variant="link"
              children={undefined}
              onClick={() =>
                window.open("https://github.com/mishaqq", "_blank")
              }
            />
          </div>
        </nav>

        <section className="mt-20 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-wide">
              Аліас Українською
            </h1>
            <p className="text-white/80 text-xl mb-8 max-w-2xl">
              Напружте свої мізки, щоб пояснювати слова і фрази. Киньте виклик
              друзям та з'ясуйте хто тут мовний експерт. Але ні в якому разі не
              використовуйте однокореневі слова.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                className="bg-black hover:bg-gray-900"
                variant="store"
                onClick={() => setShowAlert(true)}
              >
                <svg viewBox="0 0 384 512" className="w-5 h-5 fill-current">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                </svg>
                Скачати для iOS
              </Button>
              <Button
                className="bg-black hover:bg-gray-900"
                variant="store"
                onClick={() => setShowAlert(true)} // Show alert when clicked
              >
                <svg viewBox="0 0 576 512" className="w-5 h-5 fill-current">
                  <path d="M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10h0l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55" />
                </svg>
                Завантажити для Android
              </Button>
            </div>
            {showAlert && (
              <p className="text-white/80 text-xl  max-w-2xl mt-4">
                Зараз у закритому тесті. Пишіть мені у реддіті чи інстаграмі,
                хто хоче допомгти тестувати!
              </p>
            )}
            <div className="mt-6 flex items-center justify-center lg:justify-start gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#FFAE00] text-[#FFAE00]"
                  />
                ))}
              </div>
              <span className="text-white/80">100+ Відгуків</span>
            </div>
          </div>

          <PhoneMockup />
        </section>
      </header>

      {/* Features Section */}
      <section className="bg-[#2a549a] py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={BookA}
              title="Великий вибір словників"
              description="Сумарно 2000+ слів включно з мемними фразами, молодіжним сленгом та забутими українськими словами."
            />
            <FeatureCard
              icon={Languages}
              title="Підтримка двух мов"
              description="В грі зараз є можлтвість вибирати між українською та англійською мовами."
            />
            <FeatureCard
              icon={Sparkles}
              title="Гарний та функціональний дизайн"
              description="Приємний для ока дизайн, який заохочує повертатися до гри."
            />
          </div>
        </div>
      </section>

      <section className="mt-20 flex flex-col lg:flex-col items-center gap-6 pb-10 pt-10">
        <div className="flex items-start gap-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight tracking-wide">
            Обговорення з
          </h2>
          <img src={RedditIcon} alt="Custom Icon" className="w-12 h-12" />
        </div>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <RedditEmbed url="https://www.reddit.com/r/Ukraine_UA/comments/1gptxuw/%D1%8F_%D1%80%D0%BE%D0%B7%D1%80%D0%BE%D0%B1%D0%BD%D0%B8%D0%BA_%D1%96%D0%BD%D0%B4%D1%96_%D0%B3%D1%80%D0%B8_%D1%83%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D1%81%D1%8C%D0%BA%D0%BE%D1%8E_%D0%BF%D0%BE%D1%82%D1%80%D1%96%D0%B1%D0%BD%D0%B0_%D0%B2%D0%B0%D1%88%D0%B0/" />
            <RedditEmbed url="https://www.reddit.com/r/ukraine_dev/comments/1gptml4/%D1%8F_%D1%80%D0%BE%D0%B7%D1%80%D0%BE%D0%B1%D0%BD%D0%B8%D0%BA_%D1%96%D0%BD%D0%B4%D1%96_%D0%B3%D1%80%D0%B8_%D1%83%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D1%81%D1%8C%D0%BA%D0%BE%D1%8E_%D0%BF%D0%BE%D1%82%D1%80%D1%96%D0%B1%D0%BD%D0%B0_%D0%B2%D0%B0%D1%88%D0%B0/" />
            <RedditEmbed url="https://www.reddit.com/r/reddit_ukr/comments/1gep2kn/%D1%8F_%D1%80%D0%BE%D0%B7%D1%80%D0%BE%D0%B1%D0%BD%D0%B8%D0%BA_%D1%96%D0%BD%D0%B4%D1%96_%D0%B3%D1%80%D0%B8_%D1%83%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D1%81%D1%8C%D0%BA%D0%BE%D1%8E_%D1%82%D1%80%D0%B5%D0%B1%D0%B0_%D0%B2%D0%B0%D1%88_%D1%84%D1%96%D0%B4%D0%B1%D0%B5%D0%BA/" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
