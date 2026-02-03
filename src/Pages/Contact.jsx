import React, { useState, useEffect } from "react";
import { Share2, User, Mail, MessageSquare, Send } from "lucide-react";
import SocialLinks from "../components/SocialLinks";
import Komentar from "../components/Commentar";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "mobile",
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    Swal.fire({
      title: 'SENDING...',
      background: '#161616',
      color: '#ffffff',
      showConfirmButton: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    try {
      const form = e.target;
      await form.submit();

      Swal.fire({
        title: 'SUCCESS!',
        text: 'Your message has been sent.',
        icon: 'success',
        background: '#161616',
        color: '#ffffff',
        confirmButtonColor: '#a3ff12',
        timer: 2000
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      Swal.fire({
        title: 'ERROR!',
        text: 'Failed to send message.',
        icon: 'error',
        background: '#161616',
        color: '#ffffff',
        confirmButtonColor: '#a3ff12'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="px-[5%] sm:px-[10%] w-full pt-10 pb-20 bg-background" id="Contact">
      <div className="text-center mb-16" data-aos="fade-up">
        <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-4">
          GET IN <span className="text-accent underline decoration-white/10 underline-offset-[12px]">TOUCH</span>
        </h2>



        <p className="text-grayText max-w-xl mx-auto text-[10px] font-black uppercase tracking-[0.3em] mt-8">
          Let's build something amazing together
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div
          data-aos="fade-right"
          className="bg-[#161616] border border-white/5 rounded-xl p-8 sm:p-12 shadow-2xl transition-all duration-500 hover:border-accent/20"
        >
          <div className="flex justify-between items-start mb-10">
            <div>
              <h3 className="text-xl font-black text-white uppercase tracking-tight mb-2">Message Me</h3>
              <p className="text-grayText font-medium">I'm always open to new opportunities and collaborations.</p>
            </div>
            <Share2 className="w-8 h-8 text-accent opacity-20" />
          </div>

          <form
            action="https://formsubmit.co/sophalvaung@gmail.com"
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />

            <div className="relative group">
              <User className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-grayText group-focus-within:text-accent transition-colors" />
              <input
                type="text"
                name="name"
                placeholder="YOUR NAME"
                value={formData.name}
                onChange={handleChange}
                className="w-full py-5 pl-14 pr-6 bg-white/5 border border-white/10 rounded-2xl text-xs font-bold tracking-widest text-white focus:outline-none focus:border-accent/50 transition-all"
                required
              />
            </div>

            <div className="relative group">
              <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-grayText group-focus-within:text-accent transition-colors" />
              <input
                type="email"
                name="email"
                placeholder="YOUR EMAIL"
                value={formData.email}
                onChange={handleChange}
                className="w-full py-5 pl-14 pr-6 bg-white/5 border border-white/10 rounded-2xl text-xs font-bold tracking-widest text-white focus:outline-none focus:border-accent/50 transition-all"
                required
              />
            </div>

            <div className="relative group">
              <MessageSquare className="absolute left-5 top-6 w-4 h-4 text-grayText group-focus-within:text-accent transition-colors" />
              <textarea
                name="message"
                placeholder="YOUR MESSAGE"
                value={formData.message}
                onChange={handleChange}
                className="w-full h-40 py-6 pl-14 pr-6 bg-white/5 border border-white/10 rounded-2xl text-xs font-bold tracking-widest text-white focus:outline-none focus:border-accent/50 transition-all resize-none"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-accent text-background py-5 rounded-2xl font-black text-xs uppercase tracking-[0.3em] transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
            </button>
          </form>

          <div className="mt-12 pt-8 border-t border-white/5">
            <SocialLinks />
          </div>
        </div>

        <div className="bg-[#161616] border border-white/5 rounded-xl shadow-2xl overflow-hidden transition-all duration-500 hover:border-accent/20">
          <Komentar />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;