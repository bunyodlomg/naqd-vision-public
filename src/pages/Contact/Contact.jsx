import axios from "axios";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { useState } from "react";
import { api } from "../../layout/api";
import { useTranslation } from 'react-i18next'
const Contact = () => {
  const { t } = useTranslation()
  const [post, setPost] = useState({
    name: "",
    company: "",
    phone: "",
    message: "",
  });
  const handleInput = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${api}/contact/send`, { ...post })
      .then((response) => console.log(response.data.message))
      .catch((err) => console.log(err));
  };
  const { heading, name, company, number, message, button } = t('contact')

  return (
    <div className="container mt-28 ">
      <div className=" mx-auto max-w-sm">
        <form onSubmit={handleSubmit} autoComplete="off" data-aos="zoom-out-down" className="dark:bg-slate-800 bg-slate-100 rounded px-8   pb-8 shadow-2xl">
          <h1 className="py-10 font-bold text-xl dark:text-white text-slate-700 text-center"> {t(heading)}</h1>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="firstName">
              {t(name)}
            </label>
            <input className="dark:bg-slate-800 bg-inherit  dark:text-white shadow-md appearance-none rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline border-none" id="firstName" type="text" placeholder={t(name)} required
              onChange={(e) =>
                setFirstName(e.target.value)
              } />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="companyName">
              {t(company)}
            </label>
            <input className="dark:bg-slate-800 bg-inherit dark:text-white shadow-md border-none appearance-none  rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline" id="companyName" type="text" placeholder={t(company)} required
              onChange={(e) => {
                setLastName(e.target.value)
              }} />
          </div>
          <label className="block text-sm font-bold mb-2" htmlFor="phone">
            {t(number)}
          </label>
          <PhoneInput
            inputStyle={{ width: '100%', border: 'none', fontSize: "1rem" }}
            className="telraqam shadow-md appearance-none text-9xl rounded py-2 mb-2 text-gray-900 dark:text-white leading-tight focus:outline-none focus:shadow-outline dark:bg-slate-800"
            required
            name="phone"
            id="phone"
            defaultCountry="uz"
            onChange={
              (e) => {
                const t = {
                  target: {
                    name: "phone",
                    id: "phone",
                    value: e
                  }
                }
                handleInput(t)
              }
            }
          />
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2" htmlFor="textarea">
              {t(message)}
            </label>
            <textarea className="dark:bg-slate-800 bg-inherit dark:text-white shadow-md appearance-none rounded w-full py-2 px-3 text-gray-900 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="textarea" type="text" placeholder={t(message)} required
              onChange={(e) =>
                setPassword(e.target.value)
              } />
          </div>
          <div className="flex items-center justify-between">
            <button className="primary-btn bg-blue-500 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              {t(button)}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;