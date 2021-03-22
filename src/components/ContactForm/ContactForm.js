import React, { useState } from 'react';
import styled from 'styled-components';
import { navigate } from 'gatsby';

import Button from 'components/Button/Button';

import encode from 'utils/encode';

import regExps from './regExps';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const [isNameVal, setNameVal] = useState(true);
  const [isEmailVal, setEmailVal] = useState(true);
  const [isTitleVal, setTitleVal] = useState(true);
  const [isMessageVal, setMessageVal] = useState(true);

  const invalidMessage = '(uzupełnij poprawnie te pole.)';

  const handleInputChange = (e) => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        setNameVal(regExps[e.target.name].test(e.target.value));
        break;
      case 'email':
        setEmail(e.target.value);
        setEmailVal(regExps[e.target.name].test(e.target.value));
        break;
      case 'title':
        setTitle(e.target.value);
        setTitleVal(regExps[e.target.name].test(e.target.value));
        break;
      case 'message':
        setMessage(e.target.value);
        setMessageVal(regExps[e.target.name].test(e.target.value));
        break;
      default:
        throw new Error(`There is no ${e.target.name} input in contact form`);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isMessageVal && isNameVal && isTitleVal && isEmailVal) {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', name, email, title, message }),
      });

      if (res.ok) navigate('/success');
      else navigate('/error');
    } else window.alert('Zanim wyślesz formularz wypełnij wszystkie pola!');
  };

  return (
    <ContactFormWrapper onSubmit={handleSubmit} name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="contact" />
      <div className={isNameVal ? null : 'invalid'}>
        <label htmlFor="name" className={name ? 'filled' : null}>
          <input type="text" required min="2" max="20" name="name" id="name" value={name} onChange={handleInputChange} />
          <span>Name {isNameVal ? '' : invalidMessage}</span>
        </label>
      </div>
      <div className={isEmailVal ? null : 'invalid'}>
        <label htmlFor="email" className={email ? 'filled' : null}>
          <input type="mail" required name="email" id="email" value={email} onChange={handleInputChange} />
          <span>Email {isEmailVal ? '' : invalidMessage}</span>
        </label>
      </div>
      <div className={isTitleVal ? null : 'invalid'}>
        <label htmlFor="title" className={title ? 'filled' : null}>
          <input type="text" required min="5" max="30" name="title" id="title" value={title} onChange={handleInputChange} />
          <span>Title {isTitleVal ? '' : invalidMessage}</span>
        </label>
      </div>
      <div className={isMessageVal ? 'textarea' : 'invalid textarea'}>
        <label htmlFor="message" className={message ? 'filled' : null}>
          <textarea name="message" required min="5" max="100" id="message" value={message} onChange={handleInputChange} />
          <span>Message {isMessageVal ? '' : invalidMessage}</span>
        </label>
      </div>
      <Button type="submit">Send message</Button>
    </ContactFormWrapper>
  );
};

export default ContactForm;

const ContactFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  div {
    width: 100%;
    margin-bottom: 2rem;
    &.invalid {
      label {
        color: ${({ theme }) => theme.colors.error};
      }
      input,
      textarea {
        border-color: ${({ theme }) => theme.colors.error};
        color: ${({ theme }) => theme.colors.error};
      }
    }
    label {
      color: ${({ theme }) => theme.colors.white};
      position: relative;
      height: 4rem;
      flex-shrink: 0;
      display: block;
      transition: 0.2s;
      &.filled span {
        transform: scale(0.75) translateY(-60%);
        transform-origin: 0% 0%;
      }
      span {
        font-size: ${({ theme }) => theme.font.S};
        position: absolute;
        top: 0;
        left: 0;
        height: 4rem;
        line-height: 4rem;
        margin-top: 1.5rem;
        transition: transform 0.1s ease;
        @media (max-width: 540px) {
          font-size: ${({ theme }) => theme.font.M};
        }
      }
    }
    input,
    textarea {
      width: 100%;
      background-color: transparent;
      border: none;
      border-bottom: 0.2rem solid ${({ theme }) => theme.colors.white};
      font-size: ${({ theme }) => theme.font.S};
      color: ${({ theme }) => theme.colors.white};
      height: 4rem;
      margin-top: 1.5rem;
      line-height: 4rem;
      transition: 0.2s;
      &:focus {
        outline: none;
      }
      @media (max-width: 540px) {
        font-size: ${({ theme }) => theme.font.M};
      }
    }
    textarea {
      resize: none;
    }
  }
  .textarea {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    label {
      width: 100%;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      textarea {
        flex-grow: 1;
        line-height: 2rem;
        padding-top: 1rem;
      }
    }
  }
  button {
    margin-top: 1rem;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-text-fill-color: white;
    box-shadow: 0 0 0px ${({ theme }) => theme.colors.primary};
    transition: background-color 5000s ease-in-out 0s;
  }
  /* input:hover,
  textarea:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
  input:focus,
  textarea:focus {
    background-color: ${({ theme }) => theme.colors.secondary};
    outline: none;
  } */
`;
