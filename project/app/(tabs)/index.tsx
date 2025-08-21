import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Plus, TrendingUp, Target, ChartPie as PieChart, Bell } from 'lucide-react-native';

export default function Dashboard() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Greeting */}
        <View style={styles.greetingContainer}>
          <Text style={styles.greeting}>Hi Hemal</Text>
          <Text style={styles.subtitle}>Here's your financial summary</Text>
        </View>

        {/* Main Balance Card */}
        <LinearGradient
          colors={['#14B8A6', '#10B981']}
          style={styles.balanceCard}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Text style={styles.balanceLabel}>Amount Left to Spend</Text>
          <Text style={styles.balanceAmount}>₹12,450</Text>
          <Text style={styles.balancePeriod}>This month</Text>
        </LinearGradient>

        {/* Stats Cards */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <View style={styles.statIcon}>
              <TrendingUp size={20} color="#14B8A6" />
            </View>
            <Text style={styles.statLabel}>Total Expenses</Text>
            <Text style={styles.statValue}>₹8,550</Text>
            <Text style={styles.statChange}>+12% from last month</Text>
          </View>

          <View style={styles.statCard}>
            <View style={styles.statIcon}>
              <Target size={20} color="#10B981" />
            </View>
            <Text style={styles.statLabel}>Savings</Text>
            <Text style={styles.statValue}>₹3,200</Text>
            <Text style={styles.statChange}>Goal: ₹5,000</Text>
          </View>
        </View>

        <View style={styles.statsContainer}>
          <View style={[styles.statCard, styles.wideCard]}>
            <View style={styles.statIcon}>
              <PieChart size={20} color="#1E3A8A" />
            </View>
            <Text style={styles.statLabel}>Loan Payment Status</Text>
            <Text style={styles.statValue}>₹2,800 / ₹10,000</Text>
            <View style={styles.progressBar}>
              <View style={styles.progressFill} />
            </View>
            <Text style={styles.statChange}>28% completed</Text>
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.actionsContainer}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.actionsGrid}>
            <TouchableOpacity style={styles.actionButton}>
              <View style={[styles.actionIcon, { backgroundColor: '#FEF3F2' }]}>
                <Plus size={24} color="#EF4444" />
              </View>
              <Text style={styles.actionText}>Add Expense</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
              <View style={[styles.actionIcon, { backgroundColor: '#F0F9FF' }]}>
                <Target size={24} color="#3B82F6" />
              </View>
              <Text style={styles.actionText}>Check Loans</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
              <View style={[styles.actionIcon, { backgroundColor: '#F0FDF4' }]}>
                <PieChart size={24} color="#22C55E" />
              </View>
              <Text style={styles.actionText}>View Reports</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Recent Transactions */}
        <View style={styles.transactionsContainer}>
          <Text style={styles.sectionTitle}>Recent Transactions</Text>
          <View style={styles.transactionItem}>
            <View style={styles.transactionInfo}>
              <Text style={styles.transactionTitle}>Lunch at Canteen</Text>
              <Text style={styles.transactionDate}>Today, 1:30 PM</Text>
            </View>
            <Text style={styles.transactionAmount}>-₹120</Text>
          </View>
          <View style={styles.transactionItem}>
            <View style={styles.transactionInfo}>
              <Text style={styles.transactionTitle}>Book Purchase</Text>
              <Text style={styles.transactionDate}>Yesterday, 4:15 PM</Text>
            </View>
            <Text style={styles.transactionAmount}>-₹450</Text>
          </View>
          <View style={styles.transactionItem}>
            <View style={styles.transactionInfo}>
              <Text style={styles.transactionTitle}>Scholarship</Text>
              <Text style={styles.transactionDate}>Dec 12, 10:00 AM</Text>
            </View>
            <Text style={[styles.transactionAmount, styles.incomeAmount]}>+₹2,000</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  greetingContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1F2937',
    fontFamily: 'Inter',
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    marginTop: 4,
    fontFamily: 'Inter',
  },
  notificationButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  balanceCard: {
    marginHorizontal: 20,
    padding: 24,
    borderRadius: 16,
    marginBottom: 24,
  },
  balanceLabel: {
    color: 'white',
    fontSize: 16,
    opacity: 0.9,
    fontFamily: 'Inter',
  },
  balanceAmount: {
    color: 'white',
    fontSize: 36,
    fontWeight: '800',
    marginTop: 8,
    fontFamily: 'Inter',
  },
  balancePeriod: {
    color: 'white',
    fontSize: 14,
    opacity: 0.8,
    marginTop: 4,
    fontFamily: 'Inter',
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 16,
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
  wideCard: {
    flex: 1,
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
    fontSize: 20,
    fontWeight: '700',
    color: '#1F2937',
    marginTop: 4,
    fontFamily: 'Inter',
  },
  statChange: {
    fontSize: 12,
    color: '#10B981',
    marginTop: 4,
    fontFamily: 'Inter',
  },
  progressBar: {
    height: 6,
    backgroundColor: '#E5E7EB',
    borderRadius: 3,
    marginTop: 8,
    overflow: 'hidden',
  },
  progressFill: {
    width: '28%',
    height: '100%',
    backgroundColor: '#1E3A8A',
    borderRadius: 3,
  },
  actionsContainer: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 16,
    fontFamily: 'Inter',
  },
  actionsGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  actionButton: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  actionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  actionText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
    textAlign: 'center',
    fontFamily: 'Inter',
  },
  transactionsContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  transactionInfo: {
    flex: 1,
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    fontFamily: 'Inter',
  },
  transactionDate: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 2,
    fontFamily: 'Inter',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: '700',
    color: '#EF4444',
    fontFamily: 'Inter',
  },
  incomeAmount: {
    color: '#10B981',
  },
});