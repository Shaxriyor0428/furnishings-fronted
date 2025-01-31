import address from "@/assets/images/address.svg";
import phone from "@/assets/images/phone.svg";
import time from "@/assets/images/time.svg";
const Contact = () => {
  return (
    <div className="container">
      <div className="mt-16 text-center">
        <h2 className="text-[36px] font-[600]">Get In Touch With Us</h2>
        <p className="text-[#9F9F9F]">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us <br /> An Email. Our Staff Always Be There To Help You Out. Do
          Not Hesitate!
        </p>
      </div>
      <div className="flex mt-14 flex-col md:flex-row items-start justify-between gap-8 p-8 rounded-lg max-w-4xl mx-auto">
        <div className="w-full md:w-1/2  ">
          <p className="text-gray-600 mb-12 dark:text-gray-400">
            <img src={address} alt="address" />
            <strong className="text-[24px] dark:text-gray-300">
              {" "}
              Address
            </strong>{" "}
            <br /> 236 5th SE Avenue, New <br /> York NY10000, United <br />{" "}
            States
          </p>
          <p className="text-gray-600 mb-12 dark:text-gray-400">
            <img src={phone} alt="phone" />
            <strong className="text-[24px]"> Phone</strong> <br /> Mobile: +(84)
            546-6789 <br />
            Hotline: +(84) 456-6789
          </p>
          <p className="text-gray-600 mb-12 dark:text-gray-400">
            <img src={time} alt="time" />
            <strong className="text-[24px]"> Working Hours</strong> <br />{" "}
            Monday-Friday: 9:00 - 22:00 <br />
            Saturday-Sunday: 9:00 - 21:00
          </p>
        </div>

        <div className="w-full md:w-1/2 bg-white dark:bg-zinc-900 p-6 rounded-lg ">
          <form className="max-w-lg mx-auto bg-white dark:bg-zinc-900  p-6 rounded-lg  space-y-4">
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-gray-700 dark:text-gray-300  font-medium mb-4"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full p-3 h-14 border dark:text-black  dark:bg-gray-300 border-gray-300 rounded-md focus:ring-2 focus:ring-[#cec1a3] focus:border-[#B88E2F] outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-gray-700 dark:text-gray-300 font-medium mb-4"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full p-3 h-14 border dark:text-black  dark:bg-gray-300 border-gray-300 rounded-md focus:ring-2 focus:ring-[#cec1a3]  focus:border-[#B88E2F] outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="subject"
                className="text-gray-700 dark:text-gray-300 font-medium mb-4"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Enter subject"
                className="w-full h-14 p-3 border border-gray-300 dark:bg-gray-300 dark:text-black rounded-md focus:ring-2 focus:ring-[#cec1a3] focus:border-[#B88E2F] outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="text-gray-700 dark:text-gray-300 font-medium mb-4"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Enter your message"
                rows={4}
                className="w-full p-3 border dark:text-black  dark:bg-gray-300 border-gray-300 rounded-md focus:ring-2 focus:ring-[#cec1a3]  focus:border-[#B88E2F] outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-[237px] bg-[#B88E2F] text-white font-medium py-3 rounded-md transition-all duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
