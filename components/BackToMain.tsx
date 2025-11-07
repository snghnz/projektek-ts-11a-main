import Link from "next/link";

const BackToMain = () => {
  return (
    <Link
      className="rounded-2xl border px-3 py-1 shadow-xl transition hover:font-bold active:scale-95 active:shadow-md"
      href="/"
    >
      Vissza a főmenübe
    </Link>
  );
};

export default BackToMain
