export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center" aria-live="polite" aria-busy="true">
      <div className="flex flex-col items-center gap-4">
        <div
          className="w-10 h-10 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"
          aria-hidden
        />
        <p className="text-sm text-gray-500 dark:text-gray-400">Loading...</p>
      </div>
    </div>
  );
}
