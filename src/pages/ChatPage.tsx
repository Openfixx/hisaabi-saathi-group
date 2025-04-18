
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Send, 
  Plus, 
  Image, 
  PaperclipIcon,
  Smile 
} from 'lucide-react';
import { Input } from '@/components/ui/input';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'contact';
  timestamp: string;
}

const ChatPage = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi Rahul, I just sent you ₹500 for dinner last night.",
      sender: 'contact',
      timestamp: '10:30 AM'
    },
    {
      id: 2,
      text: "Thanks Aarav! I've received it.",
      sender: 'user',
      timestamp: '10:32 AM'
    },
    {
      id: 3,
      text: "Can you remind me how much I owe you for the movie tickets?",
      sender: 'contact',
      timestamp: '10:33 AM'
    },
    {
      id: 4,
      text: "It's ₹350 for the tickets and snacks.",
      sender: 'user',
      timestamp: '10:35 AM'
    }
  ]);
  
  const [newMessage, setNewMessage] = useState('');
  
  const sendMessage = () => {
    if (newMessage.trim() === '') return;
    
    const message: Message = {
      id: messages.length + 1,
      text: newMessage,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    
    setMessages([...messages, message]);
    setNewMessage('');
  };
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };
  
  return (
    <div className="flex h-[calc(100vh-64px)]">
      {/* Contacts Sidebar */}
      <div className="w-64 border-r bg-white">
        <div className="p-4 border-b">
          <h2 className="font-semibold text-lg">Chats</h2>
        </div>
        
        <div className="p-2">
          <div className="p-2 bg-purple-50 rounded-lg flex items-center gap-3 mb-2 cursor-pointer">
            <div className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center">
              <span className="font-medium text-purple-700">A</span>
            </div>
            <div>
              <div className="font-medium">Aarav</div>
              <div className="text-xs text-gray-500">Can you remind me...</div>
            </div>
          </div>
          
          <div className="p-2 hover:bg-gray-50 rounded-lg flex items-center gap-3 mb-2 cursor-pointer">
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="font-medium text-gray-700">P</span>
            </div>
            <div>
              <div className="font-medium">Priya</div>
              <div className="text-xs text-gray-500">Thanks for paying!</div>
            </div>
          </div>
          
          <div className="p-2 hover:bg-gray-50 rounded-lg flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="font-medium text-gray-700">V</span>
            </div>
            <div>
              <div className="font-medium">Vikram</div>
              <div className="text-xs text-gray-500">See you tomorrow</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Chat Content */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b bg-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center">
              <span className="font-medium text-purple-700">A</span>
            </div>
            <div>
              <div className="font-medium">Aarav</div>
              <div className="text-xs text-gray-500">Online</div>
            </div>
          </div>
          
          <div>
            <Button variant="outline" className="mr-2">
              <Plus size={18} className="mr-1" /> Add Transaction
            </Button>
          </div>
        </div>
        
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
          {messages.map((message) => (
            <div 
              key={message.id} 
              className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[70%] rounded-lg p-3 ${
                  message.sender === 'user' 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-white border border-gray-200'
                }`}
              >
                <div className="text-sm">{message.text}</div>
                <div 
                  className={`text-xs mt-1 text-right ${
                    message.sender === 'user' ? 'text-purple-200' : 'text-gray-500'
                  }`}
                >
                  {message.timestamp}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Input Area */}
        <div className="p-4 border-t bg-white">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-gray-500">
              <Plus size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-500">
              <Image size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-500">
              <PaperclipIcon size={20} />
            </Button>
            
            <Input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type a message..."
              className="flex-1 bg-gray-50"
            />
            
            <Button variant="ghost" size="icon" className="text-gray-500">
              <Smile size={20} />
            </Button>
            
            <Button 
              onClick={sendMessage} 
              disabled={!newMessage.trim()} 
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              <Send size={18} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
