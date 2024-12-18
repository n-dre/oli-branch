// app/screens/FinancialHealthScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LineChart, BarChart } from 'react-native-chart-kit';
import axios from 'axios';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const FinancialHealthScreen = () => {
  const [financialData, setFinancialData] = useState(null);
  
  // Fetching financial health data
  useEffect(() => {
    const fetchFinancialData = async () => {
      try {
        const response = await axios.get('http://<your-server-url>/api/financial-health');
        setFinancialData(response.data);
      } catch (error) {
        console.error("Error fetching financial data:", error);
      }
    };

    fetchFinancialData();
  }, []);

  if (!financialData) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading Financial Health Data...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Financial Health Overview</Text>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Monthly Expenses</Text>
        <LineChart
          data={{
            labels: financialData.monthlyExpenses.labels,
            datasets: [{ data: financialData.monthlyExpenses.data }]
          }}
          width={screenWidth - 40}
          height={220}
          yAxisLabel="$"
          chartConfig={chartConfig}
          bezier
          style={styles.chart}
        />
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Monthly Revenue</Text>
        <BarChart
          data={{
            labels: financialData.monthlyRevenue.labels,
            datasets: [{ data: financialData.monthlyRevenue.data }]
          }}
          width={screenWidth - 40}
          height={220}
          yAxisLabel="$"
          chartConfig={chartConfig}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="10"
          style={styles.chart}
        />
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Profitability</Text>
        <LineChart
          data={{
            labels: financialData.profitability.labels,
            datasets: [{ data: financialData.profitability.data }]
          }}
          width={screenWidth - 40}
          height={220}
          yAxisLabel="%"
          chartConfig={chartConfig}
          style={styles.chart}
          fromZero
        />
      </View>
      </ScrollView>

  );
};

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2,
  barPercentage: 0.5,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f8',
    padding: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E4C9D',
    textAlign: 'center',
    marginBottom: 20,
  },
  chartContainer: {
    marginVertical: 10,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
    alignSelf: 'center',
  },
});

export default FinancialHealthScreen;
