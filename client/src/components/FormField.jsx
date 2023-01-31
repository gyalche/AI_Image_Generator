import React from 'react';

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  isSupriseMe,
  handleSupriseMe,
  handleChange,
}) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-900">
          {labelName}
        </label>

        {isSupriseMe && (
          <button
            type="button"
            onClick={handleSupriseMe}
            className="font-semibold text-xs bg=[#ECECF1] py-1 px-2 rounded-[5px]">
            Suprise me
          </button>
        )}
      </div>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        required
        className="bg-gray-50 border-gray-300 border text-gray-900 text-sm rounded-lg
         focus:ring-[#6469ff] focus:border-[#4649ff] outline-none block w-full"
      />
    </div>
  );
};

export default FormField;
