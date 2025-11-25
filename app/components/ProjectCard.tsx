interface ProjectCardProps {
  images: string[];
  title: string;
  description: string;
  date: string;
  tags: string[];
  isVideo?: boolean;
}

export default function ProjectCard({
  images,
  title,
  description,
  date,
  tags,
  isVideo = false,
}: ProjectCardProps) {
  const renderMedia = () => {
    if (isVideo && images.length === 1) {
      return (
        <div className="relative h-48 bg-gray-900">
          <video 
            src={images[0]} 
            className="w-full h-full object-cover opacity-60"
            poster={images[0].replace('.mp4', '-poster.jpg')}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        </div>
      );
    }

    if (images.length === 1) {
      return (
        <div className="relative h-48 bg-gray-900">
          <img 
            src={images[0]} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
      );
    }

    if (images.length === 2) {
      return (
        <div className="grid grid-cols-2 gap-2">
          <img 
            src={images[0]} 
            alt={`${title} 1`} 
            className="w-full h-48 object-cover"
          />
          <img 
            src={images[1]} 
            alt={`${title} 2`} 
            className="w-full h-48 object-cover"
          />
        </div>
      );
    }

    if (images.length === 3) {
      return (
        <div className="grid grid-cols-2 gap-2">
          <img 
            src={images[0]} 
            alt={`${title} 1`} 
            className="w-full h-48 object-cover row-span-2"
          />
          <img 
            src={images[1]} 
            alt={`${title} 2`} 
            className="w-full h-[5.75rem] object-cover"
          />
          <img 
            src={images[2]} 
            alt={`${title} 3`} 
            className="w-full h-[5.75rem] object-cover"
          />
        </div>
      );
    }

    return null;
  };

  return (
    <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
      {renderMedia()}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-[#191919] dark:text-white mb-2 translate-y-[-1px]">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed">
          {description}
        </p>
        <div className="flex items-center justify-between flex-wrap gap-3">
          <span className="text-sm text-gray-500 dark:text-gray-400">{date}</span>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
