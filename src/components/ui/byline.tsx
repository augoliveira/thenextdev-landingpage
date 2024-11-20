import Link from "next/link";

export default function Byline() {
  return (
    <div className="flex items-center justify-between gap-x-4 p-3.5 lg:px-5 lg:py-3">
      <div className="flex items-center gap-x-1.5">
        <div className="text-sm text-gray-400">
          <p className="text-sm leading-7">
            © {new Date().getFullYear()} Agência full service{" "}
            <span className="text-amber-300">UP.EXPERT</span>
          </p>
        </div>
      </div>

      <div className="text-sm text-gray-400">
        <Link
          className="text-orange-500 hover:text-gray-400"
          href="https://upexpert.com.br"
          target="_blank"
          rel="noreferrer"
        >
          Agência de propaganda
        </Link>
        {"  "}
        <Link
          className="underline decoration-dotted underline-offset-4 hover:text-gray-400"
          href="https://upexpert.com.br/design"
          target="_blank"
          rel="noreferrer"
        >
          Design Estratégico
        </Link>
      </div>
    </div>
  );
}
