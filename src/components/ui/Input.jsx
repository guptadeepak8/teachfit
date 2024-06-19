import React from 'react'

export default function Input({ type, name, value, onChange, index, placeholder, label }) {
  return (
    <div className="">
      {label && (
        <label htmlFor={name} className="text-lg font-semibold mb-3">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 border rounded-lg border-slate-400"
      />
    </div>
  );
}