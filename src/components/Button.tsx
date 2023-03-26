type Props = {
  text: string;
};

export const Button = ({ text }: Props): JSX.Element => {
  return (
    <button
      style={{
        fontSize: "0.8rem",
      }}
      className="rounded-sm bg-black bg-opacity-50 py-2 px-8 text-center font-bold leading-none text-white duration-300 hover:bg-white hover:text-black"
      type="button"
    >
      {text}
    </button>
  );
};
