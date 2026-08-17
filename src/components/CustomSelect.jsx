import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiCheck } from "react-icons/fi";

const CustomSelect = ({
  name,
  value,
  onChange,
  options = [],
  placeholder = "Select an option",
  error = false,
  disabled = false,
  className = "",
  id,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const formattedOptions = options.map((opt) => {
    if (typeof opt === "string") {
      return { value: opt, label: opt };
    }
    return opt;
  });

  const selectedOption = formattedOptions.find((opt) => opt.value === value);
  const displayLabel = selectedOption
    ? selectedOption.label
    : value || placeholder;

  const isPlaceholder = !value || value === "";

  const handleSelect = (optValue) => {
    if (disabled) return;
    onChange({
      target: {
        name,
        value: optValue,
      },
    });
    setIsOpen(false);
  };

  return (
    <div className={`relative w-full ${className}`} ref={containerRef}>
      <button
        id={id || name}
        type="button"
        disabled={disabled}
        onClick={() => !disabled && setIsOpen((prev) => !prev)}
        className={`w-full border rounded-xl px-4 py-3 text-sm flex items-center justify-between transition-all shadow-xs text-left cursor-pointer outline-none ${
          error
            ? "border-[#E31E24] bg-[#FDE8E9]/20 text-[#333333] focus:ring-2 focus:ring-[#E31E24] focus:border-[#E31E24]"
            : isOpen
              ? "border-[#0B4E8C] ring-2 ring-[#0B4E8C]/20 bg-white text-[#333333]"
              : "border-slate-300 bg-white text-[#333333] hover:border-[#0B4E8C]/50 focus:border-[#0B4E8C] focus:ring-2 focus:ring-[#0B4E8C]"
        } ${disabled ? "opacity-60 cursor-not-allowed bg-slate-50" : ""}`}
      >
        <span
          className={`truncate ${
            isPlaceholder
              ? error
                ? "text-[#E31E24]/80 font-normal"
                : "text-slate-400 font-normal"
              : "font-medium text-[#333333]"
          }`}
        >
          {displayLabel}
        </span>
        <FiChevronDown
          className={`text-base transition-transform duration-200 shrink-0 ml-2 ${
            error
              ? "text-[#E31E24]"
              : isOpen
                ? "rotate-180 text-[#0B4E8C]"
                : "text-slate-400"
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute z-50 top-[calc(100%+6px)] left-0 right-0 bg-white border border-slate-200 rounded-2xl shadow-xl py-2 px-1.5 space-y-0.5 max-h-60 overflow-y-auto"
          >
            {formattedOptions.map((option) => {
              const isSelected = option.value === value;
              const isOptionPlaceholder = option.value === "";

              return (
                <button
                  key={option.value || option.label}
                  type="button"
                  onClick={() => handleSelect(option.value)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm transition-all flex items-center justify-between cursor-pointer outline-none ${
                    isSelected
                      ? "bg-[#E8F5EB] text-[#1C8A3C] font-semibold"
                      : isOptionPlaceholder
                        ? "text-slate-400 italic hover:bg-slate-50"
                        : "text-[#333333] hover:bg-[#F5F7FA] hover:text-[#0B4E8C] font-medium"
                  }`}
                >
                  <span className="truncate">{option.label}</span>
                  {isSelected && !isOptionPlaceholder && (
                    <FiCheck className="text-[#1C8A3C] text-base shrink-0 ml-2" />
                  )}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomSelect;
