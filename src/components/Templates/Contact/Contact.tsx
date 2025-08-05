import { RiArrowRightLine } from "react-icons/ri";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import schema from "@/validators/sendEmail";
import Swal from "sweetalert2";

import { fadeIn } from "@/components/Animations/FadeIn";
import { SendEmailInterface } from "@/interfaces/SendEmailInterface";
import ParticlesContainer from "@/components/Other/ParticlesContainer/ParticlesContainer";

const Contact = () => {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SendEmailInterface>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<SendEmailInterface> = (data) => {
    const templateParams = {
      name: data.name,
      subject: data.subject,
      message: data.message,
      email: data.email,
      url: window.location.href,
    };

    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      throw new Error("Environment variables are not defined correctly.");
    }

    emailjs
      .send(serviceId.toString(), templateId.toString(), templateParams, publicKey.toString())
      .then(
        (response) => {
          console.log('Email sent successfully:', response);
          reset();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Email sent successfully!",
            text: "Thank you for contacting me. I&apos;ll get back to you soon!",
            showConfirmButton: true,
            confirmButtonText: "OK",
            confirmButtonColor: "#e74c3c",
            width: 500,
            padding: "2em",
            color: "#fff",
            background: "#1a1a1a",
            backdrop: "rgba(0,0,0,0.8)",
            timer: 4000,
            timerProgressBar: true,
            allowOutsideClick: false,
            allowEscapeKey: false
          }).then(() => {
            router.push('/');
          });
        },
        (err) => {
          console.error('Email send failed:', err);
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Oops! Something went wrong",
            text: "Failed to send email. Please try again or contact me directly.",
            showConfirmButton: true,
            confirmButtonText: "Try Again",
            confirmButtonColor: "#e74c3c",
            width: 500,
            padding: "2em",
            color: "#fff",
            background: "#1a1a1a",
            backdrop: "rgba(0,0,0,0.8)"
          });
        }
      );
  };

  return (
    <div className="bg-gradient bg-contain bg-repeat bg-bottom max-h-dvh">
      <div className="w-full bg-cube h-screen from-primary/10 via-black/30 to-black/10">
        <ParticlesContainer />
        <div className="h-full">
          <div className="container flex items-center justify-center h-[inherit] max-w-full xl: w-[-webkit-fill-available] max-h-dvh">
            <div className="mx-auto xl:pt-[6%] xl:py-32 pt-16 xl:pb-0 mb-0 xl:mt-0 text-center xl:text-left flex items-start justify-center w-[700px] h-[inherit]">
              <div className="flex flex-col w-full">
                <h2
                  className="h2 text-center xl:mb-12 mb-6"
                >
                  Let's <span className="text-accent">talk.</span>
                </h2>
                <motion.form
                  variants={fadeIn("up", 0.4)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex-1 flex flex-col gap-6 w-full mx-auto"
                >
                  <div className="flex gap-x-6 w-full">
                    <Controller
                      name="name"
                      control={control}
                      render={({ field }) => (
                        <input
                          type="text"
                          placeholder="Name"
                          className={errors.name ? "input border-red/20" : "input"}
                          {...field}
                        />
                      )}
                    />
                    <Controller
                      name="email"
                      control={control}
                      render={({ field }) => (
                        <input
                          type="text"
                          placeholder="Email"
                          className={errors.email ? "input border-red/20" : "input"}
                          {...field}
                        />
                      )}
                    />
                  </div>
                  <Controller
                    name="subject"
                    control={control}
                    render={({ field }) => (
                      <input
                        type="text"
                        placeholder="Subject"
                        className={errors.subject ? "input border-red/20" : "input"}
                        {...field}
                      />
                    )}
                  />
                  <Controller
                    name="message"
                    control={control}
                    render={({ field }) => (
                      <textarea
                        className={errors.message ? "textarea border-red/20" : "textarea"}
                        placeholder="Message"
                        cols={30}
                        rows={10}
                        {...field}
                      ></textarea>
                    )}
                  />
                  <button
                    type="submit"
                    className="bg-white/10 backdrop-blur-sm btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
                  >
                    <span className="transition-all duration-300">
                      Send
                    </span>
                  </button>
                </motion.form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
