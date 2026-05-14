import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Colors } from '../../themes';
import IonicIcon from '../ionicIcon/IonicIcon';
import { ms } from '../../utils/responsive';
import { useState } from 'react';
import { styles } from './Accordion.styles';

type AccordionType = {
  children: React.ReactNode;
  title?: string;
  isExpanded?: boolean;
  onToggle?: (expanded: boolean) => void;
};

const Accordion: React.FC<AccordionType> = ({
  children,
  title = 'Add more details',
  isExpanded: controlledExpanded,
  onToggle,
}) => {
  const [internalExpanded, setInternalExpanded] = useState(false);

  const isExpanded = controlledExpanded !== undefined ? controlledExpanded : internalExpanded;

  const toggleAccordion = () => {
    if (onToggle) {
      onToggle(!isExpanded);
    } else {
      setInternalExpanded(!isExpanded);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={toggleAccordion}
        activeOpacity={0.7}
        style={[styles.header, { borderBottomWidth: isExpanded ? 1 : 0 }]}>
        <Text style={styles.title}>{title}</Text>
        <IonicIcon
          iconName={isExpanded ? 'chevron-up' : 'chevron-down'}
          size={ms(18)}
          color={Colors.textSecondary}
        />
      </TouchableOpacity>
      {isExpanded && <View style={styles.content}>{children}</View>}
    </View>
  );
};

export default Accordion;

