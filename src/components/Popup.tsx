import "./Popup.css";

interface PopupProps {
  num: number | undefined;
  letter: string | undefined;
}

const Popup = ({ num, letter }: PopupProps) => {
  return (
    <div className="popup">
      <p>
        {letter} {num}
      </p>
    </div>
  );
};

export default Popup;
