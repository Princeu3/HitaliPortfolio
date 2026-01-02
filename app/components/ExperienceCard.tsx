"use client";

interface ExperienceCardProps {
  title: string;
  company: string;
  type: string;
  date: string;
  location: string;
  description: string;
  skills: string[];
}

export default function ExperienceCard({
  title,
  company,
  type,
  date,
  location,
  description,
  skills,
}: ExperienceCardProps) {
  return (
    <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:bg-gray-50 dark:hover:bg-[#222222] transition-all duration-300 group">
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <h3 className="text-xl font-bold text-[#191919] dark:text-white mb-1">
              {title}
            </h3>
            <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
              {company}
            </p>
          </div>
          <span className="px-3 py-1 bg-[#e5e5e5]/80 dark:bg-[#2a2a2a]/80 rounded-full text-xs font-medium text-[#191919] dark:text-white whitespace-nowrap">
            {type}
          </span>
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
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
            {date}
          </span>
          <span className="flex items-center gap-1">
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            {location}
          </span>
        </div>

        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 dark:bg-[#2a2a2a] text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
