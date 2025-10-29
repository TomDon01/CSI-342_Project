import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Phone, Globe, ChevronRight, MessageSquare, Clock, Shield, Zap, ArrowRight } from 'lucide-react';

const GovernmentHelpdesk = () => {
  const [language, setLanguage] = useState('en');
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showTutorial, setShowTutorial] = useState(true);
  const messagesEndRef = useRef(null);

  // Translations
  const translations = {
    en: {
      title: "24/7 Government Helpdesk",
      subtitle: "Botswana Public Services - Always Here to Help",
      placeholder: "Type your question here...",
      send: "Send",
      connecting: "Bot is typing...",
      quickActions: "Common Services",
      welcome: "👋 Hello! Welcome to Botswana's 24/7 Government Helpdesk. How can I assist you today?",
      faqs: [
        "How to replace lost Omang?",
        "Check driver's license status",
        "Apply for residential plot",
        "Renew passport",
        "Birth certificate application"
      ]
    },
    tn: {
      title: "Thuso ya Puso 24/7",
      subtitle: "Ditirelo tsa Setshaba sa Botswana - Re Teng ka Nako Tsotlhe",
      placeholder: "Kwala potso ya gago fano...",
      send: "Romela",
      connecting: "Bot e kwala...",
      quickActions: "Ditirelo tse di Tlwaelegileng",
      welcome: "👋 Dumela! O amogelwa mo Thusong ya Puso ya Botswana 24/7. Nka go thusa jang gompieno?",
      faqs: [
        "Ke dirisa jang Omang e e latlhegileng?",
        "Lekola maemo a laesense ya go kgweetsa",
        "Kopa lefelo la bonno",
        "Ntšhwafatsa phasepoto",
        "Kopo ya setifikeiti sa matsalo"
      ]
    }
  };

  // Bot responses
  const getBotResponse = (userMessage, lang) => {
    const msg = userMessage.toLowerCase();
    
    if (msg.includes('omang') || msg.includes('id') || msg.includes('lost')) {
      return lang === 'en' 
        ? "🆔 To replace a lost Omang:\n\n1. Report at nearest police station\n2. Get police report\n3. Visit Civil Registration office with:\n   • Police report\n   • 2 passport photos\n   • P30 fee\n\nProcessing: 2-3 weeks"
        : "🆔 Go emisetsa Omang e e latlhegileng:\n\n1. Begela taelo kwa mapodisi\n2. Naya pegelo ya mapodisi\n3. Etela ofisi ya Civil Registration o na le:\n   • Pegelo ya mapodisi\n   • Ditshwantsho tse 2\n   • P30 tefo\n\nNako: dibeke 2-3";
    }
    
    if (msg.includes('license') || msg.includes('laesense')) {
      return lang === 'en'
        ? "🚗 Driver's License:\n\n• Visit DRTS office with Omang\n• Call: 3688888\n• Online portal coming 2025\n\nRenewals need:\n• Current license\n• Medical certificate\n• P100 fee"
        : "🚗 Laesense ya Go Kgweetsa:\n\n• Etela ofisi ya DRTS le Omang\n• Letsa: 3688888\n• Webosaete e tla tswa ka 2025\n\nGo ntšhwafatsa, tlisa:\n• Laesense ya gago\n• Setifikeiti sa ngaka\n• P100 tefo";
    }

    return lang === 'en'
      ? "👋 Hello! I can help with:\n• Omang services\n• Driver's licenses\n• Plot applications\n• Passports\n• Birth certificates\n\nWhat would you like to know?"
      : "👋 Dumela! Nka thusa ka:\n• Ditirelo tsa Omang\n• Dilaesense tsa go kgweetsa\n• Dikopo tsa mafelo\n• Dipasepoto\n• Disetifikeiti tsa matsalo\n\nO batla go itse eng?";
  };

  // Scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Initialize with welcome message
  useEffect(() => {
    if (!showTutorial) {
      setMessages([{
        type: 'bot',
        text: translations[language].welcome,
        time: new Date().toLocaleTimeString()
      }]);
    }
  }, [language, showTutorial]);

  // Handle sending messages
  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMsg = {
      type: 'user',
      text: inputValue,
      time: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const botMsg = {
        type: 'bot',
        text: getBotResponse(inputValue, language),
        time: new Date().toLocaleTimeString()
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 1500);
  };

  // Handle FAQ clicks
  const handleFAQClick = (faq) => {
    setInputValue(faq);
  };

  // Handle Enter key
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  // Tutorial Component
  const Tutorial = () => (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '1rem'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '1rem',
        padding: '2rem',
        maxWidth: '400px',
        width: '100%',
        textAlign: 'center'
      }}>
        <div style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1rem'
        }}>
          <MessageSquare color="white" size={40} />
        </div>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          Welcome to Government Services
        </h2>
        <p style={{ marginBottom: '2rem', color: '#666' }}>
          Get instant help with Botswana government services. Ask questions or select from common services.
        </p>
        <button
          onClick={() => setShowTutorial(false)}
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            border: 'none',
            padding: '0.75rem 2rem',
            borderRadius: '0.5rem',
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            width: '100%'
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );

  if (showTutorial) {
    return <Tutorial />;
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '1rem'
    }}>
      {/* Main Container */}
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        background: 'white',
        borderRadius: '1rem',
        overflow: 'hidden',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
      }}>
        
        {/* Header */}
        <div style={{
          background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '1.5rem'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '1rem'
          }}>
            <div>
              <h1 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                {translations[language].title}
              </h1>
              <p style={{ opacity: 0.9 }}>{translations[language].subtitle}</p>
            </div>
            <button
              onClick={() => setLanguage(language === 'en' ? 'tn' : 'en')}
              style={{
                background: 'rgba(255,255,255,0.2)',
                border: 'none',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                cursor: 'pointer'
              }}
            >
              <Globe size={16} />
              {language === 'en' ? 'Setswana' : 'English'}
            </button>
          </div>

          {/* Status Bar */}
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            padding: '0.75rem',
            borderRadius: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <div style={{
              width: '8px',
              height: '8px',
              background: '#10b981',
              borderRadius: '50%'
            }} />
            <span>AI Assistant Active</span>
          </div>
        </div>

        {/* Quick Actions */}
        <div style={{
          background: '#f8fafc',
          padding: '1rem 1.5rem',
          borderBottom: '1px solid #e2e8f0'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '0.75rem',
            fontSize: '0.875rem',
            fontWeight: 'bold',
            color: '#374151'
          }}>
            <MessageSquare size={16} />
            {translations[language].quickActions}
          </div>
          <div style={{
            display: 'flex',
            gap: '0.5rem',
            overflowX: 'auto',
            paddingBottom: '0.5rem'
          }}>
            {translations[language].faqs.map((faq, idx) => (
              <button
                key={idx}
                onClick={() => handleFAQClick(faq)}
                style={{
                  background: 'white',
                  border: '1px solid #e2e8f0',
                  padding: '0.5rem 1rem',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem'
                }}
              >
                {faq}
                <ChevronRight size={14} />
              </button>
            ))}
          </div>
        </div>

        {/* Chat Messages */}
        <div style={{
          height: '400px',
          overflowY: 'auto',
          padding: '1.5rem',
          background: '#f8fafc'
        }}>
          {messages.map((msg, idx) => (
            <div key={idx} style={{
              display: 'flex',
              justifyContent: msg.type === 'user' ? 'flex-end' : 'flex-start',
              marginBottom: '1rem'
            }}>
              <div style={{
                display: 'flex',
                gap: '0.75rem',
                maxWidth: '80%',
                flexDirection: msg.type === 'user' ? 'row-reverse' : 'row'
              }}>
                {/* Avatar */}
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: msg.type === 'user' 
                    ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                    : '#374151',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  {msg.type === 'user' ? (
                    <User size={20} color="white" />
                  ) : (
                    <Bot size={20} color="white" />
                  )}
                </div>

                {/* Message Bubble */}
                <div>
                  <div style={{
                    background: msg.type === 'user' 
                      ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                      : 'white',
                    color: msg.type === 'user' ? 'white' : '#1f2937',
                    borderRadius: '1rem',
                    padding: '1rem',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    border: msg.type === 'user' ? 'none' : '1px solid #e5e7eb'
                  }}>
                    <div style={{ whiteSpace: 'pre-line' }}>{msg.text}</div>
                  </div>
                  <div style={{
                    fontSize: '0.75rem',
                    color: '#6b7280',
                    marginTop: '0.25rem',
                    padding: '0 0.5rem'
                  }}>
                    {msg.time}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div style={{
              display: 'flex',
              gap: '0.75rem',
              marginBottom: '1rem'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: '#374151',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Bot size={20} color="white" />
              </div>
              <div style={{
                background: 'white',
                borderRadius: '1rem',
                padding: '1rem',
                border: '1px solid #e5e7eb'
              }}>
                <div style={{ display: 'flex', gap: '0.25rem' }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    background: '#667eea',
                    borderRadius: '50%',
                    animation: 'bounce 1s infinite'
                  }} />
                  <div style={{
                    width: '8px',
                    height: '8px',
                    background: '#764ba2',
                    borderRadius: '50%',
                    animation: 'bounce 1s infinite 0.2s'
                  }} />
                  <div style={{
                    width: '8px',
                    height: '8px',
                    background: '#667eea',
                    borderRadius: '50%',
                    animation: 'bounce 1s infinite 0.4s'
                  }} />
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div style={{
          background: 'white',
          padding: '1.5rem',
          borderTop: '1px solid #e5e7eb'
        }}>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={translations[language].placeholder}
              style={{
                flex: 1,
                padding: '0.75rem 1rem',
                border: '1px solid #d1d5db',
                borderRadius: '0.5rem',
                fontSize: '1rem',
                outline: 'none'
              }}
            />
            <button
              onClick={handleSend}
              disabled={!inputValue.trim()}
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                border: 'none',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                fontSize: '1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <Send size={20} />
              {translations[language].send}
            </button>
          </div>
        </div>
      </div>

      {/* Add CSS animations */}
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
      `}</style>
    </div>
  );
};

export default GovernmentHelpdesk;