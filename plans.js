import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';

const PricePlans = () => {
 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Price Plans</Text>

      <TouchableOpacity style={styles.plan} onPress={() => Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSe4V5tmFzPW2Oknj7vI_5LCmAa1_g_BpIGz2_AQxHKD0nvYUw/viewform?usp=sf_link')}>
        <Text style={styles.planTitle}>Individual Student</Text>
        <Text style={styles.planPrice}></Text>
        <Text style={styles.planDescription}>
        This plan is designed for individuals who are not associated with any specific church, but wish to join our online Bible School.        </Text>
        <Text style={styles.planDescription2}>
        *Note: If you are facing financial difficulties, you have the option to apply for a sponsorship. We strongly encourage individuals who genuinely require financial assistance to apply. If you are in need and seeking to learn about God, please don't hesitate to ask. We are here to support you.        </Text>
        <Text style={styles.planFeatures}>
          <Text style={styles.feature}>- Lessons: 1 x 50min Dicord Group Lesson Weekly{'\n'}</Text>
          <Text style={styles.feature}>- Course: Assessments, Quizzes, Workbooks, Videos{'\n'}</Text>
        </Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.plan} onPress={() => Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSeT_ZBfOlCfVQIWUS0ViXR_V6G10Ey0L5KzyLBWZuidUypdTg/viewform?usp=sf_link')}>
        <Text style={styles.planTitle}>Church</Text>
        <Text style={styles.planPrice}></Text>
        <Text style={styles.planDescription}>
        This plan is specifically tailored for Churches seeking to utilize this platform to effectively manage their courses, content, sermons, and youth groups, while seamlessly distributing them to their congregation.        </Text>
        <Text style={styles.planFeatures}>
          <Text style={styles.feature}>- First month free{'\n'}</Text>
          <Text style={styles.feature}>- Create your own courses{'\n'}</Text>
          <Text style={styles.feature}>- Access to all of our courses{'\n'}</Text>
          <Text style={styles.feature}>- Once-off platform training lesson{'\n'}</Text>
          <Text style={styles.feature}>- Access & enroll particpants to all of our courses{'\n'}</Text>
          <Text style={styles.feature}>- Teachers can monitor and assist participant progress{'\n'}</Text>
          <Text style={styles.feature}>- Create Quizzes, Discussion Forums, Video links, PDF Links, Awards and more{'\n'}</Text>
          <Text style={styles.feature}>- We manage all the admin and technical support, you simply send us your participants{'\n'}</Text>

        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.plan} onPress={() => Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLScM4qe2aBBrMX8pI5XfmFMGKH5iAOPUgZLiwKr6H2Ral-gATw/viewform?usp=sf_link')}>
        <Text style={styles.planTitle}>School Education</Text>
        <Text style={styles.planPrice}></Text>
        <Text style={styles.planDescription}>
        This plan is specifically designed for Christian schools that wish to utilize this platform for interactive and measurable teaching methods, tailored to their students' needs.        </Text>
        <Text style={styles.planFeatures}>
          <Text style={styles.feature}>- Access to all of our courses{'\n'}</Text>
          <Text style={styles.feature}>- We manage all participants' enrollment{'\n'}</Text>
          <Text style={styles.feature}>- Teachers can monitor and assist participants' progress{'\n'}</Text>
          <Text style={styles.feature}>- Create Quizzes, Discussion Forums, Video links, PDF Links, Awards and more{'\n'}</Text>
          <Text style={styles.feature}>- We offer adaptable weekly 50-minute online group tutoring-classes that cater to the specific needs and size of schools{'\n'}</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e3e3e3',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  plan: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    borderColor: '#03a155',
    borderWidth: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  planTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  planPrice: {
    fontSize: 18,
    color: '#888',
    marginBottom: 10,
  },
  planDescription: {
    fontSize: 16,
    marginBottom: 20,
  },
  planDescription2: {
    fontSize: 14,
    marginBottom: 20,
    fontStyle: "italic"
  },
  planFeatures: {
    fontSize: 16,
  },
  feature: {
    marginLeft: 10,
  },
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#03a155',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default PricePlans;
