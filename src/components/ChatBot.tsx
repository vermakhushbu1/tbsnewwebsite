import React, { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Search,
  X,
  Home,
  MessageSquare,
  Volume2,
  User,
  Send,
  ArrowRight,
  Phone,
  PhoneCall,
  PhoneOutgoing,
  MessageCircle,
} from "lucide-react";

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface QuickLink {
  title: string;
  icon?: React.ReactNode;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    requirement: "",
    projectType: "",
  });
  const [conversationStage, setConversationStage] = useState("greeting");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const speechSynthesis = window.speechSynthesis;
  const buttonRef = useRef<HTMLButtonElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const quickLinks: QuickLink[] = [
    { title: "How to add a website" },
    { title: "How to point a domain to Hostinger" },
    { title: "Setup Hosting with a new application" },
  ];

  // Position the chat popup
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        chatContainerRef.current &&
        !chatContainerRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Greeting message when chat is opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const greetingMessage = {
        text: "Hi 👋\nHow can we help?",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages([greetingMessage]);
    }
  }, [isOpen]);

  // Auto-scroll to the bottom of the chat
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return;

    // Add user message
    const userMessage: Message = {
      text: inputMessage,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputMessage("");
    setShowSearch(false);

    // Process user input based on conversation stage
    processUserInput(inputMessage);
  };

  const processUserInput = (input: string) => {
    const lowerInput = input.toLowerCase();

    // Handle different conversation stages
    setTimeout(() => {
      let botResponse = "";

      if (conversationStage === "greeting") {
        // Capture name and move to next stage
        setUserInfo((prev) => ({ ...prev, name: input }));
        botResponse = `Nice to meet you, ${input}! How can I help you today? Are you looking for a website, mobile app, digital marketing services, or something else?`;
        setConversationStage("requirement_type");
      } else if (conversationStage === "requirement_type") {
        // Capture project type and ask for details
        const projectType = getProjectType(lowerInput);
        setUserInfo((prev) => ({ ...prev, projectType }));

        if (projectType === "website") {
          botResponse = `Great! What kind of website are you looking for? E-commerce, corporate, portfolio, or something else? This will help me understand your requirements better.`;
        } else if (projectType === "mobile app") {
          botResponse = `Excellent! Are you interested in an Android app, iOS app, or both? Also, what functionality are you looking for in your mobile application?`;
        } else if (projectType === "digital marketing") {
          botResponse = `Perfect! Which digital marketing services are you interested in? SEO, social media marketing, content marketing, or a comprehensive strategy?`;
        } else {
          botResponse = `Could you please provide more details about your ${projectType} requirements? This will help us tailor our solution to your needs.`;
        }

        setConversationStage("requirement_details");
      } else if (conversationStage === "requirement_details") {
        // Capture detailed requirements
        setUserInfo((prev) => ({ ...prev, requirement: input }));

        // Provide pricing based on project type
        const pricing = getPricingInfo(userInfo.projectType, lowerInput);
        botResponse = `Thank you for sharing those details! ${pricing} Would you like to schedule a consultation with our team to discuss this further?`;

        setConversationStage("consultation");
      } else if (conversationStage === "consultation") {
        if (
          lowerInput.includes("yes") ||
          lowerInput.includes("sure") ||
          lowerInput.includes("ok")
        ) {
          botResponse = `Excellent! You can reach us at info@webinfotech.com or call us at 7233062243 to schedule a meeting. Alternatively, you can fill out the contact form on our website. Is there anything else you'd like to know about our services?`;
        } else {
          botResponse = `No problem! If you have any other questions or need more information about our services, feel free to ask. We're here to help you with your ${userInfo.projectType} project whenever you're ready.`;
        }
        setConversationStage("additional_info");
      } else {
        // General conversation
        botResponse = generateResponse(input);
      }

      const botMessage: Message = {
        text: botResponse,
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, 1000);
  };

  const getProjectType = (input: string): string => {
    if (
      input.includes("website") ||
      input.includes("web") ||
      input.includes("site")
    ) {
      return "website";
    } else if (
      input.includes("app") ||
      input.includes("mobile") ||
      input.includes("android") ||
      input.includes("ios")
    ) {
      return "mobile app";
    } else if (
      input.includes("market") ||
      input.includes("seo") ||
      input.includes("social media")
    ) {
      return "digital marketing";
    } else if (
      input.includes("design") ||
      input.includes("ui") ||
      input.includes("ux")
    ) {
      return "UI/UX design";
    } else {
      return "IT solution";
    }
  };

  const getPricingInfo = (projectType: string, details: string): string => {
    switch (projectType) {
      case "website":
        if (
          details.includes("e-commerce") ||
          details.includes("ecommerce") ||
          details.includes("shop")
        ) {
          return "For an e-commerce website, our pricing typically starts from ₹50,000, depending on the number of products, payment gateways, and custom features required.";
        } else if (
          details.includes("corporate") ||
          details.includes("company") ||
          details.includes("business")
        ) {
          return "For a professional corporate website, our pricing starts from ₹30,000, including responsive design, content management system, and basic SEO setup.";
        } else {
          return "Based on your requirements, our website development services typically range from ₹25,000 to ₹1,00,000 depending on complexity and features.";
        }
      case "mobile app":
        return "Mobile app development pricing starts from ₹75,000 for a basic app, while more complex applications with advanced features can range from ₹1,50,000 to ₹5,00,000.";
      case "digital marketing":
        return "Our digital marketing packages start from ₹15,000 per month, which includes SEO, social media management, and content creation.";
      case "UI/UX design":
        return "UI/UX design services start from ₹20,000 for basic projects, with comprehensive design systems ranging from ₹40,000 to ₹80,000.";
      default:
        return "Based on your requirements, we can provide a customized quote. Our IT solutions are tailored to meet your specific needs and budget.";
    }
  };

  const generateResponse = (message: string): string => {
    // General response logic for additional questions
    const lowerMessage = message.toLowerCase();

    if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
      return `Hello ${userInfo.name || "there"}! How can I assist you further today?`;
    } else if (lowerMessage.includes("help")) {
      return "I'm here to help! Please let me know what specific information you need about our services.";
    } else if (
      lowerMessage.includes("service") ||
      lowerMessage.includes("services")
    ) {
      return "We offer a wide range of services including web development, mobile app development, digital marketing, UI/UX design, e-commerce solutions, and more. Would you like specific information about any of these services?";
    } else if (lowerMessage.includes("contact")) {
      return "You can contact us through our contact form, by email at info@webinfotech.com, or by phone at 7233062243.";
    } else if (lowerMessage.includes("thank")) {
      return `You're welcome, ${userInfo.name || "there"}! Is there anything else I can help you with?`;
    } else if (
      lowerMessage.includes("bye") ||
      lowerMessage.includes("goodbye")
    ) {
      return `Goodbye, ${userInfo.name || "there"}! Feel free to chat again if you have more questions. We look forward to working with you!`;
    } else if (
      lowerMessage.includes("price") ||
      lowerMessage.includes("cost") ||
      lowerMessage.includes("pricing")
    ) {
      return getPricingInfo(userInfo.projectType || "general", lowerMessage);
    } else {
      return `Thank you for your message, ${userInfo.name || "there"}. How else can I assist you with our web and IT services?`;
    }
  };

  const speakText = (text: string) => {
    if (speechSynthesis) {
      // Cancel any ongoing speech
      speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);

      // Set a female voice if available
      const voices = speechSynthesis.getVoices();
      const femaleVoice = voices.find(
        (voice) =>
          voice.name.includes("female") || voice.name.includes("Female"),
      );
      if (femaleVoice) {
        utterance.voice = femaleVoice;
      }

      speechSynthesis.speak(utterance);
    }
  };

  const stopSpeaking = () => {
    if (speechSynthesis) {
      speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleQuickLinkClick = (link: string) => {
    setInputMessage(link);
    handleSendMessage();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Contact Buttons */}
      <div className="flex flex-col space-y-3 mb-3">
        <Button
          onClick={() => window.open("tel:7233062243")}
          className="rounded-full h-12 w-12 bg-green-600 hover:bg-green-700 shadow-lg transition-transform hover:scale-110"
          size="icon"
          title="Call Us"
        >
          <PhoneCall className="h-5 w-5" />
        </Button>
        <Button
          onClick={() => window.open("https://wa.me/917233062243")}
          className="rounded-full h-12 w-12 bg-green-500 hover:bg-green-600 shadow-lg transition-transform hover:scale-110"
          size="icon"
          title="WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
          </svg>
        </Button>
      </div>

      {/* Chat Button */}
      <Button
        ref={buttonRef}
        onClick={toggleChat}
        className="rounded-full h-14 w-14 bg-blue-600 hover:bg-blue-700 shadow-lg transition-transform hover:scale-105"
        size="icon"
      >
        <MessageSquare className="h-6 w-6" />
      </Button>

      {/* Chat Popup */}
      {isOpen && (
        <div
          ref={chatContainerRef}
          className="absolute bottom-20 right-0 w-[350px] bg-white rounded-lg shadow-xl overflow-hidden"
          style={{ maxHeight: "80vh" }}
        >
          {/* Header */}
          <div className="bg-indigo-600 text-white p-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <div className="h-8 w-8 rounded-full bg-indigo-400 flex items-center justify-center border-2 border-indigo-600">
                    <User className="h-4 w-4 text-white" />
                  </div>
                  <div className="h-8 w-8 rounded-full bg-indigo-300 flex items-center justify-center border-2 border-indigo-600">
                    <User className="h-4 w-4 text-white" />
                  </div>
                </div>
                <div className="h-8 w-8 rounded-full bg-indigo-200 flex items-center justify-center">
                  <MessageSquare className="h-4 w-4 text-indigo-600" />
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Welcome Message */}
            <div className="mt-4 mb-2">
              <h2 className="text-xl font-bold">Hi 👋</h2>
              <p className="text-lg font-semibold">How can we help?</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col h-[400px]">
            {showSearch ? (
              <div className="p-4 flex flex-col space-y-4">
                {/* Search Box */}
                <div className="relative">
                  <Input
                    placeholder="Search for help"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pr-10 bg-gray-100"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <Search className="h-4 w-4" />
                  </div>
                </div>

                {/* Quick Links */}
                <div className="space-y-2">
                  {quickLinks.map((link, index) => (
                    <div
                      key={index}
                      className="p-3 border rounded-md hover:bg-gray-50 cursor-pointer flex justify-between items-center"
                      onClick={() => handleQuickLinkClick(link.title)}
                    >
                      <span>{link.title}</span>
                      <ArrowRight className="h-4 w-4 text-gray-400" />
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <>
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
                    >
                      {!message.isUser && index === 0 && (
                        <div className="max-w-[90%]">
                          <div className="bg-indigo-600 text-white p-4 rounded-lg">
                            <p className="whitespace-pre-line">
                              {message.text}
                            </p>
                          </div>
                          <div className="mt-4 mb-2">
                            <button
                              onClick={() =>
                                handleQuickLinkClick("Send us a message")
                              }
                              className="w-full bg-white text-indigo-600 border border-indigo-600 rounded-md py-2 px-4 flex items-center justify-between hover:bg-indigo-50"
                            >
                              <span>Send us a message</span>
                              <ArrowRight className="h-4 w-4" />
                            </button>
                          </div>
                          <div className="mb-2">
                            <button
                              onClick={() => setShowSearch(true)}
                              className="w-full bg-gray-100 text-gray-700 rounded-md py-2 px-4 flex items-center justify-between hover:bg-gray-200"
                            >
                              <span>Search for help</span>
                              <Search className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      )}
                      {(message.isUser || (!message.isUser && index > 0)) && (
                        <div
                          className={`max-w-[80%] rounded-lg p-3 ${
                            message.isUser
                              ? "bg-indigo-600 text-white"
                              : "bg-white text-gray-800 border border-gray-200"
                          }`}
                        >
                          <p>{message.text}</p>
                          <p
                            className={`text-xs mt-1 ${
                              message.isUser
                                ? "text-indigo-200"
                                : "text-gray-500"
                            }`}
                          >
                            {formatTime(message.timestamp)}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-4 border-t">
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Type your message..."
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={(e) =>
                        e.key === "Enter" && handleSendMessage()
                      }
                      className="flex-1"
                    />
                    <Button
                      onClick={handleSendMessage}
                      className="bg-indigo-600 hover:bg-indigo-700 px-3"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </>
            )}

            {/* Footer */}
            <div className="border-t p-2 bg-gray-50">
              <div className="flex justify-around">
                <button className="flex flex-col items-center text-xs text-indigo-600 p-2 hover:bg-gray-100 rounded-md">
                  <Home className="h-5 w-5 mb-1" />
                  <span>Home</span>
                </button>
                <button
                  className="flex flex-col items-center text-xs text-green-600 p-2 hover:bg-gray-100 rounded-md"
                  onClick={() => window.open("tel:7233062243")}
                >
                  <PhoneOutgoing className="h-5 w-5 mb-1" />
                  <span>Call</span>
                </button>
                <button
                  className="flex flex-col items-center text-xs text-green-500 p-2 hover:bg-gray-100 rounded-md"
                  onClick={() => window.open("https://wa.me/917233062243")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="mb-1"
                  >
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                  </svg>
                  <span>WhatsApp</span>
                </button>
                <button className="flex flex-col items-center text-xs text-gray-500 p-2 hover:bg-gray-100 rounded-md">
                  <div className="h-5 w-5 mb-1 flex items-center justify-center">
                    <span className="text-lg">?</span>
                  </div>
                  <span>Help</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
