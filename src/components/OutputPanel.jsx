export default function OutputPanel({ outputText }) {
  return (
    <p className="text-gray-200 text-sm leading-relaxed whitespace-pre-wrap">
      {outputText || "Model output will appear here..."}
    </p>
  );
}
