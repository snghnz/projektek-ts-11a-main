// Saját komponens készítése (jellemzően a komponensek önálló fájlokban vannak)
type IncrementButtonProps = {
  onIncrement: () => void;
};

export const IncrementButton = ({ onIncrement }: IncrementButtonProps) => {
  return (
    <button
      className="cursor-pointer rounded-2xl border border-pink-300 bg-pink-300 px-3 py-1 font-medium shadow-xl transition active:scale-95 active:shadow-md"
      onClick={onIncrement}
    >
      Növelés
    </button>
  );
};
