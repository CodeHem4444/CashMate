import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { User, MessageSquare, CreditCard, TrendingUp, Bell, Settings, CircleHelp as HelpCircle, Shield, Star, Send, Lightbulb } from 'lucide-react-native';

const chatMessages = [
  { id: 1, text: "How's my spending this month?", sender: 'user' },
  { id: 2, text: "You've spent ₹8,550 this month, which is 12% more than last month. Your highest expense category is Food (₹3,200). Would you like some tips to reduce food expenses? 🍽️", sender: 'ai' },
  { id: 3, text: "Yes, please give me some tips", sender: 'user' },
  { id: 4, text: "Here are 3 ways to save on food: 1️⃣ Cook at home 3 more times per week (save ₹400) 2️⃣ Buy groceries in bulk (save ₹200) 3️⃣ Use college canteen more often (save ₹150)", sender: 'ai' },
];

const quickSuggestions = [
  "Check my savings goal",
  "How much can I spend today?",
  "Loan repayment advice",
  "Best savings account for students"
];

const creditScore = 720;
const recommendations = [
  {
    type: 'loan',
    title: 'Student Education Loan',
    bank: 'SBI Bank',
    rate: '8.5%',
    amount: '₹5L - ₹20L',
    eligibility: 'High',
  },
  {
    type: 'account',
    title: 'Zero Balance Savings Account',
    bank: 'HDFC Bank',
    rate: '3.5%',
    features: 'No minimum balance',
    eligibility: 'Eligible',
  },
];

