import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

interface Message {
  text: string;
  isBot: boolean;
}

const FAQ_DATA = {
  'what is seeds of the future': 'Seeds of the Future is a youth-led non-profit organization that empowers young people, helps the needy, and strengthens communities across Rwanda. We focus on education, skills training, leadership development, and community support.',
  'how to join': 'You can join us by volunteering! Visit our "Get Involved" page and fill out the volunteer application form. Select your preferred chapter (Kigali, Huye, or Musanze) and tell us why you want to volunteer.',
  'how to volunteer': 'Visit our "Get Involved" page and fill out the volunteer application form. We have opportunities in all our chapters: Kigali, Huye, and Musanze. You can help with education programs, community outreach, skills training, and more!',
  'where are your chapters': 'We have three active chapters across Rwanda: Kigali Chapter (led by Jean Paul Uwimana), Huye Chapter (led by Marie Claire Mukamana), and Musanze Chapter (led by Eric Niyonzima). Visit our "Chapters" page for more details.',
  'chapters': 'We have three active chapters: Kigali Chapter in the capital city, Huye Chapter in the Southern Province, and Musanze Chapter in the Northern Province. Each chapter focuses on local community needs while working toward our common mission.',
  'events': 'We host various events including youth leadership summits, skills training workshops, community clean-up days, and charity drives. Check our "Events" page to see upcoming and past events!',
  'upcoming events': 'Visit our "Events" page to see all upcoming events. We regularly organize leadership summits, skills workshops, community service activities, and networking events for youth.',
  'donate': 'You can support us through bank transfers or mobile money. Visit our "Get Involved" page and select the "Make a Donation" tab for complete donation details including bank account and mobile money numbers.',
  'contact': 'You can reach us at info@seedsofthefuture.rw or call +250 788 000 000. Visit our "Contact" page to send us a message directly!',
  'programs': 'We offer six main programs: Education Support, Skills Training, Mentorship Program, Community Charity, Environmental Conservation, and Leadership Development. Visit our "Programs" page to learn more about each one!',
  'mission': 'Our mission is to empower Rwandan youth through education, skills training, and leadership development while providing support to vulnerable communities across the nation.',
  'help': 'I can help you with information about Seeds of the Future! Ask me about:\n- What we do\n- How to join or volunteer\n- Our chapters and locations\n- Upcoming events\n- How to donate\n- Our programs\n- Contact information',
};

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hi! I'm Sofi, your Seeds of the Future InfoBot. How can I help you today? Try asking 'What is Seeds of the Future?' or 'How can I help?'",
      isBot: true,
    },
  ]);
  const [input, setInput] = useState('');

  const findResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    for (const [key, response] of Object.entries(FAQ_DATA)) {
      if (lowerMessage.includes(key)) {
        return response;
      }
    }

    return "I'm not sure about that. Try asking about our programs, how to volunteer, our chapters, upcoming events, or how to donate. You can also type 'help' to see what I can assist with!";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { text: input, isBot: false };
    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      const botResponse: Message = {
        text: findResponse(input),
        isBot: true,
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 500);

    setInput('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 bg-primary text-accent p-4 rounded-full shadow-2xl hover:bg-primary-light transition-colors z-50"
            aria-label="Open chat"
          >
            <MessageCircle className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-6 right-6 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl z-50 overflow-hidden"
          >
            <div className="bg-primary text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="bg-accent text-primary p-2 rounded-full">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold">Sofi</h3>
                  <p className="text-xs text-gray-300">Seeds of the Future InfoBot</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-primary-light p-2 rounded-lg transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                      message.isBot
                        ? 'bg-white text-gray-800 shadow-sm'
                        : 'bg-primary text-white'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="p-4 border-t bg-white">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <button
                  onClick={handleSend}
                  className="bg-accent text-primary p-2 rounded-lg hover:bg-accent-dark transition-colors"
                  aria-label="Send message"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
