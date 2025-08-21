import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Calendar, Bell, BellOff, CircleCheck as CheckCircle, Clock, TrendingUp } from 'lucide-react-native';

const loanData = {
  totalAmount: 100000,
  paidAmount: 28000,
  remainingAmount: 72000,
  monthlyPayment: 2800,
  nextDueDate: 'Dec 28, 2024',
  savingsAllocated: 30,
};

const paymentHistory = [
  { month: 'November 2024', amount: 2800, status: 'Paid', date: 'Nov 28, 2024' },
  { month: 'October 2024', amount: 2800, status: 'Paid', date: 'Oct 28, 2024' },
  { month: 'September 2024', amount: 2800, status: 'Paid', date: 'Sep 28, 2024' },
  { month: 'August 2024', amount: 2800, status: 'Paid', date: 'Aug 28, 2024' },
];

export default function Loans() {
  const progressPercentage = (loanData.paidAmount / loanData.totalAmount) * 100;
  const remainingMonths = Math.ceil(loanData.remainingAmount / loanData.monthlyPayment);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Subtitle */}
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>Manage your loan payments</Text>
        </View>

        {/* Loan Progress Card */}
        <LinearGradient
          colors={['#1E3A8A', '#3B82F6']}
          style={styles.progressCard}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Text style={styles.progressTitle}>Education Loan Progress</Text>
          <View style={styles.progressInfo}>
            <Text style={styles.progressAmount}>₹{loanData.paidAmount.toLocaleString()}</Text>
            <Text style={styles.progressTotal}>of ₹{loanData.totalAmount.toLocaleString()}</Text>
          </View>
          
          <View style={styles.progressBarContainer}>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: `${progressPercentage}%` }]} />
            </View>
            <Text style={styles.progressPercent}>{progressPercentage.toFixed(0)}% Complete</Text>
          </View>
        </LinearGradient>

        {/* Stats Cards */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <View style={styles.statIcon}>
              <TrendingUp size={20} color="#14B8A6" />
            </View>
            <Text style={styles.statLabel}>Monthly Payment</Text>
            <Text style={styles.statValue}>₹{loanData.monthlyPayment}</Text>
          </View>

          <View style={styles.statCard}>
            <View style={styles.statIcon}>
              <Clock size={20} color="#F59E0B" />
            </View>
            <Text style={styles.statLabel}>Remaining</Text>
            <Text style={styles.statValue}>{remainingMonths} months</Text>
          </View>
        </View>

        {/* Savings Allocation */}
        <View style={styles.savingsCard}>
          <Text style={styles.cardTitle}>Savings Allocation</Text>
          <View style={styles.savingsInfo}>
            <View style={styles.savingsCircle}>
              <Text style={styles.savingsPercent}>{loanData.savingsAllocated}%</Text>
            </View>
            <View style={styles.savingsDetails}>
              <Text style={styles.savingsLabel}>of monthly income allocated for loan</Text>
              <Text style={styles.savingsAmount}>₹{loanData.monthlyPayment} / month</Text>
            </View>
          </View>
        </View>

        {/* Next Payment */}
        <View style={styles.nextPaymentCard}>
          <View style={styles.nextPaymentHeader}>
            <Calendar size={24} color="#3B82F6" />
            <Text style={styles.nextPaymentTitle}>Next Payment Due</Text>
          </View>
          <Text style={styles.nextPaymentDate}>{loanData.nextDueDate}</Text>
          <Text style={styles.nextPaymentAmount}>₹{loanData.monthlyPayment}</Text>
          <TouchableOpacity style={styles.payButton}>
            <Text style={styles.payButtonText}>Make Payment</Text>
          </TouchableOpacity>
        </View>

        {/* Notifications */}
        <View style={styles.notificationsCard}>
          <Text style={styles.cardTitle}>Payment Reminders</Text>
          <View style={styles.notificationItem}>
            <Bell size={20} color="#10B981" />
            <Text style={styles.notificationText}>3 days before due date</Text>
            <TouchableOpacity>
              <Text style={styles.toggleText}>ON</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.notificationItem}>
            <Bell size={20} color="#10B981" />
            <Text style={styles.notificationText}>1 day before due date</Text>
            <TouchableOpacity>
              <Text style={styles.toggleText}>ON</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.notificationItem}>
            <BellOff size={20} color="#6B7280" />
            <Text style={styles.notificationText}>Weekly summary</Text>
            <TouchableOpacity>
              <Text style={[styles.toggleText, styles.toggleTextOff]}>OFF</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Payment History */}
        <View style={styles.historyContainer}>
          <Text style={styles.cardTitle}>Payment History</Text>
          {paymentHistory.map((payment, index) => (
            <View key={index} style={styles.historyItem}>
              <View style={styles.historyIcon}>
                <CheckCircle size={20} color="#10B981" />
              </View>
              <View style={styles.historyInfo}>
                <Text style={styles.historyMonth}>{payment.month}</Text>
                <Text style={styles.historyDate}>{payment.date}</Text>
              </View>
              <View style={styles.historyAmount}>
                <Text style={styles.historyValue}>₹{payment.amount}</Text>
                <Text style={styles.historyStatus}>{payment.status}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Balance After Repayment */}
        <View style={styles.balanceCard}>
          <Text style={styles.cardTitle}>Balance After Full Repayment</Text>
          <Text style={styles.balanceAmount}>₹{(50000 - loanData.remainingAmount).toLocaleString()}</Text>
          <Text style={styles.balanceNote}>
            Estimated balance after completing all loan payments
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  subtitleContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    fontFamily: 'Inter',
  },
  progressCard: {
    marginHorizontal: 20,
    padding: 24,
    borderRadius: 16,
    marginBottom: 20,
  },
  progressTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    fontFamily: 'Inter',
  },
  progressInfo: {
    marginBottom: 20,
  },
  progressAmount: {
    color: 'white',
    fontSize: 32,
    fontWeight: '800',
    fontFamily: 'Inter',
  },
  progressTotal: {
    color: 'white',
    fontSize: 16,
    opacity: 0.8,
    fontFamily: 'Inter',
  },
  progressBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  progressBar: {
    flex: 1,
    height: 8,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 4,
  },
  progressPercent: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Inter',
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 20,
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  statIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F0FDF4',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  statLabel: {
    fontSize: 14,
    color: '#6B7280',
    fontFamily: 'Inter',
  },
  statValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
    marginTop: 4,
    fontFamily: 'Inter',
  },
  savingsCard: {
    marginHorizontal: 20,
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
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 16,
    fontFamily: 'Inter',
  },
  savingsInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  savingsCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#DBEAFE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  savingsPercent: {
    fontSize: 20,
    fontWeight: '800',
    color: '#3B82F6',
    fontFamily: 'Inter',
  },
  savingsDetails: {
    flex: 1,
  },
  savingsLabel: {
    fontSize: 14,
    color: '#6B7280',
    fontFamily: 'Inter',
  },
  savingsAmount: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
    marginTop: 4,
    fontFamily: 'Inter',
  },
  nextPaymentCard: {
    marginHorizontal: 20,
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
  nextPaymentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  nextPaymentTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
    fontFamily: 'Inter',
  },
  nextPaymentDate: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 8,
    fontFamily: 'Inter',
  },
  nextPaymentAmount: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1F2937',
    marginBottom: 16,
    fontFamily: 'Inter',
  },
  payButton: {
    backgroundColor: '#14B8A6',
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  payButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
    fontFamily: 'Inter',
  },
  notificationsCard: {
    marginHorizontal: 20,
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
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
    gap: 12,
  },
  notificationText: {
    flex: 1,
    fontSize: 16,
    color: '#1F2937',
    fontFamily: 'Inter',
  },
  toggleText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#10B981',
    fontFamily: 'Inter',
  },
  toggleTextOff: {
    color: '#6B7280',
  },
  historyContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  historyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  historyIcon: {
    marginRight: 12,
  },
  historyInfo: {
    flex: 1,
  },
  historyMonth: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    fontFamily: 'Inter',
  },
  historyDate: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 2,
    fontFamily: 'Inter',
  },
  historyAmount: {
    alignItems: 'flex-end',
  },
  historyValue: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F2937',
    fontFamily: 'Inter',
  },
  historyStatus: {
    fontSize: 12,
    color: '#10B981',
    marginTop: 2,
    fontFamily: 'Inter',
  },
  balanceCard: {
    marginHorizontal: 20,
    backgroundColor: '#F0F9FF',
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
    alignItems: 'center',
  },
  balanceAmount: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1E3A8A',
    marginBottom: 8,
    fontFamily: 'Inter',
  },
  balanceNote: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    fontFamily: 'Inter',
  },
});