export default function Profile() {
  const [activeTab, setActiveTab] = useState('assistant');
  const [messageText, setMessageText] = useState('');

  const renderAIAssistant = () => (
    <View style={styles.chatContainer}>
      <ScrollView style={styles.messagesContainer} showsVerticalScrollIndicator={false}>
        {chatMessages.map((message) => (
          <View key={message.id} style={[
            styles.messageRow,
            message.sender === 'user' ? styles.userMessageRow : styles.aiMessageRow
          ]}>
            <View style={[
              styles.messageBubble,
              message.sender === 'user' ? styles.userMessage : styles.aiMessage
            ]}>
              <Text style={[
                styles.messageText,
                message.sender === 'user' ? styles.userMessageText : styles.aiMessageText
              ]}>
                {message.text}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.suggestionsContainer}>
        <Text style={styles.suggestionsTitle}>Quick suggestions:</Text>
        <View style={styles.suggestionsGrid}>
          {quickSuggestions.map((suggestion, index) => (
            <TouchableOpacity key={index} style={styles.suggestionChip}>
              <Text style={styles.suggestionText}>{suggestion}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.messageInput}
          placeholder="Ask me about your finances..."
          value={messageText}
          onChangeText={setMessageText}
          multiline
        />
        <TouchableOpacity style={styles.sendButton}>
          <Send size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderCreditScore = () => (
    <View style={styles.creditContainer}>
      <View style={styles.creditScoreCard}>
        <Text style={styles.creditTitle}>Credit Score</Text>
        <View style={styles.scoreContainer}>
          <View style={styles.scoreCircle}>
            <Text style={styles.scoreNumber}>{creditScore}</Text>
            <Text style={styles.scoreLabel}>Excellent</Text>
          </View>
          <View style={styles.scoreInfo}>
            <Text style={styles.scoreDescription}>
              Your credit score is excellent! Keep maintaining good financial habits.
            </Text>
            <View style={styles.scoreRanges}>
              <View style={styles.scoreRange}>
                <View style={[styles.rangeIndicator, { backgroundColor: '#EF4444' }]} />
                <Text style={styles.rangeText}>Poor (300-579)</Text>
              </View>
              <View style={styles.scoreRange}>
                <View style={[styles.rangeIndicator, { backgroundColor: '#F59E0B' }]} />
                <Text style={styles.rangeText}>Fair (580-669)</Text>
              </View>
              <View style={styles.scoreRange}>
                <View style={[styles.rangeIndicator, { backgroundColor: '#10B981' }]} />
                <Text style={styles.rangeText}>Good (670-739)</Text>
              </View>
              <View style={styles.scoreRange}>
                <View style={[styles.rangeIndicator, { backgroundColor: '#3B82F6' }]} />
                <Text style={styles.rangeText}>Excellent (740-850)</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.recommendationsContainer}>
        <Text style={styles.sectionTitle}>Recommendations for You</Text>
        {recommendations.map((rec, index) => (
          <View key={index} style={styles.recommendationCard}>
            <View style={styles.recHeader}>
              <View style={[styles.recIcon, { backgroundColor: rec.type === 'loan' ? '#FEF3F2' : '#F0FDF4' }]}>
                {rec.type === 'loan' ? (
                  <TrendingUp size={20} color="#EF4444" />
                ) : (
                  <CreditCard size={20} color="#10B981" />
                )}
              </View>
              <View style={styles.recInfo}>
                <Text style={styles.recTitle}>{rec.title}</Text>
                <Text style={styles.recBank}>{rec.bank}</Text>
              </View>
              <View style={styles.eligibilityBadge}>
                <Text style={styles.eligibilityText}>{rec.eligibility}</Text>
              </View>
            </View>
            <View style={styles.recDetails}>
              <Text style={styles.recDetail}>
                Interest Rate: <Text style={styles.recDetailValue}>{rec.rate}</Text>
              </Text>
              <Text style={styles.recDetail}>
                {rec.amount ? `Amount: ${rec.amount}` : `Features: ${rec.features}`}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );

  const renderNotifications = () => (
    <View style={styles.notificationsContainer}>
      <View style={styles.notificationCard}>
        <View style={styles.notificationHeader}>
          <View style={styles.notificationIcon}>
            <Bell size={20} color="#F59E0B" />
          </View>
          <Text style={styles.notificationTitle}>Budget Alert</Text>
          <Text style={styles.notificationTime}>2h ago</Text>
        </View>
        <Text style={styles.notificationText}>
          ⚠️ You've spent 70% of your budget, but only 50% of the month has passed. Consider reducing expenses.
        </Text>
      </View>

      <View style={styles.notificationCard}>
        <View style={styles.notificationHeader}>
          <View style={styles.notificationIcon}>
            <Lightbulb size={20} color="#10B981" />
          </View>
          <Text style={styles.notificationTitle}>Smart Tip</Text>
          <Text style={styles.notificationTime}>1d ago</Text>
        </View>
        <Text style={styles.notificationText}>
          💡 You spent 30% more on food this month. Try cooking at home to save ₹500 🍳
        </Text>
      </View>

      <View style={styles.notificationCard}>
        <View style={styles.notificationHeader}>
          <View style={styles.notificationIcon}>
            <TrendingUp size={20} color="#3B82F6" />
          </View>
          <Text style={styles.notificationTitle}>Loan Reminder</Text>
          <Text style={styles.notificationTime}>3d ago</Text>
        </View>
        <Text style={styles.notificationText}>
          💰 Reminder: Loan repayment of ₹2,800 due in 3 days. Make sure you have sufficient balance.
        </Text>
      </View>

      <View style={styles.notificationSettings}>
        <Text style={styles.sectionTitle}>Notification Settings</Text>
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Budget alerts</Text>
          <TouchableOpacity style={styles.toggleActive}>
            <Text style={styles.toggleText}>ON</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Expense reminders</Text>
          <TouchableOpacity style={styles.toggleActive}>
            <Text style={styles.toggleText}>ON</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Weekly summary</Text>
          <TouchableOpacity style={styles.toggleInactive}>
            <Text style={styles.toggleTextInactive}>OFF</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  const renderProfileSettings = () => (
    <View style={styles.settingsContainer}>
      <View style={styles.profileCard}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <User size={32} color="#14B8A6" />
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Hemal Patel</Text>
            <Text style={styles.profileEmail}>hemal@college.edu</Text>
          </View>
        </View>
      </View>

      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <Settings size={20} color="#6B7280" />
          <Text style={styles.menuText}>Account Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Shield size={20} color="#6B7280" />
          <Text style={styles.menuText}>Privacy & Security</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Bell size={20} color="#6B7280" />
          <Text style={styles.menuText}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <HelpCircle size={20} color="#6B7280" />
          <Text style={styles.menuText}>Help & Support</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Star size={20} color="#6B7280" />
          <Text style={styles.menuText}>Rate App</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.headerSpacer} />

      {/* Tab Navigation */}
      <View style={styles.tabContainer}>
        {[
          { key: 'assistant', label: 'AI Assistant', icon: MessageSquare },
          { key: 'credit', label: 'Credit & Banking', icon: CreditCard },
          { key: 'notifications', label: 'Notifications', icon: Bell },
          { key: 'settings', label: 'Settings', icon: Settings },
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <TouchableOpacity
              key={tab.key}
              style={[styles.tabButton, activeTab === tab.key && styles.tabButtonActive]}
              onPress={() => setActiveTab(tab.key)}
            >
              <Icon 
                size={16} 
                color={activeTab === tab.key ? '#14B8A6' : '#6B7280'} 
              />
              <Text style={[
                styles.tabText,
                activeTab === tab.key && styles.tabTextActive
              ]}>
                {tab.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Content */}
      <View style={styles.content}>
        {activeTab === 'assistant' && renderAIAssistant()}
        {activeTab === 'credit' && renderCreditScore()}
        {activeTab === 'notifications' && renderNotifications()}
        {activeTab === 'settings' && renderProfileSettings()}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  headerSpacer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 20,
    gap: 8,
  },
  tabButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 12,
    backgroundColor: 'white',
    gap: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  tabButtonActive: {
    backgroundColor: '#F0FDF4',
    borderWidth: 1,
    borderColor: '#14B8A6',
  },
  tabText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#6B7280',
    fontFamily: 'Inter',
  },
  tabTextActive: {
    color: '#14B8A6',
  },
  content: {
    flex: 1,
  },
  // AI Assistant Styles
  chatContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  messagesContainer: {
    flex: 1,
    marginBottom: 20,
  },
  messageRow: {
    marginBottom: 12,
  },
  userMessageRow: {
    alignItems: 'flex-end',
  },
  aiMessageRow: {
    alignItems: 'flex-start',
  },
  messageBubble: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 16,
  },
  userMessage: {
    backgroundColor: '#14B8A6',
    borderBottomRightRadius: 4,
  },
  aiMessage: {
    backgroundColor: 'white',
    borderBottomLeftRadius: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  messageText: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: 'Inter',
  },
  userMessageText: {
    color: 'white',
  },
  aiMessageText: {
    color: '#1F2937',
  },
  suggestionsContainer: {
    marginBottom: 16,
  },
  suggestionsTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280',
    marginBottom: 8,
    fontFamily: 'Inter',
  },
  suggestionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  suggestionChip: {
    backgroundColor: 'white',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  suggestionText: {
    fontSize: 12,
    color: '#6B7280',
    fontFamily: 'Inter',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 12,
    paddingBottom: 20,
  },
  messageInput: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    maxHeight: 100,
    fontSize: 16,
    fontFamily: 'Inter',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  sendButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#14B8A6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Credit Score Styles
  creditContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  creditScoreCard: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },
  creditTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 16,
    fontFamily: 'Inter',
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  scoreCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#DBEAFE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scoreNumber: {
    fontSize: 28,
    fontWeight: '800',
    color: '#3B82F6',
    fontFamily: 'Inter',
  },
  scoreLabel: {
    fontSize: 12,
    color: '#3B82F6',
    fontFamily: 'Inter',
  },
  scoreInfo: {
    flex: 1,
  },
  scoreDescription: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 12,
    fontFamily: 'Inter',
  },
  scoreRanges: {
    gap: 4,
  },
  scoreRange: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  rangeIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  rangeText: {
    fontSize: 12,
    color: '#6B7280',
    fontFamily: 'Inter',
  },
  recommendationsContainer: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 16,
    fontFamily: 'Inter',
  },
  recommendationCard: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  recHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 12,
  },
  recIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  recInfo: {
    flex: 1,
  },
  recTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F2937',
    fontFamily: 'Inter',
  },
  recBank: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 2,
    fontFamily: 'Inter',
  },
  eligibilityBadge: {
    backgroundColor: '#F0FDF4',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  eligibilityText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#10B981',
    fontFamily: 'Inter',
  },
  recDetails: {
    gap: 4,
  },
  recDetail: {
    fontSize: 14,
    color: '#6B7280',
    fontFamily: 'Inter',
  },
  recDetailValue: {
    fontWeight: '600',
    color: '#1F2937',
  },
  // Notifications Styles
  notificationsContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  notificationCard: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  notificationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 8,
  },
  notificationIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FEF3F2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    fontFamily: 'Inter',
  },
  notificationTime: {
    fontSize: 12,
    color: '#6B7280',
    fontFamily: 'Inter',
  },
  notificationText: {
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 20,
    fontFamily: 'Inter',
  },
  notificationSettings: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 16,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  settingText: {
    fontSize: 16,
    color: '#1F2937',
    fontFamily: 'Inter',
  },
  toggleActive: {
    backgroundColor: '#10B981',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  toggleInactive: {
    backgroundColor: '#E5E7EB',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  toggleText: {
    fontSize: 12,
    fontWeight: '600',
    color: 'white',
    fontFamily: 'Inter',
  },
  toggleTextInactive: {
    fontSize: 12,
    fontWeight: '600',
    color: '#6B7280',
    fontFamily: 'Inter',
  },
  // Profile Settings Styles
  settingsContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  profileCard: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#F0FDF4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1F2937',
    fontFamily: 'Inter',
  },
  profileEmail: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 2,
    fontFamily: 'Inter',
  },
  menuContainer: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
    gap: 12,
  },
  menuText: {
    fontSize: 16,
    color: '#1F2937',
    fontFamily: 'Inter',
  },
});