export default function MicWave() {
  return (
    <div className="flex items-center justify-center h-full gap-2">
      <span className="sr-only">Listening...</span>
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="w-2 bg-cyan-400 rounded-full animate-wave"
          style={{
            height: `${20 + i * 10}px`,
            animationDelay: `${i * 0.1}s`,
          }}
        />
      ))}
    </div>
  );
}
