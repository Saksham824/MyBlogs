export default function Callout({ emoji = '💡', title, children }) {
  return (
    <div className="border-l-4 border-blue-500 bg-blue-50 dark:bg-zinc-800 p-4 mb-4 rounded-md">
      {title && (
        <p className="text-blue-700 dark:text-blue-300 font-semibold mb-1">
          <span className="mr-2">{emoji}</span>
          {title}
        </p>
      )}
      <div className="text-blue-700 dark:text-blue-300">
        {children}
      </div>
    </div>
  );
}

