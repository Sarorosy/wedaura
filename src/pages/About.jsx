import React from "react";
import {
  Heart,
  Camera,
  Film,
  Award,
  Clock,
  Users,
  Star,
  CheckCircle,
  Play,
  Sparkles,
  Palette,
  Target,
  Instagram,
  Mail,
  Phone,
} from "lucide-react";
import ab from "../assets/about.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";
import abtvdo from "../assets/about.mp4";

import kapil from "../assets/kapil.jpg";
import kunal_verma from "../assets/kunal_verma.JPG";

const About = () => {
  const stats = [
    {
      icon: Heart,
      number: "500+",
      label: "Couples Served",
      color: "text-accent",
    },
    {
      icon: Award,
      number: "10+",
      label: "Years Experience",
      color: "text-accent",
    },
    {
      icon: Film,
      number: "1000+",
      label: "Videos Created",
      color: "text-accent",
    },
    {
      icon: Star,
      number: "5.0",
      label: "Average Rating",
      color: "text-accent",
    },
  ];

  const services = [
    {
      icon: Camera,
      title: "Cinematic Wedding Films",
      description:
        "Transform your special day into a breathtaking cinematic experience that captures every emotion and precious moment.",
    },
    {
      icon: Palette,
      title: "Professional Color Grading",
      description:
        "Expert color correction and grading to ensure your wedding video has that perfect, dreamy aesthetic.",
    },
    {
      icon: Sparkles,
      title: "Motion Graphics & Effects",
      description:
        "Beautiful animations, transitions, and special effects that add magic to your wedding story.",
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description:
        "Quick delivery without compromising quality, so you can relive your special moments sooner.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah & Michael Chen",
      image:
        "https://img.freepik.com/free-photo/couple-with-lollipop_23-2148011860.jpg?uid=R103194381&ga=GA1.1.289768406.1747801732&semt=ais_hybrid&w=740",
      text: "Folklore transformed our wedding footage into pure magic! The cinematic quality and attention to detail exceeded all our expectations. We've watched our video dozens of times and still get emotional every single time.",
      rating: 5,
      location: "San Francisco, CA",
    },
    {
      name: "Emma & David Johnson",
      image:
        "https://img.freepik.com/free-photo/smiling-young-woman-man-showing-heart-by-hands_23-2148020225.jpg?uid=R103194381&ga=GA1.1.289768406.1747801732&semt=ais_hybrid&w=740",
      text: "From start to finish, Folklore was incredible to work with. They captured moments we didn't even know happened and turned them into a beautiful story. The color grading is absolutely stunning!",
      rating: 5,
      location: "Austin, TX",
    },
    {
      name: "Priya & Raj Patel",
      image:
        "https://img.freepik.com/free-photo/smiling-couple-holding-each-other-s-hand-standing-against-blue-sky_23-2148103056.jpg?uid=R103194381&ga=GA1.1.289768406.1747801732&semt=ais_hybrid&w=740",
      text: "Folklore perfectly captured the essence of our multicultural wedding. They understood our vision and delivered a masterpiece that beautifully blends both our traditions. Simply phenomenal work!",
      rating: 5,
      location: "Los Angeles, CA",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To save you time and stress by handling the entire post-production process, allowing you to focus on what matters most - capturing beautiful moments and growing your business.",
    },
    {
      icon: Heart,
      title: "Our Passion",
      description:
        "We believe every wedding video has the potential to be a cinematic masterpiece. Our passion for storytelling drives us to create emotionally engaging content that stands the test of time.",
    },
    {
      icon: Users,
      title: "Our Promise",
      description:
        "We operate as your creative partners, matching your unique style and vision. To build trust, we complete projects before requesting payment - your satisfaction is our guarantee.",
    },
  ];

  const features = [
    { text: "10+ Years of Experience" },
    { text: "Passion for Storytelling" },
    { text: "We Match Your Style" },
    { text: "On-time Delivery" },
  ];

  const founders = [
    {
      name: "Kunal Verma",
      role: "Co-Founder | Public Relations & Editor",
      image: kunal_verma,
      description:
        "I am a self-taught wedding editor with six years of experience collaborating with creative individuals and firms worldwide. Let's connect and collaborate together!",
      phone: "+91 9315028442",
      email: "Productionfolklore@gmail.com",
      instagram: "https://www.instagram.com/kannuverma430/",
      instagramHandle: "@kannuverma430",
    },
    {
      name: "Kapil Moudgil",
      role: "Co-Founder | Operation Head & Editor",
      image: kapil,
      description:
        "I am a self-taught filmmaker, wedding editor with 7 years of experience in creative video editing. I manage all technical and post-production operations with expertise.",
      phone: "+91 89507 55448",
      email: "Productionfolklore@gmail.com",
      instagram: "https://www.instagram.com/imeditorkapil/",
      instagramHandle: "@imeditorkapil",
    },
    
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-pastel overflow-x-hidden">
        <section className="py-20 px-4 bg-slate-50 relative overflow-hidden">
  {/* Decorative elements */}
  <div className="absolute top-0 left-0 w-full h-full">
    <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
    <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
  </div>

  <div className="max-w-6xl mx-auto text-center relative z-10">
    <h2 className="text-4xl md:text-5xl font-romantica text-darkBrown mb-16 relative">
      Our Founders
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-accent rounded-full"></div>
    </h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
      {founders.map((founder, index) => (
        <div
          key={index}
          className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2 overflow-hidden"
        >
          {/* Card background with subtle pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50/50"></div>
          
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Image container with hover effect */}
          <div className="relative pt-8 pb-4">
            <div className="relative mx-auto w-40 h-40 group-hover:scale-110 transition-transform duration-500 ease-out">
              {/* Image shadow/glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 scale-110"></div>
              
              {/* Main image */}
              <img
                src={founder.image}
                alt={founder.name}
                className="relative z-10 w-full h-full rounded-full object-cover border-4 border-white shadow-xl group-hover:border-accent/20 group-hover:rounded-none transition-all duration-500"
              />
              
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
            </div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 p-8 pt-4">
            <h3 className="text-2xl font-bold text-darkBrown mb-2 group-hover:text-primary transition-colors duration-300">
              {founder.name}
            </h3>
            
            <div className="inline-block px-4 py-1 bg-accent text-darkBrown text-sm font-medium rounded-full mb-4 group-hover:bg-accent/20 transition-colors duration-300">
              {founder.role}
            </div>
            
            <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
              {founder.description}
            </p>
            
            {/* Contact info with icons */}
            <div className="space-y-3">
              <div className="flex items-center justify-center space-x-2 text-gray-500 group-hover:text-primary transition-colors duration-300">
                <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-xs"><Phone size={16} className="text-blue-600"/></span>
                </div>
                <span className="text-sm font-medium">{founder.phone}</span>
              </div>
              
              <div className="flex items-center justify-center space-x-2 text-gray-500 group-hover:text-primary transition-colors duration-300">
                <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-xs"><Mail size={16} className="text-green-600"/></span>
                </div>
                <span className="text-sm font-medium">{founder.email}</span>
              </div>
              
              <div className="flex items-center justify-center space-x-2">
                <div className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center">
                  <span className="text-xs"><Instagram size={16} className="text-pink-600"/></span>
                </div>
                <a
                  href={founder.instagram}
                  className="text-sm font-medium text-secondary hover:text-darkBrown transition-colors duration-300 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {founder.instagramHandle}
                </a>
              </div>
            </div>
          </div>
          
          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        </div>
      ))}
    </div>
  </div>
</section>

        {/* About Us Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-romantica text-primary mb-6">
              About Us
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>
            <p className="text-lg text-primary leading-relaxed max-w-4xl mx-auto">
              At Folklore Productions, we operate as a close-knit, highly
              skilled team, dedicated to delivering exceptional visual and audio
              content. We’re your creative partners, ready to turn your vision
              into a captivating reality, whether you’re a growing business or
              an individual with a story to share.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 bg-lightGray/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-romantica text-primary mb-6">
                Our Expertise
              </h2>
              <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>
              <p className="text-lg text-primary max-w-3xl mx-auto font-serifStyle">
                We offer a comprehensive range of wedding video editing
                services, from basic color correction to complex motion graphics
                and cinematic effects.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="bg-accent/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-serifStyle text-primary mb-4 text-center">
                    {service.title}
                  </h3>
                  <p className="text-primary/80 text-center leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-romantica text-primary mb-6">
                Mission & Values
              </h2>
              <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="bg-secondary/10 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <value.icon className="w-10 h-10 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-serifStyle text-primary mb-4">
                    {value.title}
                  </h3>
                  <p className="text-primary/80 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 bg-gradient-to-br from-secondary/10 to-accent/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-romantica text-primary mb-6">
                Love Stories from Our Couples
              </h2>
              <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-serifStyle text-primary text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-primary/60 text-sm">
                        {testimonial.location}
                      </p>
                      <div className="flex space-x-1 mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-accent text-accent"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-primary/80 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-romantica text-accent mb-6">
              Ready to Create Your Love Story?
            </h2>
            <p className="text-xl text-lightGray mb-8 font-elegance">
              Let us transform your wedding footage into a cinematic masterpiece
              that you'll treasure forever.
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
              <button className="bg-accent text-primary px-8 py-4 rounded-full font-serifStyle text-lg hover:bg-accent/90 transition-colors shadow-lg">
                Get Started Today
              </button>
              <button className="border-2 border-accent text-accent px-8 py-4 rounded-full font-serifStyle text-lg hover:bg-accent hover:text-primary transition-all">
                View Our Portfolio
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;
