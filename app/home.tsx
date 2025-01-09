import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Home() {
  
  const airQualityData = {
    status: "Unhealthy", 
    qualityRange: "51 - 100 (Moderate)",
    temperature: "25°C",
    humidity: "60%"
  };

  const getGradientColors = (status: string): [string, string] => {
    switch (status) {
      case "Good":
        return ['#A8E6CF', '#DCE775'];
      case "Moderate":
        return ['#FFD54F', '#FFB74D'];
      case "Unhealthy":
        return ['#FF8A80', '#FF5252'];
      default:
        return ['#FFFFFF', '#FFFFFF']; 
    }
  };

  const gradientColors = getGradientColors(airQualityData.status);

  return (
    <LinearGradient colors={gradientColors} style={styles.container}>
      <Text style={styles.title}>Air Quality Monitoring</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Current Status</Text>
        <Text style={styles.cardText}>{airQualityData.status}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Air Quality Range</Text>
        <Text style={styles.cardText}>{airQualityData.qualityRange}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Temperature</Text>
        <Text style={styles.cardText}>{airQualityData.temperature}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Humidity</Text>
        <Text style={styles.cardText}>{airQualityData.humidity}</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 40,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 5,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    marginVertical: 12,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  cardText: {
    fontSize: 18,
    color: '#555',
  },
});