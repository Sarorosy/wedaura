import React from 'react';
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
  Target
} from 'lucide-react';
import ab from '../assets/about.jpg'
import Header2 from '../components/Header2';
import Footer from '../components/Footer';
import abtvdo from '../assets/about.mp4';

const About = () => {
  const stats = [
    { icon: Heart, number: "500+", label: "Couples Served", color: "text-accent" },
    { icon: Award, number: "10+", label: "Years Experience", color: "text-accent" },
    { icon: Film, number: "1000+", label: "Videos Created", color: "text-accent" },
    { icon: Star, number: "5.0", label: "Average Rating", color: "text-accent" }
  ];

  const services = [
    {
      icon: Camera,
      title: "Cinematic Wedding Films",
      description: "Transform your special day into a breathtaking cinematic experience that captures every emotion and precious moment."
    },
    {
      icon: Palette,
      title: "Professional Color Grading",
      description: "Expert color correction and grading to ensure your wedding video has that perfect, dreamy aesthetic."
    },
    {
      icon: Sparkles,
      title: "Motion Graphics & Effects",
      description: "Beautiful animations, transitions, and special effects that add magic to your wedding story."
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Quick delivery without compromising quality, so you can relive your special moments sooner."
    }
  ];

  const testimonials = [
    {
      name: "Sarah & Michael Chen",
      image: "https://img.freepik.com/free-photo/couple-with-lollipop_23-2148011860.jpg?uid=R103194381&ga=GA1.1.289768406.1747801732&semt=ais_hybrid&w=740",
      text: "WedAura transformed our wedding footage into pure magic! The cinematic quality and attention to detail exceeded all our expectations. We've watched our video dozens of times and still get emotional every single time.",
      rating: 5,
      location: "San Francisco, CA"
    },
    {
      name: "Emma & David Johnson",
      image: "https://img.freepik.com/free-photo/smiling-young-woman-man-showing-heart-by-hands_23-2148020225.jpg?uid=R103194381&ga=GA1.1.289768406.1747801732&semt=ais_hybrid&w=740",
      text: "From start to finish, WedAura was incredible to work with. They captured moments we didn't even know happened and turned them into a beautiful story. The color grading is absolutely stunning!",
      rating: 5,
      location: "Austin, TX"
    },
    {
      name: "Priya & Raj Patel",
      image: "https://img.freepik.com/free-photo/smiling-couple-holding-each-other-s-hand-standing-against-blue-sky_23-2148103056.jpg?uid=R103194381&ga=GA1.1.289768406.1747801732&semt=ais_hybrid&w=740",
      text: "WedAura perfectly captured the essence of our multicultural wedding. They understood our vision and delivered a masterpiece that beautifully blends both our traditions. Simply phenomenal work!",
      rating: 5,
      location: "Los Angeles, CA"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To save you time and stress by handling the entire post-production process, allowing you to focus on what matters most - capturing beautiful moments and growing your business."
    },
    {
      icon: Heart,
      title: "Our Passion",
      description: "We believe every wedding video has the potential to be a cinematic masterpiece. Our passion for storytelling drives us to create emotionally engaging content that stands the test of time."
    },
    {
      icon: Users,
      title: "Our Promise",
      description: "We operate as your creative partners, matching your unique style and vision. To build trust, we complete projects before requesting payment - your satisfaction is our guarantee."
    }
  ];

  return (
    <>
    <Header2 />
    <div className="min-h-screen bg-pastel overflow-x-hidden">
      {/* Hero Section */}
      <section 
  className="relative py-20 px-4 bg-gradient-to-br from-primary via-secondary to-darkBrown overflow-hidden"
>
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
  >
    <source src={abtvdo} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl itali text-accent mb-4">
              WedAura
            </h1>
            <p className="text-xl md:text-2xl font-elegance text-lightGray mb-6">
              Where Love Stories Come to Life
            </p>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/20">
            <h2 className="text-3xl font-serifStyle text-accent mb-4">
              Wedding Video Editing Experts
            </h2>
            <p className="text-lg font-elegance text-lightGray italic">
              *You Capture, We Elevate*
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                <div className="text-2xl font-bold text-accent">{stat.number}</div>
                <div className="text-sm text-lightGray font-elegance">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-romantica text-primary mb-6">
              About WedAura
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <p className="text-lg text-primary leading-relaxed font-serifStyle">
                At WedAura, we operate as a close-knit, highly skilled team, dedicated to delivering exceptional wedding videography. We're your creative partners, ready to turn your love story into a captivating cinematic reality.
              </p>
              <p className="text-lg text-primary leading-relaxed font-serifStyle">
                We believe that every wedding video has the potential to be a cinematic masterpiece. That's why we are committed to helping couples achieve their vision and create videos that are both visually stunning and emotionally engaging.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span className="text-primary font-serifStyle">10+ Years of Experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span className="text-primary font-serifStyle">Passion for Storytelling</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span className="text-primary font-serifStyle">We Match Your Style</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span className="text-primary font-serifStyle">On-time Delivery</span>
                </div>
              </div>
            </div>
            <div className="relative flex items-end justify-end">
              <img 
                src={ab}
                alt="Wedding videography" 
                className="rounded-2xl shadow-2xl max-h-96 " 
              />
              <div className="absolute -bottom-6 -right-6 bg-accent p-6 rounded-xl shadow-lg">
                <Play className="w-12 h-12 text-primary" />
              </div>
            </div>
          </div>
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
              We offer a comprehensive range of wedding video editing services, from basic color correction to complex motion graphics and cinematic effects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="bg-accent/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-serifStyle text-primary mb-4 text-center">{service.title}</h3>
                <p className="text-primary/80 text-center leading-relaxed">{service.description}</p>
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
                <h3 className="text-2xl font-serifStyle text-primary mb-4">{value.title}</h3>
                <p className="text-primary/80 leading-relaxed">{value.description}</p>
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
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-serifStyle text-primary text-lg">{testimonial.name}</h4>
                    <p className="text-primary/60 text-sm">{testimonial.location}</p>
                    <div className="flex space-x-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-primary/80 leading-relaxed italic">"{testimonial.text}"</p>
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
            Let us transform your wedding footage into a cinematic masterpiece that you'll treasure forever.
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