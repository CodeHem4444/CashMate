import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Users, Plus, ArrowRightLeft, UserCheck, UserX } from 'lucide-react-native';

const groups = [
  {
    id: 1,
    name: 'Flatmates',
    members: 4,
    totalExpenses: 12450,
    yourShare: 3112,
    settledAmount: 2500,
    pending: 612,
  },
  {
    id: 2,
    name: 'Trip to Manali',
    members: 6,
    totalExpenses: 18600,
    yourShare: 3100,
    settledAmount: 3100,
    pending: 0,
  },
  {
    id: 3,
    name: 'Study Group',
    members: 3,
    totalExpenses: 2400,
    yourShare: 800,
    settledAmount: 400,
    pending: 400,
  },
];

const settlements = [
  { name: 'Rahul', amount: 250, type: 'owe' },
  { name: 'Abhi', amount: 400, type: 'owes' },
  { name: 'Priya', amount: 150, type: 'owe' },
];

const recentTransactions = [
  { description: 'Dinner at Restaurant', group: 'Flatmates', amount: 450, paidBy: 'You' },
  { description: 'Hotel Booking', group: 'Trip to Manali', amount: 3200, paidBy: 'Rahul' },
  { description: 'Books Purchase', group: 'Study Group', amount: 600, paidBy: 'Priya' },
];

