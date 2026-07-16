import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  User,
  Phone,
  Mail,
  MapPin,
  FileText,
  CheckCircle2,
  AlertCircle,
  Upload,
  ChevronDown,
  Handshake,
} from "lucide-react";
import { PARTNER_CONTENT } from "../utils/data";

// ── Shared input class helper ─────────────────────────────────────────────────
const inputCls = (hasError) =>
  `bg-slate-50 border text-sm rounded-xl px-4 py-3 focus:outline-none focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all duration-200 w-full text-slate-800 placeholder:text-slate-400 ${
    hasError
      ? "border-red-400 bg-red-50/30 focus:border-red-400"
      : "border-slate-200 focus:border-primary"
  }`;

// ── Field wrapper ─────────────────────────────────────────────────────────────
function Field({ label, required, error, children, full = false }) {
  return (
    <div className={`flex flex-col gap-1.5 ${full ? "col-span-full" : ""}`}>
      <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">
        {label}
        {required && <span className="text-primary ml-0.5">*</span>}
      </label>
      {children}
      {error && (
        <span className="text-red-500 text-[10px] font-semibold">{error}</span>
      )}
    </div>
  );
}

// ── Section divider with label ────────────────────────────────────────────────
function SectionDivider({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-3 pt-2 pb-1 border-t border-slate-100 mt-2">
      <div className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
        <Icon size={14} />
      </div>
      <span className="text-[11px] font-black text-slate-500 uppercase tracking-widest">
        {label}
      </span>
    </div>
  );
}

