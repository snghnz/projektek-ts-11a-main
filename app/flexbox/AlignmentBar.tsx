import { AlignOptions } from "@/app/flexbox/page";

type Props = {
  title: string;
  alignments: AlignOptions[];
  setAlignment: (value: string) => void;
  aktValue: string;
};

export default function AlignmentBar(props: Props) {
  return (
    <nav className="flex w-full flex-wrap justify-center gap-3 bg-green-400 p-4">
      <h1 className="text-2xl">{props.title} alignment</h1>
      {props.alignments.map((align) => (
        <button
          className={`btn transition-transform ${props.aktValue == align.value ? "bg-red-500" : ""} btn-primary hover:scale-110`}
          key={align.label}
          onClick={() => props.setAlignment(align.value)}
        >
          {align.label}
        </button>
      ))}
    </nav>
  );
}
