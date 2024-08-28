import React, { useState } from 'react';
import { StyleSheet, View, Button, ScrollView, Text } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

// Define locations with their unique good link
const locations = [
  { id: 1, name: "Africa", correctLink: "https://simple.wikipedia.org/wiki/Africa" },
  { id: 2, name: "Asia", correctLink: "https://simple.wikipedia.org/wiki/Asia" },
  { id: 3, name: "Europe", correctLink: "https://simple.wikipedia.org/wiki/Europe" },
  { id: 4, name: "North America", correctLink: "https://simple.wikipedia.org/wiki/North_America" },
  { id: 5, name: "South America", correctLink: "https://simple.wikipedia.org/wiki/South_America" },
  { id: 6, name: "Australia", correctLink: "https://simple.wikipedia.org/wiki/Australia" },
];

const badQRLinks = [
  "https://dictionary.cambridge.org/dictionary/english/failure",
  "https://www.merriam-webster.com/dictionary/failure",
  "https://www.collinsdictionary.com/dictionary/english/failure",
  "https://www.dictionary.com/browse/failure",
  "https://dictionary.cambridge.org/dictionary/learner-english/failure",
  "https://www.vocabulary.com/dictionary/failure",
];

const ContinentFinder = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [numberOfQRCodes, setNumberOfQRCodes] = useState(3); // Default number of QR codes

  const shuffleArray = (array) => {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
  };

  const generateQRCodes = () => {
    if (!selectedLocation) return [];
    let allLinks = [selectedLocation.correctLink];
    const randomBadLinks = [];
    while (randomBadLinks.length < (numberOfQRCodes - 1)) {
      const randomIndex = Math.floor(Math.random() * badQRLinks.length);
      const badLink = badQRLinks[randomIndex];
      if (!randomBadLinks.includes(badLink)) {
        randomBadLinks.push(badLink);
      }
    }
    allLinks = allLinks.concat(randomBadLinks);
    const shuffledLinks = shuffleArray(allLinks.slice(0, numberOfQRCodes));
    return shuffledLinks;
  };

  return (
    <View style={styles.container}>
        <Text style={styles.header}>Find the Wiki for Each Region</Text>
        <View style={styles.buttonContainer}>
          {locations.map((location) => (
            <View key={location.id} style={styles.buttonWrapper}>
              <Button
                title={location.name}
                onPress={() => setSelectedLocation(location)}
                color="#007bff"
              />
            </View>
          ))}
        </View>

        {selectedLocation && (
          <View style={styles.qrContainer}>
            {generateQRCodes().map((link, index) => (
              <View key={index} style={styles.qrWrapper}>
                <QRCode
                  value={link}
                  size={100}
                  color="black"
                  backgroundColor="white"
                />
              </View>
            ))}
          </View>
        )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#add8e6',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 15,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  buttonWrapper: {
    margin: 5,
    width: '45%',
  },
  qrContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  qrWrapper: {
    alignItems: 'center',
    margin: 10,
  },
});

export default ContinentFinder;
