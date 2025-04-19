import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Send, 
  Plus, 
  Image, 
  PaperclipIcon,
  Smile,
  MessageSquare,
  Users,
  Clock,
  Wallet,
  Calculator,
  ArrowLeft,
  Search
} from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'contact';
  timestamp: string;
  isTransaction?: boolean;
  transactionInfo?: {
    type: 'lent' | 'borrowed';
    amount: number;
    description: string;
  };
}

interface Contact {
  id: number;
  name: string;
  initial: string;
  lastMessage: string;
  time: string;
  unread?: number;
  isActive?: boolean;
  avatar?: string;
}

interface Group {
  id: number;
  name: string;
  members: number;
  lastActivity: string;
  isActive?: boolean;
}

interface HistoryItem {
  id: number;
  user: string;
  action: string;
  timestamp: string;
  details?: string;
}

const ChatPage = () => {
  // Mock contacts data
  const [contacts] = useState<Contact[]>([
    {
      id: 1,
      name: 'Aarav Kumar',
      initial: 'A',
      lastMessage: 'Can you remind me...',
      time: '10:30 AM',
      unread: 2,
      isActive: true,
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
      id: 2,
      name: 'Priya Singh',
      initial: 'P',
      lastMessage: 'Thanks for paying!',
      time: 'Yesterday',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    {
      id: 3,
      name: 'Vikram Mehta',
      initial: 'V',
      lastMessage: 'See you tomorrow',
      time: 'Monday',
      avatar: 'https://randomuser.me/api/portraits/men/3.jpg'
    }
  ]);

  // Mock groups data
  const [groups] = useState<Group[]>([
    {
      id: 1,
      name: 'Roommates',
      members: 4,
      lastActivity: 'Active now',
    },
    {
      id: 2,
      name: 'Trip to Goa',
      members: 6,
      lastActivity: '2 hrs ago',
    },
    {
      id: 3,
      name: 'Office Lunch',
      members: 8,
      lastActivity: '1 day ago',
    }
  ]);

  // Mock history data
  const [history] = useState<HistoryItem[]>([
    {
      id: 1,
      user: 'Aarav',
      action: 'added a transaction',
      timestamp: '10:45 AM',
      details: 'Dinner at Urban Cafe - ₹500'
    },
    {
      id: 2,
      user: 'You',
      action: 'updated a transaction',
      timestamp: 'Yesterday',
      details: 'Changed amount from ₹300 to ₹350'
    },
    {
      id: 3,
      user: 'Priya',
      action: 'settled up',
      timestamp: 'Apr 14',
      details: 'Paid ₹1,200'
    }
  ]);

  // Mock messages
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
      timestamp: '10:35 AM',
      isTransaction: true,
      transactionInfo: {
        type: 'lent',
        amount: 350,
        description: 'Movie tickets and snacks'
      }
    }
  ]);
  
  const [newMessage, setNewMessage] = useState('');
  const [activeTab, setActiveTab] = useState('chats');
  
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
  
  const handleAddTransaction = () => {
    const transactionMessage: Message = {
      id: messages.length + 1,
      text: "I've added a new transaction of ₹350 for movie tickets.",
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isTransaction: true,
      transactionInfo: {
        type: 'lent',
        amount: 350,
        description: 'Movie tickets and snacks'
      }
    };
    
    setMessages([...messages, transactionMessage]);
  };
  
  return (
    <div className="flex h-[calc(100vh-64px)] -mt-6 -mx-6 bg-gray-50">
      {/* Left sidebar with tabs */}
      <div className="w-80 border-r bg-white flex flex-col">
        <Tabs defaultValue="chats" value={activeTab} onValueChange={setActiveTab} className="w-full h-full">
          <div className="px-4 pt-4">
            <h2 className="text-xl font-bold mb-4">Chats</h2>
            <TabsList className="w-full grid grid-cols-3 bg-gray-100 p-1 rounded-lg">
              <TabsTrigger value="chats" className="rounded-md data-[state=active]:bg-white">
                <MessageSquare size={16} className="mr-1" /> Chats
              </TabsTrigger>
              <TabsTrigger value="groups" className="rounded-md data-[state=active]:bg-white">
                <Users size={16} className="mr-1" /> Groups
              </TabsTrigger>
              <TabsTrigger value="history" className="rounded-md data-[state=active]:bg-white">
                <Clock size={16} className="mr-1" /> History
              </TabsTrigger>
            </TabsList>
            
            <div className="mt-3 mb-3">
              <div className="relative">
                <Input 
                  placeholder="Search..." 
                  className="pl-8 h-9 bg-gray-50 rounded-full" 
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search size={16} className="text-gray-400" />
                </div>
              </div>
            </div>
          </div>
          
          <TabsContent value="chats" className="flex-1 overflow-y-auto p-0 m-0">
            <div className="p-2">
              {contacts.map((contact) => (
                <div 
                  key={contact.id} 
                  className={`p-2 ${contact.isActive ? 'bg-purple-50' : 'hover:bg-gray-50'} rounded-lg flex items-center gap-3 mb-2 cursor-pointer transition-colors`}
                >
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={contact.avatar} />
                    <AvatarFallback className={`${contact.isActive ? 'bg-purple-200 text-purple-700' : 'bg-gray-200 text-gray-700'}`}>
                      {contact.initial}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <div className="font-medium truncate">{contact.name}</div>
                      <div className="text-xs text-gray-500">{contact.time}</div>
                    </div>
                    <div className="text-xs text-gray-500 truncate">{contact.lastMessage}</div>
                  </div>
                  {contact.unread && (
                    <div className="w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center text-xs text-white">
                      {contact.unread}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="groups" className="flex-1 overflow-y-auto p-0 m-0">
            <div className="p-2">
              {groups.map((group) => (
                <div 
                  key={group.id} 
                  className={`p-2 ${group.isActive ? 'bg-purple-50' : 'hover:bg-gray-50'} rounded-lg flex items-center gap-3 mb-2 cursor-pointer`}
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center text-white font-medium">
                    {group.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium truncate">{group.name}</div>
                    <div className="flex items-center text-xs text-gray-500">
                      <Users size={12} className="mr-1" />
                      <span>{group.members} members • {group.lastActivity}</span>
                    </div>
                  </div>
                </div>
              ))}
              
              <button className="w-full mt-2 p-2 border-2 border-dashed border-gray-200 rounded-lg text-gray-500 flex items-center justify-center">
                <Plus size={16} className="mr-1" />
                <span>Create New Group</span>
              </button>
            </div>
          </TabsContent>
          
          <TabsContent value="history" className="flex-1 overflow-y-auto p-0 m-0">
            <div className="p-2 relative">
              {history.map((item, index) => (
                <div key={item.id} className="mb-4 relative pl-6">
                  {/* Timeline dot and line */}
                  <div className="absolute left-0 top-2 w-3 h-3 bg-purple-600 rounded-full z-10"></div>
                  {index < history.length - 1 && (
                    <div className="absolute left-1.5 top-4 bottom-0 w-0.5 bg-gray-200 -mb-2"></div>
                  )}
                  
                  <Card className="border-0 shadow-sm">
                    <CardContent className="p-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="font-medium text-sm">{item.user}</span>
                          <span className="text-gray-600 text-sm"> {item.action}</span>
                          <p className="text-xs text-gray-500 mt-1">{item.details}</p>
                        </div>
                        <span className="text-xs text-gray-500">{item.timestamp}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      {/* Chat Content */}
      <div className="flex-1 flex flex-col bg-gradient-to-b from-purple-50 to-white">
        {/* Chat Header */}
        <div className="p-4 border-b bg-white flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="md:hidden text-gray-500">
              <ArrowLeft size={20} />
            </Button>
            <Avatar className="h-10 w-10">
              <AvatarImage src="https://randomuser.me/api/portraits/men/1.jpg" />
              <AvatarFallback className="bg-purple-200 text-purple-700">A</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">Aarav Kumar</div>
              <div className="text-xs text-green-600">Online</div>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex items-center gap-1 rounded-full">
              <Calculator size={16} />
              <span>Split Bill</span>
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-1 rounded-full">
              <Wallet size={16} />
              <span>Settle Up</span>
            </Button>
            <Button size="sm" className="bg-purple-600 hover:bg-purple-700 flex items-center gap-1 rounded-full">
              <Plus size={16} />
              <span>Add Transaction</span>
            </Button>
          </div>
        </div>
        
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4">
          {messages.map((message) => (
            <div 
              key={message.id} 
              className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {message.sender === 'contact' && (
                <Avatar className="h-8 w-8 mr-2 mt-1">
                  <AvatarImage src="https://randomuser.me/api/portraits/men/1.jpg" />
                  <AvatarFallback>A</AvatarFallback>
                </Avatar>
              )}
              <div 
                className={`max-w-[70%] rounded-2xl p-3 ${
                  message.sender === 'user' 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-white border border-gray-200'
                }`}
              >
                {message.isTransaction && (
                  <div className={`p-2 mb-2 rounded-lg ${
                    message.sender === 'user' ? 'bg-purple-700' : 'bg-gray-100'
                  }`}>
                    <div className="flex items-center gap-2 mb-1">
                      <Wallet size={14} />
                      <span className="font-medium text-sm">Transaction</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>{message.transactionInfo?.description}</span>
                      <span className="font-bold">
                        ₹{message.transactionInfo?.amount.toLocaleString()}
                      </span>
                    </div>
                  </div>
                )}
                
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
        <div className="p-4 bg-white rounded-t-2xl border-t shadow-lg">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-gray-500 rounded-full" onClick={handleAddTransaction}>
              <Plus size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-500 rounded-full">
              <Image size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-500 rounded-full">
              <PaperclipIcon size={20} />
            </Button>
            
            <div className="flex-1 relative">
              <Input
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type a message..."
                className="rounded-full bg-gray-50 pr-12"
              />
              <Button 
                onClick={sendMessage} 
                disabled={!newMessage.trim()} 
                className="absolute right-1 top-1/2 -translate-y-1/2 bg-purple-600 hover:bg-purple-700 text-white h-8 w-8 rounded-full p-0"
              >
                <Send size={14} />
              </Button>
            </div>
            
            <Button variant="ghost" size="icon" className="text-gray-500 rounded-full">
              <Smile size={20} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