export default function Groups() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Subtitle */}
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>Split bills with friends</Text>
        </View>

        {/* Settlement Summary */}
        <View style={styles.settlementCard}>
          <Text style={styles.cardTitle}>Settlement Summary</Text>
          <View style={styles.settlementGrid}>
            {settlements.map((settlement, index) => (
              <View key={index} style={styles.settlementItem}>
                <View style={[
                  styles.settlementIcon,
                  { backgroundColor: settlement.type === 'owe' ? '#FEF3F2' : '#F0FDF4' }
                ]}>
                  {settlement.type === 'owe' ? (
                    <UserX size={20} color="#EF4444" />
                  ) : (
                    <UserCheck size={20} color="#10B981" />
                  )}
                </View>
                <Text style={styles.settlementName}>{settlement.name}</Text>
                <Text style={[
                  styles.settlementAmount,
                  { color: settlement.type === 'owe' ? '#EF4444' : '#10B981' }
                ]}>
                  {settlement.type === 'owe' ? '-' : '+'}₹{settlement.amount}
                </Text>
                <Text style={styles.settlementType}>
                  {settlement.type === 'owe' ? 'You owe' : 'Owes you'}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Groups List */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Groups</Text>
          {groups.map((group) => (
            <TouchableOpacity key={group.id} style={styles.groupCard}>
              <View style={styles.groupHeader}>
                <View style={styles.groupIcon}>
                  <Users size={24} color="#14B8A6" />
                </View>
                <View style={styles.groupInfo}>
                  <Text style={styles.groupName}>{group.name}</Text>
                  <Text style={styles.groupMembers}>{group.members} members</Text>
                </View>
                <ArrowRightLeft size={20} color="#6B7280" />
              </View>
              
              <View style={styles.groupStats}>
                <View style={styles.statItem}>
                  <Text style={styles.statLabel}>Total Expenses</Text>
                  <Text style={styles.statValue}>₹{group.totalExpenses.toLocaleString()}</Text>
                </View>
                <View style={styles.statItem}>
                  <Text style={styles.statLabel}>Your Share</Text>
                  <Text style={styles.statValue}>₹{group.yourShare.toLocaleString()}</Text>
                </View>
              </View>

              <View style={styles.settlementStatus}>
                <View style={styles.statusItem}>
                  <Text style={styles.statusLabel}>Settled: ₹{group.settledAmount}</Text>
                  <View style={[styles.statusDot, { backgroundColor: '#10B981' }]} />
                </View>
                {group.pending > 0 && (
                  <View style={styles.statusItem}>
                    <Text style={[styles.statusLabel, { color: '#EF4444' }]}>
                      Pending: ₹{group.pending}
                    </Text>
                    <View style={[styles.statusDot, { backgroundColor: '#EF4444' }]} />
                  </View>
                )}
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Recent Transactions */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Activity</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          
          {recentTransactions.map((transaction, index) => (
            <View key={index} style={styles.transactionItem}>
              <View style={styles.transactionInfo}>
                <Text style={styles.transactionTitle}>{transaction.description}</Text>
                <Text style={styles.transactionGroup}>
                  {transaction.group} • Paid by {transaction.paidBy}
                </Text>
              </View>
              <Text style={styles.transactionAmount}>₹{transaction.amount}</Text>
            </View>
          ))}
        </View>

        {/* Minimum Transaction Calculation */}
        <View style={styles.optimizationCard}>
          <Text style={styles.cardTitle}>💡 Smart Settlement</Text>
          <Text style={styles.optimizationText}>
            To settle all balances optimally, you need just <Text style={styles.highlightText}>2 transactions</Text> instead of 6.
          </Text>
          <TouchableOpacity style={styles.optimizeButton}>
            <Text style={styles.optimizeButtonText}>View Optimized Settlement</Text>
          </TouchableOpacity>
        </View>

        {/* Quick Actions */}
        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.actionButton}>
            <Plus size={24} color="#14B8A6" />
            <Text style={styles.actionText}>Add Expense</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <ArrowRightLeft size={24} color="#3B82F6" />
            <Text style={styles.actionText}>Settle Up</Text>
          </TouchableOpacity>
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
  settlementCard: {
    marginHorizontal: 20,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 16,
    marginBottom: 24,
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
  settlementGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  settlementItem: {
    flex: 1,
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#F8FAFC',
    borderRadius: 12,
  },
  settlementIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  settlementName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
    fontFamily: 'Inter',
  },
  settlementAmount: {
    fontSize: 16,
    fontWeight: '700',
    marginTop: 4,
    fontFamily: 'Inter',
  },
  settlementType: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 2,
    textAlign: 'center',
    fontFamily: 'Inter',
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1F2937',
    fontFamily: 'Inter',
  },
  seeAllText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#14B8A6',
    fontFamily: 'Inter',
  },
  groupCard: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  groupHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  groupIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F0FDF4',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  groupInfo: {
    flex: 1,
  },
  groupName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
    fontFamily: 'Inter',
  },
  groupMembers: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 2,
    fontFamily: 'Inter',
  },
  groupStats: {
    flexDirection: 'row',
    marginBottom: 12,
    gap: 20,
  },
  statItem: {
    flex: 1,
  },
  statLabel: {
    fontSize: 14,
    color: '#6B7280',
    fontFamily: 'Inter',
  },
  statValue: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F2937',
    marginTop: 2,
    fontFamily: 'Inter',
  },
  settlementStatus: {
    flexDirection: 'row',
    gap: 16,
  },
  statusItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  statusLabel: {
    fontSize: 12,
    color: '#10B981',
    fontFamily: 'Inter',
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
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
  transactionGroup: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 2,
    fontFamily: 'Inter',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F2937',
    fontFamily: 'Inter',
  },
  optimizationCard: {
    marginHorizontal: 20,
    backgroundColor: '#FEF7CD',
    padding: 20,
    borderRadius: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#FCD34D',
  },
  optimizationText: {
    fontSize: 16,
    color: '#92400E',
    marginBottom: 16,
    fontFamily: 'Inter',
  },
  highlightText: {
    fontWeight: '700',
    color: '#B45309',
  },
  optimizeButton: {
    backgroundColor: '#F59E0B',
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  optimizeButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
    fontFamily: 'Inter',
  },
  actionsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 20,
    gap: 12,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 16,
    gap: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  actionText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    fontFamily: 'Inter',
  },
});