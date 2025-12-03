export default function Loading() {
  return (
    <div className="min-h-screen bg-base-200 p-4 md:p-6 mb-10 animate-pulse">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="h-10 bg-base-300 rounded-lg w-1/3"></div>

        <div className="bg-base-100 rounded-2xl shadow-lg p-6 border border-base-300">
          <div className="h-6 bg-base-300 rounded w-1/2 mb-4"></div>
          <div className="h-8 bg-base-300 rounded w-1/3"></div>
        </div>

        <div className="space-y-4">
          {[1,2,3,4].map((i) => (
            <div key={i} className="bg-base-100 rounded-xl shadow-sm border border-base-300 p-5">
              <div className="h-6 bg-base-300 rounded w-1/3 mb-2"></div>
              <div className="h-4 bg-base-300 rounded w-1/4"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
