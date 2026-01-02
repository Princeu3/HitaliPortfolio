export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`font-bold text-2xl text-gray-900 dark:text-white ${className}`}>
      HK
    </div>
  );
}
