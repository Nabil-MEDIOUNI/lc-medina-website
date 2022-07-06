/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React from 'react';

// Local images
import Partner from '../../../assets/images/partner.png';

// Style
import './index.scss';

/* -------------------------------------------------------------------------- */
/*                            Form Section Component                          */
/* -------------------------------------------------------------------------- */

function FormSection() {
  function onSubmitForm(e) {
    e.preventDefault();
  }
  return (
    <div id="formsection">
      <h1>Sign up for more information</h1>
      <form onSubmit={onSubmitForm}>
        <div className="formgroup">
          <label htmlFor="fullname" className="labels">
            Full name &nbsp;
            <input id="fullname" className="inputs" type="text" aria-required />
          </label>
        </div>
        <div className="formgroup">
          <label htmlFor="email" className="labels">
            Email &nbsp;
            <input id="email" className="inputs" type="email" aria-required />
          </label>
        </div>
        <div className="formgroup">
          <label htmlFor="telephone" className="labels">
            Telephone &nbsp;
            <input id="telephone" className="inputs" type="tel" aria-required />
          </label>
        </div>
        <div className="formgroup">
          <label htmlFor="company" className="labels">
            Company &nbsp;
            <input id="company" className="inputs" type="text" aria-required />
          </label>
        </div>
        <div className="formgroup">
          <label htmlFor="location" className="labels">
            Location &nbsp;
            <input id="location" className="inputs" type="text" aria-required />
          </label>
        </div>
        <div className="formgroup">
          <label htmlFor="website" className="labels">
            Website &nbsp;
            <input id="website" className="inputs" type="url" aria-required />
          </label>
        </div>
        <div className="formgroup">
          <label htmlFor="message" className="labels">
            Message &nbsp;
            <textarea id="message" aria-required />
          </label>
        </div>
        <div className="formgroup">
          <label htmlFor="agreement" className="agreelabel">
            <input type="checkbox" id="agreement" aria-required />I agree to
            receive communications from AIESEC MEDINA
          </label>
        </div>
        <div className="submit-btn">
          <button type="submit">Sign me up</button>
        </div>
      </form>
      <div className="partners-section">
        <p className="title">Companies that already work with us:</p>
        <div className="partners">
          <img src={Partner} alt="partner" />
          <img src={Partner} alt="partner" />
          <img src={Partner} alt="partner" />
        </div>
      </div>
    </div>
  );
}

export default FormSection;
