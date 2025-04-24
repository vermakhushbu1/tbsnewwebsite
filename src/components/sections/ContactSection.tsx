import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { MapPin, Phone, Mail, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get In <span className="text-pink-DEFAULT">Touch</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Have a project in mind? Fill out the form below and we'll get back
            to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-dark-gray border border-jamuni-DEFAULT/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Send Us a Message
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Your Name
                  </label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    className="bg-dark-light border-jamuni-DEFAULT/50 text-white placeholder:text-gray-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Your Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="bg-dark-light border-jamuni-DEFAULT/50 text-white placeholder:text-gray-500"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="How can we help you?"
                  className="bg-dark-light border-jamuni-DEFAULT/50 text-white placeholder:text-gray-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  rows={5}
                  className="bg-dark-light border-jamuni-DEFAULT/50 text-white placeholder:text-gray-500"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-pink-DEFAULT hover:bg-pink-dark text-white"
              >
                <Send className="mr-2 h-4 w-4" /> Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-dark-gray border border-jamuni-DEFAULT/30 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-pink-DEFAULT/20 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-pink-DEFAULT" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">
                      Our Location
                    </h4>
                    <p className="text-gray-300">
                      Noida Sector 63, Uttar Pradesh, India
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-pink-DEFAULT/20 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-pink-DEFAULT" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">
                      Phone Number
                    </h4>
                    <p className="text-gray-300">7233062243</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-pink-DEFAULT/20 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-pink-DEFAULT" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">
                      Email Address
                    </h4>
                    <p className="text-gray-300">tbswebtechnology@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-dark-gray border border-jamuni-DEFAULT/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Our Working Hours
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-jamuni-DEFAULT/30">
                  <span className="text-gray-300">Monday - Friday</span>
                  <span className="text-white font-medium">
                    9:00 AM - 6:00 PM
                  </span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-jamuni-DEFAULT/30">
                  <span className="text-gray-300">Saturday</span>
                  <span className="text-white font-medium">
                    10:00 AM - 4:00 PM
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Sunday</span>
                  <span className="text-pink-DEFAULT font-medium">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
