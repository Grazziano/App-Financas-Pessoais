import React, { useState } from 'react';
import {
  ButtonFilter,
  ButtonFilterText,
  Container,
  ModalContent,
} from './styles';
import { TouchableWithoutFeedback, View } from 'react-native';

import { Calendar, LocaleConfig } from 'react-native-calendars';

export default function CalendarModal({ setVisible, handleFilter }) {
  const [dateNow, setDateNow] = useState(new Date());
  const [markedDates, setMarkedDates] = useState({});

  function handleOnDayPress(date) {
    // console.log(date.dateString);
    setDateNow(new Date(date.dateString));

    let markedDay = {};

    markedDay[date.dateString] = {
      selected: true,
      selectedColor: '#3B3DBF',
      textColor: '#FFF',
    };

    setMarkedDates(markedDay);
  }

  function handleFilterDate() {
    handleFilter(dateNow);
    setVisible(false);
  }

  return (
    <Container>
      <TouchableWithoutFeedback onPress={setVisible}>
        <View style={{ flex: 1 }}></View>
      </TouchableWithoutFeedback>

      <ModalContent>
        <Calendar
          onDayPress={handleOnDayPress}
          markedDates={markedDates}
          enableSwipeMonths={true}
          theme={{
            todayTextColor: '#FF0000',
            selectedDayBackgroundColor: '#00ADF5',
            selectedDayTextColor: '#FFF',
          }}
        />

        <ButtonFilter onPress={handleFilterDate}>
          <ButtonFilterText>Filtrar</ButtonFilterText>
        </ButtonFilter>
      </ModalContent>
    </Container>
  );
}
