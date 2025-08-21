import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Coffee, Car, Chrome as Home, ShoppingBag, Gamepad2, BookOpen, Filter, Plus } from 'lucide-react-native';

const categories = [
  { name: 'Food', icon: Coffee, color: '#EF4444', amount: 3200 },
  { name: 'Travel', icon: Car, color: '#3B82F6', amount: 1800 },
  { name: 'Rent', icon: Home, color: '#10B981', amount: 2500 },
  { name: 'Shopping', icon: ShoppingBag, color: '#F59E0B', amount: 850 },
  { name: 'Entertainment', icon: Gamepad2, color: '#8B5CF6', amount: 450 },
  { name: 'Education', icon: BookOpen, color: '#14B8A6', amount: 750 },
];

const transactions = [
  { title: 'Lunch at Canteen', category: 'Food', amount: 120, date: 'Today, 1:30 PM' },
  { title: 'Auto to College', category: 'Travel', amount: 50, date: 'Today, 9:00 AM' },
  { title: 'Book Purchase', category: 'Education', amount: 450, date: 'Yesterday, 4:15 PM' },
  { title: 'Movie Ticket', category: 'Entertainment', amount: 200, date: 'Dec 12, 7:00 PM' },
  { title: 'Grocery Shopping', category: 'Food', amount: 680, date: 'Dec 11, 3:20 PM' },
];

export default function Expenses() {
  const [selectedPeriod, setSelectedPeriod] = useState('Month');
  const totalExpense = categories.reduce((sum, cat) => sum + cat.amount, 0);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Expense Tracker</Text>
            <Text style={styles.subtitle}>Monitor your spending habits</Text>
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <Filter size={20} color="#6B7280" />
          </TouchableOpacity>
        </View>

        {/* Period Selector */}
        <View style={styles.periodSelector}>
          {['Week', 'Month', 'Year'].map((period) => (
            <TouchableOpacity
              key={period}
              style={[
                styles.periodButton,
                selectedPeriod === period && styles.periodButtonActive
              ]}
              onPress={() => setSelectedPeriod(period)}
            >
              <Text style={[
                styles.periodText,
                selectedPeriod === period && styles.periodTextActive
              ]}>
                {period}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Total Expense Card */}
        <View style={styles.totalCard}>
          <Text style={styles.totalLabel}>Total Expenses This Month</Text>
          <Text style={styles.totalAmount}>₹{totalExpense.toLocaleString()}</Text>
          <Text style={styles.totalChange}>+12% from last month</Text>
        </View>

        {/* Categories */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <View style={styles.categoriesGrid}>
            {categories.map((category, index) => {
              const Icon = category.icon;
              const percentage = ((category.amount / totalExpense) * 100).toFixed(0);
              
              return (
                <TouchableOpacity key={index} style={styles.categoryCard}>
                  <View style={[styles.categoryIcon, { backgroundColor: `${category.color}20` }]}>
                    <Icon size={24} color={category.color} />
                  </View>
                  <Text style={styles.categoryName}>{category.name}</Text>
                  <Text style={styles.categoryAmount}>₹{category.amount}</Text>
                  <Text style={styles.categoryPercentage}>{percentage}%</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* Spending Chart Placeholder */}
        <View style={styles.chartContainer}>
          <Text style={styles.sectionTitle}>Spending Distribution</Text>
          <View style={styles.chartPlaceholder}>
            <View style={styles.pieChart}>
              {categories.map((category, index) => {
                const percentage = (category.amount / totalExpense) * 100;
                return (
                  <View
                    key={index}
                    style={[
                      styles.pieSlice,
                      { 
                        backgroundColor: category.color,
                        width: `${percentage}%`,
                      }
                    ]}
                  />
                );
              })}
            </View>
          </View>
        </View>

        {/* Recent Transactions */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Transactions</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          
          {transactions.map((transaction, index) => (
            <View key={index} style={styles.transactionItem}>
              <View style={styles.transactionInfo}>
                <Text style={styles.transactionTitle}>{transaction.title}</Text>
                <Text style={styles.transactionCategory}>{transaction.category} • {transaction.date}</Text>
              </View>
              <Text style={styles.transactionAmount}>-₹{transaction.amount}</Text>
            </View>
          ))}
        </View>

        {/* Generate Report Button */}
        <TouchableOpacity style={styles.reportButton}>
          <Text style={styles.reportButtonText}>Generate Monthly Report</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Floating Add Button */}
      <TouchableOpacity style={styles.fabButton}>
        <Plus size={24} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
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
  filterButton: {
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
  periodSelector: {
    flexDirection: 'row',
    marginHorizontal: 20,
    backgroundColor: '#F1F5F9',
    borderRadius: 12,
    padding: 4,
    marginBottom: 20,
  },
  periodButton: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  periodButtonActive: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  periodText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280',
    fontFamily: 'Inter',
  },
  periodTextActive: {
    color: '#14B8A6',
  },
  totalCard: {
    marginHorizontal: 20,
    backgroundColor: 'white',
    padding: 24,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },
  totalLabel: {
    fontSize: 16,
    color: '#6B7280',
    fontFamily: 'Inter',
  },
  totalAmount: {
    fontSize: 36,
    fontWeight: '800',
    color: '#1F2937',
    marginTop: 8,
    fontFamily: 'Inter',
  },
  totalChange: {
    fontSize: 14,
    color: '#EF4444',
    marginTop: 4,
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
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  categoryCard: {
    width: '31%',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  categoryIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
    textAlign: 'center',
    fontFamily: 'Inter',
  },
  categoryAmount: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F2937',
    marginTop: 4,
    fontFamily: 'Inter',
  },
  categoryPercentage: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 2,
    fontFamily: 'Inter',
  },
  chartContainer: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  chartPlaceholder: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  pieChart: {
    flexDirection: 'row',
    height: 8,
    width: '100%',
    borderRadius: 4,
    overflow: 'hidden',
  },
  pieSlice: {
    height: '100%',
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
  transactionCategory: {
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
  reportButton: {
    marginHorizontal: 20,
    backgroundColor: '#14B8A6',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },
  reportButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: 'white',
    fontFamily: 'Inter',
  },
  fabButton: {
    position: 'absolute',
    bottom: 100,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#14B8A6',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
});