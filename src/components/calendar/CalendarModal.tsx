import React from 'react';
import { Modal, Pressable, View, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { getCurrentDate } from '../../utils/dateHelpers';
import { Colors, Radius, Spacing } from '../../themes';
import { ms, vs, hs } from '../../utils/responsive';

type CalendarResponseType = {
  year: number;
  day: number;
  month: number;
  timestamp: number;
  dateString: string;
};

type CalendarProps = {
  getSelectedDate: (date: string) => void;
  onClose: () => void;
  selectedDate: string;
};

const AppCalendarModal: React.FC<CalendarProps> = ({
  getSelectedDate,
  onClose,
  selectedDate,
  ...props
}) => {
  const onPressDay = (dayInfo: CalendarResponseType) => {
    getSelectedDate(dayInfo.dateString);
    onClose();
  };

  return (
    <Modal transparent animationType="fade" onRequestClose={onClose}>
      <Pressable onPress={onClose} style={styles.modalOverlay}>
        <Pressable onPress={e => e.stopPropagation()} style={styles.modalContent}>
          <View style={styles.calendarContainer}>
            <Calendar
              enableSwipeMonths
              current={selectedDate ? selectedDate : getCurrentDate()}
              onDayPress={onPressDay}
              theme={{
                calendarBackground: Colors.surface,
                textSectionTitleColor: Colors.textSecondary,
                selectedDayBackgroundColor: Colors.primary,
                selectedDayTextColor: Colors.textPrimary,
                todayTextColor: Colors.primary,
                dayTextColor: Colors.textPrimary,
                textDisabledColor: Colors.textDisabled,
                dotColor: Colors.primary,
                selectedDotColor: Colors.textPrimary,
                arrowColor: Colors.primary,
                monthTextColor: Colors.textPrimary,
                indicatorColor: Colors.primary,
                textDayFontWeight: '300',
                textMonthFontWeight: 'bold',
                textDayHeaderFontWeight: '300',
                textDayFontSize: ms(14),
                textMonthFontSize: ms(16),
                textDayHeaderFontSize: ms(12),
              }}
              markedDates={
                selectedDate
                  ? {
                      [selectedDate]: {
                        selected: true,
                        selectedColor: Colors.primary,
                        selectedTextColor: Colors.textPrimary,
                      },
                    }
                  : {}
              }
              {...props}
            />
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: Colors.background,
    borderRadius: ms(Radius.sm),
    padding: ms(Spacing.md),
    width: '90%',
  },
  calendarContainer: {
    backgroundColor: Colors.surface,
    borderRadius: ms(Radius.sm),
    overflow: 'hidden',
  },
});

export default AppCalendarModal;
