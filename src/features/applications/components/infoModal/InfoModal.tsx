import { Modal, Pressable, Text, View } from 'react-native';
import { styles } from './InfoModal.styles';

type InfoModalProps = {
  showModal: boolean;
  context: string;
  onClose: () => void;
};

const InfoModal: React.FC<InfoModalProps> = ({ showModal, context, onClose }) => {
  return (
    <Modal animationType="fade" visible={showModal} transparent onRequestClose={onClose}>
      <Pressable style={styles.overlay} onPress={onClose}>
        <View style={styles.content}>
          <Text style={styles.text}>{context}</Text>
        </View>
      </Pressable>
    </Modal>
  );
};

export default InfoModal;
