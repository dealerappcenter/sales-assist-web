import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, CheckCircle, Car, MapPin, Phone, Info } from 'lucide-react';

const vehiclesData = [
 {
 id: 1,
 name: 'BMW X1 2026 xDrive28i',
 details: '2026 | 1,112 mi | Stock: D26099',
 price: '$48,725',
 image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=300&h=200'
 },
 {
 id: 2,
 name: 'BMW X3 2026 30 xDrive',
 details: '2026 | 1,112 mi | Stock: D26124',
 price: '$57,325',
 image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80&w=300&h=200'
 },
 {
 id: 3,
 name: 'BMW X5 2026 xDrive40i',
 details: '2026 | 18 mi | Stock: 26217',
 price: '$82,750',
 image: 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&q=80&w=300&h=200'
 }
];

export default function SallyDemoApp() {
 const [formData, setFormData] = useState({
 firstName: '',
 lastName: '',
 mobile: '',
 email: '',
 vehicle: null,
 intent: ''
 });

 const [isSubmitted, setIsSubmitted] = useState(false);
 const [dropdownOpen, setDropdownOpen] = useState(false);
 const [errorMsg, setErrorMsg] = useState('');

 const dropdownRef = useRef(null);

 // Close custom dropdown when clicking outside
 useEffect(() => {
 function handleClickOutside(event) {
 if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
 setDropdownOpen(false);
 }
 }
 document.addEventListener("mousedown", handleClickOutside);
 return () => document.removeEventListener("mousedown", handleClickOutside);
 }, []);

 const handleInputChange = (e) => {
 const { name, value } = e.target;
 setFormData(prev => ({ ...prev, [name]: value }));
 if (errorMsg) setErrorMsg('');
 };

 const handleVehicleSelect = (vehicle) => {
 setFormData(prev => ({ ...prev, vehicle }));
 setDropdownOpen(false);
 if (errorMsg) setErrorMsg('');
 };

 const handleSubmit = (e) => {
 e.preventDefault();

 // Validation for custom required fields
 if (!formData.firstName || !formData.lastName || !formData.mobile || !formData.email || !formData.vehicle || !formData.intent) {
 setErrorMsg('Please fill out all required fields before submitting.');
 return;
 }

 // Determine Source and Sub-Source based on selected intent
 let subSource = '';
 if (formData.intent === 'Book Test Drive') {
 subSource = 'Autoleadstar/ Book Appointment';
 } else if (formData.intent === 'Get Price & Confirm Availability') {
 subSource = 'Autoleadstar/Sms';
 }

 // Data payload to be "sent" to your CRM/API
 const submissionData = {
 ...formData,
 source: 'Dealer Website',
 subSource: subSource
 };

 console.log("Sending Lead Data:", submissionData);

 // Simulate API call
 setIsSubmitted(true);
 };

 return (
 <div className="min-h-screen relative flex items-center justify-center font-sans bg-gray-900 overflow-hidden">
 {/* Background Image & Overlay */}
 <div className="absolute inset-0 z-0">
 <img
 src="https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&q=80&w=2070"
 alt="BMW Dealership Showroom"
 className="w-full h-full object-cover opacity-70"
 />
 <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/60 to-black/40 mix-blend-multiply"></div>
 </div>

 {/* Main Content Container */}
 <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-12 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

 {/* Left Side: Dealership Branding */}
 <div className="text-white space-y-6 text-center lg:text-left">
 <div className="inline-flex items-center justify-center lg:justify-start gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-4">
 <Car size={20} className="text-blue-400" />
 <span className="text-sm font-medium tracking-wider uppercase">Premium Dealership</span>
 </div>
 <h1 className="text-5xl lg:text-7xl font-light tracking-tight">
 BMW of <br />
 <span className="font-bold">Schererville</span>
 </h1>
 <p className="text-lg lg:text-xl text-gray-300 font-light max-w-lg mx-auto lg:mx-0 leading-relaxed">
 Experience the Ultimate Driving Machine. Browse our exclusive inventory of new and pre-owned luxury vehicles.
 </p>
 <div className="pt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-sm text-gray-400">
 <div className="flex items-center gap-2">
 <MapPin size={18} />
 <span>Schererville, IN</span>
 </div>
 <div className="flex items-center gap-2">
 <Phone size={18} />
 <span>650-385-9777</span>
 </div>
 </div>
 </div>

 {/* Right Side: Lead Form */}
 <div className="w-full max-w-md mx-auto lg:max-w-none lg:mx-0">
 <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 sm:p-10 rounded-3xl shadow-2xl relative overflow-visible">

 {!isSubmitted ? (
 <form onSubmit={handleSubmit} className="space-y-5">

 {/* Intro Text */}
 <div className="mb-8">
 <h2 className="text-2xl font-semibold text-white mb-3">Get in Touch</h2>
 <p className="text-sm text-gray-300 leading-relaxed">
 Welcome to BMW of Schererville! Thank you for your interest. Please fill out the form below and we are excited to get in touch.
 </p>
 </div>

 {errorMsg && (
 <div className="bg-red-500/20 border border-red-500/50 text-red-100 px-4 py-3 rounded-lg text-sm flex items-start gap-3">
 <Info size={18} className="shrink-0 mt-0.5" />
 <p>{errorMsg}</p>
 </div>
 )}

 {/* Name Fields */}
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
 <div>
 <label className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wider">First Name *</label>
 <input
 type="text"
 name="firstName"
 value={formData.firstName}
 onChange={handleInputChange}
 className="w-full bg-black/30 border border-white/10 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all placeholder-gray-500"
 placeholder="John"
 />
 </div>
 <div>
 <label className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wider">Last Name *</label>
 <input
 type="text"
 name="lastName"
 value={formData.lastName}
 onChange={handleInputChange}
 className="w-full bg-black/30 border border-white/10 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all placeholder-gray-500"
 placeholder="Doe"
 />
 </div>
 </div>

 {/* Contact Fields */}
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
 <div>
 <label className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wider">Mobile Number *</label>
 <input
 type="tel"
 name="mobile"
 value={formData.mobile}
 onChange={handleInputChange}
 className="w-full bg-black/30 border border-white/10 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all placeholder-gray-500"
 placeholder="(555) 000-0000"
 />
 </div>
 <div>
 <label className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wider">Email Address *</label>
 <input
 type="email"
 name="email"
 value={formData.email}
 onChange={handleInputChange}
 className="w-full bg-black/30 border border-white/10 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all placeholder-gray-500"
 placeholder="john@example.com"
 />
 </div>
 </div>

 {/* Custom Rich Dropdown: Vehicle of Interest */}
 <div className="relative z-50" ref={dropdownRef}>
 <label className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wider">Vehicle of Interest *</label>
 <button
 type="button"
 onClick={() => setDropdownOpen(!dropdownOpen)}
 className="w-full bg-black/30 border border-white/10 text-white rounded-xl px-4 py-3.5 flex items-center justify-between focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all"
 >
 {formData.vehicle ? (
 <span className="truncate pr-4">{formData.vehicle.name}</span>
 ) : (
 <span className="text-gray-500">Select a vehicle...</span>
 )}
 <ChevronDown size={20} className={`text-gray-400 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
 </button>

 {/* Dropdown Options */}
 {dropdownOpen && (
 <div className="absolute top-full left-0 w-full mt-2 bg-white rounded-xl shadow-2xl max-h-[320px] overflow-y-auto border border-gray-200 divide-y divide-gray-100 z-50">
 {vehiclesData.map(v => (
 <div
 key={v.id}
 onClick={() => handleVehicleSelect(v)}
 className="flex items-center gap-4 p-3 hover:bg-blue-50 cursor-pointer transition-colors group"
 >
 <img
 src={v.image}
 alt={v.name}
 className="w-24 h-16 object-cover rounded-md border border-gray-200 group-hover:border-blue-200"
 />
 <div className="flex-1 min-w-0">
 <div className="text-sm font-bold text-gray-900 truncate">{v.name}</div>
 <div className="text-xs text-gray-500 truncate">{v.details}</div>
 </div>
 <div className="text-sm font-bold text-gray-900 whitespace-nowrap pl-2">
 {v.price}
 </div>
 </div>
 ))}
 </div>
 )}
 </div>

 {/* Standard Dropdown: Intent */}
 <div>
 <label className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wider">Intent *</label>
 <div className="relative">
 <select
 name="intent"
 value={formData.intent}
 onChange={handleInputChange}
 className="w-full bg-black/30 border border-white/10 text-white rounded-xl px-4 py-3.5 appearance-none focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all [&>option]:text-gray-900"
 >
 <option value="" disabled className="text-gray-500">What would you like to do?</option>
 <option value="Get Price & Confirm Availability">Get Price & Confirm Availability</option>
 <option value="Book Test Drive">Book Test Drive</option>
 </select>
 <ChevronDown size={20} className="text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
 </div>
 </div>

 {/* Submit Button */}
 <button
 type="submit"
 className="w-full bg-[#F97316] hover:opacity-90 text-white font-semibold py-4 rounded-xl mt-4 transition-all duration-300 transform active:scale-[0.98] shadow-lg shadow-[#F97316]/30"
 >
 Submit Inquiry
 </button>
 </form>
 ) : (
 /* Success State */
 <div className="py-12 text-center animate-in fade-in zoom-in duration-500">
 <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/20 text-green-400 mb-6 border border-green-500/30">
 <CheckCircle size={40} />
 </div>
 <h2 className="text-3xl font-bold text-white mb-4">Thank You!</h2>
 <p className="text-gray-300 text-lg leading-relaxed px-4">
 Thank you for getting in touch, <span className="text-white font-semibold">{formData.firstName}</span>. <br/> We will be in touch shortly regarding the <span className="text-white font-medium">{formData.vehicle.name}</span>.
 </p>
 <button
 onClick={() => {
 setIsSubmitted(false);
 setFormData({firstName: '', lastName: '', mobile: '', email: '', vehicle: null, intent: ''});
 }}
 className="mt-8 text-[#F97316] hover:opacity-80 font-medium text-sm transition-colors"
 >
 Submit another inquiry
 </button>
 </div>
 )}

 </div>
 </div>

 </div>
 </div>
 );
}