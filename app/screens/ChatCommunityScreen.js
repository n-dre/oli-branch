import React, { useState } from 'react';
import { SafeAreaView, FlatList, View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';

const ChatCommunityScreen = () => {
  // State for storing messages
  const [messages, setMessages] = useState([
    { id: '1', user: 'Alice', text: 'Welcome to the Oli-Branch community!' },
    { id: '2', user: 'Bob', text: 'Anyone have tips on getting a business loan?' },
  ]);
  const [inputMessage, setInputMessage] = useState('');

  // Function to handle sending a message
  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const newMessage = {
        id: Date.now().toString(),
        user: 'You',
        text: inputMessage.trim(),
      };
      setMessages([newMessage, ...messages]);  // Add new message to the chat history
      setInputMessage('');  // Clear the input field
    }
  };

  // Render individual messages
  const renderMessageItem = ({ item }) => (
    <View style={[styles.messageContainer, item.user === 'You' && styles.yourMessage]}>
      <Text style={styles.messageUser}>{item.user}</Text>
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Community Chat</Text>
      <Text style={styles.subtitle}>
        Connect, discuss, and share insights with other Oli-Branch users.
      </Text>

      {/* Message history */}
      <FlatList
        data={messages}
        renderItem={renderMessageItem}
        keyExtractor={(item) => item.id}
        inverted
        contentContainerStyle={styles.messageList}
      />

      {/* Message input field */}
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={90}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type a message..."
            value={inputMessage}
            onChangeText={setInputMessage}
          />
          <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E4C9D',
    textAlign: 'center',
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#555555',
    textAlign: 'center',
    marginBottom: 10,
  },
  messageList: {
    paddingHorizontal: 15,
    paddingBottom: 80,
  },
  messageContainer: {
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
    maxWidth: '75%',
  },
  yourMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',  // Light green for user messages
  },
  messageUser: {
    fontWeight: 'bold',
    marginBottom: 2,
    color: '#333333',
  },
  messageText: {
    color: '#333333',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    backgroundColor: '#FFFFFF',
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#C4C4C4',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginRight: 10,
    fontSize: 16,
  },
  sendButton: {
    backgroundColor: '#2E4C9D',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  sendButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ChatCommunityScreen;
