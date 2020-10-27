import React, { useState } from 'react';
import styled from 'styled-components';

import Button from 'components/Button/Button';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    console.log(e.target.name);
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
      case 'title':
        setTitle(e.target.value);
        break;
      case 'message':
        setMessage(e.target.value);
        break;
      default:
        throw new Error(`There is no ${e.target.name} input in contact form`);
    }
  };

  return (
    <ContactFormWrapper>
      <div>
        <label htmlFor="name" className={name ? 'filled' : null}>
          <input type="text" name="name" id="name" value={name} onChange={handleInputChange} />
          <span>Name</span>
        </label>
      </div>
      <div>
        <label htmlFor="email" className={email ? 'filled' : null}>
          <input type="mail" name="email" id="email" value={email} onChange={handleInputChange} />
          <span>Email</span>
        </label>
      </div>
      <div>
        <label htmlFor="title" className={title ? 'filled' : null}>
          <input type="text" name="title" id="title" value={title} onChange={handleInputChange} />
          <span>Title</span>
        </label>
      </div>
      <div className="textarea">
        <label htmlFor="message" className={message ? 'filled' : null}>
          <textarea name="message" id="message" value={message} onChange={handleInputChange} />
          <span>Message</span>
        </label>
      </div>
      <Button>Send message</Button>
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
    label {
      color: ${({ theme }) => theme.colors.white};
      position: relative;
      height: 4rem;
      flex-shrink: 0;
      display: block;
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
      &:focus {
        outline: none;
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
`;
