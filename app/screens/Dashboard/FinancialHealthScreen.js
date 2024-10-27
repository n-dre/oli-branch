import React from 'react';
import { SafeAreaView, ScrollView, Text, View, StyleSheet, Dimensions } from 'react-native';
import { LineChart, BarChart, PieChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const FinancialHealthScreen = () => {
  // Sample data for revenue growth
  const revenueGrowthData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [2000, 4500, 2800, 8000, 9200, 7300],
        color: (opacity = 1) => `rgba(46, 76, 157, ${opacity})`, // optional: line color
      },
    ],
  };

  // Sample data for expense distribution
  const expenseData = [
    { name: 'Salaries', population: 40, color: '#E74C3C', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Rent', population: 20, color: '#F39C12', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Utilities', population: 10, color: '#3498DB', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Marketing', population: 15, color: '#2ECC71', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Misc', population: 15, color: '#9B59B6', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  ];

  // Sample data for monthly cash flow
  const cashFlowData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [500, 1500, 800, 4000, 4500, 2000],
      },
    ],
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Financial Health Overview</Text>

        {/* Revenue Growth Line Chart */}
        <Text style={styles.chartTitle}>Revenue Growth</Text>
        <LineChart
          data={revenueGrowthData}
          width={screenWidth * 0.9}
          height={220}
          chartConfig={chartConfig}
          bezier
          style={styles.chart}
        />

        {/* Expense Distribution Pie Chart */}
        <Text style={styles.chartTitle}>Expense Distribution</Text>
        <PieChart
          data={expenseData}
          width={screenWidth * 0.9}
          height={220}
          chartConfig={chartConfig}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="10"
          style={styles.chart}
        />

        {/* Monthly Cash Flow Bar Chart */}
        <Text style={styles.chartTitle}>Monthly Cash Flow</Text>
        <BarChart
          data={cashFlowData}
          width={screenWidth * 0.9}
          height={220}
          chartConfig={chartConfig}
          style={styles.chart}
          fromZero
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const chartConfig = {
  backgroundColor: '#ffffff',
  backgroundGradientFrom: '#ffffff',
  backgroundGradientTo: '#ffffff',
  decimalPlaces: 0,
  color: (opacity = 1) => `rgba(46, 76, 157, ${opacity})`, // Blue color for bars and lines
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  style: {
    borderRadius: 16,
  },
  propsForDots: {
    r: '6',
    strokeWidth: '2',
    stroke: '#2E4C9D',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E4C9D',
    textAlign: 'center',
    marginBottom: 20,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'left',
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
    alignSelf: 'center',
  },
});

export default FinancialHealthScreen;
