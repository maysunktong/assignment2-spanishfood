export default function AddButton({
  handleClick,
}: {
  handleClick: () => void;
}) {
  return (
    <button type="button" onClick={handleClick}>
      Add button
    </button>
  );
}
