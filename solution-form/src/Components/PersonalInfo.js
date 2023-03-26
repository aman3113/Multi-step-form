import { useDispatch, useSelector } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";
import { changeUserInfo, handleError } from "../Store/userSlice";

const PersonalInfo = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function changeHandler(e) {
    const { name, value } = e.target;
    dispatch(changeUserInfo({ name, value }));
  }

  function submitHandler(e) {
    e.preventDefault();
    const { name, email, phone } = user;
    if (name !== "" && email !== "" && phone !== "") {
      dispatch(handleError(false));
      navigate("plan-page");
    } else {
      dispatch(handleError(true));
    }
  }

  return (
    <div className="px-20 py-12 border-2 border-red-500 w-[75%]">
      <h2 className="text-4xl py-2 font-bold">Personal Info</h2>
      <p className="text-gray-400 text-base">
        Please provide your name, email address and phone number
      </p>
      <form className="py-9 " onSubmit={submitHandler}>
        <label htmlFor="nameInput" className="block">
          Name
        </label>
        <input
          className=" border-2 border-gray-400 rounded-lg  p-2 text-base md:w-[60%] mt-1 mb-3"
          type="text"
          id="nameInput"
          name="name"
          placeholder=" e.g Stephen King"
          value={user.name}
          onChange={changeHandler}
        />

        <label htmlFor="emailInput" className="block">
          Email
        </label>
        <input
          className=" border-2 border-gray-400 rounded-lg  p-2 text-base md:w-[60%] mt-1 mb-3"
          type="email"
          id="emailInput"
          name="email"
          placeholder=" e.g stephenking@lorem.com"
          value={user.email}
          onChange={changeHandler}
        />

        <label htmlFor="phoneInput" className="block">
          Phone number
        </label>
        <input
          className=" border-2 border-gray-400 rounded-lg  p-2 text-base md:w-[60%] mt-1 mb-3"
          type="number"
          id="phoneInput"
          name="phone"
          placeholder=" e.g +1234 567 890"
          value={user.phone}
          onChange={changeHandler}
        />
      </form>
      {user.error ? (
        <p className="text-base text-red-400 my-2">
          Please fill the credentials
        </p>
      ) : null}
      <div className="flex justify-end w-[60%]">
        <button
          onClick={submitHandler}
          className="ml-auto px-3 py-2 bg-blue-900 text-white rounded-lg"
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default PersonalInfo;
