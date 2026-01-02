"use client";

import { Suspense, useState } from "react";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/theme-provider";
import LazyBeams from "./components/LazyBeams";
import ExperienceCard from "./components/ExperienceCard";
import { useLanguage } from "@/lib/useLanguage";

export default function Home() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ nom: "", prenom: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main>
      <ThemeProvider>
        <div className="relative h-screen">
          <div className="absolute inset-0 w-full h-full -z-10">
            <Suspense
              fallback={
                <div className="absolute inset-0 w-full h-full bg-[#dddddd] dark:bg-[#070707]" />
              }
            >
              <LazyBeams
                beamWidth={3}
                beamHeight={25}
                beamNumber={10}
                speed={2}
                noiseIntensity={2}
                scale={0.2}
                rotation={30}
              />
            </Suspense>
          </div>

          <Navbar />

          <div className="absolute bottom-8 left-8 flex flex-col gap-3">
            <a
              href="https://www.linkedin.com/in/hitalikothari/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 flex items-center justify-center text-gray-900 dark:text-white hover:opacity-60 transition-opacity duration-300"
              aria-label="LinkedIn"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="mailto:hitalikothari@gmail.com"
              className="w-6 h-6 flex items-center justify-center text-gray-900 dark:text-white hover:opacity-60 transition-opacity duration-300"
              aria-label="Email"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="envelope"
                className="svg-inline--fa fa-envelope w-5 h-5"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                ></path>
              </svg>
            </a>
          </div>

          <div
            className="flex h-full flex-col items-center justify-center p-24"
            role="main"
            aria-label="Main content"
          >
            <div className="relative mb-8">
              <svg
                className="absolute top-3 left-1/2 -translate-x-1/2 -z-10 h-[6rem] w-auto max-w-[95vw] md:hidden"
                viewBox="0 0 700 150"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient
                    id="strokeGradientMobileLight"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="60%" stopColor="#191919" stopOpacity="0" />
                    <stop offset="100%" stopColor="#191919" stopOpacity="1" />
                  </linearGradient>
                  <linearGradient
                    id="strokeGradientMobileDark"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
                  </linearGradient>
                </defs>
                <style>{`
                  .text-name-mobile { stroke: url(#strokeGradientMobileLight); }
                  @media (prefers-color-scheme: dark) {
                    .dark .text-name-mobile { stroke: url(#strokeGradientMobileDark); }
                  }
                  .dark .text-name-mobile { stroke: url(#strokeGradientMobileDark); }
                `}</style>
                <text
                  x="50%"
                  y="50%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  className="text-name-mobile font-bold"
                  fill="transparent"
                  strokeWidth="2"
                  style={{ fontSize: "80px", fontFamily: "inherit" }}
                >
                  Hitali Kothari
                </text>
              </svg>
              <svg
                className="absolute top-7 left-1/2 -translate-x-1/2 -z-10 h-[8rem] hidden md:block lg:hidden"
                viewBox="0 0 900 150"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient
                    id="strokeGradientTablet"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop
                      offset="60%"
                      stopColor="currentColor"
                      stopOpacity="0"
                    />
                    <stop
                      offset="100%"
                      stopColor="currentColor"
                      stopOpacity="1"
                    />
                  </linearGradient>
                </defs>
                <text
                  x="50%"
                  y="50%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  className="font-bold fill-transparent"
                  stroke="url(#strokeGradientTablet)"
                  strokeWidth="2"
                  style={{ fontSize: "100px", fontFamily: "inherit" }}
                >
                  Hitali Kothari
                </text>
              </svg>
              <svg
                className="absolute top-12 left-1/2 -translate-x-1/2 -z-10 h-[9rem] hidden lg:block"
                viewBox="0 0 900 150"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient
                    id="strokeGradientDesktop"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop
                      offset="60%"
                      stopColor="currentColor"
                      stopOpacity="0"
                    />
                    <stop
                      offset="100%"
                      stopColor="currentColor"
                      stopOpacity="1"
                    />
                  </linearGradient>
                </defs>
                <text
                  x="50%"
                  y="50%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  className="font-bold fill-transparent"
                  stroke="url(#strokeGradientDesktop)"
                  strokeWidth="2"
                  style={{ fontSize: "120px", fontFamily: "inherit" }}
                >
                  Hitali Kothari
                </text>
              </svg>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-center relative z-10 whitespace-nowrap">
                Hitali Kothari
              </h1>
            </div>

            <a
              href={`#${t.sections.about}`}
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector(`#${t.sections.about}`)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="absolute bottom-12 left-1/2 -translate-x-1/2 group"
              aria-label="Scroll"
            >
              <svg
                className="w-6 h-6 text-gray-900 dark:text-white opacity-60 group-hover:opacity-100 transition-all duration-300 ease-out group-hover:translate-y-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
          </div>
        </div>

        <section
          id={t.sections.about}
          className="pt-32 pb-8 bg-gray-50 dark:bg-[#121212]"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-12">
            <div className="mb-16 sm:mb-20">
              <div className="flex items-end gap-6 sm:gap-8">
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white whitespace-nowrap">
                  {t.about.title}
                </h2>
                <div className="h-[3px] w-full bg-gray-900/30 dark:bg-white/30 mb-2"></div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
              <div className="flex-shrink-0 w-full md:w-auto">
                <div className="relative w-full h-80 sm:w-72 sm:h-[22rem] sm:mx-auto md:mx-0 rounded-[1.5rem] overflow-hidden group">
                  <Image
                    src="/hitali.jpg"
                    alt="Hitali Kothari"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 288px"
                    priority
                  />
                </div>
              </div>

              <div className="flex-1">
                <div className="mb-6">
                  <h3 className="text-3xl sm:text-4xl font-medium text-gray-900 dark:text-white">
                    Hitali
                  </h3>
                  <h4 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white">
                    Kothari
                  </h4>
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
                  <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#e5e5e5]/80 dark:bg-[#2a2a2a]/80 rounded-full text-xs sm:text-sm font-medium text-[#191919] dark:text-white transition-colors">
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#191919] dark:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {t.about.tags.location}
                  </span>
                  <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#e5e5e5]/80 dark:bg-[#2a2a2a]/80 rounded-full text-xs sm:text-sm font-medium text-[#191919] dark:text-white transition-colors">
                    {t.about.tags.finance}
                  </span>
                  <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#e5e5e5]/80 dark:bg-[#2a2a2a]/80 rounded-full text-xs sm:text-sm font-medium text-[#191919] dark:text-white transition-colors">
                    {t.about.tags.economics}
                  </span>
                  <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#e5e5e5]/80 dark:bg-[#2a2a2a]/80 rounded-full text-xs sm:text-sm font-medium text-[#191919] dark:text-white transition-colors">
                    {t.about.tags.analysis}
                  </span>
                </div>

                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-3xl leading-relaxed mb-6">
                  {t.about.description}
                </p>

                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 italic max-w-3xl leading-relaxed mb-12">
                  {t.about.quote}
                </p>

                <div className="mb-8">
                  <h5 className="text-2xl sm:text-3xl font-bold mb-6 text-[#191919] dark:text-white">
                    {t.about.education.title}
                  </h5>
                  <div className="relative space-y-6">
                    <div
                      className="absolute left-[7px] bottom-0 w-[2px] bg-[#191919] dark:bg-white"
                      style={{ height: "calc(100% - 2rem)" }}
                    ></div>
                    <div className="absolute left-[7px] top-0 w-[2px] bg-gray-300 dark:bg-gray-700 h-8"></div>

                    <div className="relative pl-8">
                      <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-700 border-[3px] border-[#191919] dark:border-white"></div>
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <h6 className="text-lg font-bold text-[#191919] dark:text-white uppercase">
                            {t.about.education.beloit.location}
                          </h6>
                          <p className="text-base font-medium text-gray-700 dark:text-gray-300">
                            {t.about.education.beloit.degree}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {t.about.education.beloit.details}
                          </p>
                        </div>
                        <span className="text-sm italic text-gray-600 dark:text-gray-400 whitespace-nowrap flex-shrink-0">
                          {t.about.education.beloit.date}
                        </span>
                      </div>
                    </div>

                    <div className="relative pl-8">
                      <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-[#191919] dark:bg-white"></div>
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <h6 className="text-lg font-bold text-[#191919] dark:text-white uppercase">
                            {t.about.education.lingnan.location}
                          </h6>
                          <p className="text-base font-medium text-gray-700 dark:text-gray-300">
                            {t.about.education.lingnan.degree}
                          </p>
                        </div>
                        <span className="text-sm italic text-gray-600 dark:text-gray-400 whitespace-nowrap flex-shrink-0">
                          {t.about.education.lingnan.date}
                        </span>
                      </div>
                    </div>

                    <div className="relative pl-8">
                      <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-[#191919] dark:bg-white"></div>
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <h6 className="text-lg font-bold text-[#191919] dark:text-white uppercase">
                            {t.about.education.highschool.location}
                          </h6>
                          <p className="text-base font-medium text-gray-700 dark:text-gray-300">
                            {t.about.education.highschool.degree}
                          </p>
                        </div>
                        <span className="text-sm italic text-gray-600 dark:text-gray-400 whitespace-nowrap flex-shrink-0">
                          {t.about.education.highschool.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center lg:justify-start">
                  <a
                    href={t.about.cvLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#191919] dark:bg-white text-white dark:text-[#191919] rounded-lg text-base font-semibold hover:opacity-80 transition-opacity duration-300"
                  >
                    {t.about.viewCV}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-external-link-icon lucide-external-link"
                    >
                      <path d="M15 3h6v6" />
                      <path d="M10 14 21 3" />
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id={t.sections.featured}
          className="pt-32 pb-8 bg-gray-50 dark:bg-[#121212]"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-12">
            <div className="mb-16 sm:mb-20">
              <div className="flex items-end gap-6 sm:gap-8">
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white whitespace-nowrap">
                  {t.featured.title}
                </h2>
                <div className="h-[3px] w-full bg-gray-900/30 dark:bg-white/30 mb-2"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {t.featured.items.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white dark:bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:bg-gray-50 dark:hover:bg-[#222222] transition-all duration-300 group"
                >
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-xs font-medium">
                            {item.source}
                          </span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-[#191919] dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {item.title}
                        </h3>
                      </div>
                      <svg
                        className="w-6 h-6 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <span className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        {item.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                        By {item.author}
                      </span>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section
          id={t.sections.experience}
          className="pt-32 pb-8 bg-gray-50 dark:bg-[#121212]"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-12">
            <div className="mb-16 sm:mb-20">
              <div className="flex items-end gap-6 sm:gap-8">
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white whitespace-nowrap">
                  {t.experience.title}
                </h2>
                <div className="h-[3px] w-full bg-gray-900/30 dark:bg-white/30 mb-2"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.experience.experiences.map((exp) => (
                <ExperienceCard
                  key={exp.id}
                  title={exp.title}
                  company={exp.company}
                  type={exp.type}
                  date={exp.date}
                  location={exp.location}
                  description={exp.description}
                  skills={exp.skills}
                />
              ))}
            </div>
          </div>
        </section>

        <section
          id={t.sections.research}
          className="pt-32 pb-8 bg-gray-50 dark:bg-[#121212]"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-12">
            <div className="mb-16 sm:mb-20">
              <div className="flex items-end gap-6 sm:gap-8">
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white whitespace-nowrap">
                  {t.research.title}
                </h2>
                <div className="h-[3px] w-full bg-gray-900/30 dark:bg-white/30 mb-2"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {t.research.papers.map((paper) => (
                <div
                  key={paper.id}
                  className="bg-white dark:bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:bg-gray-50 dark:hover:bg-[#222222] transition-all duration-300 group"
                >
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <div className="flex items-start gap-3 mb-2">
                          <svg
                            className="w-6 h-6 text-[#191919] dark:text-white flex-shrink-0 mt-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                          <h3 className="text-xl md:text-2xl font-bold text-[#191919] dark:text-white">
                            {paper.title}
                          </h3>
                        </div>
                        <p className="text-lg font-medium text-gray-700 dark:text-gray-300 ml-9">
                          {paper.institution}
                        </p>
                      </div>
                      <span className="px-3 py-1 bg-[#e5e5e5]/80 dark:bg-[#2a2a2a]/80 rounded-full text-xs font-medium text-[#191919] dark:text-white whitespace-nowrap self-start">
                        {paper.type}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4 ml-9">
                      <span className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        {paper.date}
                      </span>
                      {paper.supervisor && (
                        <span className="flex items-center gap-1">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                          {paper.supervisor}
                        </span>
                      )}
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed mb-6 ml-9">
                      {paper.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6 ml-9">
                      {paper.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 dark:bg-[#2a2a2a] text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="ml-9">
                      <a
                        href={paper.pdfLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#191919] dark:bg-white text-white dark:text-[#191919] rounded-lg text-sm font-semibold hover:opacity-80 transition-opacity duration-300"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                        View Paper (PDF)
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id={t.sections.financePrograms}
          className="pt-32 pb-8 bg-gray-50 dark:bg-[#121212]"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-12">
            <div className="mb-16 sm:mb-20">
              <div className="flex items-end gap-6 sm:gap-8">
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white whitespace-nowrap">
                  {t.financePrograms.title}
                </h2>
                <div className="h-[3px] w-full bg-gray-900/30 dark:bg-white/30 mb-2"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.financePrograms.programs.map((program) => (
                <ExperienceCard
                  key={program.id}
                  title={program.title}
                  company={program.company}
                  type={program.type}
                  date={program.date}
                  location={program.location}
                  description={program.description}
                  skills={program.skills}
                />
              ))}
            </div>
          </div>
        </section>

        <section
          id={t.sections.contact}
          className="pt-32 pb-24 bg-gray-50 dark:bg-[#121212]"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-12">
            <div className="mb-16 sm:mb-20">
              <div className="flex items-end gap-6 sm:gap-8">
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white whitespace-nowrap">
                  {t.contact.title}
                </h2>
                <div className="h-[3px] w-full bg-gray-900/30 dark:bg-white/30 mb-2"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
              <div>
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src="/hitali.jpg"
                        alt="Hitali Kothari"
                        fill
                        className="object-cover"
                        sizes="96px"
                      />
                    </div>
                    <div>
                      <h3 className="text-[2rem] font-bold text-[#191919] dark:text-white mb-1 translate-y-[-5px]">
                        Hitali Kothari
                      </h3>
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-100 dark:bg-green-900/30 border border-green-600 dark:border-green-500 rounded-full text-sm font-medium text-green-700 dark:text-green-400 leading-none translate-y-[-5px]">
                        <span className="relative inline-flex">
                          <span className="w-2 h-2 bg-green-600 dark:bg-green-500 rounded-full"></span>
                          <span className="absolute top-0 left-0 w-2 h-2 bg-green-600 dark:bg-green-500 rounded-full animate-ping-visible"></span>
                        </span>
                        <span className="translate-y-[-1px]">{t.contact.infos.available}</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <h4 className="text-lg font-semibold text-[#191919] dark:text-white mb-4">
                    {t.contact.infos.usefulLinks}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href="https://www.linkedin.com/in/hitalikothari/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#0A66C2] text-white rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      <span className="translate-y-[-1px]">LinkedIn</span>
                    </a>
                  </div>
                </div>

                <a
                  href="mailto:hitalikothari@gmail.com"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-[#222222] text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gray-300 dark:hover:bg-[#2a2a2a] transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                  >
                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path>
                  </svg>
                  <span className="translate-y-[-1px]">hitalikothari@gmail.com</span>
                </a>
              </div>

              <div className="lg:col-span-2">
                <h3 className="text-[2rem] font-semibold text-[#191919] dark:text-white mb-4">
                  {t.contact.form.title}
                </h3>
                <form onSubmit={handleSubmit} className="space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      name="nom"
                      placeholder={t.contact.form.lastName}
                      value={formData.nom}
                      onChange={handleChange}
                      required
                      className="px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-[#1a1a1a] text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#191919] dark:focus:ring-white transition-shadow"
                    />
                    <input
                      type="text"
                      name="prenom"
                      placeholder={t.contact.form.firstName}
                      value={formData.prenom}
                      onChange={handleChange}
                      required
                      className="px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-[#1a1a1a] text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#191919] dark:focus:ring-white transition-shadow"
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder={t.contact.form.email}
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-[#1a1a1a] text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#191919] dark:focus:ring-white transition-shadow"
                  />
                  <textarea
                    name="message"
                    placeholder={t.contact.form.message}
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-[#1a1a1a] text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#191919] dark:focus:ring-white transition-shadow resize-none"
                  ></textarea>

                  <div className="flex items-center gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#191919] dark:bg-white text-white dark:text-[#191919] rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                      <span className="translate-y-[-1px]">
                        {isSubmitting ? t.contact.form.sending : t.contact.form.send}
                      </span>
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>

                    {submitStatus === "success" && (
                      <p className="text-green-600 dark:text-green-400 text-sm font-medium">
                        {t.contact.form.success}
                      </p>
                    )}
                    {submitStatus === "error" && (
                      <p className="text-red-600 dark:text-red-400 text-sm font-medium">
                        {t.contact.form.error}
                      </p>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </ThemeProvider>
    </main>
  );
}