// ── File Upload zone ──────────────────────────────────────────────────────────
function FileUpload({ label, file, onFileChange, error }) {
  const ref = useRef(null);
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">
        {label} <span className="text-primary">*</span>
      </label>
      <div
        onClick={() => ref.current?.click()}
        className={`flex items-center gap-3 border-2 border-dashed rounded-xl px-4 py-3.5 cursor-pointer transition-all duration-200 ${
          file
            ? "border-primary/40 bg-primary/[0.03]"
            : error
              ? "border-red-400 bg-red-50/30"
              : "border-slate-200 bg-slate-50 hover:border-primary/30 hover:bg-white"
        }`}
      >
        <div
          className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
            file ? "bg-primary/10" : "bg-white border border-slate-200"
          }`}
        >
          <Upload
            size={15}
            className={file ? "text-primary" : "text-slate-400"}
          />
        </div>
        <div className="min-w-0 flex-1">
          <p
            className={`text-sm font-semibold truncate leading-tight ${file ? "text-primary" : "text-slate-500"}`}
          >
            {file ? file.name : "Click to upload"}
          </p>
          <p className="text-[10px] text-slate-400 mt-0.5">
            {file
              ? `${(file.size / 1024).toFixed(0)} KB`
              : "PDF, JPG or PNG · Max 5 MB"}
          </p>
        </div>
        <input
          ref={ref}
          type="file"
          accept=".pdf,.jpg,.jpeg,.png"
          className="hidden"
          onChange={(e) =>
            e.target.files?.[0] && onFileChange(e.target.files[0])
          }
        />
      </div>
      {error && (
        <span className="text-red-500 text-[10px] font-semibold">{error}</span>
      )}
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function Partner() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [drugLicence, setDrugLicence] = useState(null);
  const [gstCertificate, setGstCertificate] = useState(null);
  const [fileErrors, setFileErrors] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({ defaultValues: { categories: [] } });

  const handleFormSubmit = (data) => {
    const fe = {};
    if (!drugLicence) fe.drugLicence = "Please upload your drug licence";
    if (!gstCertificate)
      fe.gstCertificate = "Please upload your GST certificate";
    if (Object.keys(fe).length) {
      setFileErrors(fe);
      return;
    }
    setFileErrors({});
    console.log("Partner submission:", data, { drugLicence, gstCertificate });
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setDrugLicence(null);
      setGstCertificate(null);
      reset();
    }, 6000);
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-20">
      {/* ── Page Header ───────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-slate-100 py-10 md:py-12">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight whitespace-nowrap">
              {PARTNER_CONTENT.heading}
            </h1>
          </div>

          {/* Notice */}
          <div className="max-w-3xl mx-auto mt-7">
            <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-2xl px-5 py-4">
              <AlertCircle
                size={16}
                className="text-amber-500 flex-shrink-0 mt-0.5"
              />
              <p className="text-amber-800 text-xs md:text-sm font-medium leading-relaxed">
                <strong className="font-black">Note: </strong>
                {PARTNER_CONTENT.notice}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Form Section ──────────────────────────────────────────────────── */}
      <section className="py-12 md:py-16">
        <div className="max-w-[860px] mx-auto px-6 md:px-8">
          <AnimatePresence mode="wait">
            {/* ── Success ─────────────────────────────────────────────────── */}
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="py-24 text-center flex flex-col items-center bg-white rounded-[28px] border border-slate-200 shadow-sm"
              >
                <div className="w-20 h-20 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mb-5">
                  <CheckCircle2 size={44} />
                </div>
                <h3 className="font-extrabold text-slate-900 text-xl md:text-2xl mb-3">
                  {PARTNER_CONTENT.successHeading}
                </h3>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-md px-4">
                  {PARTNER_CONTENT.successMessage}
                </p>
              </motion.div>
            ) : (
              /* ── The single unified form card ─────────────────────────── */
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                onSubmit={handleSubmit(handleFormSubmit)}
                className="bg-white border border-slate-200 rounded-[28px] shadow-sm overflow-hidden"
              >
                {/* ── Form inner padding wrapper ─────────────────────────── */}
                <div className="px-6 md:px-10 py-8 md:py-10 space-y-6">
                  {/* ─── Section: Business Details ─── */}
                  <SectionDivider icon={Building2} label="Business Details" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field
                      label="Business / Pharmacy / Clinic Name"
                      required
                      error={errors.businessName?.message}
                    >
                      <input
                        type="text"
                        placeholder="e.g. Rajan Medical Store"
                        className={inputCls(errors.businessName)}
                        {...register("businessName", {
                          required: "Business name is required",
                        })}
                      />
                    </Field>

                    <Field
                      label="Business Type"
                      required
                      error={errors.businessType?.message}
                    >
                      <div className="relative">
                        <select
                          className={`${inputCls(errors.businessType)} appearance-none pr-10`}
                          defaultValue=""
                          {...register("businessType", {
                            required: "Please select your business type",
                          })}
                        >
                          <option value="" disabled>
                            Select type
                          </option>
                          {PARTNER_CONTENT.businessTypes.map((bt) => (
                            <option key={bt.value} value={bt.value}>
                              {bt.label}
                            </option>
                          ))}
                        </select>
                        <ChevronDown
                          size={14}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                        />
                      </div>
                    </Field>

                    <Field
                      label="Proprietor / Owner Name"
                      required
                      error={errors.ownerName?.message}
                    >
                      <input
                        type="text"
                        placeholder="Full legal name"
                        className={inputCls(errors.ownerName)}
                        {...register("ownerName", {
                          required: "Owner name is required",
                        })}
                      />
                    </Field>

                    <Field
                      label="Contact Person Name"
                      required
                      error={errors.contactPerson?.message}
                    >
                      <input
                        type="text"
                        placeholder="Person handling orders"
                        className={inputCls(errors.contactPerson)}
                        {...register("contactPerson", {
                          required: "Contact person name is required",
                        })}
                      />
                    </Field>

                    <Field
                      label="Mobile Number"
                      required
                      error={errors.mobile?.message}
                    >
                      <input
                        type="tel"
                        placeholder="10-digit mobile number"
                        className={inputCls(errors.mobile)}
                        {...register("mobile", {
                          required: "Mobile number is required",
                          pattern: {
                            value: /^[0-9]{10}$/,
                            message: "Enter a valid 10-digit number",
                          },
                        })}
                      />
                    </Field>

                    <Field
                      label="WhatsApp Number"
                      error={errors.whatsapp?.message}
                    >
                      <input
                        type="tel"
                        placeholder="WhatsApp number (if different)"
                        className={inputCls(errors.whatsapp)}
                        {...register("whatsapp", {
                          pattern: {
                            value: /^[0-9]{10}$/,
                            message: "Enter a valid 10-digit number",
                          },
                        })}
                      />
                    </Field>

                    <Field
                      label="Email Address"
                      required
                      error={errors.email?.message}
                    >
                      <input
                        type="email"
                        placeholder="Business email address"
                        className={inputCls(errors.email)}
                        {...register("email", {
                          required: "Email address is required",
                          pattern: {
                            value: /^\S+@\S+$/i,
                            message: "Enter a valid email address",
                          },
                        })}
                      />
                    </Field>

                    <Field
                      label="Landline Number (Optional)"
                      error={errors.landline?.message}
                    >
                      <input
                        type="tel"
                        placeholder="e.g. 0431-2345678"
                        className={inputCls(errors.landline)}
                        {...register("landline")}
                      />
                    </Field>
                  </div>

                  {/* ─── Section: Business Address ─── */}
                  <SectionDivider icon={MapPin} label="Business Address" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field
                      label="Business Address"
                      required
                      error={errors.address?.message}
                      full
                    >
                      <input
                        type="text"
                        placeholder="Door no., Street, Area"
                        className={inputCls(errors.address)}
                        {...register("address", {
                          required: "Address is required",
                        })}
                      />
                    </Field>

                    <Field
                      label="City / Town"
                      required
                      error={errors.city?.message}
                    >
                      <input
                        type="text"
                        placeholder="City or Town"
                        className={inputCls(errors.city)}
                        {...register("city", { required: "City is required" })}
                      />
                    </Field>

                    <Field
                      label="District"
                      required
                      error={errors.district?.message}
                    >
                      <input
                        type="text"
                        placeholder="District"
                        className={inputCls(errors.district)}
                        {...register("district", {
                          required: "District is required",
                        })}
                      />
                    </Field>

                    <Field label="State" required error={errors.state?.message}>
                      <input
                        type="text"
                        placeholder="State"
                        className={inputCls(errors.state)}
                        {...register("state", {
                          required: "State is required",
                        })}
                      />
                    </Field>

                    <Field
                      label="PIN Code"
                      required
                      error={errors.pincode?.message}
                    >
                      <input
                        type="text"
                        placeholder="6-digit PIN"
                        className={inputCls(errors.pincode)}
                        {...register("pincode", {
                          required: "PIN code is required",
                          pattern: {
                            value: /^[0-9]{6}$/,
                            message: "Enter a valid 6-digit PIN",
                          },
                        })}
                      />
                    </Field>
                  </div>

                  {/* ─── Section: Business Documents ─── */}
                  <SectionDivider icon={FileText} label="Business Documents" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FileUpload
                      label="Drug Licence"
                      file={drugLicence}
                      onFileChange={setDrugLicence}
                      error={fileErrors.drugLicence}
                    />
                    <FileUpload
                      label="GST Certificate"
                      file={gstCertificate}
                      onFileChange={setGstCertificate}
                      error={fileErrors.gstCertificate}
                    />
                  </div>

                  {/* ─── Section: Product Preferences ─── */}
                  <SectionDivider
                    icon={Handshake}
                    label="Product Preferences"
                  />

                  {/* Category checkboxes */}
                  <Field
                    label="Interested Product Categories"
                    required
                    error={errors.categories?.message}
                  >
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-1">
                      {PARTNER_CONTENT.productCategories.map((cat) => {
                        const checked = watch("categories") || [];
                        const isChecked = checked.includes(cat.value);
                        return (
                          <label
                            key={cat.value}
                            className={`flex items-center gap-2.5 px-4 py-3 rounded-xl border text-sm font-semibold cursor-pointer transition-all duration-200 select-none ${
                              isChecked
                                ? "border-primary bg-primary/5 text-primary"
                                : "border-slate-200 bg-slate-50 text-slate-600 hover:border-primary/30 hover:bg-white"
                            }`}
                          >
                            <input
                              type="checkbox"
                              value={cat.value}
                              className="accent-primary w-3.5 h-3.5 flex-shrink-0"
                              {...register("categories", {
                                validate: (v) =>
                                  (v && v.length > 0) ||
                                  "Select at least one product category",
                              })}
                            />
                            {cat.label}
                          </label>
                        );
                      })}
                    </div>
                  </Field>

                  {/* Monthly purchase range */}
                  <Field
                    label="Estimated Monthly Purchase Value"
                    required
                    error={errors.purchaseRange?.message}
                  >
                    <div className="relative max-w-xs">
                      <select
                        className={`${inputCls(errors.purchaseRange)} appearance-none pr-10`}
                        defaultValue=""
                        {...register("purchaseRange", {
                          required: "Please select a purchase range",
                        })}
                      >
                        <option value="" disabled>
                          Select range
                        </option>
                        {PARTNER_CONTENT.purchaseRanges.map((pr) => (
                          <option key={pr.value} value={pr.value}>
                            {pr.label}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        size={14}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                      />
                    </div>
                  </Field>

                  {/* Message */}
                  <Field
                    label="Message / Requirements"
                    error={errors.message?.message}
                  >
                    <textarea
                      rows={4}
                      placeholder="Describe your specific requirements, preferred delivery schedule, or any questions..."
                      className={`${inputCls(errors.message)} resize-none`}
                      {...register("message")}
                    />
                  </Field>

                  {/* ─── Consent ─── */}
                  <div className="border-t border-slate-100 pt-6">
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        className="accent-primary w-4 h-4 mt-0.5 flex-shrink-0"
                        {...register("consent", {
                          required:
                            "You must confirm the above statement to submit",
                        })}
                      />
                      <span className="text-sm text-slate-600 leading-relaxed font-medium group-hover:text-slate-800 transition-colors">
                        {PARTNER_CONTENT.consentText}
                      </span>
                    </label>
                    {errors.consent && (
                      <p className="text-red-500 text-[10px] font-semibold mt-2 ml-7">
                        {errors.consent.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* ── Sticky-style submit footer ─────────────────────────── */}
                <div className="border-t border-slate-100 bg-slate-50/60 px-6 md:px-10 py-6">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2.5 py-4 bg-primary hover:bg-[#16b3c2] text-white text-sm font-black rounded-xl shadow-lg shadow-cyan-500/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 uppercase tracking-widest cursor-pointer focus:outline-none"
                  >
                    <Handshake size={18} />
                    {PARTNER_CONTENT.submitLabel}
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
