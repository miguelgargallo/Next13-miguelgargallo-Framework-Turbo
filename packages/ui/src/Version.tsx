import { generateJSXMeshGradient } from "meshgrad";
const ELEMENTS = 1;

export const Version = () => {
  return (
    <button
      className="m-2 hidden rounded-full py-2 px-4 text-xs font-bold text-black shadow-md hover:shadow-xl md:block"
      style={generateJSXMeshGradient(ELEMENTS)}
    >
      <a
        href="http://twitter.com/miguelgargallo"
        target="_blank"
        rel="noopener noreferrer"
      >
        v2.0.0
      </a>
    </button>
  );
};
