import { useState } from "react";
import "./ContactCard.scss";

export const ContactFormModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => {
    setIsOpen(false);
  };
  console.log("Check this", isOpen);
  return (
    <div className="modal_dialog">
      <div className="modal_dialog_view">
        <form action="https://formspree.io/f/xwpegyva" method="POST">
          <label>
            Your email:
            <input type="email" name="email" />
          </label>
          <label>
            Your message:
            <textarea name="message"></textarea>
          </label>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};
